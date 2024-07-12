const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
// const bodyParser = require("body-parser");

// const sql = require("mssql");

const app = express();
app.use(cors());
// app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "chandu@1996",
  database: "product_orders",
});

app.get("/formdata", (req, res) => {
  con.query("select * from form", (err, result) => {
    if (err) {
      res.send("Error in api");
    } else {
      res.send(result);
      // console.log(result);
    }
  });
});

app.post("/form", (req, res) => {
  const data = req.body;
  // console.log(data);
  con.query("insert into form set?", data, (err, result, fields) => {
    if (err) {
      return err;
    } else {
      res.json({
        ResultData: result,
        Status: true,
      });
    }
    // res.send(result);
  });
});

app.get("/employee", (req, res) => {
  con.query("select * from employee", (err, result) => {
    if (err) {
      res.send("Error in api");
    } else {
      res.send(result);
      // console.log("employee", result);
    }
  });
});

app.post("/employeedata", (req, res) => {
  const data = req.body;
  // console.log(data);
  con.query("insert into employee set?", data, (err, result, fields) => {
    if (err) {
      return err;
    } else {
      res.json({
        ResultData: result,
        Status: true,
      });
    }
  });
});

app.listen(4000, () => {
  console.log("Listening on port 4000...");
});
