import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Backpack from "../Backpack/Backpack";
import './EncounterPage.css';


function EncounterPage() {
  const dispatch = useDispatch();
  const selectedCharacter = useSelector((store) => store.selectedCharacter);
  const backpack = useSelector((store) => store.backpack);

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_SELECTED_CHARACTER'
    })
    dispatch({
      type: 'SAGA/FETCH_BACKPACK'
    })
  }, [])

  return (
    <>
      <div id="characterDiv">
        <p>{selectedCharacter[0].name}</p>
        <div>
          <img width="400px" src={selectedCharacter[0].image_url}/>
        </div>
        <div id="backpackDiv">
          {backpack.map((item) => {
            return (
              <Backpack key={item.id} item={item}/>
            )
          })}
        </div>
      </div>
    </>
  )
}


export default EncounterPage;