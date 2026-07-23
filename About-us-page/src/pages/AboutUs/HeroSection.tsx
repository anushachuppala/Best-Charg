import heroImage from "../../assets/images/About-page/hero-section.png";
import styles from "./HeroSection.module.css";
import NavBar from "../../widgets/NavBar";

function HeroSection() {
  return (
    <section className={styles.herosection}>
      <img
        src={heroImage}
        alt="EV Charging Infrastructure"
        className={styles.heroimage}
      />

      <div className={styles.herooverlay}></div>

      <div className={styles.herocontent}>
        <p className={styles.smallheading}>ABOUT BEST CHARG</p>

        <h1>
          Engineering the Future
          <br />
          of <span>EV Charging</span>
          <br />
          Infrastructure
        </h1>

        <p className={styles.herodescription}>
          Best Charg delivers intelligent EV charging infrastructure,
          enterprise-grade software, and integrated mobility ecosystems —
          helping businesses, governments, and communities transition
          confidently toward cleaner transportation.
        </p>

        <div className={styles.herobuttons}>
          <button className={styles.explorebtn}>Explore Solutions</button>

          <button className={styles.expertsbtn}>Talk to Our Experts</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
