import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const {store, dispatch} = useGlobalReducer()

	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid d-flex justify-content-around">
				<Link to={"/"}>
					<img src="src/assets/img/star-wars.png" alt="star wars logo" width="90" />
				</Link>
				<div className="dropdown">
					<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="bg-secondary p-1 rounded">{store.favoritesCounter}</span>
					</a>

					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};