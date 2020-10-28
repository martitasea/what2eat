import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AFirst from "./components/AFirst/AFirst";
import AIntro from "./components/AIntro/AIntro";
import ACatMenu from "./components/ACatMenu/ACatMenu";
import AFilter from "./components/AFilter/AFilter";
import AListView from "./components/AListView/AListView";
import AMapView from "./components/AMapView/AMapView";
import AOnBoarding from "./components/AOnBoarding/AOnBoarding";
import NotFound from "./components/NotFound/NotFound";
import {MyProvider} from './components/userContext';
import './App.css';

function App() {

  const [category, changeCategory] =useState("ELIGE UN TIPO DE PLATO");
  const [dish, changeDish] =useState("VACÍO");
  const [address, changeAddress]=useState("VACÍO");
  const [dist, changeDist]=useState("VACÍO");
  // const [range, changeRange]=useState("defaultRange");
  const [price, changePrice]=useState("VACÍO");
  const [pointAlat, changeLatitudeA]=useState("40.421649");
  const [pointAlon, changeLongitudeA]=useState(" -3.692725"); //Paseo de Recoletos 15
  const [pointBlat, changeLatitudeB]=useState("40.422346");
  const [pointBlon, changeLongitudeB]=useState("-3.696573");  //CARNE>Solomillo

  return (
    <div>
      <MyProvider value={{category, changeCategory, dish, changeDish, address, changeAddress, dist, changeDist, price, changePrice, pointAlat, changeLatitudeA, pointAlon, changeLongitudeA, pointBlat, changeLatitudeB, pointBlon, changeLongitudeB}}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AFirst}></Route>
            <Route path="/intro" component={AIntro}></Route>
            <Route path="/onBoarding" component={AOnBoarding}></Route>
            {/* <Route path="/onBoarding02" component={AOnBoarding}></Route>
            <Route path="/onBoarding03" component={AOnBoarding}></Route> */}
            <Route path="/categorymenu" component={ACatMenu}></Route>
            <Route path="/filter" component={AFilter} ></Route>
            <Route path="/listview" component={AListView}></Route>
            <Route path="/mapview" component={AMapView}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}
export default App;
// Cambiiar en package.json para Heroku
// "dev": "react-scripts start",
// "start": "serve -s build",