import chargingImage from "../../assets/images/About-page/charging solutions.png";
import styles from "./ChargingSolutions.module.css";

const ChargingSolutions = () => {
  return (
    <section className={styles.chargingSolutionsSection}>
      <div className={styles.chargingSolutionsContainer}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <img
            src={chargingImage}
            alt="EV charging infrastructure"
            className={styles.chargingImage}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <p className={`${styles.heading} 16-secondary`}>OUR STORY</p>

          <h3>
            Built on Infrastructure. Focused on the
            <br />
            Future.
          </h3>

          <p className="18-neutral-500">
            For decades, Best Infra has delivered complex infrastructure
            projects with precision, safety, and engineering excellence. As
            India accelerates toward electric mobility, we recognised that
            charging infrastructure would become the foundation of tomorrow's
            transportation ecosystem.
            <br />
            Best Charg was created to bring together infrastructure expertise,
            intelligent software, and reliable operations into one integrated
            platform.
            <br />
            Today, we design, deploy, and manage EV charging ecosystems that
            enable businesses, cities, fleets, and communities to embrace
            sustainable mobility with confidence.
          </p>

          <button className={styles.exploreButton}>Explore Solutions</button>
        </div>
      </div>
    </section>
  );
};

export default ChargingSolutions;
