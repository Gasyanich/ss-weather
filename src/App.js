import React from 'react';
import 'fontsource-roboto';
import NavMenu from './components/navigation/nav-menu';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <NavMenu/>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
