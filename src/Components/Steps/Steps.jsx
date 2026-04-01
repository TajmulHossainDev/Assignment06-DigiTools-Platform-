const steps = [
  {
    step: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: "/user.png",
  },
  {
    step: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the toolsthat fit your needs.",
    icon: "/package.png",
  },
  {
    step: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: "/rocket.png",
  },
];

const Steps = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border-1 border-gray-100 rounded-xl p-8 flex flex-col items-center text-center overflow-hidden transition-shadow"
            >
              <div className="absolute top-4 right-5 p-2 text-sm font-semibold bg-violet-600 rounded-full text-white">
                {" "}
                {item.step}{" "}
              </div>

              <div className="relative z-10 w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center text-3xl shadow-sm mb-4">
                <img src={item.icon} alt={item.title} className="w-10 h-10" />
              </div>

              <h3 className="text-xl font-bold mb-2 ">{item.title}</h3>
              <p className="text-gray-400 text-sm font-semibold leading-relaxed max-w-xs">
                {" "}
                {item.description}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
