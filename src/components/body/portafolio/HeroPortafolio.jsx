import Typewriter from 'typewriter-effect';

const HeroPortafolio = () => {
  return (
    <section className="hero-portafolio text-center py-5">
      <h1 className="display-4">
        <Typewriter
          options={{
            strings: ['Mis Proyectos', 'Lo Que Puedo Crear Para Ti', 'Explora Mi Trabajo'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="lead">Descubre los proyectos en los que he trabajado y cómo puedo ayudarte a crear algo increíble.</p>
    </section>
  );
};

export default HeroPortafolio;
