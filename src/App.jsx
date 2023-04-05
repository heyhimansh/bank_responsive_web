import React from "react";
import styles from "./style.js";
// import LoadingBar from "react-top-loading-bar";
import { Sugar } from "react-preloaders";
import ProgressBar from "react-scroll-progress-bar";

import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";
// import PreLoader from "./components/PreLoader.jsx";

const App = () => {
  // const [progress, setProgress] = useState(0);

  return (
    <>
      <ProgressBar height="6" bgcolor="#000" duration="0.2" />
      <Sugar
        background="linear-gradient(90deg, #0d6c9e 0%, #19191a 100%)"
        color="white"
        time={2050}
      />

      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
