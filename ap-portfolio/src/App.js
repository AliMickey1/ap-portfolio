import background from '../src/Assets/background.png'
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Layout from './Components/Layout';
import Resume from './Pages/Resume';


function App() {


  return (
      <div style={{backgroundImage:`url(${background})`}}className="App">
    <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />            
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="resume" element={<Resume />} />
          </Route>

    </Routes>
    </div>
  );
}

export default App;
