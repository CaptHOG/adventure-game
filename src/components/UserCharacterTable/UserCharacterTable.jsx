function UserCharacterTable({ userCharacter }) {

  return (
    <>
      <tr>
        <td className="characterNameColumn"><p>{userCharacter.name}</p></td>
        <td className="characterImageColumn">
          <img src={userCharacter.image_url} width="100px"/>
        </td>
        <td><button>Remove Character</button></td>
      </tr>
    </>
  )
}

export default UserCharacterTable;