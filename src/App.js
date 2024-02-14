import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import Main from './pages/Main';
import About from './pages/About';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Member from './pages/Member';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Footer from './component/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/news/*" element={
          <Routes>
            <Route path="/" element={<News />} />
            <Route path=":id" element={<NewsDetail />} />
          </Routes>
        } />
        <Route path="/member" element={<Member />} />
        <Route path="/product/*" element={
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path=":id" element={<ProductDetail />} />
          </Routes>
        } />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
