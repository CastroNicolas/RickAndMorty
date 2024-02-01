const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state, 
        myFavorites: action.payload, 
        allCharacters: action.payload
      };
    case "REMOVE_FAV":
      return {
        ...state, 
        myFavorites: action.payload,
        allCharacters: action.payload
      };
    case "FILTER":
      if (action.payload === "all") {
        return {
          ...state,
          allCharacters: [...state.myFavorites],
        };
      } else {
        return {
          ...state,
          allCharacters: state.myFavorites.filter(
            (fav) => fav.gender === action.payload
          ),
        };
      }
    case "ORDER":
      return {
        ...state,
        allCharacters: [...state.myFavorites].sort((a, d) => {
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
//         myFavorites: [...state.myFavorites].sort((a, d) => {
//           if (action.payload === "A") {
//             return a.id - d.id;
//           }
//           if (action.payload === "D") {
//             return d.id - a.id;
//           }
//         }),
//       };
//     default:
//       return state;
//   }
// };