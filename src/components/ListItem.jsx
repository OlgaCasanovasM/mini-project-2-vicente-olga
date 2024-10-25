import { Link } from "react-router-dom";

function ListItem({ property, deleteProperty }) {
  return (
    <div className="apartamentElement">
      <img src={property.picture_url} />
      <h3>{property.name}</h3>
      <p>{property.host_location}</p>
      <p>
        Price per night: <b>{property.price}</b>
      </p>

      <Link className="btn btn-primary" to={`/details/${property.id}`}>
        More details
      </Link>
      <button
        onClick={() => {
          deleteProperty(property.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ListItem;
