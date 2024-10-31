import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState(0);
  const [propertType, setPropertType] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const propertyDetails = {
      name: name,
      neighbourhood: neighbourhood,
      price: price,
      description: description,
      picture_url: picture_url,
      rooms: rooms,
      propertType: propertType,
    };

    props.callbackToCreate(propertyDetails);

    setName("");
    setPrice("");
    setDescription("");
    setPicture_url("");
    setPropertType("");
    setRooms("");
    setNeighbourhood("");

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
            Neighbourhood:
            <input
              type="text"
              name="neighbourhood"
              value={neighbourhood}
              placeholder="  Malasaña"
              onChange={(e) => {
                setNeighbourhood(e.target.value);
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
            Price:
            <input
              id="price"
              type="text"
              name="price"
              placeholder=" Price / Night"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
          <label>
            Property type:
            <input
              type="text"
              placeholder=" Full House"
              value={propertType}
              onChange={(e) => setPropertType(e.target.value)}
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
              type="text"
              name="description"
              placeholder=" Add a description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
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
