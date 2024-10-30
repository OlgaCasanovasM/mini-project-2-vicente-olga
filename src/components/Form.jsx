import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const propertyDetails = {
      name: name,
      price: price,
      description: description,
      picture_url: picture_url,
    };

    props.callbackToCreate(propertyDetails);

    setName("");
    setPrice("");
    setDescription("");
    setPicture_url("");

    props.toggleForm();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>New Property</h3>
        <div className="labels-container">
          <label>
            Property Name:
            <input
              type="text"
              name="name"
              value={name}
              placeholder="  Lovely Property"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            Image URL:
            <input
              type="url"
              name="picture_url"
              value={picture_url}
              placeholder="  Insert url"
              onChange={(e) => {
                setPicture_url(e.target.value);
              }}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              placeholder=" Add a description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>

          <label>
            Price:
            <input
              id="price"
              type="text"
              name="price"
              placeholder="  Euros"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Form;
