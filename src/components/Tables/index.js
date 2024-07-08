function Tables() {
  return (
    <div className="d-flex flex-wrap justify-content-center container col">
      <div>
        <div className="row">
          {/*Ordered Products */}
          <div className="col-sm-12 col-md-6  col-lg-4 table-responsive  card border-dark bg-transparent mb-1  ">
            <div className="d-flex align-items-center">
              <h6>Most Ordered products</h6>
              <button className="btn d-flex ms-auto">View All</button>
            </div>
            <hr />
            <table className="table bg-transparent">
              {/* <thead>
              <tr>
                <th scope="col" className="bg-transparent">
                  Most Ordered products
                </th>
                <th scope="col" className="bg-transparent">
                  View All
                </th>
              </tr>
            </thead> */}
              <tbody>
                <tr>
                  <td className="bg-transparent">Nail Polish</td>
                  <td className="bg-transparent">Orders:390</td>
                </tr>
                <tr>
                  <td className="bg-transparent">Eyeliner</td>
                  <td className="bg-transparent">Orders:72</td>
                </tr>
                <tr>
                  <td className="bg-transparent">Makeup Set</td>
                  <td className="bg-transparent">Orders:68</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/*Recent Stock Request */}
          <div className="col-sm-12 col-md-6  col-lg-4 table-responsive  card border-dark bg-transparent mb-1 ">
            <div className="d-flex align-items-center">
              <h6>Recent Stock Request</h6>
              <button className="btn d-flex ms-auto">View All</button>
            </div>
            <hr />
            <table className="table bg-transparent">
              <tbody>
                <tr className="d-flex justify-content-between">
                  <td className="bg-transparent">
                    <div className="d-flex flex-column ">
                      <div className="d-flex flex-column ">
                        <p className="fs-6">Eyeconic Liner Pen</p>
                        <p>Draft</p>
                      </div>
                    </div>
                  </td>

                  <td className="bg-transparent">
                    <div className="d-flex flex-column bg-transparent">
                      <div className="d-flex flex-column bg-transparent">
                        <p>Daily Mart</p>
                        <p>28-05-24</p>
                      </div>
                    </div>
                  </td>

                  <td className="bg-transparent">
                    <div className="d-flex flex-column bg-transparent">
                      <div className="d-flex flex-column bg-transparent">
                        <p>Warangal</p>
                        <p>items:39</p>
                      </div>
                    </div>
                  </td>
                  {/* <div className="d-flex flex-column bg-transparent"> */}
                  {/* <td>Eyeconic Liner Pen</td>
                  <td>Draft</td> */}
                  {/* </div> */}
                  {/* <div className="d-flex flex-column bg-transparent text-center"> */}
                  {/* <td>Daily Mart</td>
                  <td>28-05-2024</td> */}
                  {/* </div> */}
                  {/* <div className="d-flex flex-column bg-transparent"> */}
                  {/* <td>Warangal</td>
                  <td>Items:39</td> */}
                  {/* </div> */}
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="bg-transparent">
                    <div className="d-flex flex-column bg-transparent">
                      <div className="d-flex flex-column bg-transparent">
                        <p>Makeup Kit</p>
                        <p>Approved</p>
                      </div>
                    </div>
                  </td>

                  <td className="bg-transparent">
                    <div>
                      <div>
                        <p>Daily Mart</p>
                        <p>20-04-2024</p>
                      </div>
                    </div>
                  </td>

                  <td className="bg-transparent">
                    <div className="d-flex flex-column bg-transparent">
                      <div className="d-flex flex-column bg-transparent">
                        <p>Kammam</p>
                        <p>items:64</p>
                      </div>
                    </div>
                  </td>
                  {/* <div className="d-flex flex-column bg-transparent"> */}
                  {/* <td>Makeup Kit</td>
                  <td>Approved</td> */}
                  {/* </div> */}
                  {/* <div className="d-flex flex-column bg-transparent "> */}
                  {/* <td>Daily Mart</td>
                  <td>20-04-2024</td> */}
                  {/* </div> */}
                  {/* <div className="d-flex flex-column bg-transparent"> */}
                  {/* <td>Khammam</td>
                  <td>Items:64</td> */}
                  {/* </div> */}
                </tr>
              </tbody>
            </table>
          </div>

          {/*Pending PO'S */}
          <div className="col-sm-12 col-md-6  col-lg-4 table-responsive  card border-dark bg-transparent mb-1 ">
            <div className="d-flex align-items-center">
              <h6>Pending PO'S</h6>
              <button className="btn d-flex ms-auto">View All</button>
            </div>
            <hr />
            <table className="table bg-transparent">
              <tbody>
                <tr className="d-flex justify-content-between">
                  <div className="d-flex flex-column bg-transparent">
                    <td>Makeup Kit</td>
                    <td>REQ-45</td>
                  </div>
                  <div className="d-flex flex-column bg-transparent">
                    <td>UAC Supplier</td>
                    <td>22-04-2024</td>
                  </div>
                  <div className="d-flex flex-column bg-transparent">
                    <td>Amount</td>
                    <td>2098 Rs</td>
                  </div>
                </tr>
                <tr className="d-flex justify-content-between">
                  <div className="d-flex flex-column bg-transparent">
                    <td>Fair & Lovely</td>
                    <td>REQ-44</td>
                  </div>
                  <div className="d-flex flex-column bg-transparent">
                    <td>UAC Supplier</td>
                    <td>18-04-2024</td>
                  </div>
                  <div className="d-flex flex-column bg-transparent">
                    <td>Amount</td>
                    <td>198 Rs</td>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>

          {/*Recent Sold Products */}
          <div className="col-sm-12 col-md-6  col-lg-4 table-responsive card border-dark bg-transparent mb-1 ">
            <div className="d-flex align-items-center">
              <h6>Recent Sold Products</h6>
              <button className="btn d-flex ms-auto">View All</button>
            </div>
            <hr />
            <table className="table bg-transparent">
              {/* <thead>
              <tr>
                <th scope="col" className="bg-transparent">
                  Most Ordered products
                </th>
                <th scope="col" className="bg-transparent">
                  View All
                </th>
              </tr>
            </thead> */}
              <tbody>
                <tr>
                  <td className="bg-transparent">Nail Polish</td>
                  <td className="bg-transparent">Orders:390</td>
                </tr>
                <tr>
                  <td className="bg-transparent">Eyeliner</td>
                  <td className="bg-transparent">Orders:72</td>
                </tr>
                <tr>
                  <td className="bg-transparent">Makeup Set</td>
                  <td className="bg-transparent">Orders:68</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/*Recent customers */}
          <div className="col-sm-12 col-md-6  col-lg-4 table-responsive card border-dark bg-transparent mb-1 ">
            <div className="d-flex justify-content-center align-items-center">
              <h6>Recent Customers</h6>
              <button className="btn d-flex ms-auto">View All</button>
            </div>
            <hr />
            <table className="table bg-transparent">
              {/* <thead>
              <tr>
                <th scope="col" className="bg-transparent">
                  Most Ordered products
                </th>
                <th scope="col" className="bg-transparent">
                  View All
                </th>
              </tr>
            </thead> */}
              <tbody>
                <tr>
                  <td className="bg-transparent">Jai Prakash</td>
                  <td className="bg-transparent">8877665544</td>
                </tr>
                <tr>
                  <td className="bg-transparent">Swami Kiran</td>
                  <td className="bg-transparent">6677554433</td>
                </tr>
                <tr>
                  <td className="bg-transparent">K Harinath</td>
                  <td className="bg-transparent">9988776655</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/*Expired Products */}
          <div className="col-sm-12 col-md-6  col-lg-4 table-responsive card border-dark bg-transparent mb-1 ">
            <div className="d-flex">
              <h6>Expired Products</h6>
              <button className="btn d-flex ms-auto">View All</button>
            </div>
            <hr />
            <table className="table bg-transparent">
              {/* <thead>
              <tr>
                <th scope="col" className="bg-transparent">
                  Most Ordered products
                </th>
                <th scope="col" className="bg-transparent">
                  View All
                </th>
              </tr>
            </thead> */}
              <tbody>
                <tr>
                  <td className="bg-transparent">Fair & Lovely</td>
                  <td className="bg-transparent">20-02-2024</td>
                </tr>
                <tr>
                  <td className="bg-transparent">Eyecoin Kajal</td>
                  <td className="bg-transparent">09-03-2024</td>
                </tr>
                <tr>
                  <td className="bg-transparent">Beauty Soap</td>
                  <td className="bg-transparent">14-05-2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tables;

