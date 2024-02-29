import React from 'react'
import Homo from "./Components/Homo.jsx";
import {BrowserRouter,Route,  Routes  } from "react-router-dom";
import CreateUser from './Components/CreateUser.jsx';
import User from './Components/User.jsx';
import Update from './Components/Update.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Homo/>
      <Routes>
        <Route path="/" element={<CreateUser/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path='/update/:id' element={ <Update/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
  }
