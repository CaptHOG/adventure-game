import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div id="technologiesDiv">
        <h2>Technologies:</h2>
        <ul id="technologiesList">
          <li>React</li>
          <li>Redux</li>
          <li>Sagas</li>
          <li>Express</li>
          <li>Node.JS</li>
          <li>CSS Keyframes</li>
        </ul>
      </div>
      <div id="creditsDiv">
        <h2>Credits</h2>
        <ul id="creditsList">
          <li>Dinos: <a href="https://arks.itch.io/dino-characters">https://arks.itch.io/dino-characters</a></li>
          <li>Baddy: <a href="https://eddies-workshop.itch.io/old-guardian">https://eddies-workshop.itch.io/old-guardian</a></li>
          <li>Kurt Robotnegut Image: Key Clark</li>
        </ul>
      </div>
      <div id="thankYouDiv">
        <h1>Thank You!</h1>
        <ul id="thankYouList">
          <li>Prime Staff</li>
          <li>Vonnegut Cohort</li>
        </ul>
      </div>
      <div>
        {/* <p>This about page is for anyone to read!</p> */}
      </div>
    </div>
  );
}

export default AboutPage;
