import { useState } from "react";

function UpdateForm({ property, callbackToEdit, onClose }) {
  const [name, setName] = useState(property.name);
  const [picture_url, setPicture_url] = useState(property.picture_url);
  const [description, setDescription] = useState(property.description);
  const [price, setPrice] = useState(property.price);
  const [rooms, setRooms] = useState(property.beds);
  const [room_type, setPropertyType] = useState(property.room_type);
  const [neighbourhood, setNeighbourhood] = useState(property.neighbourhood);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProperty = {
      ...property,
      name,
      neighbourhood,
      picture_url,
      description,
      price,
      rooms,
      room_type,
    };

    callbackToEdit(updatedProperty);
    onClose();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Update Property</h3>
        <div className="labels-container">
          <label>
            Property Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Neighbourhood:
            <input
              type="text"
              value={neighbourhood}
              onChange={(e) => {
                setNeighbourhood(e.target.value);
              }}
            />
          </label>
          <label>
            Image URL:
            <input
              type="url"
              value={picture_url}
              onChange={(e) => setPicture_url(e.target.value)}
            />
          </label>

          <label>
            Price per night:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Property type:
            <input
              type="text"
              value={room_type}
              onChange={(e) => setPropertyType(e.target.value)}
            />
          </label>
          <label>
            Number of Rooms:
            <input
              type="number"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
            />
          </label>
          <label>
            Description:
            <input
              id="description-input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateForm;
