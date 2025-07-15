"use client";

import Banner from "./Banner";
import Footer from "./Footer";
import ContactInputs from "./ContactInputs";
import BlobBackground from "@/components/BlobBackground";
import NoiseOverlay from "@/components/NoiseOverlay";

export default function ContactPage() {
  return (
    <>
      <div className="relative z-20 flex min-h-screen flex-col justify-between bg-black">
        <BlobBackground />

        {/* Grid overlay for structure (optional, can be removed) */}
        {/* Main content */}

        <div className="flex w-full flex-1 flex-col gap-16 px-8 pt-8 lg:flex-row">
          {/* Left: Heading and description */}
          <div className="max-w-full flex-1 lg:max-w-2/5">
            <h1 className="font-funnelDisplay xs:text-5xl mb-8 text-4xl font-bold text-white/95 lg:mb-8 xl:text-7xl">
              We&apos;d love to hear
              <br />
              your next big move.
            </h1>
            <div className="max-w-full space-y-4 text-lg font-normal text-white/80 md:max-w-1/2 lg:mt-16 lg:max-w-6/8 lg:space-y-5">
              <p>Something missing?</p>
              <p>
                Maybe it&apos;s clarity, maybe it&apos;s momentum — whatever it
                is, we specialize in getting you unstuck.
              </p>

              <p>You don&apos;t have to do it alone.</p>
            </div>
          </div>
          {/* Right: Four name input fields */}
          <ContactInputs />
        </div>

        {/* Banner */}
        <Banner />

        {/* Social links */}
        <Footer />
      </div>
    </>
  );
}
