import './App.css';
import Announcement from './components/Announcement';
import Nav from './components/Nav';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Announcement />
      <Nav/>
      <Banner />
    </div>
  );
}

export default App;
