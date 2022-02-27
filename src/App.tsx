import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Home } from './components/home/Home';
import { Navbar } from './components/nav/Navbar';
import { Projects } from './components/projects/Projects';
import { Resume } from './components/resume/Resume';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
