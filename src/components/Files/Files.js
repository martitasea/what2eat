import React, { Component } from 'react';
import {Link} from "react-router-dom";
import data from '../../data/data.js';
import './Files.css';

class File extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurantName:this.props.restaurantName,
      name:this.props.name,
      address: this.props.address,
      phone: this.props.phone,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      ranking: this.props.ranking,
      restaurants: data,
      starState: this.props.starState,
    };
  }


  render() {
    return (
      <section className={this.props.className}>
        <article className="shadow">
        <div className="content">
          <p className="boldBlue">{this.state.restaurantName}</p>
          {/* </Link> */}
          <div className="ranking">
            <img className="iconStar" src={this.state.starState} alt="Estrella"/>
            <p>{this.state.name}</p>
          </div>
          <div className="euro">
            <img className="iconRestaurant" src="./media/euro.svg" alt="Precio"/>
            <img className="iconRestaurant" src="./media/euro.svg" alt="Precio"/>
            <img className="iconRestaurant" src="./media/euro.svg" alt="Precio"/>
          </div>
          <div className="adress">
            <img className="iconRestaurant" src="./media/map.svg" alt="Localización"/>
            <p>{this.state.address}</p>
          </div>
          <div className="phone">
            <img className="iconRestaurant" src="./media/phone.svg" alt="Teléfono"/>
            <p>{this.props.phone}</p>
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