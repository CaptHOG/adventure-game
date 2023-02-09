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

  return (
    <>
      <tr>
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