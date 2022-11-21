import { gsap } from 'gsap'
import { GSDevTools } from 'gsap/dist/GSDevTools'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText, GSDevTools)
}

export const Header = () => {
  // const app = useRef<HTMLDivElement>(null)
  // const heading = useRef<HTMLHeadingElement>(null)
  // const content = useRef<HTMLHeadingElement>(null)

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline()

  //     tl.from(app.current, { opacity: 0 }).to(heading.current, {
  //       opacity: 1,
  //     })

  //     tl.to(app.current, {
  //       scrollTrigger: {
  //         scrub: 1,
  //         pin: heading.current,
  //         start: '10% center',
  //         end: '250% bottom',
  //         // markers: true,
  //       },
  //     }).to(content.current, {
  //       opacity: 1,
  //     })
  //   }, app) // <- Scope!

  //   return () => ctx.revert()
  // }, [])

  return (
    <header className="min-h-screen relative overflow-hidden cool-shadow dark:bg-hunter bg-linen px-6">
      <div className="absolute inset-0 overflow-hidden header-video shadow-cool ">
        <video
          src="homevideo.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="inset-0 absolute w-full h-full object-cover object-center"
        ></video>
        <div className="bg-gradient-to-t lg:bg-gradient-to-r from-hunter/80  to-transparent absolute inset-0 header-gradient" />
      </div>
      <div className="h-full w-full absolute bg-punch top-0 left-0 header-curtain flex items-center justify-center overflow-hidden shadow-cool z-50">
        <p
          className="font-black  uppercase  text-hunter header-tada tracking-widest leading-0 absolute top-64"
          style={{ fontSize: '25vw' }}
        >
          TADA!
        </p>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-screen-2xl px-6 mx-auto w-full h-full flex flex-col justify-center pt-16 lg:pb-0 lg:block relative">
          <h1 className="w-1/2 text-punch font-black text-8xl lg:text-[10vw] tracking-tight header-title  absolute top-1/4 lg:top-1/2 left-6 -space-y-96">
            Rent Better.
          </h1>

          <div className="lg:w-1/2 space-y-2 lg:pb-0 header-content lg:absolute top-1/2 left-6 pt-48 lg:pr-32">
            <div className="max-w-prose w-full space-y-8">
              <p className="font-bold text-xl lg:text-2xl !leading-relaxed text-linen lg:dark:text-linen lg:text-hunter">
                TADA! is creating the best open source tools for renters and landlords to work together. We're focused
                on improving rental housing for all.
              </p>
              <p className="text-punch uppercase lg:text-2xl tracking-widest font-black">Coming Soon.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
