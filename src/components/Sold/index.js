function Sold() {
  return (
    <div>
      <div className="orders-container">
        <h1 className="orders-heading">Recent Sold Products</h1>
        <p>View All</p>
      </div>

      <div>
        <div className="orders-details">
          <p>Nail Polish</p>
          <p>Orders:390</p>
        </div>

        <div className="orders-details">
          <p>Eyeliner</p>
          <p>Orders:72</p>
        </div>

        <div className="orders-details">
          <p>Makeup Set</p>
          <p>Orders:68</p>
        </div>
      </div>
    </div>
  );
}

export default Sold;
