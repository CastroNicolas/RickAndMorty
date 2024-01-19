const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (fav) => fav.id !== action.payload
        ),
        allCharacters: state.allCharacters.filter(
          (fav) => fav.id !== action.payload
        ),
      };
    case "FILTER":
      if (action.payload === "all") {
        return {
          ...state,
          myFavorites: [...state.allCharacters],
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.filter(
            (fav) => fav.gender === action.payload
          ),
        };
      }
    case "ORDER":
      return {
        ...state,
        myFavorites: [...state.allCharacters].sort((a, d) => {
          if (action.payload === "A") {
            return a.id - d.id; 
          } 
          if (action.payload === "D") {
            return d.id - a.id;
          }
        }),
      };
    default:
      return state;
  }
};
