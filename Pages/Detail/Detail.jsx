import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

// eslint-disable-next-line react/prop-types
export const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } 
      });
    return setCharacter({});
  }, [id]);
  return (
    <div className="Detail-body">
      <div className="detail-container">
        <img className="detail-image" src={character.image} alt="" />
        <div className="detail-data">
          <h1>{character.name}</h1>
          <h2> Id: {character.id} </h2>
          <h2> Status: {character.status}</h2>
          <h2> Species: {character.species}</h2>
          <h2> Gender: {character.gender} </h2>

        </div>
      </div>
    </div>
  );
};
