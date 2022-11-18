import Image from 'next/image'
import Applications from 'public/home/applications.png'
import Messaging from 'public/home/messaging.png'
import Schedule from 'public/home/schedule.png'

export const FeatureGroup2 = () => {
  return (
    <div className="bg-punch py-16 lg:pt-40 lg:pb-72 space-y-8 lg:space-y-64">
      <div className="text-center max-w-screen-xl mx-auto px-6 lg:px-8 mt-0 lg:mt-32 featuregroup2-content">
        <h2 className="text-5xl lg:text-8xl font-title tracking-tight text-linen col-span-2 leading-0 lg:leading-snug featuregroup2-subtitle">
          Tools for Renters and Owners.
        </h2>
        <ul className="grid lg:grid-cols-2 gap-8 mt-16 featuregroup2-list">
          <li className="bg-gradient-to-bl from-hunter-400/20 to-[#F2663F] shadow-cool rounded-2xl col-span-1 aspect-square relative pt-4 lg:pt-8 px-8 lg:px-20 overflow-hidden featuregroup2-listitem">
            <h3 className="font-extrabold text-linen text-3xl mb-4 tracking-tight" data-speed="0.98">
              Applications.
            </h3>
            <p className="lg:text-lg text-linen/90" data-speed="0.975">
              Sed posuere consectetur est at lobortis. Donec sed odio dui.
            </p>
            <div className="mt-8">
              <Image src={Applications} alt="showcase image" priority />
            </div>
          </li>
          <li className="bg-gradient-to-tl from-hunter-400/20 to-[#F2663F] shadow-cool rounded-2xl col-span-1 aspect-square relative pt-4 lg:pt-8 px-8 lg:px-20 overflow-hidden featuregroup2-listitem">
            <h3 className="font-extrabold text-linen text-3xl mb-4 tracking-tight" data-speed="0.98">
              Viewing Schedules.
            </h3>
            <p className="lg:text-lg text-linen/90" data-speed="0.975">
              Sed posuere consectetur est at lobortis. Donec sed odio dui.
            </p>
            <div className="mt-8 px-12">
              <Image src={Schedule} alt="showcase image" priority />
            </div>
          </li>
          <li className="bg-gradient-to-br from-hunter-400/20 to-[#F2663F] shadow-cool rounded-2xl col-span-1 aspect-square relative pt-4 lg:pt-8 px-8 lg:px-20 overflow-hidden featuregroup2-listitem">
            <h3 className="font-extrabold text-linen text-3xl mb-4 tracking-tight" data-speed="0.98">
              Messaging.
            </h3>
            <p className="lg:text-lg text-linen/90">Sed posuere consectetur est at lobortis. Donec sed odio dui.</p>
            <div className="mt-8 px-12">
              <Image src={Messaging} alt="showcase image" priority />
            </div>
          </li>
          <li className="bg-gradient-to-tr from-hunter-400/20 to-[#F2663F] shadow-cool rounded-2xl col-span-1 aspect-square relative pt-4 lg:pt-8 px-8 lg:px-20 featuregroup2-listitem">
            <h3 className="font-extrabold text-linen text-3xl mb-4 tracking-tight" data-speed="0.98">
              Virtual Agent.
            </h3>
            <p className="lg:text-lg text-linen/90">Sed posuere consectetur est at lobortis. Donec sed odio dui.</p>
          </li>
        </ul>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 featuregroup2 ">
        <div className="w-full aspect-square lg:aspect-video bg-red-500 rounded-2xl flex lg:justify-end text-center lg:text-right p-6 lg:p-12 bg-feature2 bg-cover bg-center featuregroup2-image shadow-cool">
          <h2
            className="font-extrabold text-punch text-3xl lg:text-7xl w-full lg:w-1/2 tracking-tight featuregroup2-title"
            data-speed="0.98"
          >
            Get back to the important things.
          </h2>
        </div>
      </div>
    </div>
  )
}
