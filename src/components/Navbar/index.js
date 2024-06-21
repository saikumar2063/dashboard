function Navbar() {
  return (
    <nav className="nav-container">
      <select className="select">
        <option>Main Menu</option>
        <option>Others</option>
      </select>

      <select className="select">
        <option>Masters</option>
        <option>Others</option>
      </select>

      <select className="select">
        <option>Products</option>
        <option>Others</option>
      </select>

      <select className="select">
        <option>Sales</option>
        <option>Others</option>
      </select>

      <select className="select">
        <option>purchases</option>
        <option>Others</option>
      </select>

      <select className="select">
        <option>Reports</option>
        <option>Others</option>
      </select>
    </nav>
  );
}

export default Navbar;
