import React from 'react'

export default function ProductViewCard() {
    return (
        <div>
            <div className=" shadow-sm hover:shadow-md rounded-md w-56 pb-5 mb-5 cursor-pointer">
                <img src="./ads1.jpeg" alt="Product Name" className="object-cover h-36 w-full rounded-md shadow-md" />
                <p className="text-gray-600 font-bold text-left mt-3 px-3 ">
                    Product Name
                </p>
                <p className="text-gray-600 font-bold text-left mt-3 px-3">
                    Rs 12 - Rs 24
                </p>
                <p className="px-3 text-sm">
                    MOQ: 1000
                </p>
            </div>
        </div>
    )
}
