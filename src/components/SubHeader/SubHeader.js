import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './SubHeader.css';
import { CategoryConsumer } from '../userContext';

class SubHeader extends Component {
  render() {
    return (
      <Link to="/categorymenu">
        <section className="moreCat">
          <img className="iconPlus" src={process.env.PUBLIC_URL +"/media/plus-circle.svg"} alt=""/>
          <CategoryConsumer>
            {
              (contxt)=>{
                return (
                  <div>
                    <p className="pPlus">{contxt.category}</p>
                    <p className="pPlus">{contxt.dish}</p>
                    <p className="pPlus">{contxt.address}</p>
                    <p className="pPlus">{contxt.dist}</p>
                    <p className="pPlus">{contxt.price}</p>
                  </div>
                )
              }
            }
          </CategoryConsumer>
        </section>
      </Link>
    )
  }
}
export default SubHeader;