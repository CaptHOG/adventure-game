import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const goToCharactersPage = () => {
    dispatch({
      type: 'RESET_HIT_POINTS'
    })
    history.push('/characters');
  }

  return (
    <div className="userPageContainer">
      <h1>Code Cranker</h1>
      <h2>Welcome, {user.username}!</h2>
      <h2></h2>
      <div id="introTextDiv">
        <p id="introText">You and your friend are learning how to code but your friend is stuck and needs help! They've reached out to you for help but getting to them will not be easy….</p>
      </div>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
      <button id="goToCharacterPageButton" onClick={goToCharactersPage}>Let's Go!</button>
      <br/>
      <LogOutButton />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
