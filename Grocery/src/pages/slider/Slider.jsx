import React, { useState } from 'react';
import './Slider.css';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import i1 from '../../img/nuts/c2.webp';
import i2 from '../../img/nuts/c3.webp';
import i3 from '../../img/nuts/c4.webp';
import i4 from '../../img/nuts/c5.webp';
import i5 from '../../img/nuts/i2.webp';
import i6 from '../../img/nuts/i5.webp';
import i7 from '../../img/veg/onion.webp';
import i8 from '../../img/fruits/pappaya.webp';
import i9 from '../../img/veg/capsicum.webp';
import i10 from '../../img/veg/potato.webp';
import i11 from '../../img/fruits/pomegranate.webp';
import i12 from '../../img/nuts/almond.webp';
import i13 from '../../img/sweets/laddu.jpg';
import i14 from '../../img/sweets/palkova.jpg';
import i15 from '../../img/sweets/soan appudi.jpg';

const Slider = () => {
  const images = [
    { id: 1, Title: 'Munch', image: i1, price: '$10' },
    { id: 2, Title: 'KinderJoy', image: i2, price: '$15' },
    { id: 3, Title: 'Chocolates', image: i3, price: '$8' },
    { id: 4, Title: 'Kisses', image: i4, price: '$12' },
    { id: 5, Title: 'Mixture', image: i5, price: '$9' },
    { id: 6, Title: 'Dark fantastic', image: i6, price: '$6' },
    { id: 7, Title: 'Onion', image: i7, price: '$2' },
    { id: 8, Title: 'Papaya', image: i8, price: '$5' },
    { id: 9, Title: 'Capsicum', image: i9, price: '$3' },
    { id: 10, Title: 'Potato', image: i10, price: '$4' },
    { id: 11, Title: 'Pomegranate', image: i11, price: '$7' },
    { id: 12, Title: 'Almond', image: i12, price: '$14' },
    { id: 13, Title: 'Laddu', image: i13, price: '$11' },
    { id: 14, Title: 'Palkova', image: i14, price: '$13' },
    { id: 15, Title: 'Soan Pappudi', image: i15, price: '$16' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider-container">
        <h2>Top products</h2>
      <div className="slider-navigation">
        <button className="prev-button" onClick={prevSlide}>
          <FaChevronLeft size={24} color="white" />
        </button>
        <button className="next-button" onClick={nextSlide}>
          <FaChevronRight size={24} color="white" />
        </button>
      </div>
      <div className="slider">
      
        <div className="slider-images">
          {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
            <div key={index} className="slider-image-container">
              <Link
                to="/singleproduct"
                state={{ image: image.image, Title: image.Title, price: image.price }}
                className="slider-image-link"
              >
                <img
                  src={image.image}
                  // alt={Slider ${image.id}}
                  className="slider-image"
                />
                <p>{image.Title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;