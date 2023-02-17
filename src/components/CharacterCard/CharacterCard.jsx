import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';


function CharacterCard({ character, nameInput }) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [imgDiv, setImgDiv] = useState('imgDiv');
  const [isSelected, setIsSelected] = useState(false);

  const defaultStyle = () => {
    setIsSelected(false);
  }

  const selectCharacter = (event) => {
    event.preventDefault();
    setIsSelected(true);


    // if (isSelected) {
    //   setImgDiv('imgDiv1');
    //   setIsSelected(false);
    // } else if (!isSelected) {
    //   setImgDiv('imgDiv');
    //   setIsSelected(true);
    // }
    
    let newCharacter = {
      name: nameInput,
      energy_points: character.energy_points,
      image_url: event.target.src,
      idle_class: character.idle_class,
      kick_class: character.kick_class,
      hurt_class: character.hurt_class,
      walk_class: character.walk_class,
      user_id: user.id
    }
    // console.log('sendCharacter newCharacter:', newCharacter)

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
      {/* <div className='imgDiv'> */}
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