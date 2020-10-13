import React, { Component, Suspense } from 'react';
import './Categories.css';
import Category from "../Category/Category";
import dataCategories from "../../data/dataCategories.js";

class Categories extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: dataCategories}
    this.getCategories = this.getCategories.bind(this);
  }

getCategories(){
    return this.state.categories.map((category)=>(
     <Category 
      catImg={category.image} 
      category={category.title} 
      catHref={category.href}/>
    ))
}
  render() {
    return (
      <div>
      <p className="tit">Selecciona la categoría del plato:</p>
      <section className="categories">
      < Suspense fallback={<h1>Estamos cargando...</h1>}>
        {this.getCategories()}
      </Suspense>
      </section>
      </div>
    );
  }
};

export default Categories;
