import React from 'react';
import 'fontsource-roboto';
import NavMenu from './components/navigation/nav-menu';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import TodayWeather from './components/todayWeather/TodayWeather';
import './components/shared/layout.css';

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
          <Route path="/week" component={TodayWeather}/>
          <Route path="/month" component={TodayWeather}/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
