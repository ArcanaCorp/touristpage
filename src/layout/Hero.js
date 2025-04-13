import React from 'react'
import './styles/hero.css';
import img from '../assets/img/chica-equipaje.png';
import img2 from '../assets/img/yau.webp';
import img3 from '../assets/img/laguna-de-paca.jpg';
import img4 from '../assets/img/AEREA_01.jpg';
import mundoimg from '../assets/img/xd3.png';
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="hero">
                <img src={mundoimg} alt="mapa del mundo" className="fondo" />
    
                <section className="__hero">
                    <div className="__hero_content">
                        <h1 className="_hero_h1">
                            Escápate De Lo <span>Ordinario</span>, Explora Lo <span>Extraordinario</span>!
                        </h1>
                        <p className="hero_p">
                            Descubre la belleza de Jauja y sus alrededores con nuestros tours personalizados. Desde paisajes impresionantes
                            hasta experiencias culturales únicas, tenemos algo para todos los gustos.
                        </p>
                        <div className="_center">
                            <div className="search-container">
                                <input type="text" placeholder="Buscar destino..." className="search-input" />
                                <button className="search-button">Buscar</button>
                            </div>
                        </div>
                    </div>
    
                    <div className="__hero_img">
                        <div className="img-container vertical-img img_1_container">
                            <img src={img2} alt="Ciudad de Juaja" className="img_1" />
                            <div className="text-overlay3">Ciudad de Juaja</div>
                            <FiArrowUpRight className="icon1" />
                        </div>
    
                        <div className="img-container full-width">
                            <img src={img} alt="Viajera con equipaje" className="img" />
                        </div>
    
                        <div>
                            <div className="img-container">
                                <img src={img3} alt="Laguna de Paca" className="img_3" />
                                <div className="text-overlay">Laguna de Paca</div>
                                <FiArrowUpRight className="icon2" />
                            </div>
    
                            <div className="img-container">
                                <img src={img4} alt="Vista aérea de Jauja" className="img_4" />
                                <div className="text-overlay2">Vista Aérea de Jauja</div>
                                <FiArrowUpRight className="icon3" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
  )
}
