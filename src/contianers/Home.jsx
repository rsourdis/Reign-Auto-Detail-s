import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import { auth } from '../firebase';

const Home = (props) => {
  const { user } = props;

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);

      if (authUser) {
        props.loginRequest(authUser);
      } else {
        props.loginRequest(null);
      }
    })
  }, []);

  return (
    <div>
      <h1>Reign Auto Detial</h1>
      <h2>{user.email}</h2>
    </div>
  )
}

const mapDispatchToProps = {
  loginRequest,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


