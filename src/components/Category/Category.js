import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Category.css';
import {CategoryConsumer} from '../userContext';

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
        <CategoryConsumer>
              {(cat)=>(
                <figure>
                  <Link to={this.state.catHref}>
                    <img
                      className="food"
                      onClick={()=>{
                        cat.setCategory(this.state.category)
                      }}
                      src={this.state.catImg}           
                      alt={this.state.category}
                    />
                  </Link>
                  <p className="text">{this.state.category}</p>
                </figure>)
              }
        </CategoryConsumer>
    );
  }
}

export default Category;  
