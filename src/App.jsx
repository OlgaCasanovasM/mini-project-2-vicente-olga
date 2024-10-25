import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import About from "./components/About";
import Form from "./components/Form";
import ItemDetailsPage from "./components/ItemDetailsPage";

import data from "./data/data.json";
import "./App.css";

function App() {
  let isCompleted = data.results.filter((property) => property.price !== null);

  const [propertiesDisplayed, deleteElement] = useState(isCompleted);

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

  return (
    <div className="mainDiv">
      <Navbar />
      <Form callbackToCreate={createProperty} />

      <div id="content-wrapper">
        <Sidebar />
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
              <ItemDetailsPage propertiesDisplayed={propertiesDisplayed} />
            }
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
