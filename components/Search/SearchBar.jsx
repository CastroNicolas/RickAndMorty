import { useState } from "react";
import './Search.css'

/* eslint-disable react/prop-types */
export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
     setId(event.target.value)
   }
   const search = () => {
      onSearch(id)
      setId('')
   }
   return (
      <div className="search-container">
         <input type='search' onChange={handleChange} placeholder="Enter an ID...." value={id} className="inputSearch"/>
         <button className="buttonSearch" onClick={search} >Add</button>
      </div>
   );
}
