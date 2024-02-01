/* eslint-disable react/prop-types*/
import { NavLink } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import './Nav.css';

export const Nav = ({ onSearch, onLogout  }) => {
  
  return (
    <div className="navbar">
      <NavLink
        to="/home"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
            <h2>Home</h2>
      </NavLink>
      
      <NavLink
        to="/favorites"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <h2>Favorites</h2>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <h2>About</h2>
      </NavLink>
      
      <SearchBar onSearch={onSearch} />
      <button className="logout-button" onClick={onLogout} >Logout</button>
    </div>
  );
};
