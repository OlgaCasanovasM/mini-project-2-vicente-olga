import { Link, useParams } from "react-router-dom";

function ItemDetailsPage(props) {
  const { propertyId } = useParams();

  const property = props.propertiesDisplayed.find((propertyObj) => {
    return propertyObj.id === parseInt(propertyId);
  });
  console.log(property);

  return (
    <div className="propertyDetails">
      <div className="details-container">
        <div id="details-container-img">
          <img src={property.picture_url} />
        </div>
        <div id="details-container-text">
          <h2>{property.name}</h2>
          <p>{property.description}</p>
          <p>{property.neighborhood_overview}</p>
          <p>{property.price}</p>
          <p>{property.property_type}</p>
          <p>{property.bedrooms}</p>

          <button
            id="edit-button"
            onClick={() => {
              props.callbackToEdit(property);
            }}
          >
            Edit
          </button>
        </div>
      </div>
      <p id="back-button-container">
        <Link id="back-button" to="/">
          &lt; &lt; Back
        </Link>
      </p>
    </div>
  );
}

export default ItemDetailsPage;
