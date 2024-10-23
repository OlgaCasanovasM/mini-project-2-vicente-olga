import data from "../data/data.json";
import { useState } from "react";

function List() {
  let isCompleted = data.results.filter((property) => property.price !== null);

  const [propertiesDisplayed, deleteElement] = useState(isCompleted);

  const deleteProperty = (propertyId) => {
    const newArray = propertiesDisplayed.filter((propertyObj) => {
      return propertyObj.id !== propertyId;
    });
    deleteElement(newArray);
  };

  /* const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


    const deleteMovie = (movieId) => {
        const newArray = moviesToDisplay.filter( movieObj => {
            return movieObj.id !== movieId;
        });
        
        // moviesToDisplay = newArray; // do not modify state directly

        setMoviesToDisplay(newArray);*/

  /*     <button onClick={() => {deleteMovie(movieObj.id)}}>Delete this movie</button>
    }
 */
  return (
    <div className="apartamentBox">
      {propertiesDisplayed.map(function (property) {
        return (
          <div key={property.id} className="apartamentElement">
            <img src={property.picture_url} />
            <h3>{property.name}</h3>
            <p>{property.host_location}</p>
            <p>
              Price per night: <b>{property.price}</b>
            </p>
            <button
              onClick={() => {
                deleteProperty(property.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
