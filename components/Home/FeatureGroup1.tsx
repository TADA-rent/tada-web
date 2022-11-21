import { useRef } from 'react'

export const FeatureGroup1 = () => {
  const app = useRef<HTMLDivElement>(null)

  return (
    <div ref={app} className="featuregroup1">
      <div className="bg-hunter dark:bg-linen text-linen dark:text-hunter pt-24 pb-24 lg:pb-64 min-h-screen">
        <div className="max-w-screen-2xl mx-auto px-0 md:px-6 lg:px-8">
          <h2
            className="px-6 md:px-0 text-4xl text-center lg:text-7xl  tracking-tighter text-punch col-span-2 leading-0 lg:leading-snug my-8 lg:mt-40 mb-4 bestlandlord font-bold"
            data-speed="0.95"
          >
            Become the Best Landlord Ever.
          </h2>
          <div className="mx-auto max-w-prose text-center text-lg lg:text-2xl leading-loose px-6 text-linen/90 dark:text-hunter/90">
            <p>
              We believe that being a landlord doesn't end when you post the listing for rent. TADA! provides the tools
              to help you manage your long-term rental business. That way, renters can get into housing quickly and with
              low effort.
            </p>
          </div>
          <div className="mt-24 px-3 md:px-0 lg:mt-56 space-y-16 lg:space-y-48">
            <article
              className="bg-[#F2663F] rounded-2xl shadow-cool relative lg:aspect-video pt-8 pb-96 lg:py-12 px-6 lg:px-8 overflow-hidden bg-homelandingpage bg-center bg-cover featuregroup1-item"
              data-speed="0.9"
            >
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-hunter/90 to-transparent" />
              <div className="lg:w-2/3 relative space-y-4" data-speed="0.95">
                <h3 className="text-3xl lg:text-6xl font-bold text-punch leading-snug lg:leading-tight tracking-tight  featuregroup1-title">
                  Showcase your place.
                </h3>

                <p className="lg:max-w-xl text-base lg:text-xl font-semibold tracking-tight leading-loose text-linen featuregroup1-content">
                  TADA! encourages you to share your listing to get the most exposure. We provide a unique URL for your
                  listing that you can embed and share. No more copying and pasting the same information on multiple
                  sites - we’ll help with that. Upload unlimited images, videos and virtual tours to your listing.
                </p>
              </div>
            </article>
            <article
              className="bg-[#F2663F] rounded-2xl shadow-cool relative lg:aspect-video pt-8 pb-96 lg:py-12 px-6 lg:px-8 overflow-hidden bg-homeshare bg-center bg-cover featuregroup1-item"
              data-speed="0.9"
            >
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-hunter/90 to-transparent" />
              <div className="lg:w-1/2 relative space-y-4" data-speed="0.95">
                <h3 className="text-3xl lg:text-6xl font-bold text-punch leading-snug lg:leading-tight tracking-tight  featuregroup1-title">
                  Tell the world.
                </h3>

                <p className="lg:max-w-xl text-base lg:text-xl font-semibold tracking-tight leading-loose text-linen featuregroup1-content">
                  TADA! encourages you to share your listing to get the most exposure. We provide a unique URL for your
                  listing that you can embed and share. No more copying and pasting the same information on multiple
                  sites - we’ll help with that. Upload unlimited images, videos and virtual tours to your listing.
                </p>
              </div>
            </article>
            <article
              className="bg-[#F2663F] rounded-2xl shadow-cool relative lg:aspect-video pt-8 pb-96 lg:py-12 px-6 lg:px-8 overflow-hidden bg-homemaintenance bg-center bg-cover featuregroup1-item"
              data-speed="0.9"
            >
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-hunter/90 to-transparent" />
              <div className="lg:w-1/2 relative space-y-4" data-speed="0.95">
                <h3 className="text-3xl lg:text-6xl font-bold text-punch leading-snug lg:leading-tight tracking-tight  featuregroup1-title">
                  Keep it nice.
                </h3>

                <p className="lg:max-w-xl text-base lg:text-xl font-semibold tracking-tight leading-loose text-linen featuregroup1-content">
                  TADA! encourages you to share your listing to get the most exposure. We provide a unique URL for your
                  listing that you can embed and share. No more copying and pasting the same information on multiple
                  sites - we’ll help with that. Upload unlimited images, videos and virtual tours to your listing.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
