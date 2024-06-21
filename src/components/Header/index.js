function Header() {
  return (
    <div className="header-container">
      <h1 className="header-heading">ibiz Accounts</h1>
      <div className="header-container">
        <input type="text" placeholder="Search" className="input" />
        <div className="user-container">
          <select className="header-select">
            <option>Select Store</option>
            <option>Select Cart</option>
          </select>
          <img
            src="https://t4.ftcdn.net/jpg/05/37/41/55/240_F_537415557_jzA3aAlyzbflHCKgG2pTV12dWGF56TiH.jpg"
            className="image"
            alt="email "
          />

          <img
            src="https://i.pinimg.com/736x/dc/18/a3/dc18a319875fdd83db66bbab7265d3b6.jpg"
            className="image"
            alt="scanner "
          />

          <img
            src="https://static-00.iconduck.com/assets.00/notification-icon-1842x2048-xr57og4y.png"
            className="image"
            alt="notification "
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRP9fy5-QNpKRSWAtMw1WqC4twnkQyJbaXjA&s"
            className="image"
            alt="settings "
          />

          <select className="header-select">
            <option>User</option>
            <option> Profile</option>
            <option> Logout</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
