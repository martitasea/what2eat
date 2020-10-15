import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Form from '../Form/Form';
import HeadLittle from '../HeadLittle/HeadLittle';
import SubHeader from '../SubHeader/SubHeader';
import './AFilter.css';
// import CategoryContext from '../userContext';

class AFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      params: this.props.match.params.cat,
    };
  }
  // static contextType = CategoryContext;

  render() {
    //  this.context=this.state.params
    return (
      <main>
        <HeadLittle params={this.state.params} rutaLogo="./media/logo-big-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <SubHeader params={this.state.params}/>  
        <Form params={this.state.params}/>
        <Link to="/mapview">MAPVIEW</Link>
        <Link to="/listview">LISTVIEW</Link>
      </main>
    );
  }
}

export default AFilter;