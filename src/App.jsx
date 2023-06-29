import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import MainContent from "./components/Main-Content";
import Footer from "./components/Footer";
import ModuleNarute from "./css/nav-nature-foot.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = [
      {
        tempat: "Gunung",
        link: "https://id.wikipedia.org/wiki/Gunung",
        id: 12,
      },
      {
        tempat: "Laut",
        link: "https://id.wikipedia.org/wiki/Laut",
        id: 33,
      },
      {
        tempat: "Hutan",
        link: "https://id.wikipedia.org/wiki/Hutan",
        id: 311,
      },
    ];
    const nature = data.map((item) => (
      <li key={item.id}>
        <a className="btn btn-primary" href={item.link}>
          {item.tempat}
        </a>
      </li>
    ));
    return (
      <div>
        <Navigation />
        <MainContent />
        <div className="d-flex justify-content-center my-5">
          <ul className={ModuleNarute.foot}>{nature}</ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
