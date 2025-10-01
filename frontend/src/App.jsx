import './App.css';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupFlow from "./components/SignupFlow";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
     
    </div>
   
    <Routes> 
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
    </Routes>

    </>
  )
}

export default App
