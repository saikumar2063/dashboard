import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Select } from "antd";

function CategoryList() {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(!showPopup);
  const closePopup = () => setShowPopup(!showPopup);
  return (
    <Container>
      <Row>
        <div className="col ">
          <div className="bg-light d-flex justify-content-between align-items-center p-2 bg-grey w-90">
            <div className="align-items-center ">
              <h1 className="fs-5">Sub Category ilst</h1>
              <p>Manage your subcategories</p>
            </div>
            <div>
              <i className="fa-solid fa-file-pdf icon border text-center mx-1 "></i>
              <i className="fa-regular fa-rectangle-list icon border text-center mx-1"></i>
              <i className="fa-solid fa-print icon border text-center mx-1"></i>
              <i className="fa-solid fa-rotate-right icon border text-center mx-1"></i>
              <button className="bg-warning border-0 rounded text-white">
                <i className="fa-solid fa-plus mx-2 p-1"></i>
                Add Sub Category
              </button>
            </div>
          </div>

          <div className="w-100 border   align-items-center pt-4 rounded">
            <input type="search" className="input text-center" />
            <hr className="pt-2" />

            <div className="table-responsive    bg-transparent px-4  ">
              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">
                      <input type="checkbox" />
                    </th>
                    <th scope="col ">Category</th>
                    <th scope="col">categorycode</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quntity</th>
                    <th scope="col" className="bg-light">
                      Is Default
                    </th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <input type="checkbox" />
                    </th>
                    <td>inSubCat</td>
                    <td>SC001</td>
                    <td>Sample Description</td>
                    <td>100</td>
                    <td>Yes</td>
                    <td>Active</td>
                    <td>
                      <i
                        className="fa-solid fa-pen-to-square icon icon border text-center mx-1"
                        onClick={openPopup}
                      ></i>
                      {showPopup && (
                        <div className="popup ">
                          <div className="d-flex flex-column   popup-content bg-white ">
                            <div className="d-flex  align-items-center     ">
                              <h6>Add purchase order </h6>
                              <p
                                style={{ cursor: "pointer" }}
                                onClick={closePopup}
                                className="text-dark d-flex ms-auto"
                              >
                                <i className="fa-solid fa-xmark"></i>
                              </p>
                            </div>
                            <hr></hr>

                            <div className="d-flex flex-wrap ">
                              <div className="d-flex flex-column col-12  col-lg-3 mt-2 p-2   ">
                                <label>Supplier name</label>
                                <Select
                                  showSearch
                                  placeholder="Select a person"
                                  style={{ fontsize: 10 }}
                                  filterOption={(input, option) =>
                                    (option?.label ?? "")
                                      .toLowerCase()
                                      .includes(input.toLowerCase())
                                  }
                                  options={[
                                    {
                                      value: "1",
                                      label: "Jack",
                                    },
                                    {
                                      value: "2",
                                      label: "Lucy",
                                    },
                                    {
                                      value: "3",
                                      label: "Tom",
                                    },
                                  ]}
                                />
                              </div>

                              <div className="d-flex flex-column col-12  col-lg-3 mt-2   p-2 ">
                                <label>Date</label>
                                <input type="date" className="form-control" />
                              </div>

                              <div className="d-flex flex-column col-12 col-lg-3 mt-2  p-2 ">
                                <label>Expected date</label>
                                <input type="date" className="form-control" />
                              </div>

                              <div className="d-flex flex-column col-12 col-lg-3 mt-2 pt-2  ">
                                <label>Category</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Choose Category"
                                />
                              </div>

                              <div className="d-flex flex-column col-12 col-lg-3 mt-2 p-2   ">
                                <label>Products</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Select..."
                                />
                              </div>

                              <div className="d-flex flex-column col-12 col-lg-3 mt-2 p-2 ">
                                <label>Type</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Type"
                                />
                              </div>

                              <div className="d-flex flex-column col-12 col-lg-3 mt-2 p-2  ">
                                <label>Discount</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Discount"
                                />
                              </div>
                            </div>

                            <div className="bg-light p-3">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Units</th>
                                    <th scope="col">Tax</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th></th>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center">
                                      No Data Available
                                    </td>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                              <label className="pb-1">Shipment Details</label>
                              <textarea
                                className="w-100"
                                placeholder="Enter notes "
                                rows={4}
                              />
                            </div>
                            <div className="d-flex justify-content-end pt-1  ">
                              <button
                                className="btn btn-secondary ms-2"
                                onClick={closePopup}
                              >
                                Cancel
                              </button>

                              <button className="btn btn-warning ms-2">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      <i className="fa-solid fa-trash icon icon border text-center mx-1"></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input type="checkbox" />
                    </th>
                    <td>BioMax</td>
                    <td>BM</td>
                    <td>Finger print and face recognition available</td>
                    <td>22</td>
                    <td>No</td>
                    <td>Active</td>
                    <td>
                      <i className="fa-solid fa-pen-to-square icon border text-center mx-1"></i>
                      <i className="fa-solid fa-trash icon icon border text-center mx-1"></i>
                      {/* <Popup
                        modal
                        trigger={
                          <button
                            type="button"
                            className="border-0 bg-transparent"
                          >
                            
                          </button>
                        }
                      >
                        {(close) => (
                          <div className="bg-light">
                            <div>
                              <p>
                                React is a popular and widely used programming
                                language
                              </p>
                            </div>
                            <button
                              type="button"
                              className="trigger-button"
                              onClick={() => close()}
                            >
                              Close
                            </button>
                          </div>
                        )}
                      </Popup> */}
                      {/* icon border text-center mx-1 */}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input type="checkbox" />
                    </th>
                    <td>inSubCatego</td>
                    <td>SC001</td>
                    <td>Simple Description</td>
                    <td>100</td>
                    <td>No</td>
                    <td>Active</td>
                    <td>
                      <i className="fa-solid fa-pen-to-square icon icon border text-center mx-1"></i>

                      <i className="fa-solid fa-trash icon icon border text-center mx-1"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default CategoryList;
