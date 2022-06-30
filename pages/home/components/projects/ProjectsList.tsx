import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

import ProjectItem from './ProjectItem';
import { useInView } from 'react-intersection-observer';

const projects = [
    {
        id: "1",
        title: "Thullo",
        img: "https://media.istockphoto.com/photos/close-up-task-board-scrum-office-bulletin-board-agile-stickers-using-picture-id1288012677"
    },
    {
        id: "2",
        title: "Shareme",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: "3",
        title: "Sirchin",
        img: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    },
    {
        id: "4",
        title: "Thullo",
        img: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
]

const ProjectMotionItem = motion( ProjectItem );

const variants: Variants = {
    show: {
        x: 0,
        scale: 1,
        opacity: 1,
    },

    hidden: {
        x: -100,
        scale: 0.5,
        opacity: 0,
    }
}

const ProjectsList: FC = () => {

    const [ ref, inView, entry ] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    return (
        <ul className="container max-w-screen-md px-5 mx-auto h-96 md:h-3/4 lg:h-full grid grid-cols-5 grid-rows-4 gap-y-5 md:grid-rows-5 md:grid-cols-4 md:gap-y-0 md:gap-x-5">
            {
                projects.map(( project, i ) => (
                    <ProjectMotionItem
                        img={ project.img }
                        title={ project.title }
                        key={ project.id }
                        className={
                            i % 2 === 0
                            ? "row-span-1 col-start-1 col-end-6 md:col-span-1 md:row-start-1 md:row-end-5"
                            : "row-span-1 col-start-1 col-end-6 md:col-span-1 md:row-start-2 md:row-end-6"
                        }
                        variants={ variants }
                        animate={ inView ? 'show' : 'hidden' }
                        transition={{
                            duration: ( 0.3 * (i + 1) ),
                            ease: 'easeInOut',
                        }}
                        ref={ ref }
                    />
                ))
            }
        </ul>
    )
}

export default ProjectsList;
