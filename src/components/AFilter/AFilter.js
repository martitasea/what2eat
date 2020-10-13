import React, { Component } from 'react';
import Form from '../Form/Form';
import HeadLittle from '../HeadLittle/HeadLittle';
import SubHeader from '../SubHeader/SubHeader';
import './AFilter.css';

class AFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      params: this.props.match.params.cat,
    };
  }

  render() {
    return (
      <main>
      
      {/* <h1>{this.props.match.params.cat}</h1> */}
        <HeadLittle params={this.state.params} rutaLogo="./media/logo-big-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <SubHeader params={this.state.params}/>  
        <Form params={this.state.params}/>
      </main>
    );
  }
}

export default AFilter;