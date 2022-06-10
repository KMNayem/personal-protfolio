import './App.css';
import Header from '../src/component/Header/Header';
import Nav from './component/Nav/Nav';
import About from './component/About/About';
import Projects from './component/Project/Projects';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div >
       <Nav></Nav>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
