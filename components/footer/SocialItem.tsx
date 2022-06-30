import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Prop {
    icon: ReactNode;
    url: string;
}

const SocialItem: FC<Prop> = ({ icon, url }) => {
    return (
        <li>
            <motion.a
                className="text-2xl flex items-center justify-center p-2 border bg-white border-salmon text-salmon rounded-md"
                href={ url }
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                { icon }
            </motion.a>
        </li>
    )
}

export default SocialItem;
