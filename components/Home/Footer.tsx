import { Logo } from '@components/Logo/Logo'

export const Footer = () => (
  <footer className="bg-linen dark:bg-hunter text-hunter dark:text-linen px-8 py-16 lg:py-32">
    <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 lg:items-center">
        <div className="w-40">
          <Logo />
        </div>
        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-16">
          <li>Terms of Service.</li>
          <li>Privacy Policy.</li>
        </ul>
      </div>
      <p className="text-sm">2022 Really Good Work Inc.</p>
    </div>
  </footer>
)
