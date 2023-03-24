import './App.css';
import Home from './Home'
import Navbar from './Navbar';
import SignIn from './SignIn';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<SignIn user={user} setUser={setUser}/>} />
    </Routes>
    </div>
  );
}

export default App;
