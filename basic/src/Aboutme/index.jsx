import styles from "../Aboutme/style.module.scss";
import { useRef } from 'react';
import gsap from 'gsap';

export default function Aboutme() {

  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);

  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e
    xForce += movementX * speed;
    yForce += movementY * speed;

    if(requestAnimationFrameId == null){
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }

  const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
    gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
    gsap.set(plane3.current, {x: `+=${xForce * 0.45}`, y: `+=${yForce * 0.45}`})

    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;
    
    if(xForce != 0 || yForce != 0){
      requestAnimationFrame(animate);
    }
    else{
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null;
    }
  }

  return (
    <main onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}>
      <div ref={plane1} className={styles.plane}>
          <img
            src="./Images/Floating8.jpg"
            alt='image'
            width={300}
          />
           <img
            src="./Images/floating2.webp"
            alt='image'
            width={300}
          />
          <img 
            src="./Images/floating6.jpg"
            alt='image'
            width={225}
          />
      </div>
      <div ref={plane2} className={styles.plane}>
          <img 
            src="./Images/floating11.jpg"
            alt='image'
            width={250}
          />
           <img
            src="./Images/floating1.webp"
            alt='image'
            width={200}
          />
          <img
            src="./Images/floating5.jpg"
            alt='image'
            width={500}
          />
      </div>
      <div ref={plane3} className={styles.plane}>
          <img
            src="./Images/floating4.jpg"
            alt='image'
            width={150}
          />
           <img
            src="./Images/floating3.jpg"
            alt='image'
            width={200}
          />
      </div>
      <div className={styles.title}>
        <h1 className="display-4">About me</h1>
        <p className="lead mt-2">Hello! I'm Neeraj Biradar, a dynamic and dedicated computer science student at Keshav Memorial Institute of Technology. With a strong foundation in computer science, I also have a passion for the arts, which I believe enhances my creativity.</p>
      </div>
    </main>
  )
}