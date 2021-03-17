import React from 'react';
import { Link , Switch,Route} from 'react-router-dom';
// import { render } from 'react-dom';
import About from '../../component/about/about.component';
import Login from '../../component/login/login.component';
import Dashboard from '../../component/dashboard/dashboard.component';
import Team from '../../component/dashboard/dashboard.component';
import './sidebar.styles.css';

const Sidebar = () => (
   <div className="sidebar">
       <div className='card'>
       <h6>Angular js</h6>
       <h1>iJavaScript</h1>

       </div>
      
            <a><Link to="/dashboard">Dashboard</Link></a>
            <a><Link to="/about">About</Link></a>
            <a><Link to="/team">Team</Link></a>
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />

    </Switch>

   </div>
  );
  export default Sidebar;