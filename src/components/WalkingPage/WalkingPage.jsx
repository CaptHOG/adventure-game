import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import './WalkingPage.css';
import { useHistory } from "react-router-dom";


function WalkingPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedCharacter = useSelector((store) => store.selectedCharacter);

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_SELECTED_CHARACTER'
    })
  }, [])

  const goToEncounter = () => {
    history.push('/encounter');
  }

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
        <div className={selectedCharacter[0] && selectedCharacter[0].walk_class}></div>
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
          <p id="textBoxText">Walking text here</p>
        </div>
        <button onClick={goToEncounter}>Continue</button>
      </div>
    </>
  )
}


export default WalkingPage;