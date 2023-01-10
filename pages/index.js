import Head from 'next/head'
import Image from 'next/image'
import classnames from 'classnames'

import Logo from '../components/Logo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

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
                Made with <FontAwesomeIcon icon={faHeart} /> in London, Canada
            </footer>
        </div>
    )
}
