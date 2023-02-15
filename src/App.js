import {createContext} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./context/auth";
import Adcreate from "./components/Adcreate";
export const UserContext = createContext();

export default function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-ad" element={<Adcreate />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}