import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AFirst from "./components/AFirst/AFirst";
import AIntro from "./components/AIntro/AIntro";
import ACatMenu from "./components/ACatMenu/ACatMenu";
import AFilter from "./components/AFilter/AFilter";
import AListView from "./components/AListView/AListView";
import AMapView from "./components/AMapView/AMapView";
import AOnBoarding from "./components/AOnBoarding/AOnBoarding";
import {CategoryProvider} from './components/userContext';
import './App.css';

function App() {

  const [category, changeCategory] =useState("defaultCategory");
  const [dish, changeDish] =useState("defaultDish");
  const [address, changeAddress]=useState("defaultAddress");
  const [dist, changeDist]=useState("defaultDist");
  const [range, changeRange]=useState("defaultRange");
  const [price, changePrice]=useState("defaultPrice");

  return (
    <div>
      <CategoryProvider value={{category, changeCategory, dish, changeDish, address, changeAddress, dist, changeDist, range, changeRange, price, changePrice}}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AFirst}></Route>
            <Route path="/intro" component={AIntro}></Route>
            <Route path="/onBoarding01" component={AOnBoarding}></Route>
            <Route path="/onBoarding02" component={AOnBoarding}></Route>
            <Route path="/onBoarding03" component={AOnBoarding}></Route>
            <Route path="/categorymenu" component={ACatMenu}></Route>
            <Route path="/filter/:cat" component={AFilter} ></Route>
            <Route path="/listview" component={AListView}></Route>
            <Route path="/mapview" component={AMapView}></Route>
          </Switch>
        </BrowserRouter>
      </CategoryProvider>
    </div>
  );
}
export default App;

{/* <Route path="/onBoarding-1">
  <Info text="Averigüa dónde comer ese plato que tánto te gusta."  src="media/onBoarding-1.svg" alt="Explicación what2eat"/>
  <Button className="little ghost" text="SALTAR"/>
  <Button className="little blue" text="SIGUIENTE"/>
</Route>

<Route path="/onBoarding-2">
  <Info text="Ponte de acuerdo con tus amigos sobre dónde comer, según sus gustos o alergias."  src="media/onBoarding-2.svg" alt="Explicación what2eat"/>
  <Button className="little ghost" text="SALTAR"/>
  <Button className="little blue" text="SIGUIENTE"/>
</Route>

<Route path="/onBoarding-3">
  <Info text="Vota tus platos preferidos para que otra gente los conozca."  src="media/onBoarding-3.svg" alt="Explicación what2eat"/>
  <Button className="little ghost" text="SALTAR"/>
  <Button className="little blue" text="SIGUIENTE"/>
</Route> */}