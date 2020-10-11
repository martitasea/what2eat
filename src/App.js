import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Info from "./components/Info/Info";
import AIntro from "./components/AIntro/AIntro";
import ACatMenu from "./components/ACatMenu/ACatMenu";
import AFilter from "./components/AFilter/AFilter";
import AListView from "./components/AListView/AListView";
import AMapView from "./components/AMapView/AMapView";
import Button from "./components/Button/Button";
import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Info mensaje="Reto de tripulaciones Alba, Jose Luis, David y Marta"  src="media/logo-blue.svg"/>
          </Route>

          <Route path="/intro">
            <AIntro/>
          </Route>

          <Route path="/onBoarding-1">
            <Info text="Averigüa dónde comer ese plato que tánto te gusta."  src="media/onBoarding-1.svg" alt="Explicación what2eat"/>
            <Button class="little ghost" text="SALTAR"/>
            <Button class="little blue" text="SIGUIENTE"/>
          </Route>

          <Route path="/onBoarding-2">
            <Info text="Ponte de acuerdo con tus amigos sobre dónde comer, según sus gustos o alergias."  src="media/onBoarding-2.svg" alt="Explicación what2eat"/>
            <Button class="little ghost" text="SALTAR"/>
            <Button class="little blue" text="SIGUIENTE"/>
          </Route>

          <Route path="/onBoarding-3">
            <Info text="Vota tus platos preferidos para que otra gente los conozca."  src="media/onBoarding-3.svg" alt="Explicación what2eat"/>
            <Button class="little ghost" text="SALTAR"/>
            <Button class="little blue" text="SIGUIENTE"/>
          </Route>

          <Route path="/catmenu">
            <ACatMenu/> 
          </Route>

          <Route path="/filter">
            <AFilter/>
          </Route>

          <Route path="/listview">
            <AListView/>
          </Route>

          <Route path="/mapview">
            <AMapView/>
          </Route>

        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
