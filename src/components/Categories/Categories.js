import React, { Component } from 'react';
import './Categories.css';
import Category from "../Category/Category";
import dataCategories from "../dataCategories.js";

class Categories extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: dataCategories}
    this.getCategories = this.getCategories.bind(this);
  }

getCategories(){
    return this.state.categories.map((category)=>(
     <Category catImg={category.image} category={category.title} catHref={category.href}/>
    ))
}
  render() {
    return (
      <main>
         {this.getCategories()}
      </main>
    );
  }
};

export default Categories;