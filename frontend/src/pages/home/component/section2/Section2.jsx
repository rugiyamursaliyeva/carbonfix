import React from 'react'
import styles from '../section2/Section2.module.scss'

const Section2 = () => {
  return (
    <section className={styles.main}>
      <div className={styles.text}>
        <div className={styles.head}>
          <h1>Where does the cleaning system act?</h1>
        </div>
        <div className={styles.desciption}>
          <p>Our cleaning equipment acts directly on the core of the particulate filter, 
            removing soot, ash, and solid residues that block the flow of exhaust gases.</p>
          <span>Deep cleaning allows the DPF to recover its original filtering capacity and comply with emission limits.</span>  
        </div>
      </div>

    </section>
  )
}

export default Section2