import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import CharacterTable from '../CharacterTable/CharacterTable';
import './CharacterPage.css';
// import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';


function CharacterPage() {
  const dispatch = useDispatch();
  const characters = useSelector((store) => store.characters);
  const userCharacters = useSelector((store) => store.userCharacters)
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    dispatch({
      type: 'FETCH_CHARACTERS'
    })
  }, [])

  const something = () => {
    console.log('saga?')

    dispatch({
      // pull from userCharacters reducer
      type: 'SAGA/CREATE_CHARACTER',
      payload: userCharacters
    })
  }

  return (
    <>
      <form>
        <input
          placeholder="Character Name"
          type="text"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
        <div id="charactersDiv">
          {characters.map((character) => {
            return (
              <CharacterCard key={character.id} character={character} nameInput={nameInput}/>
            )
          })}
        </div>
        <button onClick={something}>Add Character</button>
      </form>
      {/* <table>
        <thead>
          <tr>
            <th colSpan="3">Characters</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => {
            return (<CharacterTable key={character.id} character={character}/>)
          })}
        </tbody>
      </table> */}
    </>
  )
}   


export default CharacterPage;

// test images
// (Honey Badger) https://www.sanbi.org/wp-content/uploads/2019/11/Copper_Honey-badger-1024x740.jpeg
// (Red Dino) https://www.pinclipart.com/picdir/middle/558-5589124_red-dinosaur-cartoon-clipart.png
// (Superhero) https://www.clipartkey.com/mpngs/m/6-68696_transparent-superheroes-clipart-female-flying-superhero-cartoon.png

