import './App.css';
import Announcement from './components/pages/Home/Announcement';
import Nav from './components/pages/Home/Nav';
import Banner from './components/pages/Home/Banner';
import {Heading1, Heading2} from './components/pages/Home/Heading';
import CarouselCard from './components/Carousel/CarouselCard';
import ImageDesign from './components/pages/Home/ImageDesign';
import PictureCard from './components/Carousel/PictureCard';
import DestinationCarousel from './components/Carousel/DestinationCarousel';
import Experience from './components/Carousel/Experience';
import SupportCarousel from './components/Carousel/SupportSection';
import HostCarousel from './components/Carousel/HostCarousel';
import Footer from './components/pages/Home/Footer';

function Home() {
  return (
    <div className="App">
      <Announcement />
      <Nav/>
      <Banner />
      <div className="app-content">
        <Heading1 text="The world’s largest car sharing marketplace"/>
        {/* <div className="flex">
          <div className="carousel-container"><CarouselCard /></div>
        </div> */}
        <div className="flex">
          <div className="carousel-container"><PictureCard /></div>
        </div>
        <div className="flex"><div className="carousel-container"><DestinationCarousel /></div></div>
        <Heading2 text="Fuel your daydreams" 
          description="Stoke your wanderlust with some dreamy photo chronicles of road trip adventures."
          button="Explore Travelogues" />
        <ImageDesign />  
        <div className="flex">
          <div className="carousel-container"><Experience /></div>
        </div>
        <Heading2 text="Meet the Hosts" />
        <div className="flex">
          <div className="carousel-container"><HostCarousel /></div>
        </div>
        <SupportCarousel />
        <div className="flex"><Footer /></div>
      </div>
    </div>
  );
}

export default Home;
