import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Home from './components/home';
const About = dynamic( () => import( /* webpackChunkName: "lazyAbout" */ './components/about'), {
    suspense: true
});
const Skills = dynamic( () => import( /* webpackChunkName: "lazySkills" */ './components/skills'), {
    suspense: true
})

const HomePage: NextPage = () => {
    return (
        <div className="flex flex-col justify-start overflow-x-hidden bg-amber">
            <Home />
            <Suspense fallback={`Loading...`}>
                <About />
                <Skills />
            </Suspense>
        </div>
    )
}

export default HomePage;
