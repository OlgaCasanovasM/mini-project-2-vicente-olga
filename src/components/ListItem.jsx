import { Link } from "react-router-dom";

function ListItem({ property, deleteProperty }) {
  return (
    <div className="apartamentElement">
      <div className="list-element-img">
        <Link className="btn btn-primary" to={`/details/${property.id}`}>
          <img src={property.picture_url} />
        </Link>
      </div>
      <div className="list-element-text">
        <h3>{property.name}</h3>
        <p>{property.neighbourhood}</p>
        <p>
          Price per night: <b>{property.price}</b>
        </p>

        <img
          onClick={() => {
            deleteProperty(property.id);
          }}
          id="delete-button"
          src="src/assets/delete-xxl.png"
        />
      </div>
    </div>
  );
}

export default ListItem;
