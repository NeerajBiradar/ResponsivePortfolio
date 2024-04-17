import React, { useState } from 'react';
import Magnetic from '../Components/Framer-motion';
import styles from '../Header/style.module.scss'
import { motion } from 'framer-motion';
 
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className={`navbar navbar-expand-lg  ${styles.nav}`} >
      <div className="container-fluid" >
        <Magnetic><a className="navbar-brand ms-4 mt-4 my-2 text-white" href="#">Neeraj Biradar</a></Magnetic>
        <button
          onClick={() => { setIsActive(!isActive) }}
          className={`navbar-toggler ms-auto border-0 ${isActive ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded={isActive ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >

          <div className='mt-4'>
            <div className={styles.button}>
              <motion.div
                animate={{ top: isActive ? "-100%" : "0" }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className={styles.slider}
              >
                <div className={styles.el}>
                  <p className='mt-2'>Menu</p>
                </div>
                <div className={styles.el}>
                  <p className='mt-2'>Close</p>
                </div>
              </motion.div>
            </div>
          </div>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

          <ul className="navbar-nav mt-2 me-4 ms-auto">
            <Magnetic>
              <li className="nav-item px-2 ms-3">
                <a className="nav-link text-white" href="#">About me</a>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="nav-item px-2 ms-3">
                <a className="nav-link text-white" href="#">Projects</a>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="nav-item px-2 ms-3">
                <a className="nav-link text-white" href="#">Contact me</a>
              </li>
            </Magnetic>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
