import './App.css';
import Nav from './component/Nav/Nav';
import Header from '../src/component/Header/Header';
import About from './component/About/About';
import Projects from './component/Project/Projects';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

import { Route, Routes } from 'react-router';
import Blogs from './component/Blogs/Blogs';


function App() {
  return (
    <div >
       <Nav></Nav>
       <Header></Header>
        <About></About>
        <Projects></Projects>
        <Blogs></Blogs>
        <Contact></Contact>      
      <Footer></Footer>
    </div>
  );
}

export default App;
