import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import reactImageFinderPicture from "../../images/screenshots/image-finder-clip.png";
// import Vintage4me2Picture from "../../images/screenshots/vintage4me2.png";
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
      imgSrc: ""
    },
    {
      id: 2,
      title: "Vintage4me2.com",
      description: "My long standing shopify webstore for my vintage sewing pattern ecommerce business. Fully Integrated with Facebook, Pinterest, Google and Klaviyo Email CMS. Use collections and filters to create a side menu to quickly navigate through many different options. Source code is properietry",
      tech: ["Shopify", "Adobe Photoshop", "APIs", "Klaviyo"],
      website_url: "https://www.vintage4me2.com/",
      github_url: "https://www.vintage4me2.com/",
      imgSrc: ""
    }
  ]
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carousel-parent" data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
      {projects.map(({title, id, description, tech, website_url, github_url, imgSrc})=> (
        <Carousel.Item className="carousel-item" title={title} key={id} imgSrc={imgSrc} description={description} tech={tech} website_url={website_url} github_url={github_url}>
          <img className="carousel-image" src={imgSrc}></img>
          <Carousel.Caption id="caption-box">
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