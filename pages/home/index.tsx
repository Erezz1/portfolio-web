import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Home from './components/home';
const About = dynamic( () => import( /* webpackChunkName: "lazyAbout" */ './components/about'));
const Skills = dynamic( () => import( /* webpackChunkName: "lazySkills" */ './components/skills'));
const Projects = dynamic( () => import( /* webpackChunkName: "lazyProjects" */ './components/projects'));
const Contact = dynamic( () => import( /* webpackChunkName: "lazyContact" */ './components/contact'));

const HomePage: NextPage = () => {
    return (
        <div className="flex flex-col justify-start overflow-x-hidden bg-amber">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default HomePage;
