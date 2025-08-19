import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import Navbar from './compontes/Navbar';
import SidebarContact from './compontes/SideBar';
import ChatWidget from './compontes/Chatwidget';
import BespokeShirts from './compontes/Bespoke/BespokeShirts';


function App() {
  return (
    <Router>
      <div className="App font-reddit">
        <Navbar/>
        <SidebarContact/>
        <ChatWidget/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/bespoke/shirts" element={<BespokeShirts/>} />
          {/* Add more routes as needed */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
