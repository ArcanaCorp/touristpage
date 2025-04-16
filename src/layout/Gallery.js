import React, { useEffect, useState } from 'react';
import './styles/Gallery.css';

import img1 from '../assets/img/img.jpg';
import img2 from '../assets/img/img2.jpg';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';
import img6 from '../assets/img/img6.avif';
import img7 from '../assets/img/img7.jpg';
import img8 from '../assets/img/img1.jpg';

const images = [img1, img2, img4, img5, img6, img7, img8];

export default function Gallery() {
    const [imageOrder, setImageOrder] = useState([img1, img2, img4, img5, img6, img7, img8]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageOrder((prevOrder) => {
                const newOrder = [...prevOrder];
                const firstImage = newOrder.shift(); 
                newOrder.push(firstImage); 
                return newOrder;
            });
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="gallery">
            <p className="gallery__label">Our Gallery</p>
            <h2 className="gallery__title">Memorable Images From Dreamy Journeys</h2>
            <p className="gallery__description">
                What matters most to us is your satisfaction with our services and travel experiences.
                In this section, you can view some of the beautiful moments captured by travelers who
                have journeyed with Royagash.
            </p>
            <div className="gallery__grid">
                {imageOrder.map((img, index) => (
                    <img key={index} src={img} alt={`img${index}`} className={`img img-${index + 1}`} />
                ))}
            </div>
        </section>
    );
}
