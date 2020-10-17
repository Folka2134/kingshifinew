import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HomePage from "../components/homepage/Homepage";
import MusicPage from "../components/musicpage/MusicPage";
import MerchPage from "../components/merchpage/MerchPage";
import EventPage from "../components/eventpage/Event";

function App() {
  return (
    <div className="fullContainer">
      <Header />
      <main>
        <Route exact path="/KingsHifi/home" component={HomePage} />
        <Route exact path="/KingsHifi/music" component={MusicPage} />
        <Route exact path="/KingsHifi/merch" component={MerchPage} />
        <Route exact path="/KingsHifi/events" component={EventPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
