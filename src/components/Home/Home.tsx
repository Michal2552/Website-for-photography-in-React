import React, { FC } from 'react';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const pictureList = [
    process.env.PUBLIC_URL + '/img/4ב.jpg',
    process.env.PUBLIC_URL + '/img/18.jpg',
    process.env.PUBLIC_URL + '/img/41.jpg'
  ];

  return (      <div className="carousel">

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {pictureList.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {pictureList.map((picture, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <Image src={picture} className="d-block w-100" alt={`Slide ${index + 1}`} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Slide {index + 1} label</h5>
              <p>Some representative placeholder content for the slide.</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>      </div>

  );
};

export default Home;
