import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";
import TesisInversion from "./views/TesisInversion";
import Footer from "./views/Footer";
import Rebalanceo from "./views/Rebalanceo";
import Fases from "./views/Fases";
import Cover from "./views/Cover";
import Rentabilidad from "./views/Rentabilidad";
import Invertibles from "./views/Invertibles";
function App() {


  return (
    <>
    <div className="App p-24">
      <Cover/>
      <TesisInversion/>
      <Rebalanceo/>
      <Fases/>
      <Rentabilidad/>
      <Invertibles/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
