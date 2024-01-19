import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { About } from "./Pages/About/About";
import { Detail } from "./Pages/Detail/Detail";
import { Form } from "./Pages/Auth/Form";
import Cards from "./Pages/Cards/Cards";
import axios from "axios";
import { Favorites } from "./Pages/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const onSearch = (id) => {
    if (!id) {
      return alert("Ingresa un Id!");
    }
    if (characters.find((char) => char.id === parseInt(id))) {
      return alert(`Ya está puesto el personaje con el el id ${id}`);
    }
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((characters) => [data, ...characters]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((err) => alert(err.message));
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "demo@gmail.com";
  const PASSWORD = "123456";

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }else{
      alert('Credenciales incorrectas!')
    }
  };

  const onLogout = () => {
    setAccess(false);
    navigate('/');
  }

  useEffect(() => {
    !access && navigate('/');
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [access]);
 
  return (
    <div className="App">
     {location.pathname !== "/" && <Nav onSearch={onSearch} onLogout={onLogout} />}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />}  />
        <Route path="/favorites" element={<Favorites />}  />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes> 
    </div>
  );
}

export default App;
