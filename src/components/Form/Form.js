import React, { Component } from 'react';
import Dist from '../Dist/Dist';
import Question from '../Question/Question';
import './Form.css';
import {CategoryConsumer} from '../userContext';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      params: this.props.params,
    };
  }


  render() {
    return (
      <CategoryConsumer>
        {(cat)=>(
        <form action="/listview" method="post">
          <Question
            className="question"
            classInput="box"
            classImage="icon" 
            type="search" 
            name="dish" 
            src={process.env.PUBLIC_URL +"/media/dish.svg"}
            alt="Dish" 
            placeholder="Hamburguesa"/>
          <Question
            className="question"
            classInput="box"
            classImage="icon"   
            type="search" 
            name="adress"
            src={process.env.PUBLIC_URL +"/media/map.svg"} 
            alt="Address" 
            placeholder="Velázquez 32"/>
          <Dist 
            src={process.env.PUBLIC_URL +"/media/dist.svg"}
            alt="Dist"/>
          <Question
            className="price"
            classImage="icon"  
            type="range" 
            name="price" 
            src={process.env.PUBLIC_URL +"/media/euro.svg"} 
            alt="Address" />
          <Question 
            className="button"
            classInput="big blue"
            classImage="none"
            type="submit" 
            value="ENVIAR"
            onClick={()=>{
              // cat.setDish({dish.value})
              cat.setAddress("He cambiado la dirección")
              cat.setDist("He cambiado la distancia")
              cat.setRange("He cambiado el rango")
            }}
            />
        </form>)
      }
      </CategoryConsumer>
    );
  }
}

export default Form;