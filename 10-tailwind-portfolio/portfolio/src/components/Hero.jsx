import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I&apos;m Jordan</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Fullstack Web Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="social-icon" />
            </a>
            <a href="#">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="#">
              <FaTwitterSquare className="social-icon" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img
            src={heroImg}
            className="h-80 lg:h-96"
            alt="Two people discussing a mobile app design"
          />
        </article>
      </div>
    </div>
  );
};
export default Hero;
