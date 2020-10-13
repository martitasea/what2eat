import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AFirst from "./components/AFirst/AFirst";
import AIntro from "./components/AIntro/AIntro";
import ACatMenu from "./components/ACatMenu/ACatMenu";
import AFilter from "./components/AFilter/AFilter";
import AListView from "./components/AListView/AListView";
import AMapView from "./components/AMapView/AMapView";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AFirst}></Route>
          <Route path="/intro" component={AIntro}></Route>
          <Route path="/categorymenu" component={ACatMenu}></Route>
          <Route path="/filter/:cat" component={AFilter} ></Route>
          <Route path="/listview" component={AListView}></Route>
          <Route path="/mapview" component={AMapView}></Route>
        </Switch>
      </BrowserRouter>
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