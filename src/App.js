import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/userSlice';

import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';

function App() {

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  //user Check

  useEffect(() => {
    const user = store.user
    if(!user.value){
      const localStorageUser = localStorage.getItem("spotify-front-end-access_token")
      if(localStorageUser){
        dispatch(addUser(localStorageUser));
      }
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
