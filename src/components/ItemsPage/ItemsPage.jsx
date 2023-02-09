import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import './ItemsPage.css';


function ItemsPage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  const selectedCharacter = useSelector((store) => store.selectedCharacter);
  const backpack = useSelector((store) => store.backpack);

  console.log(backpack.length);

  console.log('selectedCharacter:', selectedCharacter);

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_ITEMS'
    })
  }, [])

  return (
    <>
      <h3>Choose Items</h3>
      <div id="itemsDiv">
        {items.map((item) => {
          return (
            <ItemCard key={item.id} item={item}/>
          )
        })}
      </div>
      <h3>Backpack</h3>
    </>
  )
}

export default ItemsPage;