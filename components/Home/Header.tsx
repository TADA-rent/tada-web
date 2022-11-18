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
    <header className="min-h-screen relative overflow-hidden cool-shadow dark:bg-hunter bg-linen">
      <div className="absolute inset-32 overflow-hidden header-video shadow-cool ">
        <video
          src="homevideo.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="inset-0 absolute w-full h-full object-cover object-center"
        ></video>
        <div className="bg-gradient-to-t from-hunter/80  to-transparent absolute inset-0 header-gradient" />
      </div>
      <div className="h-full w-full absolute bg-punch top-0 left-0 header-curtain flex items-center justify-center overflow-hidden shadow-cool z-50">
        <p
          className="font-black font-title uppercase text-hunter header-tada tracking-widest leading-0 absolute top-64"
          style={{ fontSize: '25vw' }}
        >
          TADA!
        </p>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-screen-2xl mx-auto h-full">
          <div className="h-full lg:gap-0">
            <div className="w-full absolute top-1/4 mt-12 left-0 text-center">
              <h1 className="text-punch leading-0 tracking-tight header-title font-title" style={{ fontSize: '12vw' }}>
                Rent Better.
              </h1>
            </div>
            <div className="lg:w-full space-y-2 lg:pb-0 header-content text-center absolute left-0 bottom-32">
              <div className="max-w-prose mx-auto space-y-6">
                <p className="font-bold text-2xl leading-relaxed dark:text-linen text-hunter">
                  TADA! is creating the best tools for renters and landlords to work together. We're focused on
                  improving housing access for all.
                </p>
                <p className="text-punch uppercase text-5xl tracking-widest font-title">Coming Soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
