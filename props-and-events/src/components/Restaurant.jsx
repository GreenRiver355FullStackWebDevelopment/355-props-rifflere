function Restaurant(props) {

  return (
    <div className="restaurant">

      <img src={props.restaurant.image} alt={props.restaurant.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li><em>{props.restaurant.cuisine} Cuisine</em></li>
        <li>Rating: {props.restaurant.rating}</li>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
      </ul>

    </div>
  );
}

export default Restaurant;
