import { Card,ListGroupItem , ListGroup, Container, Row, Col } from "react-bootstrap"

import books from '../horror/horror.json'

const LatestRelease = ()=>{

    return(
        <Container >
        <Row  className="justify-content-center" >
        {books.map((book)=>(
          <Col md={3}>
              

                  
                    <Card className="mt-3">  
                  <Card.Img variant="top" src={book.img}  />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>
       {book.category}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>{book.price + "$"}</ListGroupItem>
     
    </ListGroup>
   
    </Card> </Col> ))}

    
  
 
        </Row>
      </Container>
    )
}
export default LatestRelease
    
