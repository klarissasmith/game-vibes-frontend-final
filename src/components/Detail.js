import React from 'react'
import ReviewForm from './ReviewForm'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

class Detail extends React.Component {
    gameDetails = () => {
        let id = this.props.match.params.id
        let theGame = {title:"", image:"", story:""}
        this.props.games.map(game => {
            if (game.id == id) {
                return theGame = game
            }
            else
                return null
        })
        return theGame
    }

    reviewGetter = () => {
        let id = this.props.match.params.id
        let theReview = [{ summary: "", user_id: "", game_id: "" }]
        this.props.reviews.map(review => {
            if (review.id == id) {
                return theReview = review
            }
            else
                return null
        })
        return theReview
    }
    
    render() {
        const { title, image, story } = this.gameDetails()
        const { summary, user_id, game_id } = this.reviewGetter()
        console.log(this.props)
        return (
          <div>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={image} alt="game cover image" />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{story}</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Text>{summary}</Card.Text>
              </Card.Body>
            </Card>
            <ReviewForm />
          </div>
        );
  }
}

export default Detail