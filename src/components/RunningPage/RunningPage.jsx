import { useEffect } from "react";
import { useDispatch } from "react-redux";


function RunningPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_SELECTED_CHARACTER'
    })
  }, [])

  return (
    <>
    <h1>Running Page</h1>
    </>
  )
}


export default RunningPage;