// import { useState } from 'react';
import { useDispatch } from 'react-redux';


function CharacterCard({ character, nameInput }) {
  // const [nameInput, setNameInput] = useState('');
  const dispatch = useDispatch();

  const dispatchUrl = (event) => {
    // console.log('event.target.src:', event.target.src);
  }

  const sendName = (event) => {
    event.preventDefault();
    console.log('sendName:');
    console.log(character.energy_points)

    dispatch({
      type: 'SET_NAME',
      payload: nameInput
    })
  }

  return (
    <>
      <div className="imgDiv" onClick={sendName}>
        <img 
          height="100px"
          width="100px"
          src={character.image_url}
        />
        <p>Energy Points: {character.energy_points}</p>
      </div>
    </>
  )
}

export default CharacterCard;