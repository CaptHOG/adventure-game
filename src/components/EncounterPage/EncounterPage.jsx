import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Backpack from "../Backpack/Backpack";
import './EncounterPage.css';


function EncounterPage() {
  const dispatch = useDispatch();
  const selectedCharacter = useSelector((store) => store.selectedCharacter);
  const backpack = useSelector((store) => store.backpack);
  const energyPoints = useSelector((store) => store.energyPoints);
  const hitPoints = useSelector((store) => store.hitPoints);
  const [dinoKick, setDinoKick] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_SELECTED_CHARACTER'
    })
    dispatch({
      type: 'SAGA/FETCH_BACKPACK'
    })
  }, [])

  const kick = () => {
    setDinoKick(true);
    setTimeout(idle, 600);
  }

  const idle = () => {
    setDinoKick(false);
  }

  // handle item click
  const handleItemClick = (item) => {

    kick();

    if (energyPoints <= 0) {
      alert('GAME OVER')
    } else if (hitPoints <= 0) {
      alert('YOU WIN!')
    }

    let energyToSubtract = item.energy_cost;
    let healthToSubtract = item.attack_damage;

    dispatch({
      type: 'SUBTRACT_ENERGY',
      payload: energyToSubtract
    })
    dispatch({
      type: 'SUBTRACT_HIT_POINTS',
      payload: healthToSubtract
    })
  }

  if (!dinoKick) {
    return (
      <>
        <div className="encounterDiv">
          <div id="energyDiv">
            <label for="energyBar">Energy Points</label>
            <progress 
              id="energyBar" 
              value={energyPoints}
              max="200"
            >
            </progress>
            <p>{energyPoints}</p>
          </div>
          {/* use && operator to wait for the reducer to be populated */}
          <div className={selectedCharacter[0] && selectedCharacter[0].idle_class}></div>
          <div id="backpackDiv">
            {backpack.map((item) => {
              return (
                <button onClick={() => handleItemClick(item)}>
                  <Backpack key={item.id} item={item}/>
                </button>
              )
            })}
          </div>
          <div id="healthDiv">
            <label for="healthBar">Hit Points</label>
            <progress 
              id="healthBar" 
              value={hitPoints}
              max="100"
            >
            </progress>
            <p>{hitPoints}</p>
          </div>
          <div className="golemIdle"></div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="encounterDiv">
          {/* <div id="energyDiv">
            <label for="energyBar">Energy Points</label>
            <progress 
              id="energyBar" 
              value={energyPoints}
              max="200"
            >
            </progress>
            <p>{energyPoints}</p>
          </div> */}
          {/* use && operator to wait for the reducer to be populated */}
          <div className={selectedCharacter[0] && selectedCharacter[0].kick_class}></div>
          {/* <div id="backpackDiv">
            {backpack.map((item) => {
              return (
                <button onClick={() => handleItemClick(item)}>
                  <Backpack key={item.id} item={item}/>
                </button>
              )
            })}
          </div> */}
          {/* <div id="healthDiv">
            <label for="healthBar">Hit Points</label>
            <progress 
              id="healthBar" 
              value={hitPoints}
              max="100"
            >
            </progress>
            <p>{hitPoints}</p>
          </div> */}
          <div className="golemIdle"></div>
        </div>
      </>
    )
  }
}


export default EncounterPage;