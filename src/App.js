import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Calculator from './components/calculator/Calculator';
import Currencyconvertor from './components/currencycnvt/Currencyconvertor';
import Todo from './components/todos/Todos';
import Getapi from './components/api/Getapi';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/home" element={<Index />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/currencyconvertor" element={<Currencyconvertor />} />
        <Route exact path="/todo" element={<Todo />} />
        <Route exact path="/get-api" element={<Getapi />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
