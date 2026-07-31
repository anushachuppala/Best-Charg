import { useState } from "react";

import styles from "./OurStrength.module.css";
import strengthImage from "../../assets/images/About-page/OurStrength.png";
import { Container, Panel, Section } from "../../shared/layout";
import iterationIcon from "../../assets/images/About-page/Iteration.png";
import technologyIcon from "../../assets/images/About-page/nanotechnology.png";
import arrowIcon from "../../assets/images/About-page/arrow.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

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
    title: "Smart EV Charging Solutions",
    description:
      "We provide intelligent and reliable EV charging solutions designed to support modern electric mobility infrastructure.",
    features: [
      {
        icon: iterationIcon,
        text: "Smart Charging",
        alt: "Smart charging",
      },
      {
        icon: technologyIcon,
        text: "Advanced Technology",
        alt: "Technology",
      },
      {
        icon: arrowIcon,
        text: "Future Ready",
        alt: "Future ready",
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

const OurStrength = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

            {/* Swiper */}
            <div className={styles.sliderWrapper}>
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: `.${styles.leftArrow}`,
                  nextEl: `.${styles.rightArrow}`,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className={styles.swiper}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.strengthCard}>
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

                        <p className={styles.description}>
                          {slide.description}
                        </p>

                        {/* Features */}
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
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Left Arrow */}
              <button
                className={`${styles.arrow} ${styles.leftArrow}`}
                aria-label="Previous slide"
              >
                ‹
              </button>

              {/* Right Arrow */}
              <button
                className={`${styles.arrow} ${styles.rightArrow}`}
                aria-label="Next slide"
              >
                ›
              </button>

              {/* Pagination */}

              <div className={styles.dots}>
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.dot} ${
                      activeIndex === index ? styles.activeDot : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default OurStrength;
