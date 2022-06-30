import { FC } from 'react';

import ContactCard from './ContactCard';
import DividerSVG from './DividerSVG';
import SocialList from './SocialList';

const Footer: FC = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="bg-salmon text-white text-center py-10 w-full relative">
            <DividerSVG />

            <div className="w-full px-5 max-w-screen-lg flex flex-col items-center md:items-start my-10 relative mx-auto">
                <ContactCard />
                <div className="flex flex-col items-start lg:items-end mt-10 md:mt-0">
                    <SocialList />

                    <p className="text-center md:text-center text-white text-xl font-extralight mt-10">
                        { year } &copy; Ernesto Pérez Martínez<span className="hidden lg:inline"> - Desarrollador Web</span>.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
