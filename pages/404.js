import Head from 'next/head'

const layoutStyles = {
    minHeight: '100vh',
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
                <meta name='description' content='' />
            </Head>

            <main style={layoutStyles}>
                <h1>404 - page not found</h1>
            </main>
        </>
    )
}
