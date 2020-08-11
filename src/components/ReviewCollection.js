import React from "react";
import GameCard from "./GameCard";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import ReviewCard from "./ReviewCard"

class ReviewCollection extends React.Component{
    render() {
        return (
            <div>
                {this.props.gameReviews.map(review => <ReviewCard review={review} key={review.id}/>)}
            </div>
        )
    }
}

export default ReviewCollection