import { FC } from 'react';
import Image from 'next/image';

import flor1 from 'public/flor1.svg';
import flor2 from 'public/flor2.svg';

const Images: FC = () => {
    return (
        <>
        <div className="absolute hidden xl:block bottom-10 right-0 w-40">
            <Image
                src={ flor1 }
                alt="Flor svg"
                layout="responsive"
            />
        </div>
        <div className="absolute hidden xl:block top-10 left-0 w-36">
            <Image
                src={ flor2 }
                alt="Flor svg"
                layout="responsive"
            />
        </div>
        </>
    )
}

export default Images;
