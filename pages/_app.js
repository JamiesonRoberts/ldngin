import Head from 'next/head'
import PlausibleProvider from 'next-plausible'
import { Montserrat, Playfair_Display } from 'next/font/google'

import '@/styles/globals.css'

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--montserrat',
    fallback: ['sans-serif'],
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--playfair-display',
    fallback: ['serif'],
})

const App = ({ Component, pageProps }) => {
    return (
        <PlausibleProvider domain='ldngin.ca' trackOutboundLinks={true}>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#1c1c1b'
                />
                <meta name='msapplication-TileColor' content='#1c1c1b' />
                <meta
                    name='theme-color'
                    content='#CCCCCC'
                    media='(prefers-color-scheme: light)'
                />
                <meta
                    name='theme-color'
                    content='#1C1C1B'
                    media='(prefers-color-scheme: dark)'
                />
            </Head>
            <style jsx global>{`
                :root {
                    --montserrat: ${montserrat.style.fontFamily};
                    --playfair: ${playfair.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </PlausibleProvider>
    )
}

export default App
