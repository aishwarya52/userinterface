import './App.css';
import React from 'react';
import {MainPage} from './page/main-page/main-page.component';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
    <Router>
      <div className="App">
      <MainPage/>
      </div>
    </Router>
);
 
export default App;
