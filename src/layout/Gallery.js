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
            <p className="gallery__label">Nuestra galeria</p>
            <h2 className="gallery__title">Imagenes memorables de nuestros viajes del sueño</h2>
            <p className="gallery__description">
                Lo más importante para nosotros es su satisfacción con nuestros servicios y experiencias de viaje.
                En esta sección podra ver algunos de los momentos inolvidables capturadas por viajeros que han viajado con Royagash.
            </p>
            <div className="gallery__grid">
                {imageOrder.map((img, index) => (
                    <img key={index} src={img} alt={`img${index}`} className={`img img-${index + 1}`} />
                ))}
            </div>
        </section>
    );
}
