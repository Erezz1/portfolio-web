import { FC } from 'react';
import Typed from 'react-typed';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const tecnologies = [
    'React',
    'TypeScript',
    'NodeJS',
    'ExpressJS',
    'MongoDB',
    'NestJS',
    'CSS',
    'TailwindCSS',
];

const Title: FC = () => {

    const { scrollY } = useViewportScroll();
    const y = useTransform( scrollY, [0, 1000], [0, 500]);
    const opacity = useTransform( scrollY, [0, 850], [1, 0]);

    return (
        <motion.div
            className="container mx-auto px-5"
            style={{ y, opacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-50 mb-3 md:mb-6">{'<Hola, Mundo! />'}</h1>
            <h3 className="md:text-3xl font-light text-gray-50 mb-8 md:mb-16">
                Desarrollo de aplicaciones con
                <Typed
                    className="ml-1 font-bold text-salmon"
                    strings={ tecnologies }
                    typeSpeed={ 40 }
                    backSpeed={ 50 }
                    loop
                />
            </h3>

            <button className="border text-white border-white hover:text-salmon hover:border-salmon transition-colors duration-200 flex items-end px-10 py-2">
                Acerca de
                <HiOutlineArrowNarrowRight className="text-xl ml-2" />
            </button>
        </motion.div>
    )
}

export default Title;
