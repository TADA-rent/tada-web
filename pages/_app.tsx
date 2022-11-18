import SEO from '@components/SEO'
import '@styles/components.css'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Session, SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <>
      <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
        <SEO />
        <Script src="https://cdn.usefathom.com/script.js" data-site="HMJIWSIA" defer />
        <Component {...pageProps} />
      </SessionContextProvider>
    </>
  )
}
