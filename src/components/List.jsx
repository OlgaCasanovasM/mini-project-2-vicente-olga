import data from "../data/data.json";
import { useState } from "react";
import ListItem from "./ListItem";

function List() {
  let isCompleted = data.results.filter((property) => property.price !== null);

  const [propertiesDisplayed, deleteElement] = useState(isCompleted);

  const deleteProperty = (propertyId) => {
    const newArray = propertiesDisplayed.filter((propertyObj) => {
      return propertyObj.id !== propertyId;
    });
    deleteElement(newArray);
  };

  return (
    <div className="apartamentBox">
      {propertiesDisplayed.map(function (property) {
        return (
          <ListItem
            key={property.id}
            property={property}
            deleteProperty={deleteProperty}
          />
        );
      })}
    </div>
  );
}

export default List;
