import styles from "./Infrastructure.module.css";
import { Section, Container, Panel } from "../../shared/layout";

import InfrastructureImage from "../../assets/images/About-page/Infrastructure.png";
import BackgroundImage from "../../assets/images/About-page/backgroundImage.jpg";
import Button from "../../shared/ui/Button";

const Infrastructure = () => {
  return (
    <Section className={styles.InfrastructureSection}>
      <Container>
        <Panel>
          <div className={styles.Container}>
            <img
              src={BackgroundImage}
              className={styles.backgroundImage}
              alt=""
            />

            <div className={styles.overlay}></div>

            <div className={styles.contentWrapper}>
              <div className={styles.leftContent}>
                <h1 className={styles.heading}>
                  Let’s Build India’s EV Infrastructure Together
                </h1>

                <p className={styles.Description}>
                  Best Hub transforms EV charging stations into vibrant
                  destinations by combining fast charging with retail, dining,
                  smart parking, digital services, and community spaces creating
                  value for businesses and convenience for EV users.
                </p>

                <div className={styles.heroButtons}>
                  <Button text="Contact Us Now" variant="primary" />
                  <Button text="Become a Partner" variant="secondary" />
                </div>
              </div>

              <div className={styles.rightContent}>
                <img
                  src={InfrastructureImage}
                  className={styles.infrastructureImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default Infrastructure;
