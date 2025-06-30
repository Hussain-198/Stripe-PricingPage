function PricingTale({ className = "" }) {
  return (
    <div className={`flex flex-col items-center w-full mt-8 px-4 ${className}`}>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {/* Free Plan */}
        <div className="bg-gray-950 rounded-l-xl p-8 flex flex-col min-h-[520px] border border-[#232329]">
          <h2 className="text-2xl font-semibold text-white mb-2">Free</h2>
          <p className="text-lg text-white mb-4 border-b border-[#232329]">
            $0
          </p>
          <p className="text-gray-400 mb-6 border-b border-[#232329] pb-4">
            Free for everyone
          </p>
          <ul className="flex-1 space-y-3 mb-8">
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> Unlimited members
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> 2 teams
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> 250 issues
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span>{" "}
              <a href="#" className="underline">
                Slack
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                GitHub
              </a>
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> API access
            </li>
          </ul>
          <button className="w-full py-3 rounded-lg bg-[#232329] text-white text-sm font-semibold hover:cursor-pointer hover:bg-zinc-700">
            Get started
          </button>
        </div>
        {/* Basic Plan */}
        <div className="bg-gray-950 p-8 flex flex-col min-h-[520px] border border-[#232329]">
          <h2 className="text-2xl font-semibold text-white mb-2">Basic</h2>
          <p className="text-lg text-white mb-4 border-b border-[#232329]">
            US$8 <span className="text-gray-400 text-base">per user/month</span>
          </p>
          <div className="flex items-center mb-6 border-b border-[#232329] pb-4">
            <span className="bg-[#232329] rounded-full px-3 py-1 text-xs text-white mr-2">
              Billed yearly
            </span>
          </div>
          <ul className="flex-1 space-y-3 mb-8">
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> All Free features
              +
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> 5 teams
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> Unlimited issues
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> Unlimited file
              uploads
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> Admin roles
            </li>
          </ul>
          <button className="w-full py-3 rounded-lg bg-[#232329] text-white text-sm font-semibold hover:cursor-pointer hover:bg-zinc-700">
            Get started
          </button>
        </div>
        {/* Business Plan */}
        <div className="bg-gray-950 rounded-2xl p-8 flex flex-col min-h-[560px] border-2 border-white/20 shadow-lg scale-105 z-10">
          <h2 className="text-2xl font-semibold text-white mb-2">Business</h2>
          <p className="text-lg text-white mb-4 border-b border-[#232329]">
            US$14{" "}
            <span className="text-gray-400 text-base">per user/month</span>
          </p>
          <div className="flex items-center mb-6 border-b border-[#232329] pb-4">
            <span className="bg-[#18181B] rounded-full px-3 py-1 text-xs text-white mr-2">
              Billed yearly
            </span>
          </div>
          <ul className="flex-1 space-y-3 mb-8">
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> All Basic features
              +
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span>{" "}
              <a href="#" className="underline">
                Linear Asks
              </a>
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> Unlimited teams
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> Private teams and
              guests
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span>{" "}
              <a href="#" className="underline">
                Linear Insights
              </a>
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> Triage
              responsibility
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span>{" "}
              <a href="#" className="underline">
                Zendesk
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Intercom
              </a>
            </li>
          </ul>
          <button className="w-full py-3 rounded-lg bg-white text-black text-sm font-semibold mb-2 hover:cursor-pointer">
            Get started
          </button>
          <span className="text-center text-gray-400 text-sm">
            or{" "}
            <a href="#" className="underline text-white">
              contact sales
            </a>
          </span>
        </div>
        {/* Enterprise Plan */}
        <div className="bg-gray-950 rounded-r-xl p-8 flex flex-col min-h-[520px] border border-[#232329]">
          <h2 className="text-2xl font-semibold text-white mb-2">Enterprise</h2>
          <p className="text-lg text-white mb-4 border-b border-[#232329]">
            Contact us
          </p>
          <p className="text-gray-400 mb-6 border-b border-[#232329] pb-4">
            Annual billing only
          </p>
          <ul className="flex-1 space-y-3 mb-8">
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> All Business
              features +
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> Advanced{" "}
              <a href="#" className="underline">
                Linear Asks
              </a>
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> Issue{" "}
              <a href="#" className="underline">
                SLAs
              </a>
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span>{" "}
              <a href="#" className="underline">
                SAML
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                SCIM
              </a>
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> Advanced security
            </li>
            <li className="flex items-center text-gray-200">
              <span className="text-indigo-400 mr-2">✔</span> Migration and
              onboarding support
            </li>
          </ul>
          <button className="w-full py-3 rounded-lg bg-[#232329] text-white text-sm font-semibold hover:cursor-pointer hover:bg-zinc-700">
            Request trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingTale;
