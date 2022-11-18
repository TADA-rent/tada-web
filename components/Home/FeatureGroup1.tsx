import { useRef } from 'react'

export const FeatureGroup1 = () => {
  const app = useRef<HTMLDivElement>(null)

  return (
    <div ref={app} className="featuregroup1">
      <div className="bg-hunter dark:bg-linen text-linen dark:text-hunter pt-12 pb-24 lg:pb-64 min-h-screen">
        <div className="max-w-screen-2xl mx-auto px-2 lg:px-8">
          <h2
            className="text-2xl text-center lg:text-8xl font-title tracking-tight text-punch col-span-2 leading-snug lg:leading-snug my-8 lg:my-40 bestlandlord"
            data-speed="0.95"
          >
            Become the Best Landlord Ever.
          </h2>
          <div className="mt-24 lg:mt-32 space-y-32 lg:space-y-72">
            <article
              className="bg-[#F2663F] rounded-2xl shadow-cool relative lg:aspect-video pt-8 pb-96 lg:py-12 px-6 lg:px-8 overflow-hidden bg-homelandingpage bg-center bg-cover featuregroup1-item"
              data-speed="0.9"
            >
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-hunter/90 to-transparent" />
              <div className="lg:w-1/2 relative space-y-4" data-speed="0.95">
                <h3 className="text-3xl lg:text-7xl font-extrabold text-punch leading-snug lg:leading-tight tracking-tight  featuregroup1-title">
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
                <h3 className="text-3xl lg:text-7xl font-extrabold text-punch leading-snug lg:leading-tight tracking-tight  featuregroup1-title">
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
                <h3 className="text-3xl lg:text-7xl font-extrabold text-punch leading-snug lg:leading-tight tracking-tight  featuregroup1-title">
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
