import { Link, useParams } from "react-router-dom";

function ItemDetailsPage(props) {
  const { propertyId } = useParams();

  const property = props.propertiesDisplayed.find((propertyObj) => {
    return propertyObj.id === parseInt(propertyId);
  });
  console.log(property);

  return (
    <div className="propertyDetails">
      <img src={property.picture_url} />
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      <p>{property.neighborhood_overview}</p>
      <p>{property.price}</p>
      <p>{property.property_type}</p>
      <p>{property.bedrooms}</p>

      <button
        onClick={() => {
          props.callbackToEdit(property);
        }}
      >
        Edit
      </button>

      <p>
        <Link to="/">Back</Link>
      </p>
    </div>
  );
}

export default ItemDetailsPage;
