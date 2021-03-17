import React from 'react';

import Sidebar from '../sidebar/sidebar.component';
import Header from '../header/header.component';

class MainPage extends React.Component {
  

render(){
    return (
      <div>
    
     <Sidebar/>
     <Header/>
      </div>
    );

  }
}
export {MainPage} ;







// const MainPage = () => (
//   <Header>
//      <Switch>
//        <Route exact path="/" component={ Sidebar } />
//        <Route exact path="/test" component={ Header } />
//      </Switch>
 
//   </Header>
 
//  );

