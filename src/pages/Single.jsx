import { Link, useParams } from "react-router-dom";  
import PropTypes from "prop-types"; 
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {

  const { store } = useGlobalReducer()
  const { theId } = useParams()

  return (
   <></>
  );
};
