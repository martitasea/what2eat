import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
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
      redirect:null,
    };
    this.handleChangeDish=this.handleChangeDish.bind(this)
    this.handleChangeAddress=this.handleChangeAddress.bind(this)
    this.handleChangeDist=this.handleChangeDist.bind(this)
    // this.handleChangePrice=this.handleChangePrice.bind(this)
  }
  handleChangeDish(event){
    let dish=event.target.value;
    // console.log(dish);
    this.setState({dish: dish})
  }
  handleChangeAddress(event){
    let address=event.target.value;
    // console.log(address);
    this.setState({address: address})
  }
  handleChangeDist(event){
    let dist=event.target.value;
    // console.log(dist);
    this.setState({dist: dist})
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

{/* <form onsubmit="alert(this.submitted); return false;">
    <input onclick="this.form.submitted=this.value;" type="submit" value="Yes" />
    <input onclick="this.form.submitted=this.value;" type="submit" value="No" />
</form> */}

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
               
                this.setState({redirect:"/listview"})
                 }
               }>
              <div className="question">
              <img className="icon" src={process.env.PUBLIC_URL +"/media/dish.svg"} alt="Dish"/>
              <input type="text" className="box" name="dish" onChange={this.handleChangeDish} placeholder="¿Qué te apetece?"/>
              </div>
              
              {/* <div className="question">
              <img className="icon" src={process.env.PUBLIC_URL +"/media/map.svg"} alt="Address"/>
              <input type="text" className="box" name="address" onChange={this.handleChangeAddress} placeholder="¿Dónde estás?"/>
              </div> */}

              <div className="question">
              <img className="iconDist" src={process.env.PUBLIC_URL +"/media/dist.svg"} alt="Address"/>
              <select name="dist" className="box" onChange={this.handleChangeDist}>
                    <option value="" selected disabled>A qué distancia busco</option>
                    <option value="100">100 m</option>
                    <option value="500">500 m</option>
                    <option value="1000">1 km</option>
                    <option value="5000">5 km</option>
              </select>
              </div>
              <footer className="two">
                <input type="submit" className="little ghost" value="FILTRAR" onClick="this.form.submitted=this.value"/>
                {/* <Link to="/mapview">  */}
                <input type="submit" className="little blue" value="SEGUIR" onClick="this.form.submitted=this.value"/>
                {/* <button className="button little blue" name="VER LISTA">SEGUIR</button> */}
                {/* </Link> */}
              </footer>
            </form>
          )
        }
     </MyConsumer>
    );
  }
}
  export default Form;
