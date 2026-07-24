import serviceIcon from "../../assets/images/About-page/service 1.png";
import styles from "./BestCharge.module.css";

const BestCharge = () => {
  return (
    <section className={styles.bestChargeSection}>
      <div className={styles.bestChargeContainer}>
        {/* Engineering Excellence */}
        <div className={styles.featureItem}>
          <img
            src={serviceIcon}
            alt="Engineering Excellence"
            className={styles.featureIcon}
          />

          <div className={styles.featureContent}>
            <h3 className="18-neutral-900">Engineering Excellence</h3>

            <p className="14-neutral-900">
              Built for Safety, reliability,
              <br />
              and long-term performance.
            </p>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Sustainable Future */}
        <div className={styles.featureItem}>
          <img
            src={serviceIcon}
            alt="Sustainable Future"
            className={styles.featureIcon}
          />

          <div className={styles.featureContent}>
            <h3 className="18-neutral-900">Sustainable Future</h3>

            <p className="14-neutral-900">
              Driving Clean mobility for
              <br />a better tomorrow.
            </p>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Trusted Partnership */}
        <div className={styles.featureItem}>
          <img
            src={serviceIcon}
            alt="Trusted Partnership"
            className={styles.featureIcon}
          />

          <div className={styles.featureContent}>
            <h3 className="18-neutral-900">Trusted Partnership</h3>

            <p className="14-neutral-900">
              Collaborating with governments,
              <br />
              Industries and Communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestCharge;
