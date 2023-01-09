import PlausibleProvider from 'next-plausible'
import { Montserrat, Playfair_Display } from '@next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

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

config.autoAddCss = false

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
