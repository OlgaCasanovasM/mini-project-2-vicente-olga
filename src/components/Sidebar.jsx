import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <section id="sidebar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </section>
  );
}

export default Sidebar;
