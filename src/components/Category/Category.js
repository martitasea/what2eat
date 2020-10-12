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
      <figure>
        <Link to={this.state.catHref}>
        <img class="food" src={this.state.catImg} alt={this.state.category}/>
        </Link>
        <p className="text">{this.state.category}</p>
      </figure>
    );
  }
}

export default Category;