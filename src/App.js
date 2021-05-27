import './App.css';
import Announcement from './components/Announcement';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Announcement />
      <Nav/>
      <Banner />
      <div className="app-content">
        <Heading />
        {/* <p>next</p>
        <p>footer</p> */}
      </div>
    </div>
  );
}

export default App;
