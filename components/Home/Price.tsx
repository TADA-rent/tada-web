import Image from 'next/image'
import Magic from 'public/home/magic.png'
export const Price = () => {
  return (
    <div className="bg-hunter dark:bg-linen text-linen dark:text-hunter min-h-screen flex items-center overflow-x-hidden price-feature  shadow-cool">
      <div className="max-w-screen-2xl mx-auto px-8 pt-32 pb-32 lg:pb-96 w-full grid lg:grid-cols-12 gap-24 lg:gap-8 relative overflow">
        <div className=" lg:col-span-8 aspect-square shadow-cool rounded-2xl left-0  bg-[#F2663F] p-4 lg:p-8 relative">
          <h2 className="font-title text-5xl lg:text-[8vw] text-linen leading-0 lg:leading-[80%] tracking-tight mb-16">
            Free for all.
          </h2>
          <div className="absolute lg:left-1/3 w-full top-20 lg:top-72" data-speed="0.9">
            <Image src={Magic} alt="showcase image" priority />
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="space-y-8 max-w-xl lg:p-6">
            <p className="text-lg lg:text-2xl text-linen dark:text-hunter">
              Renters pay nothing, ever.
              <br /> You’re already spending money on your new home.
            </p>
            <p className="text-lg lg:text-2xl text-linen dark:text-hunter">
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
