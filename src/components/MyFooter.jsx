import { Alert , Container, Row, Col} from "react-bootstrap"



const MyFooter = ()=>(
<div>
<Container fluid>
  <Row className= "justify-content-end align-items-end mt-5">
    <Col><Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert></Col>
  </Row>
</Container>
   
</div>
)
export default MyFooter