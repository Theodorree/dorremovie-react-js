import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">ELEVATE YOUR EXPERIENCE</div>
            <div className="title">WITH WEB CINEMA</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark" href="#trending">
                See All List
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
