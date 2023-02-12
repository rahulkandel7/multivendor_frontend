import React from 'react'
import ManufactureProductCardSlider from './ManufactureProductCardSlider'

export default function ManufacutreCard() {
    return (

        <div>
            {/* Name and chat button flex box */}
            <div className="flex justify-between items-center">
                {/* NAme and profile */}
                <div className="flex gap-5 items-center ">
                    {/* Rounded Circle  Logo */}
                    <div className="w-14 h-14 rounded-full shadow-md">
                        <img src="./mloog.png" alt="Company Name" className="w-full h-full object-cover rounded-full " />
                    </div>
                    {/* Company Name */}
                    <h1 className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer font-semibold">
                        Company Name PVT. LTD.
                    </h1>
                </div>
                {/* Fav and Chat now button */}
                <div>
                    {/* Chat Now Button */}
                    <button className="bg-gray-700 rounded-full shadow-md text-white  px-5 py-1 hover:bg-gray-500">
                        Chat Now
                    </button>

                </div>
            </div>
            {/* Company Description and its products */}
            <div className="grid grid-cols-3 gap-5 my-5">
                <div>
                    {/* Company Description */}
                    <p className="text-sm  font-light text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nam est molestias, eaque ipsa qui ullam error beatae deserunt earum corrupti dolor magni ex exercitationem culpa reiciendis, quas perspiciatis aperiam!
                    </p>
                </div>
                <div className="col-span-2">
                    {/* Manufactures Products (Home Card) */}
                    <ManufactureProductCardSlider />
                </div>
            </div>
        </div>

    )
}
