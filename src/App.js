import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/pages/About";
import Disclaimer from "./Components/pages/Disclaimer";
import Photo from "./Components/Photo";

import Credits from "./Components/pages/Credits";
import "./App.css";
import LetestPhotos from "./Components/LetestPhotos";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-block">
          <div className="container">
            <div className="row">
              <div className="col">
                <Route exact path="/" render={props => <LetestPhotos />} />

                <Route path="/about" component={About} />
                <Route path="/disclaimer" component={Disclaimer} />
                <Route path="/credit" component={Credits} />
                <Route path="/photo" component={Photo} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
