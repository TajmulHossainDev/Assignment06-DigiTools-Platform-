const plans = [
  {
    name: "Starter",
    price: 0,
    period: "Month",
    description: "Perfect for getting started.",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    highlighted: false,
    buttonText: "Get Started Free",
  },
  {
    name: "Pro",
    price: 29,
    period: "Month",
    description: "Best for professionals.",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Advanced analytics",
    ],
    highlighted: true,
    buttonText: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    price: 99,
    period: "Month",
    description: "For teams and businesses.",
    features: [
      "Everything in pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    highlighted: false,
    buttonText: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            No hidden fees. Choose the plan that works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col gap-5 transition-all ${
                plan.highlighted
                  ? "bg-violet-600 text-white shadow-2xl shadow-violet-200 scale-105"
                  : "bg-gray-100 border border-gray-100 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FEF3C6] text-[#BB4D00] text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </span>
              )}

              <div>
                <h3
                  className={`text-sm font-bold uppercase tracking-wider ${
                    plan.highlighted ? "text-violet-200" : "text-violet-600"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-lg font-semibold mt-2 leading-relaxed ${
                    plan.highlighted ? "text-violet-200" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="flex items-end gap-1 mt-2">
                  <span
                    className={`text-5xl font-bold ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-sm mb-2 ${
                      plan.highlighted ? "text-violet-200" : "text-gray-400"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 text-sm ${
                      plan.highlighted ? "text-violet-100" : "text-gray-600"
                    }`}
                  >
                    <span
                      className={`font-bold ${
                        plan.highlighted ? "text-white" : "text-green-500"
                      }`}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`btn w-full rounded-full font-semibold text-base mt-2 border-0 ${
                  plan.highlighted
                    ? "bg-white text-violet-600 hover:bg-violet-50"
                    : "bg-violet-600 hover:bg-violet-700 text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
