import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './RunningPage.css';


function RunningPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedCharacter = useSelector((store) => store.selectedCharacter);

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_SELECTED_CHARACTER'
    })
  }, [])

  const goToSecondEncounter = () => {
    history.push('/second_encounter');
  }

  return (
    <>
    <div className="encounterDiv">
      {/* <h1>Running Page</h1> */}
      <img id="backgroundImg" src="/images/battle-background-sunny-hills.png"/>
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
      <div className={selectedCharacter[0] && selectedCharacter[0].run_class}></div>
      {/* <div id="backpackDiv">
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
      <div className='guardianIdle'></div> */}
      <div id="textBoxDiv">
        <p id="textBoxText">You: "Now I need to hurry up and get to my friend's!"</p>
      </div>
      <button id="goToEncounterButton" onClick={goToSecondEncounter}>Continue</button>
    </div>
    </>
  )
}


export default RunningPage;