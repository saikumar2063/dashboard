import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-around flex-column flex-md-row flex-lg-row m-2 flex-wrap">
          <Card className="bg-warning col-sm-12 col-md-5 col-lg-2 m-1 text-white ">
            <Card.Body className="pt-5">
              <i className="fa-solid fa-arrow-trend-up icon"></i>
              <Card.Title>12</Card.Title>
              <Card.Subtitle className="mb-2 fs-6  ">
                No of stores
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card className="bg-success col-sm-12  col-md-5 col-lg-2 m-1 text-white">
            <Card.Body className="pt-5">
              <i className="fa-solid fa-coins icon "></i>
              <Card.Title>
                <i className="fa-solid fa-indian-rupee-sign icon text-white"></i>
                108,910
              </Card.Title>
              <Card.Subtitle className="mb-2 fs-6 ">
                Total Purchase
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card className="bg-primary col-sm-12  col-md-5 col-lg-2  m-1 text-white">
            <Card.Body className="pt-5">
              <i className="fa-solid fa-coins icon "></i>

              <Card.Title>
                <i className="fa-solid fa-indian-rupee-sign icon text-white"></i>
                80,239
              </Card.Title>
              <Card.Subtitle className="mb-2 fs-6 ">
                Total Stock Value
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card className="bg-info col-sm-12  col-md-5 col-lg-2 m-1 text-white">
            <Card.Body className="pt-5">
              <i className="fa-solid fa-coins icon "></i>

              <Card.Title>
                <i className="fa-solid fa-indian-rupee-sign icon text-white"></i>
                10,280
              </Card.Title>
              <Card.Subtitle className="mb-2 fs-6 ">
                Supplier Dues
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card className="bg-primary col-sm-12  col-md-5 col-lg-2 m-1 text-white">
            <Card.Body className="pt-5">
              <i className="fa-solid fa-coins icon "></i>

              <Card.Title>
                <i className="fa-solid fa-indian-rupee-sign icon text-white"></i>
                9,890
              </Card.Title>
              <Card.Subtitle className="mb-2 fs-6 ">Today Sales</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
