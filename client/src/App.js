import React, {useState, useEffect} from 'react'
import './App.css';
import Home from './Home'
import Navbar from './Navbar';
import SignIn from './SignIn';
import CurrentWorkout from './CurrentWorkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState("")
    

  useEffect(()=> {
    fetch('/me')
    .then(r => r.json())
    .then(data => {
      if(data.error) {
        setUser(null)
      } else {
      setUser(data)
      }
    } )
  }, [])


  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<SignIn user={user} setUser={setUser}/>} />
          <Route path="/currentworkout" element={<CurrentWorkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
