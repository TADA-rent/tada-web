export const Price = () => {
  return (
    <div className="bg-hunter dark:bg-linen text-linen dark:text-hunter min-h-screen flex items-center overflow-x-hidden price-feature">
      <div className="max-w-screen-2xl mx-auto px-8 py-32 w-full grid grid-cols-12 gap-8 relative overflow">
        <div className=" col-span-8 aspect-square shadow-cool rounded-2xl left-0  bg-[#F2663F] p-16">
          <h2 className="font-bold text-7xl lg:text-9xl text-linen leading-tighter tracking-tight mb-16">
            Free for all.
          </h2>
        </div>
        <div className="col-span-4">
          <div className="space-y-8 max-w-xl">
            <p className="text-3xl text-linen dark:text-hunter">
              Renters pay nothing, ever. You’re already spending money on your new home.
            </p>
            <p className="text-2xl text-linen dark:text-hunter">
              Owners, you too. Your first rental unit is free.
              <br /> Each additional property is just $12/month.
            </p>
            <p className="text-base leading-loose text-linen/60 dark:text-hunter/60">Enterprise? Let's talk.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
