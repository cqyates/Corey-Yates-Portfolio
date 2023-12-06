import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import reactImageFinderPicture from "../../images/screenshots/react-image-finder.png";
import Button from "react-bootstrap/Button";
import "./style.css"
function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const projects = [
    {
      id: 1,
      title: "React Image Finder",
      description: "A react front end application with images pulled from the unsplash api",
      tech: ["React", "RESTful APIs"],
      website_url: "https://cqyates.github.io/react-image-finder/",
      github_url: "https://github.com/cqyates/react-image-finder",
      imgSrc: reactImageFinderPicture
    },
    {
      id: 2,
      title: "Vintage4me2.com",
      description: "My long standing shopify webstore for my vintage sewing pattern ecommerce business.  Fully Integrated with Facebook, Pinterest, Google and Klaviyo Email CMS",
      tech: ["Shopify", "Adobe Photoshop", "APIs", "Klaviyo"],
      website_url: ""
    }
  ]
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
      {projects.map(({title, id, description, tech, website_url, github_url, imgSrc})=> (
        <Carousel.Item title={title} key={id} imgSrc={imgSrc} description={description} tech={tech} website_url={website_url} github_url={github_url}>
          <img src={imgSrc}></img>
          <Carousel.Caption style={{backgroundColor: "white"}}>
          <h3>{title}</h3>
          <p>{description}</p>
          <Button className="carousel-button" variant="dark" target="_blank" href={github_url}>Github Repository</Button>
          <Button className="carousel-button" variant="dark" target="_blank" href={website_url}>Live Website</Button>
        </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;