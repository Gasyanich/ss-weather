import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import TodayWeather from '../todayWeather/TodayWeather';
import './layout.css';

const Layout = () => {
  return (
    <main className="main-layout">
      <div style={{padding: '5px'}}>
        <Switch>
          <Route exact path="/" component={TodayWeather}>
            <Redirect to="/today"/>
          </Route>
          <Route path="/today" component={TodayWeather}/>
          <Route path="/week" component={TodayWeather}/>
          <Route path="/month" component={TodayWeather}/>
        </Switch>
      </div>
    </main>
  );
};

export default Layout;
