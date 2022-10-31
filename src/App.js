import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import routes from 'routes';

function App() {
  return (
    <div classname="app">
      <BrowserRouter>
        <div>
          <Nav />
          {
            routes.map((route, index) =>
              <Route exactly component={route.component} pattern={route.path} />)
          }
          <Route component={Page404} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
