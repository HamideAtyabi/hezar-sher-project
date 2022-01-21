import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Ganjine from './component/Ganjine';
import Faal from './component/Faal';
import About from './component/About';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/Faal" element={<Faal/>}/>
    <Route path="/Ganjine" element={<Ganjine/>}/>
    <Route path="/About" element={<About/>}/>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
