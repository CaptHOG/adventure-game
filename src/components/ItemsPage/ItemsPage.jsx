import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function ItemsPage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_ITEMS'
    })
  }, [])

  return (
    <>
      <div>
        <img 
          height="100px"
          width="100px"
          src={'images/potionBlue_copy.png'}
        />
      </div>
    </>
  )
}

export default ItemsPage;