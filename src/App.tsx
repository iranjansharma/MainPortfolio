import { FC, useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Loader from './components/Loader/Loader';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const App: FC = () => {
  const currentRef = useRef(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentRef.current === false) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2500);

      return () => {
        currentRef.current = true;
      };
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
