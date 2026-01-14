import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState } from 'react'
import './App.css'
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
         </Routes>
      </BrowserRouter>
  );
}

export default App
