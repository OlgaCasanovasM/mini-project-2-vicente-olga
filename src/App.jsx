//REACT IMPORTS//

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

//COMPONENTS//

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Form from "./components/Form";
import ItemDetailsPage from "./components/ItemDetailsPage";
import UpdateForm from "./components/UpdateForm";

//STYLES//

import "./css/about.css";
import "./css/form.css";
import "./css/itemDetailsPage.css";
import "./css/notFound.css";

//JSON DATA//

import data from "./data/data.json";

//CODE//

function App() {
  let isCompleted = data.results.filter(
    (property) => property.price !== null && property.neighbourhood !== null
  );

  const [propertiesDisplayed, setPropertiesToDisplay] = useState(isCompleted);
  const [propertyToEdit, setPropertyToEdit] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //CREATE NEW PROPERTY FORM//

  const createProperty = (propertyDetails) => {
    const propertyIds = propertiesDisplayed.map(
      (propertyObj) => propertyObj.id
    );

    let maxId = propertyIds.length;

    const newProperty = {
      ...propertyDetails,
      id: maxId++,
    };

    const newArray = [newProperty, ...propertiesDisplayed];
    setPropertiesToDisplay(newArray);
  };

  //EDIT PROPERTY FORM//

  const updateProperty = (updatedProperty) => {
    const updatedProperties = propertiesDisplayed.map((property) =>
      property.id === updatedProperty.id ? updatedProperty : property
    );

    setPropertyToEdit(updatedProperties);
    setPropertiesToDisplay(updatedProperties);
  };

  //SHOW/HIDE ADD PROPERTY FORM//

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  // SEARCH BAR

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProperties = searchQuery
    ? propertiesDisplayed.filter(
        (property) =>
          property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.price.includes(searchQuery)
      )
    : propertiesDisplayed;

  //DELETE PROPERTY//

  const deleteProperty = (propertyId) => {
    const newArray = propertiesDisplayed.filter((propertyObj) => {
      return propertyObj.id !== propertyId;
    });
    setPropertiesToDisplay(newArray);
  };
  return (
    <div className="mainDiv">
      <Navbar query={searchQuery} onSearchChange={handleSearch} />
      <div id="content-wrapper">
        <Sidebar toggleForm={toggleForm} />
        <div id="test-id">
          {isFormVisible && (
            <Form toggleForm={toggleForm} callbackToCreate={createProperty} />
          )}

          {propertyToEdit && (
            <UpdateForm
              property={propertyToEdit}
              callbackToEdit={updateProperty}
              onClose={() => setPropertyToEdit(null)}
            />
          )}

          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  propertiesDisplayed={filteredProperties}
                  deleteProperty={deleteProperty}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/details/:propertyId"
              element={
                <ItemDetailsPage
                  propertiesDisplayed={propertiesDisplayed}
                  callbackToEdit={setPropertyToEdit}
                />
              }
            />
            <Route
              path="*"
              element={
                <div className="not-found-container">
                  <h2 id="not-found">
                    <span>Opps</span>, nothing to see here<span>!</span>
                  </h2>
                  <img src="src/assets/giphy.webp" />
                </div>
              }
            />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
