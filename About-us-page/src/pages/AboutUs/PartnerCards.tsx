import styles from "./PartnerCards.module.css";
import { Section, Container, Panel } from "../../shared/layout";

import imageCard1 from "../../assets/images/About-page/img1.png";
import imageCard2 from "../../assets/images/About-page/img2.png";
import imageCard3 from "../../assets/images/About-page/img3.png";
import imageCard4 from "../../assets/images/About-page/img4.png";

const PartnerCards = () => {
  return (
    <Section>
      <Container>
        <Panel>
          <div className={styles.partnerHeader}>
            <h2 className={styles.title}>Partners</h2>

            <p className={styles.heading}>Productive Charger Partners</p>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <img
                src={imageCard1}
                alt="JioThings"
                className={styles.cardImage}
              />
            </div>

            <div className={styles.card}>
              <img
                src={imageCard2}
                alt="Schneider Electric"
                className={styles.cardImage}
              />
            </div>

            <div className={styles.card}>
              <img
                src={imageCard3}
                alt="TruePower"
                className={styles.cardImage}
              />
            </div>

            <div className={styles.card}>
              <img src={imageCard4} alt="LECS" className={styles.cardImage} />
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default PartnerCards;
