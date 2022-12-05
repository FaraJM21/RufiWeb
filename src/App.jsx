import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {   AbaoutApartment, Apartments, Home, Layout, Profile } from "./pages";
import './assets/App.scss'
import "swiper/css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/aboutapartment/:id" element={<AbaoutApartment />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
