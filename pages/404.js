import Head from 'next/head'

const layoutStyles = {
    minHeight: 'calc(100vh - 1rem)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}
export default function Error404() {
    return (
        <>
            <Head>
                <title>404 - Page not found</title>
            </Head>

            <main style={layoutStyles}>
                <h1>404 - page not found</h1>
            </main>
        </>
    )
}
