import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-dark d-flex ">
        <div>
          {/* <input type="text" placeholder="Search" className=" d-lg-none" /> */}

          <select className="header-select d-lg-none">
            <option>Select Store</option>
            <option>Select Cart</option>
          </select>

          <img
            src="https://t4.ftcdn.net/jpg/05/37/41/55/240_F_537415557_jzA3aAlyzbflHCKgG2pTV12dWGF56TiH.jpg"
            className="image d-lg-none  "
            alt="email "
          />

          <img
            src="https://i.pinimg.com/736x/dc/18/a3/dc18a319875fdd83db66bbab7265d3b6.jpg"
            className="image d-lg-none"
            alt="scanner "
          />

          <img
            src="https://static-00.iconduck.com/assets.00/notification-icon-1842x2048-xr57og4y.png"
            className="image d-lg-none"
            alt="notification "
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRP9fy5-QNpKRSWAtMw1WqC4twnkQyJbaXjA&s"
            className="image d-lg-none"
            alt="settings "
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <Link to="/">
              <i className="fa fa-house text-white m-4"></i>
            </Link>

            <div className="m-2 d-flex justify-content-center align-items-center ">
              <i className="fa fa-bars text-white mt-1 "></i>
              <div className="dropdown ">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Main Menu
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to="/category" className="dropdown-item">
                    Action
                  </Link>
                  <p className="dropdown-item">Another action</p>
                </div>
              </div>
            </div>

            <div className="m-2 d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-box mt-1 text-white"></i>
              <div className="dropdown ">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Masters
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <p className="dropdown-item">Action</p>
                  <p className="dropdown-item">Another action</p>
                </div>
              </div>
            </div>

            <div className="m-2 d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-box mt-1 text-white"></i>

              <div className="dropdown ">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  products
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <p className="dropdown-item">Action</p>
                  <p className="dropdown-item">Another action</p>
                  <p className="dropdown-item">Something else here</p>
                </div>
              </div>
            </div>

            <div className="m-2 d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-box mt-1 text-white"></i>

              <div className="dropdown ">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sales
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <p className="dropdown-item">Action</p>
                  <p className="dropdown-item">Another action</p>
                  <p className="dropdown-item">Something else here</p>
                </div>
              </div>
            </div>

            <div className="m-2 d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-box mt-1 text-white"></i>

              <div className="dropdown ">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Purchases
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <p className="dropdown-item">Action</p>
                  <p className="dropdown-item">Another action</p>
                  <p className="dropdown-item">Something else here</p>
                </div>
              </div>
            </div>

            <div className="m-2 d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-box mt-1 text-white"></i>

              <div className="dropdown ">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Reports
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <p className="dropdown-item">Action</p>
                  <p className="dropdown-item">Another action</p>
                  <p className="dropdown-item">Something else here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/*for large devices */}
      {/* <nav className="nav-container   d-none d-lg-block">
        <i className="fa fa-bars text-white mt-2"></i>
        <select className="select ">
          <option>Main Menu</option>
          <option>Others</option>
        </select>
        <i className="fa-solid fa-box text-white mt-2"></i>
        <select className="select ">
          <option>Masters</option>
          <option>Others</option>
        </select>
        <i className="fa-solid fa-box text-white mt-2"></i>
        <select className="select ">
          <option>Products</option>
          <option>Others</option>
        </select>
        <i className="fa-solid fa-box text-white mt-2"></i>
        <select className="select ">
          <option>Sales</option>
          <option>Others</option>
        </select>
        <i className="fa-solid fa-box text-white mt-2"></i>
        <select className="select ">
          <option>purchases</option>
          <option>Others</option>
        </select>
        <i className="fa-solid fa-box text-white mt-2"></i>
        <select className="select ">
          <option>Reports</option>
          <option>Others</option>
        </select>
      </nav> */}
    </div>
  );
}

export default Navbar;
