import heroImage from "../../assets/images/About-page/hero-section.png";
import styles from "./HeroSection.module.css";
import { Container } from "../../shared/layout/container";
import Button from "../../shared/ui/Button";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <header>
        <img
          src={heroImage}
          alt="EV Charging Infrastructure"
          className={styles.heroImage}
        />
      </header>

      <div className={styles.heroOverlay}></div>

      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.smallHeading}>ABOUT BEST CHARG</p>

          <h1 className={`h1-white ${styles.heroTitle}`}>
            Engineering the Future
            <br />
            of <span>EV Charging</span>
            <br />
            Infrastructure
          </h1>

          <p className={`18-white ${styles.heroDescription}`}>
            Best Charg delivers intelligent EV charging infrastructure,
            enterprise-grade software, and integrated mobility ecosystems —
            helping businesses, governments, and communities transition
            confidently toward cleaner transportation.
          </p>

          <Button text="Explore Solutions" variant="primary" />
          <Button text="Talk to Our Experts" variant="secondary" />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
