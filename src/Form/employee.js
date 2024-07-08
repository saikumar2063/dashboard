import React, { useState } from "react";

function Employee() {
  const [employee, setEmployee] = useState({
    employee_id: "",
    employee_name: "",
    bio_id: "",
    mobile_no: "",
    doj: "",
    dob: "",
    designation: "",
    gender: "Male",
    branch: "",
    rfid: "",
    file: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(employee);
  };
  return (
    <div className="container">
      <h1 className="fs-4">Add Employee</h1>
      <hr />
      <div className="row m-4">
        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">Emp ID:</label>
          <input
            required
            className="form-control"
            type="number"
            placeholder="Employee id"
            name="employee_id"
            value={employee.employee_id}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          />
        </div>

        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">Emp Name:</label>
          <input
            required
            className="form-control"
            type="text"
            placeholder="Employee Name"
            name="employee_name"
            value={employee.employee_name}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          />
          {/* {!employee.employee_name && <p className='text-warning'>Required*</p>} */}
        </div>

        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">Biometric ID:</label>
          <input
            required
            className="form-control"
            type="number"
            placeholder="Biometric id"
            name="bio_id"
            value={employee.bio_id}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          />
        </div>

        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">Mobile</label>
          <input
            required
            className="form-control"
            type="number"
            placeholder="Mobile"
            name="mobile_no"
            value={employee.mobile_no}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          />
        </div>

        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">DOJ</label>
          <input
            required
            className="form-control"
            type="date"
            name="doj"
            value={employee.doj}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          />
        </div>

        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">DOB</label>
          <input
            required
            className="form-control"
            type="date"
            name="dob"
            value={employee.dob}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          />
        </div>

        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">Designation</label>
          <input
            className="form-control"
            type="text"
            placeholder="Designation"
            name="designation"
            value={employee.designation}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          />
        </div>

        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">Gender</label>
          <select
            className="form-control"
            name="gender"
            value={employee.gender}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">Department</label>
          <input
            required
            className="form-control"
            type="text"
            placeholder="Department"
          />
        </div>

        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">Branch</label>
          <input
            required
            className="form-control"
            type="text"
            placeholder="Branch"
            name="branch"
            value={employee.branch}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          />
        </div>

        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">RFID</label>
          <input
            required
            className="form-control"
            type="number"
            placeholder="Rfid"
            name="rfid"
            value={employee.rfid}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          />
        </div>

        <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
          <label className="font-weight-bold mb-1">Email</label>
          <input
            required
            className="form-control"
            type="text"
            placeholder="Enter your email"
            name="email"
            value={employee.email}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          />
        </div>

        <div className="mt-2 mb-2">
          <input
            type="file"
            name="file"
            value={employee.file}
            onChange={(event) => {
              setEmployee({
                ...employee,
                [event.target.name]: event.target.value,
              });
            }}
          />
        </div>

        <div className="d-flex justify-content-end mt-2">
          <button
            type="submit"
            className="bg bg-primary border-0 rounded text-white"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Employee;
