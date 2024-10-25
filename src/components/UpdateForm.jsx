import { useState } from "react";

function UpdateForm({ property, callbackToEdit, onClose }) {
  const [name, setName] = useState(property.name);
  const [picture_url, setPicture_url] = useState(property.picture_url);
  const [description, setDescription] = useState(property.description);
  const [price, setPrice] = useState(property.price);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProperty = {
      ...property,
      name,
      picture_url,
      description,
      price,
    };

    callbackToEdit(updatedProperty);
    onClose();
  };

  return (
    <div className="form-container">
      <h1>Update Property</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Property Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateForm;
