import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './FriendPage.css';


function FriendPage() {
  const selectedCharacter = useSelector((store) => store.selectedCharacter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_SELECTED_CHARACTER'
    })
  }, [])

  const goToAboutPage = () => {
    
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
          <div className={selectedCharacter[0] && selectedCharacter[0].idle_class}></div>
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
          <div id="kurtDiv">
            <img id="kurtImg" src="images/robot-kurt-pixel.jpeg" width="300px"/>
          </div>
          <div id="textBoxDiv">
            <p id="textBoxText">You: "I'm here Kurt! Ready to help you with your code!"
              <br/>Kurt: "Hooray! Thank you! I'm trying to figure out why .map is not a function!"
            </p>
          </div>
          <button onClick={goToAboutPage}>Continue</button>
        </div>
    </>
  )
}


export default FriendPage;