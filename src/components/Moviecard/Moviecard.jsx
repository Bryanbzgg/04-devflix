import { useState } from "react";
import MovieDescription from "../../movieDescription/MovieDescription";
import styles from "./MovieCard.module.css";

const MovieCard = ({apiUrl, ...props}) => {
  const[isModalOpen, setModalOpen]= useState(false)

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
    <div className={styles.movie} onClick={toggleModal}>
      <div>
        <p>{props.Year}</p>
      </div>

      <div>
        <img src={props.Poster} alt="" />
      </div>

      <div>
        <span>{props.Type}</span>
        <h3>{props.Title}</h3>
      </div>

    </div>
    {isModalOpen &&(

      <MovieDescription apiUrl={apiUrl} movieID={props.imdbID} click={toggleModal}/>
)}
    </>
  );
};

export default MovieCard;