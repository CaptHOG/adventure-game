import { useSelector } from "react-redux";

function EncounterPage() {
  const selectedCharacter = useSelector((store) => store.selectedCharacter);
  const backpack = useSelector((store) => store.backpack);

  return (
    <>
    
    </>
  )
}

export default EncounterPage;