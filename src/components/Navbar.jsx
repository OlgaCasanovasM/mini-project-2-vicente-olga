function Navbar(props) {
  return (
    <nav id="navbar">
      <div id="logo">
        <h1>
          <span id="nav-f-title">f</span>
          <span id="nav-title">akebnb</span>
        </h1>
      </div>
      <div id="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={props.searchQuery}
          onChange={props.onSearchChange}
        />
      </div>
    </nav>
  );
}

export default Navbar;
