import React, { Component } from 'react';

import Info from '../Info/Info';
import Button from '../Button/Button';
import './AOnBoarding.css';

class AOnBoarding extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Info text="Averigüa dónde comer ese plato que tánto te gusta."  src="media/onBoarding-1.svg" alt="Explicación what2eat"/>
        <footer className="two">
        <Button className="little ghost" text="SALTAR"/>
        <Button className="little blue" text="SIGUIENTE"/>
        </footer>
      </div>
    );
  }
}

export default AOnBoarding;