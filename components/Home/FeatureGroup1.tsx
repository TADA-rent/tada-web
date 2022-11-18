import { useRef } from 'react'

export const FeatureGroup1 = () => {
  const app = useRef<HTMLDivElement>(null)

  return (
    <div ref={app} className="featuregroup1">
      <div className="bg-hunter dark:bg-linen text-linen dark:text-hunter pt-12 pb-64 min-h-screen">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2
            className="text-3xl text-center lg:text-8xl font-extrabold tracking-tight text-punch col-span-2 leading-snug lg:leading-snug my-40 bestlandlord"
            data-speed="0.95"
          >
            Best Landlord Ever
          </h2>
          <div className="mt-24 lg:mt-32 space-y-72">
            <article
              className="bg-[#F2663F] rounded-2xl shadow-cool relative aspect-video py-12 px-8 overflow-hidden bg-homelandingpage bg-cover featuregroup1-item"
              data-speed="0.9"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-hunter/90 to-transparent" />
              <div className="w-1/2 relative space-y-4" data-speed="0.95">
                <h3 className="text-3xl lg:text-7xl font-extrabold text-punch leading-snug lg:leading-tight tracking-tight  featuregroup1-title">
                  Showcase your place.
                </h3>

                <p className="max-w-xl text-xl font-semibold tracking-tight leading-loose text-linen featuregroup1-content">
                  TADA! encourages you to share your listing to get the most exposure. We provide a unique URL for your
                  listing that you can embed and share. No more copying and pasting the same information on multiple
                  sites - we’ll help with that. Upload unlimited images, videos and virtual tours to your listing.
                </p>
              </div>
            </article>
            <article
              className="bg-[#F2663F] rounded-2xl shadow-cool relative aspect-video py-12 px-8 overflow-hidden bg-homeshare bg-cover featuregroup1-item"
              data-speed="0.9"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-hunter/90 to-transparent" />
              <div className="mx-auto w-1/2 relative space-y-4 text-center" data-speed="0.95">
                <h3 className="text-3xl lg:text-7xl font-extrabold text-punch leading-snug lg:leading-tight tracking-tight featuregroup1-title">
                  Tell the world.
                </h3>

                <p className="text-xl font-semibold tracking-tight leading-loose text-linen featuregroup1-content">
                  TADA! encourages you to share your listing to get the most exposure. We provide a unique URL for your
                  listing that you can embed and share. No more copying and pasting the same information on multiple
                  sites - we’ll help with that. Upload unlimited images, videos and virtual tours to your listing.
                </p>
              </div>
            </article>
            <article
              className="bg-[#F2663F] rounded-2xl shadow-cool relative aspect-video py-12 px-8 overflow-hidden bg-homemaintenance bg-cover featuregroup1-item flex justify-end"
              data-speed="0.9"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-hunter/90 to-transparent" />
              <div className="w-1/2 relative space-y-4" data-speed="0.95">
                <h3 className="text-3xl lg:text-7xl font-extrabold text-punch leading-snug lg:leading-tight tracking-tight featuregroup1-title">
                  Keep it nice.
                </h3>

                <p className="max-w-xl text-xl font-semibold tracking-tight leading-loose text-linen featuregroup1-content">
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
