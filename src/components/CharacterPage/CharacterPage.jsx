import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './CharacterPage.css';
import CharacterCard from '../CharacterCard/CharacterCard';
import UserCharacterTable from '../UserCharacterTable/UserCharacterTable';
import { useHistory } from 'react-router-dom';


function CharacterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const characters = useSelector((store) => store.characters);
  const userCharacters = useSelector((store) => store.userCharacters);
  const newCharacter = useSelector((store) => store.newCharacter);
  const user = useSelector((store) => store.user);
  const selectedCharacter = useSelector((store) => store.selectedCharacter);
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    dispatch({
      type: 'FETCH_CHARACTERS'
    })
    dispatch({
      type: 'SAGA/FETCH_USER_CHARACTERS'
    })
  }, []);

  // Add Character button
  const createCharacter = () => {
    dispatch({
      // pull from newCharacter reducer
      type: 'SAGA/CREATE_CHARACTER',
      payload: newCharacter
    })
    setNameInput('');
  }

  // Continue button
  const goToWalkingPage = (event) => {
    // event.preventDefault();

    console.log('selectedCharacter from CharacterPage:', selectedCharacter)

    let userAndCharacterIds = {
      characterId: selectedCharacter.id,
      user_id: user.id
    }

    console.log('userAndCharacterIds:', userAndCharacterIds)

    if (selectedCharacter) {
      dispatch({
        type: 'SAGA/UPDATE_SELECTED_CHARACTER',
        payload: userAndCharacterIds
      })
    }
    
    history.push('/walking');
  }

  return (
    <>
      <h2>Create Character</h2>
      <form>
        <h4>Name your character</h4>
        <input
          id="characterNameInput"
          placeholder="Character Name..."
          type="text"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
        <h4>Click a dino then save your character!</h4>
        <div id="charactersDiv">
          {characters.map((character) => {
            return (
              <CharacterCard 
                key={character.id} 
                character={character} 
                nameInput={nameInput} 
              />
            )
          })}
        </div>
        <button id="addCharacterButton" onClick={createCharacter}>Save Character</button>
      </form>
      <table>
        <thead>
          <tr>
            <th colSpan="2">{user.username}'s Characters</th>
          </tr>
        </thead>
        <tbody>
          {userCharacters.map((userCharacter) => {
            return (
              <UserCharacterTable 
                key={userCharacter.id} 
                userCharacter={userCharacter} 
                selectedCharacter={selectedCharacter}
              />
            )
          })}
        </tbody>
      </table>
      <h3>Select a character and continue on!</h3>
      <button id="goToWalkingButton" onClick={goToWalkingPage}>Continue</button>
    </>
  )
}   


export default CharacterPage;

// test images
// (Honey Badger) https://www.sanbi.org/wp-content/uploads/2019/11/Copper_Honey-badger-1024x740.jpeg
// (Red Dino) https://www.pinclipart.com/picdir/middle/558-5589124_red-dinosaur-cartoon-clipart.png
// (Superhero) https://www.clipartkey.com/mpngs/m/6-68696_transparent-superheroes-clipart-female-flying-superhero-cartoon.png
