import heroImage from "../../assets/images/About-page/hero-section.png";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section>
      <div className="hero-img">
        <img src={heroImage} alt="Hero Section" />
      </div>
    </section>
  );
}

export default HeroSection;
