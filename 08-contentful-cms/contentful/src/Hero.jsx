import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eveniet quaerat delectus, ea illum, iusto hic deserunt nihil eos
            quis laudantium assumenda quibusdam quam, cupiditate a maxime alias
            pariatur.
          </p>
        </div>
        <div className="img-container">
          <img
            src={heroImg}
            alt="person interacting with abstract web browser"
            className="img"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