// <div className=" d-flex justify-content-evenly flex-wrap   ">
// {/* Ordered Products */}
// <div className="  col-lg-4 col-s col-lg-42 col-md-6 col-lg-4 ">
//   <div className="orders-container">
//     <h1 className="orders-heading">Most Ordered Products</h1>
//     <p>View All</p>
//   </div>
//   <div>
//     <div className="orders-details">
//       <p>Nail Polish</p>
//       <p>Orders:390</p>
//     </div>

//     <div className="orders-details">
//       <p>Eyeliner</p>
//       <p>Orders:72</p>
//     </div>

//     <div className="orders-details">
//       <p>Makeup Set</p>
//       <p>Orders:68</p>
//     </div>
//   </div>
// </div>

// {/* Stock Request */}
// <div className="  col-lg-4 col-s col-lg-42 col-md-6 col-lg-4">
//   <div className="orders-container">
//     <h1 className="orders-heading">Recent Stock Request</h1>
//     <p>View All</p>
//   </div>
//   <div>
//     <div className="orders-details">
//       <p>Nail Polish</p>
//       <p>Orders:390</p>
//     </div>

//     <div className="orders-details">
//       <p>Eyeliner</p>
//       <p>Orders:72</p>
//     </div>

//     <div className="orders-details">
//       <p>Makeup Set</p>
//       <p>Orders:68</p>
//     </div>
//   </div>
// </div>

