import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Rotas/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favoritos from './Rotas/favoritos';
import Categorias from './Rotas/categorias';
import MinhaEstante from './Rotas/minhaEstante';
import Header from './componentes/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/minhaEstante" element={<MinhaEstante />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();