import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CharacterTable from '../CharacterTable/CharacterTable';
import './CharacterPage.css';


function CharacterPage() {
  const dispatch = useDispatch();
  const characters = useSelector((store) => store.characters);
  const [images, setImages] = useState([]);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CHARACTERS'
    })
  }, [])

  const getImages = () => {

  }

  return (
    <>
      <form>
        <input
          placeholder="Character Name"
          type="text"
        />
        <div><img/></div>
        <div><img width="100px"/></div>
        <div><img width="100px"/></div>

      </form>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Characters</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => {
            return (<CharacterTable key={character.id} character={character}/>)
          })}
        </tbody>
      </table>
    </>
  )
}

export default CharacterPage;

// test images
// https://www.sanbi.org/wp-content/uploads/2019/11/Copper_Honey-badger-1024x740.jpeg (Honey Badger)