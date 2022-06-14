import { useEffect, useState, useRef, Fragment } from 'react';
import './App.css';
import Header from './Components/Header'
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import Growth from './Components/Growth';
import Steps from './Components/Steps';
import Testimotials from './Components/Testimonials';
import Questions from './Components/Questions';
import Pricing from './Components/Pricing';
import Blog from './Components/Blog';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import useLocoScroll from './Components/Hooks/useLocoScroll';
import Login from './Components/Login';
import {Routes, Route} from 'react-router-dom';
import Reviews from './Components/Reviews/Reviews';
import Error from './Components/error';





function App() {

  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  const [timer,setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  }
  useEffect(() => {

  })
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1);
    },1000)
  },[]);

  useEffect(() => {
    if (timer === -1) {
      clear();
    }
  }, [timer]);

  return (
      <Routes>
      <Route path="/" element={
        <Fragment>
        <Header />
        <Hero />
        <Feature />
        <Growth />
        <Steps />
        <Testimotials />
        <Questions />
        <Pricing />
        <Blog />
        <Newsletter />
        <Footer />
        </Fragment>
      }/>
      <Route element={<Login />} path = "/login"/>
      <Route element={<Reviews />} path = "/reviews"/>
      <Route element={<Error />} path = "/error"/>
      <Route path="../src/Games/flappy/index.html" />
      </Routes>
      // <Reviews />
  );
}

export default App;
