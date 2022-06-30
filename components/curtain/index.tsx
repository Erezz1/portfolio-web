import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const curtainVariant: Variants = {
    enter: {
        transition: {
            staggerChildren: 0.08
        }
    },
    end: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const colorVariant: Variants = {
    start: { scaleY: 1 },
    enter: {
        scaleY: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    },
    end: {
        scaleY: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}

const Curtain = () => {

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                initial="start"
                animate="enter"
                exit="end"
                variants={ curtainVariant }
                className="select-none"
            >
                <motion.div variants={ colorVariant } className="fixed top-0 left-0 h-screen w-full origin-top will-change-transform z-40 bg-red-500" />
                <motion.div variants={ colorVariant } className="fixed top-0 left-0 h-screen w-full origin-top will-change-transform z-30 bg-salmon" />
                <motion.div variants={ colorVariant } className="fixed top-0 left-0 h-screen w-full origin-top will-change-transform z-10 bg-amber" />
            </motion.div>
        </AnimatePresence>
    )
}

export default Curtain;
