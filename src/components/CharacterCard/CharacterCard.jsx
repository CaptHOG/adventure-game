import { useDispatch, useSelector } from 'react-redux';


function CharacterCard({ character, nameInput }) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const sendCharacter = (event) => {
    event.preventDefault();
    console.log('sendCharacter:');
    console.log(character.energy_points)

    let newCharacter = {
      image_url: event.target.src,
      name: nameInput,
      energy_points: character.energy_points,
      user_id: user.id
    }

    dispatch({
      // send to newCharacter reducer
      type: 'SET_NEW_CHARACTER',
      payload: newCharacter
    })
  }

  return (
    <>
      <div className="imgDiv" onClick={sendCharacter}>
        <img 
          height="100px"
          width="100px"
          src={character.image_url}
        />
        {/* <p>Energy Points: {character.energy_points}</p> */}
      </div>
    </>
  )
}

export default CharacterCard;