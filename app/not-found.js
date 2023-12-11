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

export const metadata = {
  title: 'Whoops, something went wrong.',
}

export default function Error404() {
  return (
    <main style={layoutStyles}>
      <Logo tag={'div'} />
      <h1>404 - Page Not Found</h1>
      <Link href={'/'}>Return back to the main page</Link>
    </main>
  )
}
