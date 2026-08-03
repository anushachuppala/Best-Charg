import styles from "./FounderMsg.module.css";
import { Section, Container, Panel } from "../../shared/layout";

import icon from "../../assets/images/About-page/icon.png";
import mainImage from "../../assets/images/About-page/mainImage.png";

const FounderMsg = () => {
  return (
    <Section className={styles.FounderSection}>
      <Container>
        <Panel>
          <div className={styles.mainContainer}>
            {/* Founder Image */}
            <div className={styles.imageWrapper}>
              <img
                src={mainImage}
                alt="Founder"
                className={styles.founderImage}
              />
            </div>

            <div className={styles.messageContent}>
              <div className={styles.quoteIcon}>
                <img src={icon} />
              </div>

              <p className={styles.smallHeading}>Founder Message</p>

              <h2 className={styles.description}>
                At BestCharg, our vision is simple to create a reliable and
                sustainable EV charging ecosystem that empowers lives and builds
                a cleaner tomorrow. We are committed to innovation, quality, and
                customer satisfaction, driving every solution we build.
              </h2>

              <div className={styles.founderInfo}>
                <h3 className={styles.founderName}>Surekha Chitti</h3>

                <p className={styles.designation}>Founder & CEO, Best Charg</p>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default FounderMsg;
