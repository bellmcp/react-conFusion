import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  }

  renderComments(comments) {
    if (comments != null) {
      const commentsList = comments.map((item) => {
        return (
          <CardText>
            <div>{item.comment}</div>
            <div>
              <i>
                -- {item.author}, {item.date}
              </i>
            </div>
          </CardText>
        );
      });
      return (
        <Card>
          <CardBody>
            <CardTitle>
              <h4>Comments</h4>
            </CardTitle>
            {commentsList}
          </CardBody>
        </Card>
      );
    }
  }

  render() {
    if (this.props.dish != null) {
      const comments = this.props.dish.comments;
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
