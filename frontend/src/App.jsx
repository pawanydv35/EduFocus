import './App.css';
import Footer from './components/Footer';
import LandingPage from './components/Landingpage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className="App">
      <Navbar />
      <LandingPage/>
      <Footer/>
    </div>
    </>
  )
}

export default App
