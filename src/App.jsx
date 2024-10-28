import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import About from "./components/About";
import Form from "./components/Form";
import ItemDetailsPage from "./components/ItemDetailsPage";
import UpdateForm from "./components/UpdateForm";

import data from "./data/data.json";

function App() {
  let isCompleted = data.results.filter((property) => property.price !== null);

  const [propertiesDisplayed, deleteElement] = useState(isCompleted);
  const [propertyToEdit, setPropertyToEdit] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  const deleteProperty = (propertyId) => {
    const newArray = propertiesDisplayed.filter((propertyObj) => {
      return propertyObj.id !== propertyId;
    });
    deleteElement(newArray);
  };

  const createProperty = (propertyDetails) => {
    const propertyIds = propertiesDisplayed.map(
      (propertyObj) => propertyObj.id
    );
    const maxId = Math.max(...propertyIds);
    const nextId = maxId + 1;

    const newProperty = {
      ...propertyDetails,
      id: nextId,
    };

    const newArray = [newProperty, ...propertiesDisplayed];
    deleteElement(newArray);
  };

  const updateProperty = (updatedProperty) => {
    const updatedProperties = propertiesDisplayed.map((property) =>
      property.id === updatedProperty.id ? updatedProperty : property
    );

    setPropertyToEdit(updatedProperties);
    setPropertyToEdit(null);
    deleteElement(updatedProperties);
  };

  return (
    <div className="mainDiv">
      <Navbar />

      {propertyToEdit && (
        <UpdateForm
          property={propertyToEdit}
          callbackToEdit={updateProperty}
          onClose={() => setPropertyToEdit(null)}
        />
      )}

      <div id="content-wrapper">
        <Sidebar toggleForm={toggleForm} />
        <div id="test-id">
          {isFormVisible && (
            <Form toggleForm={toggleForm} callbackToCreate={createProperty} />
          )}

          <Routes>
            <Route
              path="/"
              element={
                <List
                  propertiesDisplayed={propertiesDisplayed}
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
            <Route path="*" element={<h1 id="not-found">Page Not Found</h1>} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
