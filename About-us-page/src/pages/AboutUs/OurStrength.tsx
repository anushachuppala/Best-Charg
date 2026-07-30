import styles from "./OurStrength.module.css";
import strengthImage from "../../assets/images/About-page/OurStrength.png";
import { Container, Panel, Section } from "../../shared/layout";
import iterationIcon from "../../assets/images/About-page/Iteration.png";
import technologyIcon from "../../assets/images/About-page/nanotechnology.png";
import arrowIcon from "../../assets/images/About-page/arrow.png";

const OurStrength = () => {
  return (
    <Section className={styles.strengthSection}>
      <Container>
        <Panel>
          <div className={styles.strengthContainer}>
            {/* Section Heading */}
            <div className={styles.headingWrapper}>
              <p className={styles.smallHeading}>OUR STRENGTH</p>

              <h2 className={styles.heading}>
                Why Leading Organizations Choose Best Infra
              </h2>
            </div>

            {/* Main Card */}
            <div className={styles.strengthCard}>
              {/* Left Arrow */}
              {/* <button className={`${styles.arrow} ${styles.leftArrow}`}>
                ‹
              </button> */}

              {/* Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={strengthImage}
                  alt="Electric vehicle charging infrastructure"
                  className={styles.strengthImage}
                />
              </div>

              {/* Content */}
              <div className={styles.contentWrapper}>
                <div className={styles.iconCircle}></div>

                <h3 className={`16-primary ${styles.text}`}>
                  End-to-End EV Infrastructure
                </h3>

                <p className={styles.description}>
                  From charger manufacturing and installation to software,
                  commissioning, maintenance, and energy integration, we deliver
                  complete EV ecosystems.
                </p>

                {/* Features */}
                <div className={styles.features}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>
                      <img src={iterationIcon} alt="Execution" />
                    </span>
                    <span>End-to-End Execution</span>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>
                      <img src={technologyIcon} alt="Technology" />
                    </span>
                    <span>Integrated Technology</span>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>
                      <img src={arrowIcon} alt="Scale" />
                    </span>
                    <span>Built to Scale</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            {/* <button className={`${styles.arrow} ${styles.rightArrow}`}>
              ›
            </button> */}

            {/* Slider Dots */}
            <div className={styles.dots}>
              <span className={`${styles.dot} ${styles.activeDot}`}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default OurStrength;
