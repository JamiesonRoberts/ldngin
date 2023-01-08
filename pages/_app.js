import PlausibleProvider from 'next-plausible'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
    return (
        <PlausibleProvider domain='ldngin.ca' trackOutboundLinks={true}>
            <Component {...pageProps} />
        </PlausibleProvider>
    )
}

export default App
