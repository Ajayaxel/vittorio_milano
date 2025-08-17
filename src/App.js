
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './compontes/Navbar';
import SidebarContact from './compontes/SideBar';
import ChatWidget from './compontes/Chatwidget';
function App() {
  return (
    <div className="App font-reddit ">
      <Navbar/>
      <SidebarContact/>
      <ChatWidget/>
<HomePage/>
    </div>
  );
}

export default App;
