const Tab = ({activeTab, setActiveTab, cartCount}) => {
    return(
        <div className="bg-gray-50 pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-8"> 
                    <h2 className="text-4xl font-bold text-gray-800">
                       Premium Digital Tools 
                    </h2>
                    <p className="text-gray-500 mt-2 text-base">
                        Choose from our curated collection of premium digital products designedto boost your productivity and creativity.
                    </p>
                </div>
                <div className="flex justify-center gap-4">
                    <button onClick={()=>setActiveTab("product")} className = {`btn rounded-full px-10 text-base font-semibold border-0 transition-all ${activeTab === "product" ? "bg-violet-600 text-white shadow-lg shadow-violet-200" : "bg-white text-violet-600 border border-violet-200 hover:bg-violet-50"}`} >
                        Products
                    </button>
                    <button onClick={()=> setActiveTab("cart")} className = {`btn rounded-full px-10 text-base font-semibold border-0 transition-all ${activeTab === "cart" ? "bg-violet-600 text-white shadow-lg shadow-violet-200" : "bg-white text-violet-600 border border-violet-200 hover:bg-violet-50"}`} >
                        Cart({cartCount})
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Tab;