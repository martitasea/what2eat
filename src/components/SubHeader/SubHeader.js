import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './SubHeader.css';
import { MyConsumer } from '../userContext';

class SubHeader extends Component {
  render() {
    return (
      <section className="moreCat">
        <Link to="/categorymenu">
          <div className="row base">
          <img className="iconPlus" src={process.env.PUBLIC_URL +"/media/plus-circle.svg"} alt=""/>
          <MyConsumer>
            {
              (contxt)=>{
                return (
                    <p className="pPlus">{contxt.category}</p>
                )
              }
            }
          </MyConsumer>
          </div>
      </Link>
      <Link to="/filter">
          <img src={process.env.PUBLIC_URL +"./media/filter.svg"} alt="Filtro" className="filter"/>
      </Link>
        </section>
    )
  }
}
export default SubHeader;


{/* <p className="pPlus">{contxt.dish}</p>
<p className="pPlus">{contxt.address}</p>
<p className="pPlus">{contxt.dist}</p>
<p className="pPlus">{contxt.price}</p> */}