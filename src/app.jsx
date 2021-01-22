import React from 'react';
import DonationForm from "./DonationForm";
import styles from "./app.module.scss";

const App = () =>
  <div className={styles.main}>
    <div className={styles.wrapper}>
      <DonationForm />
    </div>
  </div>;
 
export default App;