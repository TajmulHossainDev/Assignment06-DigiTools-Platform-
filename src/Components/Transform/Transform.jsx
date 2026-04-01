const Transform = () => {
  return (
    <div className="bg-violet-600 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white ">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-violet-300">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br></br> Start your free trial today.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <button className="btn bg-white text-violet-700 hover:bg-violet-100 rounded-full px-8 font-semibold border-0 shadow-lg">Explore Products</button>
            <button className="btn bg-violet-600 text-white hover:bg-violet-500 rounded-full px-8 font-semibold border shadow-lg">View Pricing</button>

          </div>
          <ul className="flex gap-5 list-disc text-violet-300">
            <li className="list-none">14-days free trial</li>
            <li>No credit card required</li>
            <li>cancel anytime</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transform;
