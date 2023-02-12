import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
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
                    <div>
                        <h1 className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer font-semibold">
                            Company Name PVT. LTD.
                        </h1>
                        {/* Location icon and address */}
                        <div className='flex items-center gap-1'>
                            <CiLocationOn />
                            <p className=" text-gray-700 hover:text-gray-900 cursor-pointer">
                                Chitwan,Nepal
                            </p>
                        </div>
                    </div>
                </div>
                {/* Fav and Chat now button */}
                <div>
                    {/* Chat Now Button */}
                    <button className="bg-gray-700 rounded-full shadow-md text-white  px-5 py-1 hover:bg-gray-500">
                        Chat Now
                    </button>

                </div>
            </div>

            {/* Manufactures Products (Home Card) */}
            <div className='my-3'>
                <ManufactureProductCardSlider />

            </div>
        </div>

    )
}
