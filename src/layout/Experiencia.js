import React from 'react';
import './styles/experiencia.css';
import experiencia1 from '../assets/img/istanbul.jpg';
import experiencia2 from '../assets/img/armenia.jpg';
import experiencia3 from '../assets/img/singapore.jpg';
import avion from '../assets/img/avion.png';


const experiencias = [
  {
    id: 1,
    title: 'Aventura en los Andes',
    description: 'Explora la majestuosidad de los Andes en una experiencia llena de naturaleza, cultura y tradición.',
    image: experiencia1,
    place: 'Istanbul'
  },
  {
    id: 2,
    title: 'Sabores de la Sierra',
    description: 'Disfruta de una experiencia gastronómica única con los platos típicos de Jauja y sus alrededores.',
    image: experiencia2,
    place: 'Armenia'
  },
  {
    id: 3,
    title: 'Conexión Ancestral',
    description: 'Sumérgete en rituales y costumbres ancestrales que conectan cuerpo, mente y espíritu.',
    image: experiencia3,
    place: 'Singapore'
  }
];

export default function Experiencia() {
  return (
    <section className="experiencia-section">
      {/* Primera sección */}
      <img src={avion} alt="Avión" className="avion-img" />
      <div className="experiencia-header">
        <h4>Vívelo con nosotros</h4>
        <h1>Una experiencia única en Jauja</h1>
        <p>Descubre momentos inolvidables diseñados para conectarte con la esencia de la tierra y su gente.</p>
      </div>
      <div className="experiencia-grid">
        {experiencias.map((exp) => (
          <div className="experiencia-card" key={exp.id}>
            <div className="experiencia-img-container">
              <img src={exp.image} alt={exp.title} loading="lazy" />
            </div>
            <div className="experiencia-content">
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Segunda sección: galería con nombres encima pegados abajo */}
      <div className="experiencia-subgaleria">
        {experiencias.map((exp) => (
          <div className="subgaleria-item" key={`galeria-${exp.id}`}>
            <div className="subgaleria-img-container">
              <img src={exp.image} alt={exp.place} />
              <div className="img-label">{exp.place}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
