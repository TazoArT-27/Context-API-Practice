import React, { useState, createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop','mobile','camera');
  return (
    <CategoryContext.Provider value={[category, setCategory]} className="">
       <Header/>
       <Home/>
       <Shipment/>
    </CategoryContext.Provider>
  );
}

export default App;
