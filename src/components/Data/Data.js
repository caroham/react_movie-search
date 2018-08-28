import React from 'react';

function Data(props) {
  console.log("data props: ", props);
  return (
    props.movie ? 
    <div>
      <p>Title: {props.movie.Title}</p>
      <p>Year: {props.movie.Year}</p>
      <p>Director: {props.movie.Director}</p>
      <p>Plot: {props.movie.Plot}</p>
    </div>
    :
    null
  )
}

export default Data;
