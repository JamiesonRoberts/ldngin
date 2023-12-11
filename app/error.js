'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'

import Logo from '@/components/Logo'

const layoutStyles = {
  minHeight: 'calc(100vh - 1rem)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error)
  }, [error])

  return (
    <main style={layoutStyles}>
      <Logo tag={'div'} />
      <h1>An Error Occurred</h1>
      <Link href={'/'}>Return back to the main page</Link>
    </main>
  )
}
