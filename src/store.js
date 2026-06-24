export const initialStore=()=>{
  return{
    characters: [],
    vehicles: [],
    planets: [],
    favorites: [],
    favoritesCounter: 0
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
      case "get_characters":
        const characters = action.payload;
        return {
          ...store,
          characters: characters
        }
      case "get_vehicles":
        const vehicles = action.payload;
        return {
          ...store,
          vehicles: vehicles
        }
      case "get_planets":
        const planets = action.payload;
        return {
          ...store,
          planets: planets
        }
    default:
      throw Error('Unknown action.');
  }    
}
