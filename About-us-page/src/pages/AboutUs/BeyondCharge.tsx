import styles from "./BeyondCharge.module.css";
import BeyondImage from "../../assets/images/About-page/beyond charge (2).png";
import { Container, Panel } from "../../shared/layout";
import Button from "../../shared/ui/Button";

const BeyondCharge = () => {
  return (
    <section className={styles.beyondSection}>
      <Container>
        <Panel>
          <div className={styles.content}>
            <p className={styles.eyebrow}>BEYOND CHARGING</p>

            <h2>
              Beyond Charging
              <br />
              Building Destinations.
            </h2>

            <p className={styles.description}>
              Best Hub transforms EV charging stations into vibrant destinations
              by combining fast charging with retail, dining, smart parking,
              digital services, and community spaces creating value for
              businesses and convenience for EV users.
            </p>

            <Button text="Explore Best Hub" variant="primary" />
          </div>

          <div className={styles.imageWrapper}>
            <img
              src={BeyondImage}
              alt="Best Charge EV charging station"
              className={styles.beyondImage}
            />
          </div>
        </Panel>
      </Container>
    </section>
  );
};

export default BeyondCharge;
