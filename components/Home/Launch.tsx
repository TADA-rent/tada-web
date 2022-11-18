export const Launch = () => {
  return (
    <div className="bg-punch text-linen">
      <div className="max-w-screen-xl mx-auto px-6 py-32 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
          <div className="col-span-3 space-y-6">
            <h2 className="text-3xl lg:text-7xl font-extrabold tracking-tight">We’re launching in Canada soon.</h2>
            <p className="text-lg">Sign up to be informed when we’ll be available.</p>
          </div>
          <div className="col-span-3 flex items-center justify-end">
            <form className="w-full max-w-lg ">
              <div className="relative">
                <input
                  type="email"
                  className="outline-none w-full appearance-none bg-transparent font-bold border-0 border-b border-b-linen font-base px-4 pt-4 pb-3 lg:pb-5 pr-32 focus:ring-0 focus:border-b-linen"
                />
                <button className="block font-title tracking-wide absolute bg-linen hover:bg-linen/90 text-punch top-0 right-0 py-2.5 px-2 lg:px-4 text-sm lg:text-xl rounded-md focus:ring-0 focus:outline-punch focus:outline-offset-2 focus:outline-4">
                  Sign me up!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
