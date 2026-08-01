import styles from "./PartnerCards.module.css";
import { Section, Container } from "../../shared/layout";
import { useState } from "react";

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
  {
    id: 5,
    // title: "card 4",
    image: imageCard4,
  },
];

const PartnerCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardPerView = 4;
  const visibleCards = [];

  for (let i = 0; i < cardPerView; i++) {
    visibleCards.push(CardImages[(currentIndex + i) % CardImages.length]);
  }

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % CardImages.length); //swiper go backs to the beginning
  };

  const previousSlide = () => {
    setCurrentIndex((currentIndex - 1 + CardImages.length) % CardImages.length);
  };

  return (
    <Section>
      <Container>
        <div className={styles.PartnerHeader}>
          <header>
            <h2 className={styles.title}>Partners</h2>

            <p className={styles.heading}>Productive Charger Partners </p>
          </header>

          <div className={styles.carousel}>
            <button
              className={`${styles.arrow} ${styles.leftArrow}`}
              onClick={previousSlide}
            >
              {"<"}
            </button>

            <div className={styles.ImageContainer}>
              <div className={styles.ImageWrapper}>
                {visibleCards.map((card) => (
                  <div key={card.id} className={styles.card}>
                    <img src={card.image} />
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`${styles.arrow} ${styles.rightArrow}`}
              onClick={nextSlide}
            >
              {">"}
            </button>
          </div>

          <div className={styles.dots}>
            {CardImages.map((card) => (
              <button key={card.id}></button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PartnerCards;
