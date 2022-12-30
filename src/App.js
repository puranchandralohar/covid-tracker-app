import React from "react";
import { Header } from "./Components/Header";
import { FetchData } from "./Components/FetchData";
import { Footer } from "./Components/Footer";

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
