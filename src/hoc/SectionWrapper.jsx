import React from "react";
import {motion} from 'framer-motion' 
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// `amount` is the fraction of the section that must be visible to trigger the
// entrance animation. Sections taller than the viewport (e.g. Projects on
// mobile) can never reach a large fraction, so they need a small value or "some".
const SectionWrapper = (Component, idName, amount = 0.1) =>

function HOC() {
    return (
        <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}

        >
            <span className="hash-span" id={idName}>
                &nbsp;

            </span>
            <Component />
        </motion.section>
    )
}
   

export default SectionWrapper;