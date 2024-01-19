/* eslint-disable react/prop-types */

import Card from "../../components/Card/Card";
import './Cards.css'

export default function Cards({characters, onClose}) {
  
   return (

    <div className="Cards-body">

      <div className='cards-container'>
        {
          characters.map(personaje => (
            <Card
            key={personaje.id}
            id={personaje.id}
            gender={personaje.gender}
            name={personaje.name}
            species={personaje.species}
            image={personaje.image}
            onClose={onClose}
            />
            ))}
      </div>
    </div>
    );
}
