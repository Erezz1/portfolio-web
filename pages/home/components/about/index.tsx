import { FC } from 'react';

import Images from './Images';

const About: FC = () => {

    return (
        <section className="w-full py-20 px-5 relative">
            <div className="w-full max-w-text mx-auto">
                <h2 className="text-center text-3xl font-light text-salmon mb-7">Acerca de mí</h2>
                <p className="text-center tracking-wider leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis non, consequuntur facilis minima blanditiis a, necessitatibus et tempora repudiandae tempore, possimus officia nemo? Provident nemo aperiam inventore, assumenda suscipit autem ad sequi deserunt, quisquam non eos? Ut magnam dolores esse voluptas, vel aspernatur voluptate quaerat sed tenetur nostrum tempora dicta!</p>
            </div>

            <Images />
        </section>
    )
}

export default About;
