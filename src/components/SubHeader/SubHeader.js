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
              (cat)=>{
                return (
                  <div>
                    <p className="pPlus">{cat.category}</p>
                    {/* <p className="pPlus">{cat.dish}</p>
                    <p className="pPlus">{cat.address}</p>
                    <p className="pPlus">{cat.dist}</p>
                    <p className="pPlus">{cat.range}</p>
                    <p className="pPlus">{cat.ranking}</p> */}
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




                        //   constructor(props){
                        //     super(props);
                        //     this.state = {
                        //       // params: this.props.match.params.cat
                        //     };
                        //  }
                        //  static contextType = ThemeContext;
                        //  componentDidMount() {
                        //   let value = this.context;
                        //   /* perform a side-effect at mount using the value of CategoryContext */
                        // }
                        // componentDidUpdate() {
                        //   let value = this.context;
                        //   /* ... */
                        // }
                        // componentWillUnmount() {
                        //   let value = this.context;
                        //   /* ... */