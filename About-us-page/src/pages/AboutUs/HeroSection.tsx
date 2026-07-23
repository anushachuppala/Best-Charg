import heroImage from "../../assets/images/About-page/hero-section.png";
import styles from "./HeroSection.module.css";
import { Container } from "../../shared/layout/container";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <img
        src={heroImage}
        alt="EV Charging Infrastructure"
        className={styles.heroImage}
      />

      <div className={styles.heroOverlay}></div>

      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.smallHeading}>ABOUT BEST CHARG</p>

          <h1 className={styles.heroTitle}>
            Engineering the Future
            <br />
            of <span>EV Charging</span>
            <br />
            Infrastructure
          </h1>

          <p className={styles.heroDescription}>
            Best Charg delivers intelligent EV charging infrastructure,
            enterprise-grade software, and integrated mobility ecosystems —
            helping businesses, governments, and communities transition
            confidently toward cleaner transportation.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.exploreBtn}>Explore Solutions</button>

            <button className={styles.expertsBtn}>Talk to Our Experts</button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
