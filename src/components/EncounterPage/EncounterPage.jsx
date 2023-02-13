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

    let selectedCharacterId = selectedCharacter[0].id;
    console.log('selectedCharacterId:', selectedCharacterId)

    console.log('item.id', item.id)
    let characterEnergyPoints = selectedCharacter[0].energy_points

    let result = characterEnergyPoints - item.energy_cost;
    console.log('result:', result)

    let dataToSend = {
      selectedCharacterId,
      result
    }

    dispatch({
      type: 'SAGA/UPDATE_ENERGY_POINTS',
      payload: dataToSend
    })

    // console.log('energy points reducer before:', energyPoints);
    // dispatch({
    //   type: 'SET_ENERGY',
    //   payload: 5
    // })

    // console.log('energy points reducer after:', energyPoints);
  }

  return (
    <>
      <div id="characterDiv">
        <div className="ap-text">100 AP</div>
        <progress id="ap-meter" value="100" max="100"></progress>
        {/* <p>Energy Points: {energyPoints}</p> */}
        <p>{selectedCharacter[0] && selectedCharacter[0].name}</p>
        {/* <p>Energy Points: {selectedCharacter[0].energy_points}</p> */}
        <div className="greenDinoIdle"></div>
        <div id="backpackDiv">
          {backpack.map((item) => {
            return (
              <button onClick={() => something(item)}><Backpack key={item.id} item={item}/></button>
            )
          })}
        </div>
      </div>
    </>
  )
}


export default EncounterPage;