import React from "react";
import { Header } from "./components/Header";
import { FetchData } from "./components/FetchData";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header
        title="coronavirus tracker"
        subTitle="covid-19 global panademic"
      />
      <FetchData />
      <Footer />
    </div>
  );
}

export default App;
