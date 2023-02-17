import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";


function UserCharacterTable({ userCharacter }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // const newCharacter = useSelector((store) => store.newCharacter);
  const [characterRow, setCharacterRow] = useState('characterRow');
  const [isSelected, setIsSelected] = useState(false)
  // const userCharacters = useSelector((store) => store.userCharacters);

  // DELETE
  const deleteCharacter = (userCharacter) => {

    let userAndCharacterIds = {
      characterId: userCharacter.id,
      user_id: user.id
    }

    dispatch({
      type: 'SAGA/DELETE_CHARACTER',
      payload: userAndCharacterIds
    })
  }

  // SELECT
  const selectCharacter = () => {
    console.log('selected!:', userCharacter);

    if (isSelected) {
      setCharacterRow('characterRowChangeColor')
      setIsSelected(false)
    } else if (!isSelected) {
      setCharacterRow('characterRow')
      setIsSelected(true)
    }

    let selectedCharacter = {
      id: userCharacter.id,
      name: userCharacter.name,
      energy_points: userCharacter.energy_points,
      image_url: userCharacter.image_url,
      idle_class: userCharacter.idle_class,
      kick_class: userCharacter.kick_class,
      hurt_class: userCharacter.hurt_class,
      walk_class: userCharacter.walk_class,
      user_id: userCharacter.user_id
    }
    // console.log('selectedCharacter from UserCharacterTable:', selectedCharacter);

    dispatch({
      type: 'SET_SELECTED_CHARACTER',
      payload: selectedCharacter
    })
  }

  return (
    <>
      <tr 
        onClick={selectCharacter} 
        className={isSelected || userCharacter.selected ? 'characterRowChangeColor' : 'characterRow'}
      >
        <td className="characterNameColumn">
          <p>{userCharacter.name}</p>
        </td>
        
        <td className="characterImageColumn">
          <img src={userCharacter.image_url} width="100px"/>
        </td>
      </tr>
      <button onClick={() => deleteCharacter(userCharacter)}>Remove Character</button>
    </>
  )
}

export default UserCharacterTable;

