import { Link, useParams } from "react-router-dom";

function ItemDetailsPage(props) {
  const { propertyId } = useParams();

  const property = props.propertiesDisplayed.find((propertyObj) => {
    return propertyObj.id === parseInt(propertyId);
  });
  console.log(property);

  return (
    <div className="propertyDetails">
      <p id="back-button-container">
        <Link id="back-button" to="/">
          &lt; &lt; Back
        </Link>
      </p>
      <div className="details-container">
        <div id="details-container-img">
          <img src={property.picture_url} />
        </div>
        <div id="details-container-text">
          <h2 id="property-name">{property.name}</h2>
          <p id="property-price">{property.price}</p>
          <p id="property-description">{property.description}</p>
          <p id="neighborhood-overview">{property.neighborhood_overview}</p>
          <p id="property-type">{property.property_type}</p>
          <p id="property-bedrooms">Number of Bedrooms: {property.bedrooms}</p>

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
    </div>
  );
}

export default ItemDetailsPage;
