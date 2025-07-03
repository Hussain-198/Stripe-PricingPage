import Navbar from "../components/Navbar";
import PricingTable from "../components/PricingTable";
import CarouselPage from "../components/CarouselPage";
import PricingDetails from "../components/PricingDetails";
import FooterPage from "../components/FooterPage";

function StripePricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black w-full">
      <Navbar className="fixed top-0 w-full z-50" />
      <div className="flex flex-col justify-center items-center px-110 w-full pt-24">
        <h1 className="font-sans font-semibold text-[64px] text-[#F7F8F8]">
          Pricing
        </h1>
        <p className="text-gray-400 text-center">
          Use Linear for free with your whole team. Upgrade to enable unlimited
          issues, enhanced security controls, and additional features.
        </p>
      </div>
      <PricingTable className="mt-30" />
      <CarouselPage className="mt-30" />
      <PricingDetails className="max-w-5xl w-full mt-10 mx-auto" />
      <div className="mt-20 flex justify-center">
        <p className="flex items-center text-gray-100 text-sm border border-gray-700 bg-black/30 rounded-full px-6 py-3 hover:bg-gray-900">
          <span className="mr-3">
            <svg
              width="20"
              height="14"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0 5.115h24c0 6.63-5.37 12-12 12s-12-5.37-12-12z"
                fill="url(#paint0_linear)"
              ></path>
              <path
                d="M24 5.115c0 1.658-1.117 3.488-4.058 3.488-2.564 0-5.452-1.778-7.942-3.488C14.64 3.293 17.543.893 19.942.893 22.395.885 24 3.128 24 5.115z"
                fill="url(#paint1_linear)"
              ></path>
              <path
                d="M0 5.115c0 1.657 1.117 3.487 4.058 3.487 2.564 0 5.452-1.777 7.942-3.487C9.36 3.292 6.457.885 4.058.885 1.605.885 0 3.127 0 5.115z"
                fill="url(#paint2_linear)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="12"
                  y1="7.028"
                  x2="12"
                  y2="16.621"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00D924"></stop>
                  <stop offset="1" stop-color="#00CB1B"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="18"
                  y1="1.028"
                  x2="18"
                  y2="9.567"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".156" stop-color="#009C00"></stop>
                  <stop offset="1" stop-color="#00BE20"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="6"
                  y1="9.938"
                  x2="6"
                  y2=".657"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFE37D"></stop>
                  <stop offset="1" stop-color="#FFC900"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          Linear contributes 1% of your subscription to remove CO₂ from the
          atmosphere through Stripe Climate
        </p>
      </div>
      <div className="flex justify-around mt-30 mx-40 pr-20">
        <h3 className="text-white text-4xl">
          Plan the present. Build the future.
        </h3>
        <div className="flex gap-3">
          <button
            className=" py-2 rounded-xl text-base px-4 transition bg-zinc-800 text-white hover:bg-zinc-700 hover:cursor-pointer
            "
          >
            Download
          </button>
          <button className=" py-2 rounded-xl text-base px-4 transition bg-zinc-100 text-black hover:bg-zinc-200 font-semibold hover:cursor-pointer">
            Open app
          </button>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}

export default StripePricingPage;
