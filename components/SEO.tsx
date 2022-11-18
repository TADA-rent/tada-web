import Head from 'next/head'
export default function SEO() {
  return (
    <>
      <Head>
        <title>TADA! 🪄</title>
        <link rel="shortcut icon" href="/favicon.svg" />

        <meta name="title" content="TADA!" />
        <meta
          name="description"
          content="TADA! is building rental tools to create healthier, more productive communities by empowering renters, property owners and everyone in between."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tadarent.com/" />
        <meta property="og:title" content="Meet TADA!" />
        <meta
          property="og:description"
          content="TADA! is building rental tools to create healthier, more productive communities by empowering renters, property owners and everyone in between."
        />
        <meta property="og:image" content="https://tadarent.com/api/og?v=1" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tadarent.com/" />
        <meta property="twitter:title" content="Meet TADA!" />
        <meta
          property="twitter:description"
          content="TADA! is building rental tools to create healthier, more productive communities by empowering renters, property owners and everyone in between."
        />
        <meta property="twitter:image" content="https://tadarent.com/api/og?v=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            '@context': 'https://schema.org/',
            '@type': 'Thing',
            name: 'TADA!',
            alternateName: [''],
            sameAs: [''],
            url: 'https://tadarent.com',
            description:
              'TADA! is building rental tools to create healthier, more productive communities by empowering renters, property owners and everyone in between.',
            image: 'https://tadarent.com/api/og?v=1',
          }`,
          }}
        />
      </Head>
    </>
  )
}
