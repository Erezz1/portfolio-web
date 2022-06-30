import { FC } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import SocialItem from './SocialItem';

const socialList = [
    {
        id: '1',
        icon: <FaFacebookF />,
        url: '#',
    },
    {
        id: '2',
        icon: <FaLinkedinIn />,
        url: '#',
    },
    {
        id: '3',
        icon: <BsTwitter />,
        url: '#',
    },
    {
        id: '4',
        icon: <SiGmail />,
        url: '#',
    },
]

const SocialList: FC = () => {
    return (
        <>
        <h3 className="text-4xl font-extrabold">Redes sociales</h3>

        <ul className="flex flex-wrap gap-2 my-2">
            {
                socialList.map( social => (
                    <SocialItem
                        key={ social.id }
                        icon={ social.icon }
                        url={ social.url }
                    />
                ))
            }
        </ul>
        </>
    )
}

export default SocialList;
