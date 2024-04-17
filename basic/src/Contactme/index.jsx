
import styles from './style.module.scss'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { disperse } from './animation';
import gsap from 'gsap';

export default function Home() {

  const background = useRef(null);

  const setBackground = (isActive) => {
    gsap.to(background.current, {opacity: isActive ? 0.8 : 0})
  }

  return (
    <main className={styles.main}>
      <div className={styles.body}>

        <div className={styles.introLine}>
          <p>Neeraj</p>
          <p>Biradar</p>
        </div>

        <TextDipserse setBackground={setBackground} >
          <p>+918639411638</p>
        </TextDipserse>

        <TextDipserse setBackground={setBackground} url="mailto:neeraj@example.com">
          <p>→Email</p>
        </TextDipserse>

        <TextDipserse setBackground={setBackground} url="https://github.com/NeerajBiradar">
          <p>→Github</p>
        </TextDipserse>

        <TextDipserse setBackground={setBackground} url="https://www.linkedin.com/in/neeraj-biradar/">
          <p>→LinkedIn</p>
        </TextDipserse>

      </div>
      <div ref={background} className={styles.background}></div>
    </main>
  )
}

function TextDipserse(props) {
  const { children, setBackground } = props;
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element) => {
    let chars = [];
    if (children.length) {
      children.forEach((el, i) => {
        chars.push(splitWord(el.props.children, i));
      });
    } else {
      chars.push(splitWord(element.props.children, 1));
    }
    return chars;
  };

  const splitWord = (word, indexOfWord) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={indexOfWord * i}
          variants={disperse}
          animate={isAnimated ? "open" : "closed"}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const handleLinkClick = (url) => {
    if(url === "→Email")
    window.open("mailto:neerajbiradar03@gmail.com", "_blank");
    if(url === "→Github")
    window.open("https://github.com/NeerajBiradar", "_blank");
    if(url === "→LinkedIn")
    window.open("https://www.linkedin.com/in/neeraj-biradar/", "_blank");
  
  };

  const manageMouseEnter = () => {
    setBackground(true);
    setIsAnimated(true);
  };
  const manageMouseLeave = () => {
    setBackground(false);
    setIsAnimated(false);
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      className={styles.introLine}
      onClick={() => handleLinkClick(children.props.children)}
    >
      {getChars(children)}
    </div>
  );
}
