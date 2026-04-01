const Banner = () => {
  return(
    <div className="min-h-screen flex items-center py-16 gap-20">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full">
                <span> <img src="/Group 5.png"></img> </span>New: AI-Powered Tools Available
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-500">
                Supercharge Your <br></br> <span className=" text-violet-600 ">Digital Workflow</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                 Discover the ultimate collection of digital productivity tools.
              Automate, create, and grow your business with smart AI-powered solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
                <button className="btn bg-violet-600 hover:bg-violet-500 text-white rounded-full px-8 text-base font-semibold shadow-lg shadow-violet-200 border-0 transition-all">
                    Explore Products
                </button>
                <button className="btn btn-outline border-gray-300 rounded-full px-8 text-base font-semibold transition-all gap-2">
                    <span> <img src="/play.png"></img> </span> Watch Demo
                </button>
            </div>
        </div>


        <div>
            <div>
                <div>
                    <img src="/banner.png"></img>
                </div>
            </div>
        </div>

        </div>

    </div>

  )
};

export default Banner;
