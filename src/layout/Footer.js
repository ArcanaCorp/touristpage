import React, { useState } from 'react';
import './styles/footer.css';
import {
  FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn,
  FaCcVisa, FaCcMastercard, FaCcPaypal, FaBitcoin, FaWhatsapp
} from 'react-icons/fa';
import { SiTiktok } from "react-icons/si";
import logo from '../assets/img/logo.svg';

const Footer = () => {
  // Estado para el formulario de suscripción
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Estado para el tooltip de WhatsApp
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envío a una API
    setTimeout(() => {
      console.log('Email suscrito:', email);
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      
      // Resetear el estado después de 3 segundos
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1500);
  };

  // Redes sociales con datos estructurados
  const socialMedia = [
    { icon: <FaInstagram />, name: 'Instagram', url: '/' },
    { icon: <FaFacebookF />, name: 'Facebook', url: '/' },
    { icon: <FaYoutube />, name: 'YouTube', url: '/' },
    { icon: <FaLinkedinIn />, name: 'LinkedIn', url: '/' },
    { icon: <SiTiktok />, name: 'TikTok', url: '/' }
  ];

  // Enlaces rápidos organizados
  const quickLinks = {
    column1: [
      { text: 'Hogar', url: '/' },
      { text: 'Sobre nosotros', url: '/about' },
      { text: 'Servicios', url: '/services' }
    ],
    column2: [
      { text: 'Tours recomendados', url: '/tours' },
      { text: 'Blog', url: '/blog' },
      { text: 'Contáctanos', url: '/contact' }
    ]
  };

  // Métodos de pago
  const paymentMethods = [
    { icon: <FaCcVisa />, name: 'Visa' },
    { icon: <FaCcMastercard />, name: 'Mastercard' },
    { icon: <FaCcPaypal />, name: 'PayPal' },
    { icon: <FaBitcoin />, name: 'Bitcoin' }
  ];

  return (
    <footer className="royagasht-footer">
      <div className="footer-container">
        <div className="footer-header">
          <img src={logo} alt="Royagabht - Agencia de viajes" className="footer-logo" />
          <p className="footer-slogan">
            Royagabht, tu compañero de viaje para descubrir los destinos más bellos del mundo.
          </p>

          <div className="social-media">
            <h4>Síguenos</h4>
            <div className="social-icons">
              {socialMedia.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  aria-label={social.name}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="footer-content">
          {/* Sección de contacto */}
          <div className="contact-section">
            <h3 className="section-title">Tours más populares</h3>
            <div className="contact-info">
              <h4>Información de contacto</h4>
              <div className="contact-details">
                <p><a href="mailto:info@royagabht.com">info@royagabht.com</a></p>
                <p><a href="tel:02112345678">021-12345678</a></p>
                <address>Teherán, Vall Aer, Callejón Vás, No. 10</address>
              </div>
            </div>
          </div>

          {/* Sección de enlaces */}
          <div className="links-section">
            <h3 className="section-title">Enlaces importantes</h3>
            <div className="links-grid">
              <div className="links-column">
                {quickLinks.column1.map((link, index) => (
                  <a key={index} href={link.url} className="footer-link">
                    {link.text}
                  </a>
                ))}
              </div>
              <div className="links-column">
                {quickLinks.column2.map((link, index) => (
                  <a key={index} href={link.url} className="footer-link">
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="newsletter-section">
            <h3 className="section-title">Recibe nuestras ofertas</h3>
            {isSubscribed ? (
              <div className="subscription-success">
                ¡Gracias por suscribirte!
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="newsletter-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'PROCESANDO...' : 'SUSCRIBIRSE'}
                </button>
              </form>
            )}
            <div className="payment-methods">
              <h4>Métodos de pago</h4>
              <div className="payment-icons">
                {paymentMethods.map((method, index) => (
                  <span key={index} title={method.name}>
                    {method.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="security-badges">
            <img src="/ssl-secure.svg" alt="SSL Secure" />
            <img src="/travel-safe.svg" alt="Travel Safe Certified" />
          </div>
          <p>Todos los derechos reservados por Royagabht. Distribuido y desarrollado por Rubin.</p>
        </div>
      </div>
      <a 
        href="https://wa.me/123456789" 
        className="whatsapp-float"
        onMouseEnter={() => setShowWhatsappTooltip(true)}
        onMouseLeave={() => setShowWhatsappTooltip(false)}
        aria-label="Chat en WhatsApp"
      >
        <FaWhatsapp size={24} />
        <span>Chat con nosotros</span>
        {showWhatsappTooltip && (
          <span className="whatsapp-tooltip">
            ¿Necesitas ayuda? Escríbenos
          </span>
        )}
      </a>
    </footer>
  );
};

export default Footer;