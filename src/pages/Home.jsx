import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// Components imports
import Card from "../components/Card.jsx";
import { element } from "prop-types";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	async function getElementsFromAPI(url, action) {
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (response.ok) dispatch({ type: action, payload: data });
			else if (response.status != 200) throw new Error("Something has ocurred...")
		} catch (error) { console.log(error) }
	}

	const addElementToFavorites = (elementToAdd) => {
		if (store.favorites.includes(elementToAdd)) {
			const newFavoritesArray = store.favorites.filter(favoriteElement => favoriteElement != elementToAdd);
			dispatch({type: "remove_from_favorites", payload: newFavoritesArray});
			return;
		}
		dispatch({ type: "add_to_favorites", payload: elementToAdd })
	}

	useEffect(() => {
		getElementsFromAPI("https://swapi.info/api/people", "get_characters");
		getElementsFromAPI("https://swapi.info/api/vehicles", "get_vehicles");
		getElementsFromAPI("https://swapi.info/api/planets", "get_planets")
	}, [])

	// Characters printing
	const characters = store.characters.map((character) => {
		const id = character.url.split("/").at(-1);
		return <Card
			key={character.url}
			alt={character.name}
			title={character.name}
			description={<>
				<li><strong>Gender:</strong> {character.gender}</li>
				<li><strong>Hair Color:</strong> {character.hair_color}</li>
				<li><strong>Eye Color:</strong> {character.eye_color}</li>
			</>}
			elementType="people"
			elementId={id}
			onClickFunction={()=>addElementToFavorites(character)}
			classes={`${store.favorites.includes(character) ? "fa-solid" : "fa-regular"} fa-heart`}
		/>
	})

	// Vehicles printing
	const vehicles = store.vehicles.map((vehicle) => {
		const id = vehicle.url.split("/").at(-1);
		return <Card
			key={vehicle.url}
			alt={vehicle.name}
			title={vehicle.name}
			description={<>
				<li><strong>Model:</strong> {vehicle.model}</li>
				<li><strong>Class:</strong> {vehicle.vehicle_class}</li>
				<li><strong>Length:</strong> {vehicle.length}</li>
			</>}
			elementType="vehicles"
			elementId={id}
			onClickFunction={() => addElementToFavorites(vehicle)}
			classes={`${store.favorites.includes(vehicle) ? "fa-solid" : "fa-regular"} fa-heart`}
		/>
	})

	// Planets printing
	const planets = store.planets.map((planet) => {
		const id = planet.url.split("/").at(-1);
		return <Card
			key={planet.url}
			alt={planet.name}
			title={planet.name}
			description={<>
				<li><strong>Population: </strong>{planet.population}</li>
				<li><strong>Terrain: </strong>{planet.terrain}</li>
			</>}
			elementType="planets"
			elementId={id}
			onClickFunction={() => addElementToFavorites(planet)}
			classes={`${store.favorites.includes(planet) ? "fa-solid" : "fa-regular"} fa-heart`}
		/>
	})

	return (
		<div className="container-fluid px-5 py-3 d-flex flex-column gap-5 mt-2">
			<div className="container-fluid">
				<h1>Characters</h1>
				<div className="characters d-flex gap-2 overflow-scroll border-start border-end border-2">
					{characters}
				</div>
			</div>
			<div className="container-fluid">
				<h1>Vehicles</h1>
				<div className="vehicles d-flex gap-2 overflow-scroll border-start border-end border-2">
					{vehicles}
				</div>
			</div>
			<div className="container-fluid">
				<h1>Planets</h1>
				<div className="planets d-flex gap-2 overflow-scroll border-start border-end border-2">
					{planets}
				</div>
			</div>
		</div>
	);
}; 