import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies.jsx";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <main className='container'>
            <Routes>
              <Route path="/movies" element={ <Movies /> } />
              <Route path="/customers" element={ <Customers /> } />
              <Route path="/rentals" element= { <Rentals />} />
              <Route path="/not-found" element= {<NotFound />} />
              <Route path="/" element= { <Movies /> } />
              <Route path ="/*" element = {<NotFound />} />
            </Routes>
          </main>
      </div>

    );
  }
}

export default App;