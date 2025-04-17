import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './styles/recommendedTours.css';
import esfahanImage from '../assets/img/asfahan.svg';
import shirazImage from '../assets/img/shiraz.jpeg';
import kishImage from '../assets/img/kish.jpg';
import istanbulImage from '../assets/img/istanbul.jpg';
import armeniaImage from '../assets/img/armenia.jpg';
import singaporeImage from '../assets/img/singapore.jpg';

const iranTours = [
  {
    id: 1,
    city: 'Esfahan',
    duration: '2 Days & 3 Nights',
    price: '48,000,000 IRR',
    image: esfahanImage,
    type: 'iran',
    description: 'Descubre la joya arquitectónica de Persia con sus mezquitas y puentes históricos'
  },
  {
    id: 2,
    city: 'Shiraz',
    duration: '2 Days & 3 Nights',
    price: '52,000,000 IRR',
    image: shirazImage,
    type: 'iran',
    description: 'Explora la cuna de la cultura persa y los jardines de poetas legendarios'
  },
  {
    id: 3,
    city: 'Kish',
    duration: '3 Days & 4 Nights',
    price: '75,000,000 IRR',
    image: kishImage,
    type: 'iran',
    description: 'Disfruta de la isla paradisíaca con sus playas y centros comerciales'
  },
];

const internationalTours = [
  {
    id: 4,
    city: 'Istanbul',
    duration: '5 Days & 6 Nights',
    price: '450,000,000 IRR',
    image: istanbulImage,
    type: 'international',
    description: 'Un viaje inolvidable al corazón de la historia y cultura turca',
    features: [
      '→ Viaje inolvidable',
      '→ Vuelo directo ida y vuelta',
      '→ Traslado aeropuerto + seguro de viaje'
    ]
  },
  {
    id: 5,
    city: 'Armenia',
    duration: '4 Days & 5 Nights',
    price: '180,000,000 IRR',
    image: armeniaImage,
    type: 'international',
    description: 'Descubre los antiguos monasterios y la rica historia del Cáucaso'
  },
  {
    id: 6,
    city: 'Singapore',
    duration: '6 Days & 7 Nights',
    price: '950,000,000 IRR',
    image: singaporeImage,
    type: 'international',
    description: 'Experimenta la fusión perfecta entre modernidad y tradición asiática'
  },
];

const tourCategories = [
  { id: 'all', name: 'All Tours' },
  { id: 'iran', name: 'Iran\'s Tours' },
  { id: 'economics', name: 'Economics Tours' },
  { id: 'luxury', name: 'Luxury Tours' },
  { id: 'adventure', name: 'Adventure Tours' },
  { id: 'special', name: 'Special Tours' },
  { id: 'international', name: 'International Tours' },
];

function RecommendTours() {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const filteredTours = () => {
    if (activeCategory === 'all') return [...iranTours, ...internationalTours];
    if (activeCategory === 'iran') return iranTours;
    if (activeCategory === 'international') return internationalTours;
    return [...iranTours, ...internationalTours].filter(tour => 
      activeCategory === 'luxury' ? tour.price > '100,000,000 IRR' : true
    );
  };

  const handleTourClick = (tourId) => {
    navigate(`/tour/${tourId}`);
  };

  const handleBookNow = (e, tourId) => {
    e.stopPropagation();
    navigate(`/booking/${tourId}`);
  };

  const tours = filteredTours();

  return (
    <div className="recommended-tours-container">
      <section className="recommended" id="destinos-imperdibles">
        <div className="recommended-header">
          <h4>Recommended Tours</h4>
          <h1>Destinations You Shouldn't Miss</h1>
          <div className="view-all-container">
            <p className="section-description">
              Discover our handpicked tours designed for unforgettable experiences! Whether you seek adventure, or cultural exploration, our tours offer the perfect getaway.
            </p>
            <a href="/tours" className="view-all-link">View All Tours →</a>
          </div>
        </div>

        <div className="category-filters">
          {tourCategories.map(category => (
            <button
              key={category.id}
              className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              aria-label={`Filter by ${category.name}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="tours-grid">
          {tours.slice(0, 3).map(tour => (
            <div 
              key={tour.id}
              className="tour-card top-row"
              onClick={() => handleTourClick(tour.id)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${tour.city} tour`}
            >
              <div className="image-container">
                <img 
                  src={tour.image} 
                  alt={`${tour.city} tour`} 
                  className="tour-image"
                  loading="lazy"
                />
                <div className="tour-overlay">
                  <span className="tour-duration">{tour.duration}</span>
                  <div className="tour-info">
                    <h3 className="tour-title">{tour.city}</h3>
                    <p className="tour-price">{tour.price}</p>
                    <p className="tour-description">{tour.description}</p>
                  </div>
                  <span className="details-link">Details ↗</span>
                </div>
              </div>
            </div>
          ))}
          {tours[3] && (
            <div 
              key={tours[3].id}
              className="tour-card middle-row"
              onClick={() => handleTourClick(tours[3].id)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${tours[3].city} tour`}
            >
              <div className="image-container">
                <img 
                  src={tours[3].image} 
                  alt={`${tours[3].city} tour`} 
                  className="tour-image"
                  loading="lazy"
                />
                <div className="tour-overlay">
                  {tours[3].features ? (
                    <>
                      <ul className="tour-features">
                        {tours[3].features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      <h2 className="tour-title">{tours[3].city} Tour</h2>
                      <p className="tour-description">{tours[3].description}</p>
                      <div className="price-booking">
                        <span className="tour-price">From {tours[3].price}</span>
                        <button 
                          className="booking-button"
                          onClick={(e) => handleBookNow(e, tours[3].id)}
                        >
                          📞 Book Now →
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="tour-title">{tours[3].city} Tour</h2>
                      <p className="tour-description">{tours[3].description}</p>
                      <div className="price-booking">
                        <span className="tour-price">From {tours[3].price}</span>
                        <button 
                          className="booking-button"
                          onClick={(e) => handleBookNow(e, tours[3].id)}
                        >
                          📞 Book Now →
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

        
          {tours[4] && (
            <div 
              key={tours[4].id}
              className="tour-card bottom-row"
              onClick={() => handleTourClick(tours[4].id)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${tours[4].city} tour`}
            >
              <div className="image-container">
                <img 
                  src={tours[4].image} 
                  alt={`${tours[4].city} tour`} 
                  className="tour-image"
                  loading="lazy"
                />
                <div className="tour-overlay">
                  <span className="tour-duration">{tours[4].duration}</span>
                  <div className="tour-info">
                    <h3 className="tour-title">{tours[4].city}</h3>
                    <p className="tour-price">{tours[4].price}</p>
                    <p className="tour-description">{tours[4].description}</p>
                  </div>
                  <span className="details-link">Details ↗</span>
                </div>
              </div>
            </div>
          )}

          {tours[5] && (
            <div 
              key={tours[5].id}
              className="tour-card bottom-row"
              onClick={() => handleTourClick(tours[5].id)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${tours[5].city} tour`}
            >
              <div className="image-container">
                <img 
                  src={tours[5].image} 
                  alt={`${tours[5].city} tour`} 
                  className="tour-image"
                  loading="lazy"
                />
                <div className="tour-overlay">
                  <span className="tour-duration">{tours[5].duration}</span>
                  <div className="tour-info">
                    <h3 className="tour-title">{tours[5].city}</h3>
                    <p className="tour-price">{tours[5].price}</p>
                    <p className="tour-description">{tours[5].description}</p>
                  </div>
                  <span className="details-link">Details ↗</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

RecommendTours.propTypes = {
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default RecommendTours;