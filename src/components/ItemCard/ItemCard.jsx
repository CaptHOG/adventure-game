import { useDispatch } from "react-redux";


function ItemCard({ item }) {
  const dispatch = useDispatch();
  // const selectedCharacter = useSelector((store) => store.selectedCharacter);

  const addToBackpack = () => {
    console.log('add to pack:', item);

    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })

    // console.log('selectedCharacter:', selectedCharacter);
  }

  return (
    <>
      <button className="itemCardButton">
        <div className="itemCard" onClick={addToBackpack}>
          <p>{item.name}</p>
          <img 
            height="100px"
            width="100px"
            src={item.image_url}
          />
          <p>{item.description}!</p>
        </div>
      </button>
    </>
  )
}

export default ItemCard;

