import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const goToCharactersPage = () => {
    history.push('/characters');
  }

  return (
    <div className="container">
      
      <h1>Welcome, {user.username}!</h1>
      <h2></h2>
      <p>You and your friend are learning how to code but your friend is stuck and needs help! They’ve reached out to you for help but getting to them will not be easy…. </p>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
      <button onClick={goToCharactersPage}>Let's Go!</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
