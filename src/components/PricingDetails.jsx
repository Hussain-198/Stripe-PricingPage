import React from "react";

const features = [
  {
    section: "Limits",
    items: [
      {
        label: "Members",
        Free: "Unlimited",
        Basic: "Unlimited",
        Business: "Unlimited",
        Enterprise: "Unlimited",
      },
      {
        label: "File uploads",
        Free: "10MB",
        Basic: "Unlimited",
        Business: "Unlimited",
        Enterprise: "Unlimited",
      },
      {
        label: "Issues",
        Free: "250",
        Basic: "Unlimited",
        Business: "Unlimited",
        Enterprise: "Unlimited",
      },
      {
        label: "Teams",
        Free: "2",
        Basic: "5",
        Business: "Unlimited",
        Enterprise: "Unlimited",
      },
    ],
  },
  {
    section: "Features",
    items: [
      {
        label: "Issues, projects, cycles, and initiatives",
        Free: true,
        Basic: true,
        Business: true,
        Enterprise: true,
      },
      {
        label: "Customer requests",
        Free: true,
        Basic: true,
        Business: true,
        Enterprise: true,
      },
      {
        label: "Integrations",
        Free: true,
        Basic: true,
        Business: true,
        Enterprise: true,
      },
      {
        label: "API and webhook access",
        Free: true,
        Basic: true,
        Business: true,
        Enterprise: true,
      },
      {
        label: "Import and export",
        Free: true,
        Basic: true,
        Business: true,
        Enterprise: true,
      },
      {
        label: "Triage",
        Free: true,
        Basic: true,
        Business: true,
        Enterprise: true,
      },
      {
        label: "Issue sync",
        Free: true,
        Basic: true,
        Business: true,
        Enterprise: true,
      },
    ],
  },
  {
    section: "Team management",
    items: [
      {
        label: "Sub-teams",
        Free: false,
        Basic: false,
        Business: true,
        Enterprise: true,
      },
      {
        label: "Private teams",
        Free: false,
        Basic: false,
        Business: true,
        Enterprise: true,
      },
      {
        label: "Guest accounts",
        Free: false,
        Basic: false,
        Business: true,
        Enterprise: true,
      },
    ],
  },
  {
    section: "Analytics & Reporting",
    items: [
      {
        label: "Progress reports",
        Free: true,
        Basic: true,
        Business: true,
        Enterprise: true,
      },
      {
        label: "Insights",
        Free: false,
        Basic: false,
        Business: true,
        Enterprise: true,
      },
      {
        label: "Data warehouse sync",
        Free: false,
        Basic: false,
        Business: false,
        Enterprise: true,
      },
    ],
  },
  {
    section: "Security",
    items: [
      {
        label: "Google SSO",
        Free: true,
        Basic: true,
        Business: true,
        Enterprise: true,
      },
      {
        label: "Admin roles",
        Free: false,
        Basic: true,
        Business: true,
        Enterprise: true,
      },
      {
        label: "Advanced authentication",
        Free: false,
        Basic: false,
        Business: true,
        Enterprise: true,
      },
      {
        label: "IP restrictions",
        Free: false,
        Basic: false,
        Business: false,
        Enterprise: true,
      },
      {
        label: "SCIM provisioning",
        Free: false,
        Basic: false,
        Business: false,
        Enterprise: true,
      },
      {
        label: "Domaining claiming",
        Free: false,
        Basic: false,
        Business: false,
        Enterprise: true,
      },
      {
        label: "Audit log",
        Free: false,
        Basic: false,
        Business: false,
        Enterprise: true,
      },
      {
        label: "Third-party app management",
        Free: false,
        Basic: false,
        Business: false,
        Enterprise: true,
      },
      {
        label: "HIPAA compliance",
        Free: false,
        Basic: false,
        Business: false,
        Enterprise: true,
      },
    ],
  },
  {
    section: "Support",
    items: [
      {
        label: "Priority support",
        Free: false,
        Basic: false,
        Business: false,
        Enterprise: true,
      },
      {
        label: "Account manager",
        Free: false,
        Basic: false,
        Business: false,
        Enterprise: true,
      },
      {
        label: "Custom terms",
        Free: false,
        Basic: false,
        Business: false,
        Enterprise: true,
      },
      {
        label: "Uptime SLA",
        Free: false,
        Basic: false,
        Business: false,
        Enterprise: true,
      },
    ],
  },
];

const plans = ["Free", "Basic", "Business", "Enterprise"];

const check = (
  <svg
    className="w-4 h-4 border rounded-xl bg-indigo-400 text-black inline"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const cross = (
  <svg
    className="w-4 h-4 rounded-xl bg-gray-500 text-black inline"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const planButtons = [
  {
    label: "Get started",
    sub: null,
    className: "bg-zinc-800 text-white hover:bg-zinc-700 text-sm px-3",
  },
  {
    label: "Get started",
    sub: null,
    className: "bg-zinc-800 text-white hover:bg-zinc-700 text-sm px-3",
  },
  {
    label: "Get started",
    sub: (
      <span className="block text-gray-400 text-xs mt-2">
        or{" "}
        <span className="underline cursor-pointer text-white text-xs">
          contact sales
        </span>
      </span>
    ),
    className: "bg-zinc-100 text-black hover:bg-zinc-200 font-semibold",
  },
  {
    label: "Request trial",
    sub: null,
    className: "bg-zinc-800 text-white hover:bg-zinc-700 text-sm px-3",
  },
];

const PricingDetails = ({ className = "" }) => (
  <div
    className={`overflow-x-auto bg-[#18181b] py-7 px-2 rounded-lg ${className}`}
  >
    <table className="min-w-[800px] w-full text-left text-gray-200">
      <thead>
        <tr>
          <th className="w-56"></th>
          {plans.map((plan) => (
            <th
              key={plan}
              className={`p-0 font-semibold text-xl ${plan === "Business"}`}
            >
              {plan === "Business" ? (
                <div className="bg-zinc-800 border-l-2 border-r-2 border-t-2 rounded-tl-md rounded-tr-md shadow-lg text-gray-400 px-6 py-4">
                  {plan}
                </div>
              ) : (
                <div className="px-6 py-4">{plan}</div>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map((section, sectionIdx) => (
          <React.Fragment key={section.section}>
            <tr>
              <td
                colSpan={plans.length + 1}
                className="pt-8 pb-2 text-lg font-bold text-white"
              >
                {section.section}
              </td>
            </tr>
            {section.items.map((item, rowIdx) => {
              const isLastSection = sectionIdx === features.length - 1;
              const isLastRow = rowIdx === section.items.length - 1;
              const isBottomCell = isLastSection && isLastRow;
              return (
                <tr key={item.label} className="border-b border-zinc-800">
                  <td className="py-3">{item.label}</td>

                  {plans.map((plan) => (
                    <td
                      key={plan}
                      className={`py-3 text-center ${
                        plan === "Business"
                          ? "bg-zinc-800 border-l-2 border-r-2 border-gray-400 shadow-lg text-gray-400 font-semibold"
                          : ""
                      }`}
                    >
                      {typeof item[plan] === "boolean" ? (
                        item[plan] ? (
                          check
                        ) : (
                          cross
                        )
                      ) : (
                        <span className="font-medium">{item[plan]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </React.Fragment>
        ))}
        <tr>
          <td></td>
          {planButtons.map((btn, idx) => (
            <td key={idx} className="py-8 text-center align-top">
              <button
                className={` py-3 rounded-xl text-sm px-3 transition ${btn.className}`}
              >
                {btn.label}
              </button>
              {btn.sub}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

export default PricingDetails;
