import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './SubHeader.css';
// import {ThemeContext} from "../../context"
import {CategoryContext} from "../userContext";
import { CategoryConsumer } from '../userContext';

class SubHeader extends Component {
  render() {
    //  let value = this.context;
    return (
      <Link to="/categorymenu">
        <section className="moreCat">
          <img className="iconPlus" src={process.env.PUBLIC_URL +"/media/plus-circle.svg"} alt=""/>
          <CategoryConsumer>
            {
              (cat)=>{
                return <p className="pPlus">{cat.category}</p>
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