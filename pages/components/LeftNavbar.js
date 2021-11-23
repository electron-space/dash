import React from 'react';
import styles from '../../styles/Home.module.css';

function LeftNavbar() {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>Electron-Space</h2>
      </div>
    </div>
  );
}

export default LeftNavbar;
