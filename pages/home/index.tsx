import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Layout from 'components/layout';
import Home from './components/home';
const About = dynamic( () => import( /* webpackChunkName: "lazyAbout" */ './components/about'));
const Skills = dynamic( () => import( /* webpackChunkName: "lazySkills" */ './components/skills'));
const Projects = dynamic( () => import( /* webpackChunkName: "lazyProjects" */ './components/projects'));
const Contact = dynamic( () => import( /* webpackChunkName: "lazyContact" */ './components/contact'));

const HomePage: NextPage = () => {
    return (
        <Layout>
            <Home />
            <About />
            <Skills />
            <Projects />
            {/* <Contact /> */}
        </Layout>
    )
}

export default HomePage;
