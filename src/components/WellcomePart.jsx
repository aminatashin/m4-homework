import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

const WellcomePart = ()=>{
    return(
    <Container className="mt-2 " fluid>
        <Row className="justify-content-center">
          <Col md={6}>
          <Jumbotron>
      <h3>WellCome To your StriveBooks!</h3>
      <p>
        You will find variety of your favorite books by just a CLICK!
      </p>
      <p>
        <Button variant="primary">Click to FIND</Button>
      </p>
    </Jumbotron>
          
          </Col>
        </Row>
      </Container>)
}
    export default WellcomePart
