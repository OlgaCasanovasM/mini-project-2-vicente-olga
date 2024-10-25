import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // const [form, setForm] = useState({
  //   name: "",
  //   imgURL: "",
  //   description: "",
  //   price: 0,
  // });

  // const handleChange = (e) => {
  //   setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

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
  };

  return (
    <div className="form-container">
      <h1>New Property</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Property Name:
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Lovely Property"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Image URL
          <input
            type="url"
            name="picture_url"
            value={picture_url}
            placeholder="insert url"
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
            placeholder=""
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>

        <label>
          Price:
          <input
            type="text"
            name="price"
            placeholder=""
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Form;
