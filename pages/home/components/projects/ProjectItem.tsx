import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import Image from 'next/image';

interface Project {
    title: string;
    img: string;
    className?: string;
}

const ProjectItem: ForwardRefExoticComponent<Project & RefAttributes<HTMLLIElement>> = forwardRef<HTMLLIElement, Project>(( props, ref ) => {

    const { title, img, className } = props;

    return (
        <li
            className={`group overflow-hidden rounded-2xl relative cursor-pointer ${ className }`}
            ref={ ref }
        >
            <Image
                src={ img }
                layout="fixed"
                width={ 500 }
                height={ 800 }
                alt="Proyecto"
                className="object-cover object-center brightness-50 group-hover:brightness-100 transition-all duration-200"
                priority
            />
            <span className="text-3xl text-amber font-extrabold tracking-wider absolute bottom-1/2 left-5 md:text-4xl md:inset-x-0 md:-rotate-90 group-hover:opacity-0 transition-opacity duration-200">
                { title }
            </span>
        </li>
    )
})

ProjectItem.displayName = 'ProjectItemComponent';

export default ProjectItem;
