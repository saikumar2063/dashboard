import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Tables from "../Tables";

import Cards from "../Cards";

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <div className="col ">
          <div className="dash-container ">
            <div className="dash-container1">
              <h1 className="user">
                Hello User,
                <span>here's what's happening with your store today.</span>
              </h1>
            </div>
            <Cards />
            <Tables />
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Dashboard;
