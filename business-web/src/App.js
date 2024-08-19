// App.js
import './App.scss';
import React,{useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./comps/Header";
import Home from "../src/pages/Home";
import SignUp from './pages/SignUp';
import UserContextProvider from './context/userContext';

function App() {

  const localTheme = localStorage.getItem("Theme") || "light"
  const [darkMode, setDarkMode] = useState(localTheme === "dark");
 
  const toggleTheme = ()=>{
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);

    localStorage.setItem("Theme" , newTheme);

    document.querySelector("body").setAttribute("data-theme",newTheme )
  }

  useEffect(()=>{
    document.querySelector("body").setAttribute("data-theme" ,localTheme )
  },[]);
  return (
    <div className="App">
      <UserContextProvider>

      <BrowserRouter>
        <Header darkMode={darkMode} toggleTheme={toggleTheme}  />
        <Routes>
          <Route path='/' element={<Home darkMode={darkMode}  />} />
          <Route path='/SignUp' element={<SignUp darkMode={darkMode}  />} />
        </Routes>
      </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
