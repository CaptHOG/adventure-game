import { useDispatch, useSelector } from 'react-redux';


function CharacterCard({ character, nameInput }) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const sendName = (event) => {
    event.preventDefault();
    console.log('sendName:');
    console.log(character.energy_points)

    let newCharacter = {
      image_url: event.target.src,
      name: nameInput,
      energy_points: character.energy_points,
      user_id: user.id
    }

    dispatch({
      // send to userCharacters reducer
      type: 'SET_USER_CHARACTERS',
      payload: newCharacter
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