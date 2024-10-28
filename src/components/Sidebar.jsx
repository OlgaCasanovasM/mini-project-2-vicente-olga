import { NavLink } from "react-router-dom";

function Sidebar(props) {
  return (
    <section id="sidebar">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
      <div className="nav-link" onClick={props.toggleForm}>
        + Add Property
      </div>
    </section>
  );
}

export default Sidebar;
