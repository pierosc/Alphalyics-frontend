import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import App from './App';
import Fases from './views/Fases';
import Invertibles from './views/Invertibles';
import Market from './views/Market';
import Rebalanceo from './views/Rebalanceo';
import Rentabilidad from './views/Rentabilidad';
function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Outlet />}>
        <Route index element={<App />} />
        {/* <Route path="/inicio" element={<App />} /> */}
        <Route path="/gotomarket" element={<Market />} />
        </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default Router