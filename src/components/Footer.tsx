export function Footer() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source src="/video/Footer_1.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-8 pt-10 lg:px-20 lg:pt-16">
        {/* Top Section */}
        <div className="flex flex-col justify-between pb-12 lg:flex-row">
          {/* Left - Contact Information */}
          <div className="space-y-3">
            <h3 className="text-lg leading-none font-light text-neutral-200">
              Contact us
            </h3>
            <p className="text-3xl leading-none font-semibold text-white">
              eazweb@gmail.com
            </p>
            <div className="mt-16 flex space-x-8 text-base text-white">
              <span>LinkedIn</span>
              <span>Twitter</span>
              <span>YouTube</span>
            </div>
          </div>

          {/* Right - Navigation Links */}
          <div className="font-funnelDisplay flex flex-col space-y-6 text-3xl font-medium text-white">
            <span>Work with us</span>
            <span>Drop a message</span>
            <span>Home</span>
          </div>
        </div>

        {/* Middle Separator */}
        <div className="h-px w-full bg-neutral-400"></div>

        {/* Bottom - Large EAZWEB Text */}
        <div className="flex justify-center">
          <h1 className="font-funnelDisplay text-[21vw] leading-none font-bold tracking-tight text-white">
            EAZWEB
          </h1>
        </div>
      </div>
    </div>
  );
}
