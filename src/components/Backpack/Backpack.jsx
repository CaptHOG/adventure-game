import { useDispatch, useSelector } from "react-redux";


function Backpack({ item }) {
  const dispatch = useDispatch();
  const selectedCharacter = useSelector((store) => store.selectedCharacter);

  

  return (
    <>
      <div className="itemCard">
        <p>{item.name}</p>
        <img 
          height="100px"
          width="100px"
          src={item.image_url}
        />
        <p>{item.description}!</p>
      </div>
    </>
  )
}


export default Backpack;