import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const SinglePlanet = () => {

  const { store, dispatch } = useGlobalReducer()
  const { id } = useParams()

  async function getElementDataFromAPI() {
    try {
      const response = await fetch(`https://swapi.info/api/planets/${id}`);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "get_single_element", payload: data })
      }
    } catch (error) { console.log(error) }
  }

  useEffect(() => {
    getElementDataFromAPI()
  }, [])

  return (
    <>
      <div className="container-fluid px-5 py-3 d-flex gap-5">
        <div className="empty-photo d-flex justify-content-center align-items-center">
          <span className="fs-2">550 x 400</span>
        </div>
        <div className="w-75 text-center">
          <h1>{store.singleElement.name}</h1>
          <p className="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sapiente debitis temporibus saepe, dicta repellendus reprehenderit delectus unde exercitationem assumenda? Quis consequuntur aperiam fugiat soluta? Sunt iste veniam nihil hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto, eos enim ullam voluptas saepe molestias quis, vitae illo voluptatibus eligendi, accusamus doloribus quia rerum veritatis. Nobis velit excepturi illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, facilis consequuntur? Error vero temporibus corporis eius est cumque. Nobis neque temporibus ratione voluptatibus cumque sed est, fugit id doloribus modi.</p>
        </div>
      </div>
      <div className="container-fluid px-5 py-3 d-flex justify-content-between border-top border-3 border-primary">
        <div className="d-flex flex-column align-items-center gap-2">
          <h3 className="text-primary">Name</h3>
          <h4 className="text-primary">{store.singleElement.name}</h4>
        </div>
        <div className="d-flex flex-column align-items-center gap-2">
          <h3 className="text-primary">Rotation period</h3>
          <h4 className="text-primary">{store.singleElement.rotation_period}</h4>
        </div>
        <div className="d-flex flex-column align-items-center gap-2">
          <h3 className="text-primary">Diameter</h3>
          <h4 className="text-primary">{store.singleElement.diameter}</h4>
        </div>
        <div className="d-flex flex-column align-items-center gap-2">
          <h3 className="text-primary">Climate</h3>
          <h4 className="text-primary">{store.singleElement.climate}</h4>
        </div>
        <div className="d-flex flex-column align-items-center gap-2">
          <h3 className="text-primary">Terrain</h3>
          <h4 className="text-primary">{store.singleElement.terrain}</h4>
        </div>
        <div className="d-flex flex-column align-items-center gap-2">
          <h3 className="text-primary">Surface water</h3>
          <h4 className="text-primary">{store.singleElement.surface_water}</h4>
        </div>
      </div>
    </>
  );
};