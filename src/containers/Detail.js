import React from "react";
import ReviewForm from "../components/ReviewForm";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ListGroup from "react-bootstrap/ListGroup";
import ReviewCollection from "../components/ReviewCollection";
import ReviewCard from "../components/ReviewCard";

class Detail extends React.Component {
  gameDetails = () => {
    let id = parseInt(this.props.match.params.id);
    let theGame = { title: "", image: "", story: "" };
    this.props.games.map((game) => {
      if (game.id == id) {
        return (theGame = game);
      } else return null;
    });
    return theGame;
  };
  // 0: game_id: 2; id: 1; summary: "This is the greatest game of all time. Don't quote me on that."; user_id: 3;

  
  // getSpecificReviews = () => {
  //   const urlId = this.props.match.params.id;
  //   const gameReviews = this.props.reviews.filter((element) => element.game_id == urlId);
    
  //   return gameReviews.map(review => (<ReviewCard review={[review]} key={review.id}/>))
  // }

  render() {
    const { title, image, story } = this.gameDetails();
    const urlId = this.props.match.params.id
    let gameReviews = this.props.reviews.filter((element) => element.game_id == urlId)
    
    return (
      <div>
        <CardDeck>
          <Card style={({ height: "5rem" }, { width: "50rem" })}>
            <Card.Img
              style={{ width: "10rem" }}
              variant="top"
              src={image}
              alt="game cover image"
            />
            <Card.Body>
              <Card.Title>
                <h1>{title}</h1>
              </Card.Title>
              <Card.Text>{story}</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <ListGroup border="dark">
          <ReviewCollection gameReviews={gameReviews} removeReview={this.props.removeReview}/>
        </ListGroup>
        <ReviewForm game_id={parseInt(this.props.match.params.id)} createNewReview={this.props.createNewReview}/>
      </div>
    );
  }
}

export default Detail;
