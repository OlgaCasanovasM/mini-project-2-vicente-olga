import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <section id="sidebar">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
    </section>
  );
}

export default Sidebar;
