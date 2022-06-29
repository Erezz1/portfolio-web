import { FC, ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface IProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const animateSpan: Variants = {
    hover: {
        scale: 1.15,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
}

const SkillItem: FC<IProps> = ({ icon, title, description }) => {
    return (
        <motion.article
            className="group flex flex-col items-center"
            whileHover="hover"
        >
            <motion.span
                variants={ animateSpan }
                className="text-7xl p-14 border rounded-full border-amber text-amber group-hover:bg-amber group-hover:text-salmon transition-colors duration-300"
            >
                { icon }
            </motion.span>

            <h3 className="text-white text-3xl font-bold my-7">{ title }</h3>
            <p className="max-w-xs text-center text-amber tracking-wide">{ description }</p>
        </motion.article>
    )
}

export default SkillItem;
