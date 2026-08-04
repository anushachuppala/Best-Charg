import styles from "./PartnerCards.module.css";
import { Section, Container } from "../../shared/layout";
import { useState, useCallback } from "react";

import previousSlideIcon from "../../assets/images/About-page/PreviousSlide.png";
import nextSlideIcon from "../../assets/images/About-page/nextSlide.png";
import imageCard1 from "../../assets/images/About-page/img1.png";
import imageCard2 from "../../assets/images/About-page/img2.png";
import imageCard3 from "../../assets/images/About-page/img3.png";
import imageCard4 from "../../assets/images/About-page/img4.png";

const CardImages = [
  {
    id: 1,
    image: imageCard1,
  },
  {
    id: 2,
    image: imageCard2,
  },
  {
    id: 3,
    image: imageCard3,
  },
  {
    id: 4,
    image: imageCard4,
  },
  {
    id: 5,
    image: imageCard4,
  },
];

const PartnerCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = CardImages.length;

  const visibleCards = [
    CardImages[currentIndex % totalCards],
    CardImages[(currentIndex + 1) % totalCards],
    CardImages[(currentIndex + 2) % totalCards],
    CardImages[(currentIndex + 3) % totalCards],
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((previousIndex) => {
      return (previousIndex + 1) % totalCards;
    });
  }, [totalCards]);

  const previousSlide = useCallback(() => {
    setCurrentIndex((previousIndex) => {
      return (previousIndex - 1 + totalCards) % totalCards;
    });
  }, [totalCards]);

  return (
    <Section>
      <div className={styles.PartnerHeader}>
        <header>
          <h2 className={styles.title}>Partners</h2>

          <p className={styles.heading}>Productive Charger Partners</p>
        </header>

        <div className={styles.carousel}>
          <img
            src={previousSlideIcon}
            className={styles.arrow}
            onClick={previousSlide}
          />

          <div className={styles.ImageContainer}>
            <div className={styles.ImageWrapper}>
              {visibleCards.map((card) => (
                <div key={card.id} className={styles.card}>
                  <img src={card.image} alt="partner card" />
                </div>
              ))}
            </div>
          </div>

          <img
            src={nextSlideIcon}
            className={styles.arrow}
            onClick={nextSlide}
          />
        </div>

        <div className={styles.dots}>
          {CardImages.map((card, index) => (
            <button
              key={card.id}
              className={currentIndex === index ? styles.activeDot : ""}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PartnerCards;
