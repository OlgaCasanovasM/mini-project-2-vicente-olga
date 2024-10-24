import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import data from "./data/data.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import About from "./components/About";
import ItemDetailsPage from "./components/ItemDetailsPage";

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

  return (
    <div className="mainDiv">
      <Navbar />

      <div id="content-wrapper">
        <Sidebar />

        <Routes>
          <Route
            path="/"
            element={
              <List
                propertiesDisplayed={propertiesDisplayed}
                callbackToDelete={deleteProperty}
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

/*
<>

<Header numberOfMovies={moviesToDisplay.length} />

<Routes>
  <Route path="/" element={<MovieList moviesToDisplay={moviesToDisplay} callbackToDelete={deleteMovie} />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/movies/:movieId" element={<MovieDetails moviesToDisplay={moviesToDisplay} />} />
  <Route path="*" element={<h1>Page not found</h1>} />
</Routes>

<Footer />
</>
*/
