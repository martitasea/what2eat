import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Files.css';

class File extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <section className={this.props.className}>
        <article className="shadow">
        <div className="content">
          <p className="boldBlue">TAMPU</p>
          <div className="ranking">
            <img className="iconRestaurant" src="./media/starOn.svg" alt="Estrella"/>
            <img className="iconRestaurant" src="./media/starOn.svg" alt="Estrella"/>
            <img className="iconRestaurant" src="./media/starOn.svg" alt="Estrella"/>
            <img className="iconRestaurant" src="./media/starOn.svg" alt="Estrella"/>
            <img className="iconRestaurant" src="./media/starOn.svg" alt="Estrella"/>
            <p>Paella de marisco</p>
          </div>
          <div className="euro">
            <img className="iconRestaurant" src="./media/euro.svg" alt="Precio"/>
            <img className="iconRestaurant" src="./media/euro.svg" alt="Precio"/>
            <img className="iconRestaurant" src="./media/euro.svg" alt="Precio"/>
          </div>
          <div className="adress">
            <img className="iconRestaurant" src="./media/map.svg" alt="Localización"/>
            <p>Paseo de Recoletos 2, Madrid</p>
          </div>
          <div className="phone">
            <img className="iconRestaurant" src="./media/phone.svg" alt="Teléfono"/>
            <p>910887247</p>
          </div>
        </div>
        <Link to="/mapviewpath">
          <img className="go" src="./media/go.svg" alt="Go to path"/>
        </Link>
        </article>
      </section>
    );
  }
}

export default File;