// {/*Pending PO's*/}
// <div className="  col-lg-4 col-s col-lg-42 col-md-6 col-lg-4">
//   <div className="orders-container">
//     <h1 className="orders-heading">Pending PO's</h1>
//     <p>View All</p>
//   </div>
//   <div>
//     <div className="orders-details">
//       <p>Nail Polish</p>
//       <p>Orders:390</p>
//     </div>

//     <div className="orders-details">
//       <p>Eyeliner</p>
//       <p>Orders:72</p>
//     </div>

//     <div className="orders-details">
//       <p>Makeup Set</p>
//       <p>Orders:68</p>
//     </div>
//   </div>
// </div>

// {/*Sold*/}
// <div className="  col-lg-4 col-s col-lg-42 col-md-6 col-lg-4">
//   <div className="orders-container">
//     <h1 className="orders-heading">Recent Sold Products</h1>
//     <p>View All</p>
//   </div>
//   <div>
//     <div className="orders-details">
//       <p>Nail Polish</p>
//       <p>Orders:390</p>
//     </div>

//     <div className="orders-details">
//       <p>Eyeliner</p>
//       <p>Orders:72</p>
//     </div>

//     <div className="orders-details">
//       <p>Makeup Set</p>
//       <p>Orders:68</p>
//     </div>
//   </div>
// </div>

// {/*Customers*/}
// <div className="  col-lg-4 col-s col-lg-42 col-md-6 col-lg-4">
//   <div className="orders-container ">
//     <h1 className="orders-heading">Recent Customers</h1>
//     <p>View All</p>
//   </div>
//   <div>
//     <div className="orders-details">
//       <p>Jai Prakash</p>
//       <p>8877665544</p>
//     </div>

//     <div className="orders-details">
//       <p>Swami Kiran</p>
//       <p>6677889900</p>
//     </div>

//     <div className="orders-details">
//       <p>K Harinath</p>
//       <p>9988776655</p>
//     </div>
//   </div>
// </div>

// {/*Expired Products*/}
// <div className="  col-lg-4 col-s col-lg-42 col-md-6 col-lg-4">
//   {/* className="col-s col-lg-42 col-md-4 mb-2" */}
//   <div className="orders-container">
//     <h1 className="orders-heading">Expired Products</h1>
//     <p>View All</p>
//   </div>
//   <div>
//     <div className="orders-details">
//       <p>Fair & Lovely</p>
//       <p>20-02-2024</p>
//     </div>

//     <div className="orders-details">
//       <p>Eyecoin kajal</p>
//       <p>09-03-2024</p>
//     </div>

//     <div className="orders-details">
//       <p>Beauty Soap</p>
//       <p>14-05-24</p>
//     </div>
//   </div>
// </div>
// </div>
