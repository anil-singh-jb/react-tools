import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Calculator from './components/calculator/Calculator';
import Currencyconvertor from './components/currencycnvt/Currencyconvertor';
import Todo from './components/todos/Todos';
import Getapi from './components/api/Getapi';
import Home from './components/News/Home/Home';
import NewsDetails from './components/News/NewsDetail/NewsDetail'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/home" element={<Index />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/currencyconvertor" element={<Currencyconvertor />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/get-api" element={<Getapi />} />
        <Route path="/news-home" element={<Home />} />
        <Route path="/news/:newsID" element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
