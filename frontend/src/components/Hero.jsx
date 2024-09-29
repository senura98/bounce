const Hero = () => (
    <section className="flex flex-col items-start p-10 text-light bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}>
      <h1 className="text-6xl font-bold">ORBIT THE EARTH</h1>
      <p className="mt-4 text-lg">
        Reporting from the NASA page, a satellite is an object that orbits or surrounds another object in space...
      </p>
      <button className="mt-6 bg-primary text-dark font-semibold py-2 px-6 rounded hover:bg-accent">
        Get Started
      </button>
    </section>
  );
  
  export default Hero;