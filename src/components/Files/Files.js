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
      euroState: this.props.euroState,
      price: this.props.price+" €",
    };
  }


  render() {
    return (
      <section className={this.props.className}>
        <article className="row base">
          <img className="iconStar" src={this.state.starState} alt="Estrella"/>
          <img className="iconStar" src={this.state.euroState} alt="Precio"/>
          <p className="boldBlue price">{this.state.price}</p>
          
        </article>

        <article className="left row">
          <p className="boldBlue upper left">{this.state.name}</p>       
        </article>

        <article className="row restaurant">
          <div className="content">
            <div className="ranking">
              <p>{this.state.restaurantName}</p>
            </div>

            <div className="adress">
                <img className="iconRestaurant" src="./media/map.svg" alt="Localización"/>
                <p className="left">{this.state.address}</p>
            </div>

            <div className="phone">
              <img className="iconRestaurant" src="./media/phone.svg" alt="Teléfono"/>
              <p>{this.props.phone}</p>
            </div>
          </div>
          <div>
            <Link to="/mapviewpath">
              <img className="go" src="./media/go.svg" alt="Go to path"/>
            </Link>
          </div>
        </article>
      </section>
    );
  }
}

export default File;