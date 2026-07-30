import chargingImage from "../../assets/images/About-page/charging solutions.png";
import { Container, Panel } from "../../shared/layout";
import styles from "./ChargingSolutions.module.css";
import Button from "../../shared/ui/Button";

const ChargingSolutions = () => {
  return (
    <section>
      <Container>
        <Panel>
          <div className="page-col-14 page-col-lg-7">
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
                <p className={` 16-secondary ${styles.heading} `}>OUR STORY</p>

                <h2 className={`h2-primary ${styles.title}`}>
                  Built on Infrastructure. Focused on the Future.
                </h2>

                <p className="18-neutral-500">
                  For decades, Best Infra has delivered complex infrastructure
                  projects with precision, safety, and engineering excellence.
                  As India accelerates toward electric mobility, we recognised
                  that charging infrastructure would become the foundation of
                  tomorrow's transportation ecosystem.
                </p>

                <p className="18-neutral-500">
                  Best Charg was created to bring together infrastructure
                  expertise, intelligent software, and reliable operations into
                  one integrated platform.
                </p>

                <p className="18-neutral-500">
                  Today, we design, deploy, and manage EV charging ecosystems
                  that enable businesses, cities, fleets, and communities to
                  embrace sustainable mobility with confidence.
                </p>

                <Button text="Explore solutions" variant="primary"></Button>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </section>
  );
};

export default ChargingSolutions;
