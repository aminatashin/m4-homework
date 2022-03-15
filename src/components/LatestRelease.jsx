import {
  Card,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import books from "../horror/horror.json";
import { Component } from "react";


class LatestRelease extends Component  {
    state ={
     selectedBook:null,

    };

  render () {
    return (
        <Container>
          <Row className="justify-content-center">
            {books.map((book) => (
              <Col md={3}>
                <Card key={book.assin} className="mt-3">
                  <Card.Img variant="top" src={book.img} onClick={()=>this.setState({
                     selectedBook:book,
                  })

                  } />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.category}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{book.price + "$"}</ListGroupItem>
                  </ListGroup>
                </Card>{" "}
              </Col>
            ))}
          </Row>
          <Row>
              <col md={6}>
                  {this.state.selectedBook ? (this.state.selectedBook.map(rev=>(
                      <ListGroup>
                      <ListGroup.Item>{rev.assin}</ListGroup.Item>
                      
                    </ListGroup>
                  ))) : ( <ListGroup.Item>clickon the image</ListGroup.Item>)
                }
              
              </col>
          </Row>
        </Container>
       
      );
  }
};
export default LatestRelease;
