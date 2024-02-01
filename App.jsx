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

  const onSearch = async (id) => {
    try {
      if (!id) {
        return alert("Ingresa un Id!");
      }

      if (characters.find((char) => char.id === parseInt(id))) {
        return alert(`Ya está puesto el personaje con el id ${id}`);
      }

      const response = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const { data } = response;

      if (data.name) {
        setCharacters((characters) => [data, ...characters]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = `http://localhost:3001/rickandmorty/login/?email=${email}&password=${password}`;

      const response = await axios.get(URL);
      const { data } = response;

      const { access } = data;
      setAccess(data);

      if (access) {
        navigate("/home");
      }else{
        return alert('Credenciales incorrectas')
      }
    } catch (error) {
      console.error(error);
      // Manejar el error de alguna manera, por ejemplo, mostrando una alerta
      alert("Error al iniciar sesión. Por favor, verifica tus credenciales.");
    }
  }

  const onLogout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} onLogout={onLogout} />
      )}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
