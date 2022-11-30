import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  AboutApartment, Apartments, Home, Layout, Profile } from "./pages";
import './assets/App.scss'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/aboutaprtment/:id" element={<AboutApartment />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
