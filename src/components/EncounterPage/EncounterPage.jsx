import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Backpack from "../Backpack/Backpack";
import './EncounterPage.css';


function EncounterPage() {
  const dispatch = useDispatch();
  const selectedCharacter = useSelector((store) => store.selectedCharacter);
  const backpack = useSelector((store) => store.backpack);
  // const energyPoints = useSelector((store) => store.energyPoints);

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_SELECTED_CHARACTER'
    })
    dispatch({
      type: 'SAGA/FETCH_BACKPACK'
    })
  }, [])

  const something = (item) => {

    console.log('item.id:', item.id)
    let characterEnergyPoints = selectedCharacter[0].energy_points

    let result = characterEnergyPoints - item.energy_cost;
    console.log('result:', result)
  }

  return (
    <>
      <div className="characterDiv">
        <div>{selectedCharacter[0] && selectedCharacter[0].energy_points} EP</div>
        <progress 
          id="energyBar" 
          value={selectedCharacter[0] && selectedCharacter[0].energy_points} 
          max="200"
        >
        </progress>
        {/* use && operator to wait for the reducer to be populated */}
        <p>{selectedCharacter[0] && selectedCharacter[0].name}</p>
        <div className={selectedCharacter[0] && selectedCharacter[0].idle_class}></div>
        <div id="backpackDiv">
          {backpack.map((item) => {
            return (
              <button onClick={() => something(item)}>
                <Backpack key={item.id} item={item}/>
              </button>
            )
          })}
        </div>
        <div className="golemIdle"></div>
      </div>
    </>
  )
}


export default EncounterPage;