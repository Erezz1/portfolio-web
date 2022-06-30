import { FC, ReactNode } from 'react';

import Footer from 'components/footer';

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <>
            <main className="flex flex-col justify-start overflow-x-hidden bg-amber">
                { children }
            </main>
            <Footer />
        </>
    )
}

export default Layout;
