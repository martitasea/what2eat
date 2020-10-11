import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Category.css';

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      catHref: this.props.catHref,
      catImg: this.props.catImg,
      category: this.props.category
    };
  }

  render() {
    return (
      <Link to={this.state.catHref}>
      <figure>
        <img src={this.state.catImg} alt={this.state.category}/>
        <p>{this.state.category}</p>
      </figure>
      </Link>
    );
  }
}

export default Category;