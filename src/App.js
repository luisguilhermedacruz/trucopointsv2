import "./App.css";
import { useState } from "react";
import Banner from "./Components/Banner";
import Footer from "../src/Components/Footer";
import Form from "../src/Components/Form";

function App() {

  return (
    <div className="App">
      <div className="app_main">
        <Banner />
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
