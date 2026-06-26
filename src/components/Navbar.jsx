import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const removeElementFromFavorites = (nameOfTheElement) => {
		const newFavoritesArray = store.favorites.filter(favoriteElement => favoriteElement.name != nameOfTheElement);
		dispatch({ type: "remove_from_favorites", payload: newFavoritesArray })
	}

	const favorites = store.favorites.map((favoriteElement) => {
		const id = favoriteElement.url.split("/").at(-1);
		const type = favoriteElement.url.split("/").at(-2);
		return <li key={favoriteElement.url} className="d-flex align-items-center justify-content-between">
			<Link to={`/single/${type}/${id}`}><button className="dropdown-item">{favoriteElement.name}</button></Link>
			<span onClick={(ev) => {
				removeElementFromFavorites(favoriteElement.name);
				ev.stopPropagation();
				}} className="me-2"><i class="fa-solid fa-trash-can"></i></span>
		</li>
	})

	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid d-flex justify-content-around">
				<Link to={"/"}>
					<img src="src/assets/img/star-wars.png" alt="star wars logo" width="90" />
				</Link>
				<div className="dropdown">
					<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="bg-light text-dark px-1 py-0 rounded">{store.favoritesCounter}</span>
					</a>

					<ul className="dropdown-menu">
						<li className="dropdown-item" style={{display: store.favoritesCounter === 0 ? "block" : "none"}}>Empty</li>
						{favorites}
					</ul>
				</div>
			</div>
		</nav>
	);
};