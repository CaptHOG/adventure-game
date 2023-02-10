import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import Backpack from "../Backpack/Backpack";
import './ItemsPage.css';


function ItemsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const items = useSelector((store) => store.items);
  const selectedCharacter = useSelector((store) => store.selectedCharacter);
  const backpack = useSelector((store) => store.backpack);

  // console.log(backpack.length);

  // console.log('selectedCharacter:', selectedCharacter);

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_ITEMS'
    })
  }, [])

  const goToEncounter = () => {
    dispatch({
      type: 'SAGA/SEND_BACKPACK',
      payload: backpack
    })

    console.log('backpack:', backpack)

    history.push('/encounter');
  }

  return (
    <>
      <h3>Choose Items</h3>
      <div className="itemsDiv">
        {items.map((item) => {
          return (
            <ItemCard key={item.id} item={item}/>
          )
        })}
      </div>
      <h3>Backpack</h3>
      <div className="itemsDiv">
        {backpack.map((item) => {
          return (
            <Backpack key={item.id} item={item}/>
          )
        })}
      </div>
      <button onClick={goToEncounter}>Continue</button>
    </>
  )
}

export default ItemsPage;