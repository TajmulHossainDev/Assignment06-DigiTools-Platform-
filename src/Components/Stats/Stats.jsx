const Stats = () => {
    return(
        <div className="bg-violet-600 py-13 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-1 border-r border-gray-400">
                    <div className="text-5xl font-bold">500k+</div>
                    <div className="text-gray-300 font-semibold text-lg">Active Users</div>
                </div>
                 <div className="space-y-1 border-r border-gray-400">
                    <div className="text-5xl font-bold">200+</div>
                    <div className="text-gray-300 font-semibold text-lg">Premium Tools</div>
                </div>
                 <div className="space-y-1">
                    <div className="text-5xl font-bold">4.9</div>
                    <div className="text-gray-300 font-semibold text-lg">Rating</div>
                </div>

            </div>
        </div>

    )
}

export default Stats;