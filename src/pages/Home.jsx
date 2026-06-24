import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// Components imports
import Card from "../components/Card.jsx";

export const Home = () => {

  const {store, dispatch} = useGlobalReducer()

	async function getElementsFromAPI(url, action) {
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (response.ok) dispatch({type: action, payload: data});
			else if (response.status != 200) throw new Error("Something has ocurred...")
		} catch (error) {console.log(error)}
	}

	useEffect(() => {
		getElementsFromAPI("https://swapi.info/api/people", "get_characters");
		getElementsFromAPI("https://swapi.info/api/vehicles", "get_vehicles");
		getElementsFromAPI("https://swapi.info/api/planets", "get_planets")
	}, [])

	// Characters printing
	const characters = store.characters.map((character) => {
		return <Card 
		key={character.url}
		alt={character.name}
		title={character.name}
		description={<>
					 <li><strong>Gender:</strong> {character.gender}</li>
					 <li><strong>Hair Color:</strong> {character.hair_color}</li>
					 <li><strong>Eye Color:</strong> {character.eye_color}</li>
					 </>}
		/>
	})

	// Vehicles printing
	const vehicles = store.vehicles.map((vehicle) => {
		return <Card
		key={vehicle.url}
		alt={vehicle.name}
		title={vehicle.name}
		description={<>
					 <li><strong>Model:</strong> {vehicle.model}</li>
					 <li><strong>Class:</strong> {vehicle.vehicle_class}</li>
					 <li><strong>Length:</strong> {vehicle.length}</li>
					 </>}
		/>
	})

	// Planets printing
	const planets = store.planets.map((planet) => {
		return <Card
		key={planet.url}
		alt={planet.name}
		title={planet.name}
		description={<>
					 <li><strong>Population:</strong>{planet.population}</li>
					 <li><strong>Terrain:</strong>{planet.terrain}</li>
					 </>}
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