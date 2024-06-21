import Cards from "../Cards";
import Sold from "../Sold";
import Customers from "../Customers";
import Expired from "../Expired";
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
        <Sold />
        <Customers />
        <Expired />
      </div>
    </div>
  );
}

export default Dashboard;
