import React from 'react'
import { Link } from 'react-router-dom'

export default function SubcategoryCard() {
    return (
        <Link to="/productview">
            <div className=" shadow-sm hover:shadow-md rounded-md w-56 pb-5 mb-5 cursor-pointer">
                <img src="./ads.jpeg" alt="Product Name" className="object-cover h-36 w-full rounded-md shadow-md" />
                <p className="text-gray-600 font-bold text-left mt-3 px-3">
                    Product Name
                </p>
                <p className="text-gray-600 font-bold text-left mt-3 px-3">
                    Rs 10 - Rs 20
                </p>
                <p className="px-3 text-sm">
                    MOQ: 1000
                </p>
                <hr className='my-2' />
                <button className='border border-gray-300 px-3 py-1 text-xs rounded-full mt-3 hover:bg-gray-400 hover:text-white hover:border-transparent transition-all ml-3'>
                    Contact Supplier
                </button>
            </div>
        </Link>
    )
}
