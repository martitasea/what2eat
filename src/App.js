import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AFirst from "./components/AFirst/AFirst";
import AIntro from "./components/AIntro/AIntro";
import ACatMenu from "./components/ACatMenu/ACatMenu";
import AFilter from "./components/AFilter/AFilter";
import AListView from "./components/AListView/AListView";
import AMapView from "./components/AMapView/AMapView";
import AOnBoarding from "./components/AOnBoarding/AOnBoarding";
import {MyProvider} from './components/userContext';
import './App.css';

function App() {

  const [category, changeCategory] =useState("ELIGE UN TIPO DE PLATO");
  const [dish, changeDish] =useState("defaultDish");
  const [address, changeAddress]=useState("defaultAddress");
  const [dist, changeDist]=useState("defaultDist");
  const [range, changeRange]=useState("defaultRange");
  const [price, changePrice]=useState("defaultPrice");

  return (
    <div>
      <MyProvider value={{category, changeCategory, dish, changeDish, address, changeAddress, dist, changeDist, range, changeRange, price, changePrice}}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AFirst}></Route>
            <Route path="/intro" component={AIntro}></Route>
            <Route path="/onBoarding" component={AOnBoarding}></Route>
            {/* <Route path="/onBoarding02" component={AOnBoarding}></Route>
            <Route path="/onBoarding03" component={AOnBoarding}></Route> */}
            <Route path="/categorymenu" component={ACatMenu}></Route>
            <Route path="/filter/:cat" component={AFilter} ></Route>
            <Route path="/listview" component={AListView}></Route>
            <Route path="/mapview" component={AMapView}></Route>
          </Switch>
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}
export default App;