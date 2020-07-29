import React from 'react'
import ReviewForm from './ReviewForm'

class Detail extends React.Component {
    state = {
        reviews: []
    }

    fetchReviews = () => {
        fetch("http:localhost:3000/reviews").then(response => response.json()).then(data => this.setState({reviews: data}))
    }

    componentDidMount = () => {
        this.fetchReviews()
    }
    
    render() {
     console.log(this.props.reviews, this.state)
      return <div>
          {this.props.reviews}
          <ReviewForm/>
    </div>;
  }
}

export default Detail