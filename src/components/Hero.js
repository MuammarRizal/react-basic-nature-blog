import Carousel from "react-bootstrap/Carousel";
import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={hero1} alt="Foto satu" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={hero2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
