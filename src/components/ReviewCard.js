import React from 'react'

class ReviewCard extends React.Component{
    render() {
        return (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Header>Reviews</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        );
    }
}

export default ReviewCard