import { FC } from 'react';

import SkillsList from './SkillsList';

const Skills: FC = () => {
    return (
        <section className="w-full bg-salmon py-20">
            <h2 className="text-center text-white text-4xl font-light mb-16">Skills</h2>

            <SkillsList />
        </section>
    )
}

export default Skills;
