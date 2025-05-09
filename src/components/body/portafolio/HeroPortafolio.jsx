import Typewriter from 'typewriter-effect';
import './HeroPortafolio.css'; // crea el archivo si no lo tenés

const HeroPortafolio = () => {
  return (
    <section className="hero-portafolio position-relative">
      <div className="overlay"></div>
      <div className="content position-relative z-1">
        <h1>
          <Typewriter
            options={{
              strings: ['Mis proyectos', 'Lo que puedo crear para vos', 'Explora mi trabajo'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>
          Descubre los proyectos en los que he trabajado y cómo puedo ayudarte a crear algo increíble.
        </p>
      </div>
    </section>
  );
};


export default HeroPortafolio;
