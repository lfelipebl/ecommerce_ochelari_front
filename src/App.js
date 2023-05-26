import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Store from "./pages/Store.js";
import Newin from './pages/Newin.js';
import Wishlist from './pages/Wishlist.js';
import Login from './pages/Login.js';
import ForgotPassword from './pages/ForgotPassword.js';
import Signup from './pages/Signup.js';
import SingleNewin from './pages/SingleNewin';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="store" element={<Store />}/>
          <Route path="new-in" element={<Newin />}/>
          <Route path="new-in/:id" element={<SingleNewin />}/>
          <Route path="wishlist" element={<Wishlist />}/>
          <Route path="login" element={<Login />}/>
          <Route path="forgotpassword" element={<ForgotPassword />}/>
          <Route path="signup" element={<Signup />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
