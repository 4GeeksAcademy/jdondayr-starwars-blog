export const initialStore = () => {
  return {
    characters: [],
    vehicles: [],
    planets: [],
    favorites: [],
    favoritesCounter: 0,
    singleElement: {},
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
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
    case "get_single_element":
      const singleElement = action.payload;
      return {
        ...store,
        singleElement: singleElement
      }
    case "add_to_favorites":
      const element = action.payload;
      return {
        ...store,
        favorites: [...store.favorites, element],
        favoritesCounter: store.favoritesCounter + 1
      }
    case "remove_from_favorites":
      const newFavoritesArray = action.payload;
      return {
        ...store,
        favorites: newFavoritesArray,
        favoritesCounter: store.favoritesCounter - 1
      }
    default:
      throw Error('Unknown action.');
  }
}
