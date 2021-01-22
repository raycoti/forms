import React, {useState, useCallback} from "react";
import {
  ProgressBar,
  DonationInput
} from "./Elements"
import styles from "./DonationForm.module.scss";

export const DonationForm = ({
  value,
  total,
  goal,
  onSubmit,
  onChange,
  donars,
}) => {
  return (
    <div className={styles.container}>
      <ProgressBar total={total} goal={goal} />
      <form data-testid="donation-form" onSubmit={onSubmit}>
        <h1 className={styles.header}>Only four days left to fund this project</h1>
        <p className={styles.text}>
          Join the <b>{donars}</b> other donors who have already supported this project.
        </p>
        <DonationInput value={value} onChange={onChange} />
      </form> 
    </div>
  )
}

const DonationFormContainer = ({
  goal = 5000
}) => {
  const [donValue, setValue] = useState("");
  const [total, setTotal] = useState(0);
  const [donars, setDonars] = useState(0);

  const onSubmit = useCallback((e)=>{
    e.preventDefault();
    setTotal(prevTotal => +prevTotal + +donValue);
    setDonars(prevDonars => prevDonars + 1);
    setValue("");
  }, [donValue, setTotal, setDonars, setValue]);

  return (
    <DonationForm 
      total={total}
      goal={goal}
      value={donValue}
      onSubmit={onSubmit}
      onChange={(e) => setValue(e.target.value)}
      donars={donars}
    />
  )
}


export default DonationFormContainer;
