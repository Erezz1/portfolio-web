import { FC } from 'react';
import { FiMonitor } from 'react-icons/fi';
import { FaServer } from 'react-icons/fa';
import { BiCodeBlock } from 'react-icons/bi';

import SkillItem from './SkillItem';

const skills = [
    {
        icon: <FiMonitor />,
        title: 'Frontend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae reprehenderit doloremque vitae veniam eligendi velit, incidunt obcaecati repellat atque maxime.'
    },
    {
        icon: <FaServer />,
        title: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae reprehenderit doloremque vitae veniam eligendi velit, incidunt obcaecati repellat atque maxime.'
    },
    {
        icon: <BiCodeBlock />,
        title: 'Gestion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae reprehenderit doloremque vitae veniam eligendi velit, incidunt obcaecati repellat atque maxime.'
    },
]

const SkillsList: FC = () => {
    return (
        <section className="container mx-auto px-5 grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-5 md:gap-y-0">
            {
                skills.map( skill => (
                    <SkillItem
                        icon={ skill.icon }
                        title={ skill.title }
                        description={ skill.description }
                    />
                ))
            }
        </section>
    )
}

export default SkillsList;
