import React from 'react'

const Expolore = () => {
    return (
        <div className="w-full  pt-10">
            <div className="flex flex-col lg:flex-row w-full max-w-12xl mx-auto">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="/leftsideimage.png"
                        alt="Neopolitan Suit"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center px-6 py-12 lg:py-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug">
                        The Pinnacle of <br /> Neopolitan Experience <br /> Vittorio Milano
                    </h2>
                    <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3  text-black hover:text-white rounded-md text-sm sm:text-base md:text-lg font-medium bg-transparent hover:bg-[rgb(96,12,3)] hover:border-[rgb(96,12,3)] transition">
                        EXPLORE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Expolore