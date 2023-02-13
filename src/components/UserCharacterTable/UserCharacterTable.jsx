import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";


function UserCharacterTable({ userCharacter, selectedCharacter }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [characterRow, setCharacterRow] = useState('characterRow');
  const [isSelected, setIsSelected] = useState(false);
  // const selectedCharacter = useSelector((store) => store.selectedCharacter);
  const userCharacters = useSelector((store) => store.userCharacters);

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

  const selectCharacter = () => {
    console.log('selected!:');

    

    if (userCharacter.id) {
      setCharacterRow('characterRowChangeColor');
    } else {
      setCharacterRow(characterRow);
    }

    // userCharacters.map((character) => {
    //   if (character.selected == true) {
    //     console.log('I think maybe this works?:', character.selected);
    //     setCharacterRow('characterRowChangeColor');
    //   }
    // })

    let selectedCharacter = {
      id: userCharacter.id,
      name: userCharacter.name,
      image_url: userCharacter.image_url,
      energy_points: userCharacter.energy_points,
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
      <tr onClick={selectCharacter} className={userCharacter.selected ? 'characterRowChangeColor' : characterRow}>
        <td className="characterNameColumn"><p>{userCharacter.name}</p></td>
        <td className="characterImageColumn">
          <img src={userCharacter.image_url} width="100px"/>
        </td>
        <td>
          <button onClick={() => deleteCharacter(userCharacter)}>Remove Character</button>
        </td>
      </tr>
    </>
  )
}

export default UserCharacterTable;