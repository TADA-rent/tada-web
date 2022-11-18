import Image from 'next/image'
import Applications from 'public/home/applications.png'

export const FeatureGroup3 = () => {
  return (
    <div className="bg-linen dark:bg-hunter text-hunter dark:text-linen px-8 featuregroup3">
      <div className="max-w-screen-xl mx-auto py-16 lg:py-64 space-y-16 lg:space-y-72">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 featuregroup3-article">
          <div className="order-2 lg:order-1">
            <h2
              className="text-3xl lg:text-5xl font-extrabold text-punch col-span-2 leading-snug lg:leading-snug tracking-tight"
              data-speed="0.975"
            >
              Accountability.
            </h2>
            <p className="lg:text-lg leading-loose mt-4 lg:mt-8" data-speed="0.98">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem
              malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.
            </p>
          </div>
          <div
            className="order-1 lg:order-2 bg-gradient-to-tl dark:from-linen-400/20 from-hunter-400/20 dark:to-[#F2663F] to-[#F2663F] shadow-cool rounded-2xl col-span-1  relative aspect-video pt-8 px-20"
            data-speed="1.05"
          >
            <div className="lg:mt-8 lg:px-12 object-cover">
              <Image src={Applications} alt="showcase image" priority />
            </div>
          </div>
        </article>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 featuregroup3-article">
          <div className="order-2">
            <h2
              className="text-3xl lg:text-5xl font-extrabold text-punch col-span-2 leading-snug lg:leading-snug tracking-tight"
              data-speed="0.975"
            >
              Find your community.
            </h2>
            <p className="lg:text-lg leading-loose mt-4 lg:mt-8" data-speed="0.98">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem
              malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.
            </p>
          </div>
          <div
            className="order-1 bg-gradient-to-br dark:from-linen-400/20 from-hunter-400/20 dark:to-[#F2663F] to-[#F2663F] shadow-cool rounded-2xl col-span-1  relative pt-8 px-20"
            data-speed="1.05"
          >
            <div className="lg:mt-8 lg:px-12 object-cover">
              <Image src={Applications} alt="showcase image" priority />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
