export const Price = () => {
  return (
    <div className="bg-hunter dark:bg-linen text-linen dark:text-hunter flex price-feature shadow-cool py-24 lg:py-72">
      <div className="max-w-screen-2xl mx-auto px-8 w-full  flex flex-col justify-center items-center">
        <div className="grid lg:grid-cols-6">
          <h2 className="lg:col-span-3 font-bold text-5xl lg:text-9xl text-punch leading-0 lg:leading-[90%] tracking-tight lg:mb-12 ">
            Free for everyone.
          </h2>
          <div className="lg:col-span-2 lg:col-start-5 text-lg pt-6 space-y-4 !leading-relaxed">
            <p className="text-2xl lg:text-3xl text-linen/90 dark:text-hunter/90 font-bold tracking-tight">
              We're open-source.
            </p>
            <p className="text-linen/80 dark:text-hunter/80">
              Our goal is to fundamentally change the rental landscape with modern tools. If you're a landlord, you're
              running a business. We want to help you run it better to better serve your customers.
            </p>
            <p className="text-linen/80 dark:text-hunter/80">
              Follow our work on{' '}
              <a href="https://github.com/orgs/TADA-rent/repositories" className="text-punch underline">
                Github
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 lg:gap-16 lg:px-8 mt-20 lg:mt-32 mb-8 w-full max-w-screen-xl">
          <div className="col-span-1 lg:col-span-4 bg-gradient-to-tl dark:from-hunter-400/80 from-linen-400/20 dark:to-hunter/60 to-linen/40 rounded-2xl p-6 lg:p-8 lg:aspect-square shadow-cool flex flex-col justify-between w-full ">
            <h3 className="text-linen text-2xl lg:text-4xl tracking-tight font-bold">For Renters</h3>

            <div className=" space-y-2 py-8 lg:py-0">
              <p className="text-linen text-5xl lg:text-9xl tracking-tight font-bold">Free.</p>
              <p className="text-linen/70 text-lg lg:text-2xl !leading-tight font-bold">Forever. Seriously.</p>
            </div>
            <p className="lg:text-lg text-linen  pt-8 pb-2 border-t border-linen/20">
              Renters pay nothing, ever.
              <br /> It's not kind to charge people to find a home.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-4 bg-gradient-to-tl dark:from-punch-500/80 from-punch-400/50 dark:to-punch/80 to-punch/90 rounded-2xl p-6 lg:p-8 lg:aspect-square shadow-cool flex flex-col justify-between w-full ">
            <h3 className="text-linen text-2xl lg:text-4xl tracking-tight font-bold">For Owners.</h3>

            <div className=" space-y-2 py-8 lg:py-0">
              <p className="text-linen font-bold text-5xl lg:text-9xl tracking-tight">
                $0
                <span className="ml-3 inline-block w-20 lg:w-32 font-bold text-linen/70 tracking-normal text-sm lg:text-lg leading-tight">
                  monthly for first unit.
                </span>
              </p>
              <p className="text-linen/70 text-lg lg:text-2xl !leading-tight font-bold">
                $20 per additional per month.
              </p>
            </div>

            <p className="lg:text-lg text-linen  pt-8 pb-2 border-t border-linen/20">
              The first unit is always free with complete access to all features.
              <br /> Add more units for $20 each per month.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-6 lg:col-start-2 lg:bg-gradient-to-tl dark:from-hunter-800/60 from-linen-400/10 dark:to-hunter-800/50 to-linen/10 rounded-2xl lg:p-6 lg:py-12 lg:px-10 lg:shadow-cool  w-full  flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10">
            <p className="text-linen/80 dark:text-hunter/80 text-lg leading-relaxed w-full">
              TADA! is a project focused on the community, not on profits. With your help, TADA! can reach a larger
              audience and continue to deliver change to the rental housing industry.
            </p>

            <a
              href="https://github.com/sponsors/TADA-rent"
              className="whitespace-nowrap block font-bold bg-punch/80 hover:bg-punch/50 py-2.5 px-2 lg:px-4  text-linen text-lg lg:text-xl rounded-md text-center w-full lg:w-auto"
            >
              Support Us.
            </a>
          </div>
        </div>
        <p className="text-base leading-loose text-linen/70 dark:text-hunter/60">
          <a href="mailto:drew@tadarent.com">Enterprise? Let's talk.</a>
        </p>
      </div>
    </div>
  )
}
