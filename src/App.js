import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Dashboard from "./components/Dashboard";
// import CategoryList from "./components/CategoryLIst";
// import Form from "./Form";
// import Formdata from "./Form/formdata";

import Employee from "./Form/employee";

import "./App.css";

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Navbar />
    //   <Routes>
    //     <Route exact path="/" element={<Dashboard />} />
    //     <Route exact path="/category" element={<CategoryList />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      {/* <Form />
      <Formdata /> */}
      <Employee />
    </>
  );
}

export default App;
