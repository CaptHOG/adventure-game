function Backpack({ item }) {

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