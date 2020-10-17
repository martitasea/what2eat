import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './AOnBoarding.css';
import OnBoarding from '../OnBoarding/OnBoarding';

class AOnBoarding extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1,
      text:"¿Qué te apetece comer? Descubre cerca de ti los restaurantes que mejor cocinan tu plato favorito.",
      src:"./media/number-one.svg",
      alt:"¿Qué es what2eat?",
      button: "SIGUIENTE"
    };
    this.change=this.change.bind(this)
  }

  change(e){
    let number=this.state.number;
    if(number===1){
      e.preventDefault()
      this.setState({text: "Dinos en qué ubicación quieres descubrir los mejores platos. What2eat te dará el ranking con las opciones más sabrosas de forma ordenada.", src:"./media/two.svg", number:2});}
    else if(number===2){
      e.preventDefault()
      this.setState({text: "Filtra por especialidad y/o excluye los platos quen incluyan os alérgenos que toleráis tu o tus acompañantes", src:"./media/third.svg", number:3});}
    else if(number===3){
      e.preventDefault()
      this.setState({text: "Valora tus experiencias con los platos que has comido y gana saldo para gastar en tus especialidades favoritas. </br>¡Buen provecho!", src:"./media/four.svg", number:4});}
    else{}
  }

  render() {
    return (
      <div>
        <main className="center">
        <p className={this.state.classP}>{this.state.text}</p>
        <img className="onboarding" src={this.state.src} alt={this.state.alt}/>
        </main>
        <footer className="two">
          <Link to="/categoryMenu">
            <button className="little ghost">SALTAR</button>
            <button onClick={this.change} className="little blue">{this.state.button}</button>
          </Link>
        </footer>
      </div>
    );
  }
}

export default AOnBoarding;



{/* <Info text={this.state.text}  src={this.state.src} alt="Explicación what2eat"/>
<footer className="two">
  <Link to="/categoryMenu">
    <Button className="little ghost" text="SALTAR"/>
  </Link>
  <Button className="little blue" text="SIGUIENTE" onClick={this.changeOnBoarding01}/>
 
</footer> */}