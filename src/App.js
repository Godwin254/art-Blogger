import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavSection from './components/NavSection'
import Welcome from './components/Welcome'
import SideNav from './components/SideNav'
 
function App() {
  return (
    <div className="App">
     <NavSection/>
     <SideNav/>
     

     <Welcome title = "My page with Reactjs">
        <p>Here comes more practis with reactjs
            <ol>
              <li>components in react</li>
              <li>components in react</li>
              <li>components in react</li>
              <li>components in react</li>
            </ol>
        </p>
     </Welcome>
     <Welcome title = "Understanding props and states">
        <p>Here comes more practis with reactjs
                <ol>
                  <li>props and state in react</li>
                  <li>props and state in react</li>
                  <li>props and state in react</li>
                  <li>props and state in react</li>
                </ol>
        </p>
     </Welcome>
     <Welcome title = "Event Handling and binding"/>
    </div>
  );
}

export default App;
