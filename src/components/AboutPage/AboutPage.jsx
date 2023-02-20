import React from 'react';
import { useHistory } from 'react-router-dom';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  const history = useHistory();

  const goToUserPage = () => {
    history.push('/user');
  }

  return (
    <div className="container">
      <div id="technologiesDiv">
        <h2>Technologies:</h2>
        <ul id="technologiesList">
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux-Sagas</li>
          <li>CSS/Keyframes</li>
          <li>HTML</li>
          <li>Express</li>
          <li>Node JS</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      <div id="creditsDiv">
        <h2>Credits:</h2>
        <ul id="creditsList">
          <li>Dinos: <a href="https://arks.itch.io/dino-characters">https://arks.itch.io/dino-characters</a></li>
          <li>Baddies: <a href="https://eddies-workshop.itch.io/">https://eddies-workshop.itch.io/</a></li>
          <li>Kurt Robotnegut Image: Key Clark</li>
        </ul>
      </div>
      <div id="thankYouDiv">
        <h1>Thank You!</h1>
        <ul id="thankYouList">
          <li>Prime Staff</li>
          <li>Vonnegut Cohort</li>
          <li>Family</li>
          <li>Friends</li>
        </ul>
      </div>
      <button onClick={goToUserPage}>Start Over</button>
      <div>
        {/* <p>This about page is for anyone to read!</p> */}
      </div>
    </div>
  );
}

export default AboutPage;
