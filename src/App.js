import React from "react";
import Header from "./Components/Header";
import Styles from './Styles/Style.css';
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container">
        <Header />
        <Body />  
        <Footer/>
    </div>
  );
}

export default App;
