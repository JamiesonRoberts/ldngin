import Head from 'next/head'
import Link from 'next/link'

import Logo from '@/components/Logo'

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
                <Logo tag={'h1'} />
                <h2>404 - Page Not Found</h2>
                <Link href={'/'}>Return back to the main page</Link>
            </main>
        </>
    )
}
