import './App.css';
import LandingPage from './components/LandingPage';
import SignupFlow from "./components/SignupFlow";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
     
    </div>
   
    <Routes> 
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupFlow />} />
    </Routes>

    </>
  )
}

export default App
