import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Logement from './pages/Logement';
import APropos from './pages/APropos';
import Error404 from './pages/Error404';
import Header from './components/Header';
import Footer from './components/Footer';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/apropos' element={<APropos />} />
        <Route path='/logement/:id' element={<Logement />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
