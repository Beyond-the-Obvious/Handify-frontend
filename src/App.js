import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './component/Header';
import Login from './component/login'
class App extends React.Component{
  render(){
    return (
      <>
      
      <Header />

      <Router>

      <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
      </>
    )
  }
}

export default App;
