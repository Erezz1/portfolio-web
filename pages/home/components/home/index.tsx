import { FC } from 'react';

import Title from './Title';

const Home: FC = () => {

    return (
        <section className="w-full h-screen bg-laptop-code bg-cover bg-center bg-fixed relative">
            <div className="bg-black bg-opacity-70 w-full h-full absolute right-0 top-0 flex flex-col justify-center">
                <Title />
            </div>
        </section>
    );
}

export default Home;
