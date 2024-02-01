import axios from "axios";

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const { data } = await axios.post(endpoint, character);

      dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.error(error);
      // Manejar el error de alguna manera, por ejemplo, mostrando una alerta
      alert("Error al agregar a favoritos.");
    }
  };
};
// export const addFav = (character) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav';
//   return (dispatch) => {
//      axios.post(endpoint, character).then(({ data }) => {
//         return dispatch({
//            type: 'ADD_FAV',
//            payload: data,
//         });
//      });
//   };
// };

// export const removeFav = (id) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//   return (dispatch) => {
//      axios.delete(endpoint).then(({ data }) => {
//         return dispatch({
//            type: 'REMOVE_FAV',
//            payload: data,
//      });
//      });
//   };
// };
export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
      const { data } = await axios.delete(endpoint);

      dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      console.error(error);
      // Manejar el error de alguna manera, por ejemplo, mostrando una alerta
      alert("Error al quitar de favoritos.");
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: "ORDER",
    payload: order,
  };
};
