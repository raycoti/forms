import React, {useEffect, useState} from "react";
import styles from "./DonationForm.module.scss";

export const DonationInput = ({
  value,
  onChange,
  min="5",
  step="1",
  title="Give Now"
}) => {
  return (
   <div className={styles.donationInput}>
   $<input
     data-testid="donation-input"
     value={value}
     type="number"
     min={min}
     step={step}
     onChange={onChange}
   />
   <button disabled={!!(+value < 5)} data-testid="donation-button">{title}</button>
 </div>
  )
}


export const ProgressBar = ({
 goal=0,
 total= 0
}) => {
  const [percent, setPercent] = useState(0);
  const [remaining, setRemaining] = useState(goal);
  const [hover, setHover] = useState(true);

  useEffect(() => {
   const percent = (total* 100/goal*100 ) /100;
   const remaining = +goal - +total;
   setPercent(percent > 100 ? 100 : percent);
   setRemaining(remaining <= 0 ? 0 : remaining);
  }, [total, goal]);

  return (
    <>
     <div className={`${styles.tooltip} ${hover ? styles.visible :""}`}>
      ${remaining} still needed to fund this project.
     </div>
     <div
       className={styles.progress}
       onMouseOver={() => setHover(true)}
       onMouseLeave={()=> setHover(false)}
     >
       <div style={{width: `${percent}%`}} />
     </div> 
   </>
  )
}


