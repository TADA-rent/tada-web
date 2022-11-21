import { FeatureGroup1, Logo } from '@components'
import { Footer } from '@components/Home/Footer'
import { Launch } from '@components/Home/Launch'
import clsx from 'clsx'
import { FeatureGroup2 } from 'components/Home/FeatureGroup2'
import { FeatureGroup3 } from 'components/Home/FeatureGroup3'
import { Header } from 'components/Home/Header'
import { Price } from 'components/Home/Price'
import { gsap } from 'gsap'
import { GSDevTools } from 'gsap/dist/GSDevTools'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import { useLayoutEffect, useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, GSDevTools)
}

function useGsapTimeline() {
  const timeline = useRef<any>(null)
  const mmContext = useRef<any>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      const md = 768
      const lg = 1024
      const xl = 1280

      mm.add(
        {
          // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
          isDesktop: `(min-width: ${lg}px)`,
          isLarge: `(min-width: ${xl}px)`,
          isTablet: `(min-width: ${md}px)`,
          isMobile: `(max-width: ${md - 1}px)`,
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          mmContext.current = context.conditions as any
          timeline.current = gsap.timeline()
        },
      ) // <- true means "call the function now"
    })

    return () => ctx.revert() // cleanup
  }, [])

  return {
    timeline: timeline.current,
    mm: mmContext.current,
  }
}

