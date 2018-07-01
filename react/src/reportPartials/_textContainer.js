import React, { Component } from "react";
import Review from "./_review.js";
import Typography from '@material-ui/core/Typography';
class TextContainer extends Component {
  render() {
    return (
      <div >
      <h2 className="review-title"  data-message={this.props.dataMessageTitle} onClick={this.props.clickHandler}>{this.props.reviews.title}</h2>
        {this.props.reviews.content.map(review => (
          <Review review={review} key={review.id} />
          
        ))}
      </div>
    );
  }
}

export default TextContainer;
