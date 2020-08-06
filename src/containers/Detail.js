import React from 'react'
import ReviewForm from '../components/ReviewForm'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ListGroup from "react-bootstrap/ListGroup";

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
      let theReview = [{ summary: "", user_id: "", game_id: "" }]
      const id = this.props.match.params.id
      let reviews = this.props.reviews
      console.log(reviews)
      for (let i = 0; i < reviews.length; i++) {
        this.props.reviews.map(review => {
          if (review.id == id) {
            return theReview = review
          }
          else
            return null
        })
      }
      return theReview
    }
    
    render() {
        const { title, image, story } = this.gameDetails()
        const { summary, user_id, game_id } = this.reviewGetter()
       
        return (
          <div>
            
            <CardDeck>
              <Card style={{ height: "5rem" }, {width: "50rem" }}>
                <Card.Img style={{width: "10rem"}} variant="top" src={image} alt="game cover image" />
                <Card.Body >
                  <Card.Title>
                    <h1>{title}</h1>
                  </Card.Title>
                  <Card.Text>{story}</Card.Text>
                </Card.Body>
              </Card>
  
            </CardDeck>
            <ReviewForm />
            <Card border="dark">
            <h1> 
              This is where the reviews belong
            </h1>

            </Card>
          </div>
        );
  }
}

export default Detail

/*
class Detail extends React.Component {
  gameDetails = () => {
    let id = this.props.match.params.id;
    let theGame = { title: "", image: "", story: "" };
    this.props.games.map((game) => {
      if (game.id == id) {
        return (theGame = game);
      } else return null;
    });
    return theGame;
  };

  reviewGetter = () => {
    let id = this.props.match.params.id;
    let theReview = [{ summary: "", user_id: "", game_id: "" }];
    this.props.reviews.map((review) => {
      if (review.id == id) {
        return (theReview = review);
      } else return null;
    });
    return theReview;
  };

  render() {
    const { title, image, story } = this.gameDetails();
    const { summary, user_id, game_id } = this.reviewGetter();
    console.log(this.props);
    return (
      <div>
        <CardDeck>
          <Card style={{ height: "90rem", width: "30rem" }}>
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
        </CardDeck>
        <ReviewForm />
      </div>
    );
  }
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
*/