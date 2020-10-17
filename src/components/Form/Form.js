import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Form.css';
import {MyConsumer} from '../userContext';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      dish:'Dish-VACIO',
      address:'Address-VACIO',
      dist:'Dist-VACIO',
      precio:'Price-VACIO',
    };
    this.handleChangeDish=this.handleChangeDish.bind(this)
    this.handleChangeAddress=this.handleChangeAddress.bind(this)
    this.handleChangeDist=this.handleChangeDist.bind(this)
    this.handleChangePrice=this.handleChangePrice.bind(this)
  }
  handleChangeDish(event){
    let dish=event.target.value;
    console.log(dish);
    this.setState({dish: dish})
  }
  handleChangeAddress(event){
    let address=event.target.value;
    console.log(address);
    this.setState({address: address})
  }
  handleChangeDist(event){
    let dist=event.target.value;
    console.log(dist);
    this.setState({dist: dist})
  }
  handleChangePrice(event){
    let price=event.target.value;
    console.log(price);
    this.setState({price: price})
  }
  render() {
    return (
      <MyConsumer>
        {(contxt)=>(
           <form
            onSubmit=
               {(e)=>
                 {
                e.preventDefault()
                contxt.changeDish(this.state.dish)
                contxt.changeAddress(this.state.address)
                contxt.changeDist(this.state.dist)
                contxt.changePrice(this.state.price)
                 }
               }>
              <div className="question">
              <img className="icon" src={process.env.PUBLIC_URL +"/media/dish.svg"} alt="Dish"/>
              <input type="text" className="box" name="dish" onChange={this.handleChangeDish}/>
              </div>
              
              <div className="question">
              <img className="icon" src={process.env.PUBLIC_URL +"/media/map.svg"} alt="Address"/>
              <input type="text" className="box" name="address" onChange={this.handleChangeAddress}/>
              </div>

              <div className="question">
              <img className="icon" src={process.env.PUBLIC_URL +"/media/dist.svg"} alt="Address"/>
              <select name="dist" className="box" onChange={this.handleChangeDist}>
                    <option value="" selected disabled>A qué distancia busco</option>
                    <option value="1">1 km</option>
                    <option value="5">5 km</option>
                    <option value="10">10 km</option>
                    <option value="50">50 km</option>
              </select>
              </div>

              <div className="price">
              <img className="icon" src={process.env.PUBLIC_URL +"/media/euro.svg"} alt="Range Price"/>
              <input
                    onChange={this.handleChangePrice}
                    className="box"
                    type="range"
                    name="price"
                    min="1"
                    max="3"
                    step="0.5"/>
              </div>
              <footer className="two">
                <input type="submit" className="button little ghost" value="FILTRAR"/>
                <Link to="/listview"> 
                  <button className="button little blue" name="VER LISTA">SEGUIR</button>
                </Link>
              </footer>
            </form>
          )
        }
     </MyConsumer>
    );
  }
}
  export default Form;