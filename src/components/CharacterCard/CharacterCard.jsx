import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function CharacterCard({ character, nameInput }) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);

  const defaultStyle = () => {
    setIsSelected(false);
  }

  const selectCharacter = (event) => {
    event.preventDefault();
    setIsSelected(true);
    
    let newCharacter = {
      name: nameInput,
      energy_points: character.energy_points,
      image_url: event.target.src,
      idle_class: character.idle_class,
      kick_class: character.kick_class,
      hurt_class: character.hurt_class,
      walk_class: character.walk_class,
      run_class: character.run_class,
      selected: character.selected,
      user_id: user.id
    }

    dispatch({
      // send to newCharacter reducer
      type: 'SET_NEW_CHARACTER',
      payload: newCharacter
    })

    setTimeout(defaultStyle, 1000);
  }

  return (
    <>
      <button className="characterDivButton" onClick={selectCharacter}>
        <div className={isSelected ? 'imgDiv1' : 'imgDiv'}>
          <img 
            height="100px"
            width="100px"
            src={character.image_url}
          />
        </div>
      </button>
    </>
  )
}

export default CharacterCard;