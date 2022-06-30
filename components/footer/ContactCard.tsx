import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdPlace } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const contactInfo = [
    {
        id: '1',
        title: 'Ubicación',
        icon: <MdPlace />,
        info: 'Iztapalapa, Ciudad de México'
    },
    {
        id: '2',
        title: 'Teléfono',
        icon: <FaPhoneAlt />,
        info: '55-3712-7421'
    },
]

const variants: Variants = {
    show: {
        x: 0,
        opacity: 1,
    },

    hidden: {
        x: -100,
        opacity: 0,
    }
}

const ContactCard: FC = () => {

    const [ ref, inView ] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    return (
        <motion.div
            className="md:absolute bg-gray-50 -top-20 right-10 w-80 py-6 shadow-md shadow-gray-600"
            ref={ ref }
            variants={ variants }
            animate={ inView ? 'show' : 'hidden' }
            transition={{
                duration: 0.3,
                ease: 'easeInOut',
            }}
        >
            <ul className="text-gray-500">
                {
                    contactInfo.map( contact => (
                        <li
                            className="py-5 border-b last:border-b-0 last:pb-0 first:pt-0"
                            key={ contact.id }
                        >
                            <p className="flex flex-col items-center text-xl font-bold [&>svg]:text-3xl [&>svg]:mt-2">
                                { contact.title }
                                { contact.icon }
                            </p>
                            <p className="font-semibold mt-3">{ contact.info }</p>
                        </li>
                    ))
                }
            </ul>
        </motion.div>
    )
}

export default ContactCard
