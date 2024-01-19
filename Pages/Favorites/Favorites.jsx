import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import "./Favorites.css";
import { filterCards, orderCards } from "../../redux/actions";

export const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch(); 

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
   
  };
  return (


    <div className="Favorite-body">
     <div className="Favorite-selectors">
        <select onChange={handleOrder}>
          <option value="A">Upward</option>
          <option value="D">Falling</option>
        </select>

        <select onChange={handleFilter}>
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="Favorite-container">
        {myFavorites.map(({ id, name, status, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};
