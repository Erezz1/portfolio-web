import { FC } from 'react';
import { motion } from 'framer-motion';

import SkillsList from './SkillsList';

const Skills: FC = () => {
    return (
        <section className="w-full bg-salmon py-20 flex flex-col items-center">
            <h2 className="text-center text-white text-4xl font-light mb-16">Skills</h2>

            <SkillsList />

            <motion.a
                target="_blank"
                rel="noreferrer"
                href="#"
                className="border text-white border-white transition-colors duration-200 flex items-end px-10 py-2 mt-16"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Descargar CV
            </motion.a>
        </section>
    )
}

export default Skills;
