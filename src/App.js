import React from 'react';
import 'fontsource-roboto';
import NavMenu from './components/navigation/navMenu';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import TodayWeather from './components/todayWeather/';
import './components/shared/layout.css';
import WeekWeather from './components/weekWeather/';

function App() {
  return (
    <BrowserRouter>
      <NavMenu/>
      <main className="main-layout">
        <Switch>
          <Route exact path="/" component={TodayWeather}>
            <Redirect to="/today"/>
          </Route>
          <Route path="/today" component={TodayWeather}/>
          <Route path="/week" component={WeekWeather}/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
