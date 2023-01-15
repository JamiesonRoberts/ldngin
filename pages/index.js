import Head from 'next/head'
import Image from 'next/image'
import classnames from 'classnames'

import Logo from '../components/Logo'

import styles from '../styles/Index.module.css'
import cocktail from '../public/cocktail.webp'

export default function Home() {
    return (
        <div className={styles.layout}>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />

                <title>#ldnont Gin Club | Celebrating Great Gin Together</title>
                <meta
                    name='title'
                    content='#ldnont Gin Club | Celebrating Great Gin Together'
                />
                <meta
                    name='description'
                    content='The #ldnont Gin Club is a social gathering of Gin aficionados in London, Ontario, who enjoy great gin.'
                />

                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://ldngin.ca/' />
                <meta
                    property='og:title'
                    content='#ldnont Gin Club | Celebrating great Gin together'
                />
                <meta
                    property='og:description'
                    content='The #ldnont Gin Club is a social gathering of Gin aficionados in London, Ontario, who enjoy great gin.'
                />
                <meta
                    property='og:image'
                    content='https://ldngin.ca/cocktail.jpg'
                />

                <meta property='twitter:card' content='summary_large_image' />
                <meta property='twitter:url' content='https://ldngin.ca/' />
                <meta
                    property='twitter:title'
                    content='#ldnont Gin Club | Celebrating great Gin together'
                />
                <meta
                    property='twitter:description'
                    content='The #ldnont Gin Club is a social gathering of Gin aficionados in London, Ontario, who enjoy great gin.'
                />
                <meta
                    property='twitter:image'
                    content='https://ldngin.ca/cocktail.jpg'
                />

                <link rel='icon' href='https://ldngin.ca/favicon.ico' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='https://ldngin.ca/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='https://ldngin.ca/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link
                    rel='manifest'
                    href='https://ldngin.ca/site.webmanifest'
                />
                <link
                    rel='mask-icon'
                    href='https://ldngin.ca/safari-pinned-tab.svg'
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
            <header
                className={classnames(styles.contentSpacer, styles.header)}
                style={{ gridArea: 'header' }}
            >
                <Logo tag={'h1'} />
            </header>
            <main
                className={classnames(styles.contentSpacer, styles.main)}
                style={{ gridArea: 'main' }}
            >
                <p>
                    Welcome to the #ldnont Gin Club, a social gathering of Gin
                    aficionados in London, Ontario.
                </p>
                <p>
                    <strong>
                        Please note that the Gin Club is currently on hiatus,
                        hopefully to return soon.
                    </strong>
                </p>
            </main>
            <aside style={{ gridArea: 'aside' }}>
                <Image
                    className={styles.featureImage}
                    alt={
                        'A full cocktail glass with lemon garnish sitting on a dark wooden table with a cocktail spoon and lemon slices, in front of a dark wooden board background.'
                    }
                    src={cocktail}
                    width={1000}
                    height={667}
                    sizes='(min-width: 56.25rem) 60vw, 99vw'
                    priority
                />
            </aside>
            <footer className={styles.footer} style={{ gridArea: 'footer' }}>
                Made with{' '}
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    aria-hidden={true}
                    focusable={false}
                    className={styles.footerSVG}
                >
                    <path
                        fill={'currentColor'}
                        d='M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z'
                    />
                </svg>{' '}
                in London, Canada
            </footer>
        </div>
    )
}
