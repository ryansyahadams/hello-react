// Import Libraries
import React from 'react';
import Header from './header';
import Footer from './footer';
import './App.css';
import List from './list';
import Top from './Top';
import Main from './Main';

// Create component
function App(){
  return (
    <div>
    <h1>Hello React</h1>
    <Header list='5 daftar makanan terganteng menurut gwa, letsgoo, nomer lima paling ganteng😊'/>
    <Top />
    <List /> 
    <Footer />
    </div>
  );
}

// Export Default
export default App;
