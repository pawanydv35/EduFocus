import './App.css';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import SignupFlow from "./components/SignupFlow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
      <Navbar />
      <LandingPage/>
      <Footer/>
    </div>
   
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupFlow />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
