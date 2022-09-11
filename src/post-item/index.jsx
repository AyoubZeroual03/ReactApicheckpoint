import { Col, Row,Card,Button } from "react-bootstrap"

export const PostItem= ({userId=1,id=1,
    title="this is title",
body="thi is body"})=>{
    return (
        <div>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


        </div>
    )
}