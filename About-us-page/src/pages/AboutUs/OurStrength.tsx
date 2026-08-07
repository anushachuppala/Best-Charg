import { useState, useEffect, useCallback } from "react";

import styles from "./OurStrength.module.css";
import strengthImage from "../../assets/images/About-page/OurStrength.png";
import { Container, Panel, Section } from "../../shared/layout";
import iterationIcon from "../../assets/images/About-page/Iteration.png";
import technologyIcon from "../../assets/images/About-page/nanotechnology.png";
import arrowIcon from "../../assets/images/About-page/arrow.png";

const slides = [
  {
    image: strengthImage,
    title: "End-to-End EV Infrastructure",
    description:
      "From charger manufacturing and installation to software, commissioning, maintenance, and energy integration, we deliver complete EV ecosystems.",
    features: [
      {
        icon: iterationIcon,
        text: "End-to-End Execution",
        alt: "Execution",
      },
      {
        icon: technologyIcon,
        text: "Integrated Technology",
        alt: "Technology",
      },
      {
        icon: arrowIcon,
        text: "Built to Scale",
        alt: "Scale",
      },
    ],
  },

  {
    image: strengthImage,
    title: "Reliable EV Infrastructure",
    description:
      "Our solutions are built to deliver reliable charging infrastructure with seamless integration and long-term performance.",
    features: [
      {
        icon: iterationIcon,
        text: "Reliable Execution",
        alt: "Execution",
      },
      {
        icon: technologyIcon,
        text: "Integrated Systems",
        alt: "Systems",
      },
      {
        icon: arrowIcon,
        text: "Built to Scale",
        alt: "Scale",
      },
    ],
  },

  {
    image: strengthImage,
    title: "Technology Driven",
    description:
      "We combine innovative technology and scalable infrastructure to create a seamless EV charging ecosystem.",
    features: [
      {
        icon: iterationIcon,
        text: "Innovation",
        alt: "Innovation",
      },
      {
        icon: technologyIcon,
        text: "Technology",
        alt: "Technology",
      },
      {
        icon: arrowIcon,
        text: "Scalable Solutions",
        alt: "Scalable solutions",
      },
    ],
  },
];

const loopSlides = [slides[slides.length - 1], ...slides, slides[0]];

const OurStrength = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  console.log("active state:", activeIndex);

  // Next Slide
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => prev + 1);
  }, []);

  // Previous Slide
  const previousSlide = useCallback(() => {
    setActiveIndex((prev) => prev - 1);
  }, []);

  // Reset cloned slides
  useEffect(() => {
    if (activeIndex === loopSlides.length - 1) {
      setTimeout(() => {
        setActiveIndex(1);
      }, 600);
    }

    if (activeIndex === 0) {
      setTimeout(() => {
        setActiveIndex(slides.length);
      }, 600);
    }
  }, [activeIndex]);

  // Autoplay
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextSlide();
  //   }, 6000);

  //   return () => clearInterval(timer);
  // }, [nextSlide]);

  return (
    <Section className={styles.strengthSection}>
      <Container>
        <Panel>
          <div className={styles.strengthContainer}>
            {/* Heading */}

            <div className={styles.headingWrapper}>
              <p className={styles.smallHeading}>OUR STRENGTH</p>

              <h2 className={styles.heading}>
                Why Leading Organizations Choose Best Infra
              </h2>
            </div>

            {/* Slider */}

            <div className={styles.sliderWrapper}>
              <div
                className={styles.sliderTrack}
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {loopSlides.map((slide, index) => (
                  <div className={styles.strengthCard} key={index}>
                    {/* Image */}

                    <div className={styles.imageWrapper}>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className={styles.strengthImage}
                      />
                    </div>

                    {/* Content */}

                    <div className={styles.contentWrapper}>
                      <div className={styles.iconCircle}></div>

                      <h3 className={styles.text}>{slide.title}</h3>

                      <p className={styles.description}>{slide.description}</p>

                      <div className={styles.features}>
                        {slide.features.map((feature, featureIndex) => (
                          <div
                            className={styles.featureItem}
                            key={featureIndex}
                          >
                            <span className={styles.featureIcon}>
                              <img src={feature.icon} alt={feature.alt} />
                            </span>

                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Arrow */}

            <button
              className={`${styles.arrow} ${styles.leftArrow}`}
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>

            {/* Right Arrow */}

            <button
              className={`${styles.arrow} ${styles.rightArrow}`}
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>

            {/* Dots */}

            <div className={styles.dots}>
              {slides.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setActiveIndex(index + 1)}
                  className={`
                    ${styles.dot}
                    ${activeIndex - 1 === index ? styles.activeDot : ""}
                  `}
                />
              ))}
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default OurStrength;
