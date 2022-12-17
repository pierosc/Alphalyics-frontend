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
import Etf from "./views/Etf";
import Ejemplos from "./views/Ejemplos";
function App() {
  return (
    <div className="imagen">
    
    
    <Cover />
      <div className="App ">
        
        <TesisInversion />
        <Rebalanceo />
        <Fases />
        <Ejemplos/>
        <Rentabilidad />
        <Invertibles />
        <Etf/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
