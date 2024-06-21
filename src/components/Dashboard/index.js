import Cards from "../Cards";
import Orders from "../Orders";
import Stock from "../Stock";
import Pending from "../Pending";
function Dashboard() {
  return (
    <div className="dash-container">
      <div className="dash-container1">
        <h1 className="user">
          Hello User,<span>here's what's happening with your store today.</span>
        </h1>
      </div>
      <Cards />
      <div className="products-dash">
        <Orders />
        <Stock />
        <Pending />
      </div>
    </div>
  );
}

export default Dashboard;
