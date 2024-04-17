import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "18.png",
    "19.png",
    "20.png",
]

export default function Home() {

    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })

    useEffect(() => {
        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener("resize", resize)
        resize();
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
    const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5])
    return (
        <main className={styles.main}>
            <div className={styles.spacer}></div>
            <div ref={gallery} className={styles.gallery}>
                <Column images={[images[0], images[1], images[2],images[4]]} y={y} />
                <Column images={[images[5], images[6], images[7],images[8]]} y={y2} />
                <Column images={[images[9], images[10], images[11],images[12]]} y={y3} />
                <Column images={[images[13], images[14], images[15],images[16]]} y={y4} />
                <Column images={[images[17], images[18], images[19],images[3]]} y={y5} />
            </div>
            <div className={styles.spacer}></div>
        </main>
    )
}

const Column = ({ images, y }) => {
    return (
        <motion.div
            className={styles.column}
            style={{ y }}
        >
            {
                images.map((src, i) => {
                    return <div key={i} className={styles.imageContainer}>
                        <img
                            src={`./Images/${src}`}
                            alt='image'
                            style={{
                                width:'100%',
                                height:'100%',
                                objectFit:"contain"
                            }}
                        />
                    </div>
                })
            }
        </motion.div>
    )
}