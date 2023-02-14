import { useDispatch, useSelector } from "react-redux";


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
      <button>
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

