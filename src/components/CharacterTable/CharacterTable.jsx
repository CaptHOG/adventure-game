function CharacterTable({ character }) {

  return (
    <>
      <tr>
        <td><button>Remove Character</button></td>
        <td><p>{character.name}</p></td>
        <td>
          <img src={character.image} width="100px"/>
        </td>
      </tr>
    </>
  )
}

export default CharacterTable;