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
      <section class="file">
        <article class="shadow">
        <div class="content">
          <p class="boldBlue">TAMPU</p>
          <div class="ranking">
            <img class="iconRestaurant" src="./media/starOn.svg" alt="Estrella"/>
            <img class="iconRestaurant" src="./media/starOn.svg" alt="Estrella"/>
            <img class="iconRestaurant" src="./media/starOn.svg" alt="Estrella"/>
            <img class="iconRestaurant" src="./media/starOn.svg" alt="Estrella"/>
            <img class="iconRestaurant" src="./media/starOn.svg" alt="Estrella"/>
            <p>Paella de marisco</p>
          </div>
          <div class="euro">
            <img class="iconRestaurant" src="./media/euro.svg" alt="Precio"/>
            <img class="iconRestaurant" src="./media/euro.svg" alt="Precio"/>
            <img class="iconRestaurant" src="./media/euro.svg" alt="Precio"/>
          </div>
          <div class="adress">
            <img class="iconRestaurant" src="./media/map.svg" alt="Localización"/>
            <p>Paseo de Recoletos 2, Madrid</p>
          </div>
          <div class="phone">
            <img class="iconRestaurant" src="./media/phone.svg" alt="Teléfono"/>
            <p>910887247</p>
          </div>
        </div>
        <Link to="/mapviewpath">
          <img class="go" src="./media/go.svg" alt="Go to path"/>
        </Link>
        </article>
      </section>
    );
  }
}

export default File;