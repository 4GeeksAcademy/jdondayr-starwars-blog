import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Card = (props) => {

    const { id } = useParams();

    return (
        <>
            <div className="card flex-shrink-0 bg-light" style={{ width: "18rem" }}>
                <img src="src/assets/img/star-wars.png" className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <ul>{props.description}</ul>
                    <div className="d-flex justify-content-between">
                        <Link to={`/single/${props.elementType}/${props.elementId}`}>
                            <button type="button" className="btn btn-outline-primary">Learn more!</button>
                        </Link>
                        <button type="button" onClick={props.onClickFunction} className="btn btn-outline-warning"><i className={props.classes}></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;