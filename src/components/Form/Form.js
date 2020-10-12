import React, { Component } from 'react';
import Dist from '../Dist/Dist';
import Price from '../Price/Price';
import Question from '../Question/Question';
import './Form.css';

class Form extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }


  render() {
    return (
      <form>
        <Question
          className="question" 
          type="search" 
          name="searchDish" 
          src="./media/dish.svg" 
          alt="Dish" 
          placeholder="Hamburguesa"/>
        <Question
          className="question"  
          type="search" 
          name="searchAdress" 
          src="./media/map.svg" 
          alt="Address" 
          placeholder="Velázquez 32"/>
        <Dist 
          src="./media/dist.svg" 
          alt="Dist"/>
        <Question
          className="price"  
          type="range" 
          name="price" 
          src="./media/euro.svg" 
          alt="Address" />
      </form>
    );
  }
}

export default Form;