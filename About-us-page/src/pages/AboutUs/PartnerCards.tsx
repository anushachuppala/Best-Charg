import styles from "./PartnerCards.module.css";
import { Section, Container, Panel } from "../../shared/layout";

import imageCard1 from "../../assets/images/About-page/img1.png";
import imageCard2 from "../../assets/images/About-page/img2.png";
import imageCard3 from "../../assets/images/About-page/img3.png";
import imageCard4 from "../../assets/images/About-page/img4.png";

const CardImages = [
  {
    id: 1,
    // title: "card 1",
    image: imageCard1,
  },
  {
    id: 2,
    // title: "card 2",
    image: imageCard2,
  },
  {
    id: 3,
    // title: "card 3",
    image: imageCard3,
  },
  {
    id: 4,
    // title: "card 4",
    image: imageCard4,
  },
];

const PartnerCards = () => {
  return (
    <Section>
      <Container>
        <Panel>
          <div className={styles.PartnerHeader}>
            <header>
              <h2 className={styles.title}>Partners</h2>

              <p className={styles.heading}>Productive Charger Partners </p>
            </header>

            <div className={styles.ImageContainer}>
              <div className={styles.ImageWrapper}>
                {CardImages.map((card) => (
                  <div key={card.id} className={styles.card}>
                    <img src={card.image} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default PartnerCards;
