import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function ItemsPage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  console.log(items);

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_ITEMS'
    })
  }, [])

  return (
    <>
      <div>
        {items.map((item) => {
          return (
            <img 
              height="100px"
              width="100px"
              src={item.image_url}
            />
          )
        })}
      </div>
    </>
  )
}

export default ItemsPage;