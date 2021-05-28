import './App.css';
import Announcement from './components/Announcement';
import Nav from './components/Nav';
import Banner from './components/Banner';
import {Heading1, Heading2} from './components/Heading';
import CarouselCard from './components/Carousel/CarouselCard';
import ImageDesign from './components/ImageDesign';
import PictureCard from './components/Carousel/PictureCard';
import DestinationCarousel from './components/Carousel/DestinationCarousel';

function App() {
  return (
    <div className="App">
      <Announcement />
      <Nav/>
      <Banner />
      <div className="app-content">
        <Heading1 text="The world’s largest car sharing marketplace"/>
        <CarouselCard />
        <h2>Browse by make</h2>
        <div className="carousel"><PictureCard /></div>
        <h2>Browse by destination</h2>
        <div className="carousel"><DestinationCarousel /></div>
        <Heading2 text="Fuel your daydreams" 
          description="Stoke your wanderlust with some dreamy photo chronicles of road trip adventures."
          button="Explore Travelogues" />
        <ImageDesign />  
      </div>
    </div>
  );
}

export default App;
