import type { AppProps } from 'next/app';

import Curtain from 'components/curtain';
import 'styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps ) => {
    return (
        <>
            <Component {...pageProps} />
            <Curtain />
        </>
    )
}

export default MyApp;
