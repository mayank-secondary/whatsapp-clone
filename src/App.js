import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import { useStateValue } from './Configurations/StateProvider';

function App() {
  const [{ user }] = useStateValue();
  return (

    <div className="app">
      {!user ? (<Login />) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId"><Chat /></Route>
              <Route path='/' />
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div >

  );
}

export default App;
