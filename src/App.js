import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Contestants from './pages/Contestants';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contestants' element={<Contestants />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
       </Routes>
       <Home />
       <Footer />
     </Router>
    </div>
  );
}

export default App;
