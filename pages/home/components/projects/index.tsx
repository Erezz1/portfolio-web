import { FC } from 'react';
import { AiFillGithub } from 'react-icons/ai';

import ProjectsList from './ProjectsList';

const Projects: FC = () => {

    return (
        <section className="w-full md:h-screen bg-amber py-10 md:py-20 flex relative">
            <div className="w-full max-w-screen-2xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-center">
                <div className="w-full mb-10 max-w-md lg:w-auto lg:mb-0">
                    <h2 className="text-salmon text-7xl font-extralight">Proyectos</h2>
                    <div className="w-14 border-2 border-salmon my-5"></div>
                    <p className="hidden lg:inline text-md tracking-wide">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptas necessitatibus quidem? Laboriosam consequatur unde odio! Mollitia culpa rerum maiores.</p>

                    <a
                        className="bg-salmon text-white border border-amber font-bold py-2 px-10 mt-5 hidden items-center lg:inline-flex hover:border-salmon hover:text-salmon hover:bg-amber transition-colors duration-200"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Visitar Github
                        <AiFillGithub
                            className="text-xl ml-1"
                        />
                    </a>
                </div>

                <ProjectsList />
            </div>
        </section>
    )
}

export default Projects;
