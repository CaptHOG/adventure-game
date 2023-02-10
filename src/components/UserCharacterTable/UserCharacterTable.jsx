import { useDispatch, useSelector } from "react-redux"


function UserCharacterTable({ userCharacter }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
    console.log('selected!');

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
      <tr onClick={selectCharacter}>
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