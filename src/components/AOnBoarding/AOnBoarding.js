import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './AOnBoarding.css';

class AOnBoarding extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1,
      text:"¿Qué te apetece comer? Descubre los restaurantes que mejor cocinan tu plato favorito.",
      src:"./media/OnBoarding01.svg",
      alt:"¿Qué es what2eat?",
      button: "SIGUIENTE"
    };
    this.change=this.change.bind(this)
  }

  change(e){
    let number=this.state.number;
    if(number===1){
      e.preventDefault()
      this.setState({text: "Dinos dóndegit  quieres descubrir los mejores platos. What2eat te dará el ranking con las opciones más sabrosas de forma ordenada.", src:"./media/OnBoarding02.svg", number:2});} 
    else if(number===2){
      e.preventDefault()
      this.setState({text: "Filtra por especialidad y/o excluye los platos quen incluyan los alérgenos que toleráis tu o tus acompañantes", src:"./media/OnBoarding03.svg", number:3});}
    else if(number===3){
      e.preventDefault()
      this.setState({text: "Valora tus experiencias con los platos que has comido y gana saldo para gastar en tus especialidades favoritas. ¡Buen provecho!", src:"./media/OnBoarding04.svg", number:4});}
    else{}
  }


  render() {
    return (
      <div>
        <main className="center">
        <p className="grey">{this.state.text}</p>
        <img className="onboarding" src={process.env.PUBLIC_URL +this.state.src } alt={this.state.alt}/>
        </main>
        <footer className="two">
          <Link to="/categoryMenu">
            <button className="little ghost">SALTAR</button>
          </Link>
          <Link to="/categoryMenu">
            <button onClick={this.change} className="little blue">{this.state.button}</button>
          </Link>
        </footer>
      </div>
    );
  }
}

export default AOnBoarding;