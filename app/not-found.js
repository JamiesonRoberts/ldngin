import Link from 'next/link'

import Logo from '@/components/Logo'

const layoutStyles = {
  minHeight: 'calc(100vh - 2rem)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
}

export const metadata = {
  title: 'Whoops, something went wrong.',
}

export default function Error404() {
  return (
    <div style={layoutStyles}>
      <Logo tag={'h1'} />
      <p>
        <strong>404 - Page Not Found</strong>
      </p>
      <Link href={'/'}>Return back to the main page</Link>
    </div>
  )
}
