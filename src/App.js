import './App.css';
import Landing from './components/LandingPage/LandingPage';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
