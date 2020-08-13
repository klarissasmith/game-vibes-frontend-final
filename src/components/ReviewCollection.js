import React from "react";
import GameCard from "./GameCard";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import ReviewCard from "./ReviewCard"

class ReviewCollection extends React.Component {
  deleteReview = (reviewId) => {
    fetch(`http://localhost:3000/reviews/${reviewId}`, {
      method: "DELETE",
    }).then((response) => response.json()).then(this.props.removeReview(reviewId));
  }
    
  render() {
    return (
      <div>
        <h3>Reviews:</h3>
        {this.props.gameReviews.map((review) => (
          <ReviewCard
            review={review}
            key={review.id}
            deleteReview={this.deleteReview}
          />
        ))}
      </div>
    );
  }
}

export default ReviewCollection