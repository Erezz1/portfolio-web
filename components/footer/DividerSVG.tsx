import { FC } from 'react';

const DividerSVG: FC = () => {
    return (
        <div className="hidden md:block absolute top-0 left-0 w-full overflow-hidden leading-0">
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="relative block w-2full h-20"
            >
                <path
                    d="M1200 0L0 0 598.97 114.72 1200 0z"
                    className="fill-amber"
                />
            </svg>
        </div>
    )
}

export default DividerSVG;
