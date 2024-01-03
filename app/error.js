'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'

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

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error)
  }, [error])

  return (
    <div style={layoutStyles}>
      <Logo tag={'h1'} />
      <p>
        <strong>An Error Occurred</strong>
      </p>
      <Link href={'/'}>Return back to the main page</Link>
    </div>
  )
}