export default function IndexPage() {
  const isDark = Math.random() >= 0.5
  const comp = useRef<HTMLDivElement>(null)
  const tl = useRef<any>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      const md = 768
      const lg = 1024
      const xl = 1280

      mm.add(
        {
          // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
          isDesktop: `(min-width: ${lg}px)`,
          isLarge: `(min-width: ${xl}px)`,
          isTablet: `(min-width: ${md}px)`,
          isMobile: `(max-width: ${md - 1}px)`,
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, isMobile, isTablet, reduceMotion } = context.conditions as any
          // const smoother = ScrollSmoother.create({
          //   effects: true,
          //   smoothTouch: true,
          //   smooth: isMobile ? 0.25 : 1.75, // seconds it takes to "catch up" to native scroll position
          // })

          tl.current = gsap.timeline()

          const titleParent = new SplitText('.header-tada', { type: 'chars', charsClass: 'overflow-hidden' })
          const titleChild = new SplitText('.header-tada', { type: 'chars', charsClass: 'inline-block' })

          const splitTextParent = new SplitText('.header-title', { type: 'words', wordsClass: 'overflow-hidden' })
          const splitTextChild = new SplitText('.header-title', {
            type: 'words',
            wordsClass: isMobile ? 'inline leading-0 -space-y-48' : 'inline',
          })

          const intro = gsap
            .timeline({ id: 'intro' })
            .set('.header-intro', { zIndex: 40 })
            .set('.footer', { zIndex: -10 })
            .set('.header-gradient', { opacity: 0 })
            .set('.header-content', { opacity: 0, y: 100 })
            .from(titleChild.chars, {
              duration: reduceMotion ? 0 : 2,
              yPercent: 250,
              rotation: '40deg',
              stagger: 0.05,
              ease: 'elastic.out(1, 0.3)',
            })
            .to('.header-curtain', { height: 0, duration: 1, delay: 0.75, ease: 'power4.out' })
            .set('.header-curtain', { display: 'none' })
            .to('.header-video', { autoAlpha: 1 }, '<')
            .to(
              '.header-video',
              {
                left: isMobile ? '0' : '50%',
                top: '0',
                right: '0',
                bottom: '0',
                borderRadius: 0,
                ease: 'power4.out',
                duration: 1.75,
              },
              '-=35%',
            )
            .from(
              splitTextChild.words,
              {
                duration: 2,
                yPercent: 250,
                rotation: '20deg',
                stagger: 0.05,
                ease: 'power2.out',
              },
              '<',
            )
            .to(
              '.header-video',
              {
                top: isMobile ? '0' : '4rem',
                right: isMobile ? '0' : '4rem',
                bottom: isMobile ? '0' : '4rem',
                ease: 'back.out(1.8)',
                duration: 1.75,
                borderRadius: isMobile ? '0' : '2rem',
              },
              '<',
            )
            .to('.header-gradient', { autoAlpha: 1, duration: 1, ease: 'power2.out' }, '<')
            .to('.header-content', { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' }, '<25%')
            .set('.header-intro', { zIndex: -9 })

          ScrollTrigger.create({
            trigger: '.featuregroup1',
            start: 'top bottom',
            animation: gsap
              .timeline()
              .from('.bestlandlord', { opacity: 0, y: -10, duration: 1.25, ease: 'power2.out' }),
          })

          gsap.set('.featuregroup1-item', { opacity: 0, y: isMobile ? 0 : 10, scale: 0.98 })
          gsap.set('.featuregroup1-content, .featuregroup1-title', { opacity: 0 })
          ScrollTrigger.batch('.featuregroup1-item', {
            start: 'top 90%',
            onEnter: (batch) =>
              gsap
                .timeline()
                .to(batch, { autoAlpha: 1, y: 0, scale: 1, stagger: 0.5, duration: 1.25, ease: 'power2.out' }),
            onEnterBack: (batch) =>
              gsap
                .timeline()
                .to(batch, { autoAlpha: 1, y: 0, scale: 1, stagger: 0.5, duration: 0.5, ease: 'power2.out' }),
            onLeave: (batch) =>
              gsap.timeline().to(batch, {
                autoAlpha: 0,
                y: isMobile ? 0 : 10,
                scale: 1,
                stagger: 0.5,
                duration: 1.25,
                ease: 'power2.out',
              }),
          })

          ScrollTrigger.batch('.featuregroup1-title', {
            start: 'top 75%',
            onEnter: (batch) => gsap.timeline().to(batch, { autoAlpha: 1, ease: 'power2.out', duration: 1 }),
          })

          ScrollTrigger.batch('.featuregroup1-content', {
            start: 'top 75%',
            onEnter: (batch) => gsap.timeline().to(batch, { autoAlpha: 1, ease: 'power2.out', duration: 1 }),
          })

          ScrollTrigger.create({
            trigger: '.featuregroup2',
            start: 'top bottom',
            animation: gsap
              .timeline()
              .from('.featuregroup2-image', { opacity: 0, y: -10, duration: 1.25, ease: 'power2.out' })
              .from('.featuregroup2-title', { opacity: 0, x: -5, duration: 1.25, ease: 'power2.out' }, '-=70%'),
          })

          ScrollTrigger.create({
            trigger: '.featuregroup2-content',
            start: 'top bottom',
            animation: gsap.timeline().from('.featuregroup2-content', { opacity: 0 }).from(
              '.featuregroup2-subtitle',
              {
                opacity: 0,
                y: -5,
                duration: 0.5,
                ease: 'power2.out',
              },
              '<',
            ),
          })
        },
        comp,
      ) // <- IMPORTANT! Scopes selector text

      gsap.set('.featuregroup2-listitem', { opacity: 0, y: 10, scale: 0.98 })
      ScrollTrigger.batch('.featuregroup2-listitem', {
        start: 'top 90%',
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, scale: 1, stagger: 0.5, duration: 1.25, ease: 'power2.out' }),
      })

      gsap.set('.featuregroup3-article', { opacity: 0, y: 10, scale: 0.98 })
      ScrollTrigger.batch('.featuregroup3-article', {
        start: 'top 90%',
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, scale: 1, stagger: 0.5, duration: 1.25, ease: 'power2.out' }),
      })

      ScrollTrigger.create({
        trigger: '.price-feature',
        start: 'top bottom',
        onEnter: () => {
          gsap.set('.footer', { zIndex: 0 })
          gsap.set('.header-intro', { zIndex: -10 })
        },
        onLeaveBack: () => {
          gsap.set('.footer', { zIndex: -10 })
          gsap.set('.header-intro', { zIndex: 0 })
        },
      })
    })

    return () => ctx.revert() // cleanup
  }, [])

  return (
    <div ref={comp} className={clsx(isDark && 'dark')}>
      <div className="fixed left-8 top-8 w-40 z-50">
        <Logo />
      </div>
      <div className="fixed inset-0 header-intro">
        <Header />
      </div>

      <div className="mt-[100vh] relative z-50 w-full">
        <FeatureGroup1 />
        <FeatureGroup2 />
        <FeatureGroup3 />
        <Price />
      </div>
      <div className="fixed bottom-0 w-full h-full footer bg-punch flex flex-col justify-end">
        <Launch />
        <Footer />
      </div>
    </div>
  )
}
