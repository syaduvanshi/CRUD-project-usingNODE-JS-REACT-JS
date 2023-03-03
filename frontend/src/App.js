import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home.js';
import AddEdit from './Pages/AddEdit.js';
import View from './Pages/View.js';
import About from './Pages/About.js';
import Header from './Components/Header';

function App() {
  return (
  
    <BrowserRouter>
    <div className="App">
      <Header />
      <ToastContainer position='top-center'></ToastContainer>  
        <Routes>
          <Route exact path='/' element = {<Home />}></Route>
          <Route path='/addEdit' element = {<AddEdit />}></Route>
          <Route path='/update/:id' element = {<AddEdit />}></Route>
          <Route path='/view/:id' element = {<View />}></Route>
          <Route path='/about' element = {<About />}></Route>
        </Routes>  
      </div>
    </BrowserRouter>
  
    
  );
}

export default App;
