import Image from 'next/image'

import styles from './page.module.css'
import cocktail from '@/public/cocktail.jpg'

export const metadata = {
  title: '#ldnont Gin Club | Celebrating Great Gin Together',
  description:
    'The #ldnont Gin Club is a social gathering of Gin aficionados in London, Ontario, who enjoy great gin.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://ldngin.ca',
    title: '#ldnont Gin Club | Celebrating Great Gin Together',
    description:
      'The #ldnont Gin Club is a social gathering of Gin aficionados in London, Ontario, who enjoy great gin.',
    images: [
      {
        url: '/cocktail.jpg',
        alt: 'A full cocktail glass with lemon garnish sitting on a dark wooden table with a cocktail spoon and lemon slices, in front of a dark wooden board background.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://ldngin.ca',
    title: '#ldnont Gin Club | Celebrating Great Gin Together',
    description:
      'The #ldnont Gin Club is a social gathering of Gin aficionados in London, Ontario, who enjoy great gin.',
    images: [
      {
        url: '/cocktail.jpg',
        alt: 'A full cocktail glass with lemon garnish sitting on a dark wooden table with a cocktail spoon and lemon slices, in front of a dark wooden board background.',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <>
      <main className={styles.main} style={{ gridArea: 'main' }}>
        <p>
          Welcome to the #ldnont Gin Club, a social gathering of Gin aficionados
          in London, Ontario.
        </p>
        <p>
          <strong>
            The Gin Club is currently on hiatus, maybe it will return in the
            future.
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
          sizes='(min-width: 56.25rem) 60vw, 99vw'
          priority
        />
      </aside>
    </>
  )
}
