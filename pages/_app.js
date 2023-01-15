import PlausibleProvider from 'next-plausible'
import { Montserrat, Playfair_Display } from '@next/font/google'

import '../styles/globals.css'

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
