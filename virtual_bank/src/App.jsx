import React from "react";
import styles from "./style.js";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>NAVBAR</div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      HERO
    </div>
  </div>

  <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      STATS
      BUSINESS
      CTA
      DEALS
      FOOTER
      
    </div>
  </div>

  </div>
);

export default App;
