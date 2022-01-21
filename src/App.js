import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies.jsx";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import MovieForm from "./components/movieForm.jsx";
import LoginForm from './components/loginForm';
import RegisterForm from "./components/registerForm.jsx";
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
          <main className='container'>
            <Routes>
              <Route path="/login" element={ <LoginForm/> } />
              <Route path="/register" element={ <RegisterForm/> } />
              <Route path="/movies/:id" element={ <MovieForm/> } />
              <Route path="/movies" element={ <Movies /> } />
              <Route path="/customers" element={ <Customers /> } />
              <Route path="/rentals" element= { <Rentals />} />
              <Route path="/not-found" element= {<NotFound />} />
              <Route path="/" element= { <Movies /> } />
              <Route path ="/*" element = {<NotFound />} />
            </Routes>
          </main>
      </React.Fragment>

    );
  }
}

export default App;