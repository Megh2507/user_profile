import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetail from './Components/UserDetail';
function App() {
  return (
    <div className>
  
      <Router>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/userdetails" element={<UserDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
