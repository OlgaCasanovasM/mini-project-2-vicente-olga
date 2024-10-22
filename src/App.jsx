import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
