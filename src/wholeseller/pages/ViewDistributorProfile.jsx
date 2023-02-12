import React from 'react'
import { Link } from 'react-router-dom'
import ProductViewSlider from '../components/productview/ProductViewSlider'

export default function ViewDistributorProfile() {
    return (
        <div className='my-10'>
            <div className='flex items-center justify-between'>
                {/* Company Logo and name */}
                <div className='flex gap-5 items-center justify-start'>
                    <img src="./mloog.png" alt="Company Name" className='w-24 h-24 rounded-full shadow-md' />
                    <h1 className='text-xl font-bold'>Company Name</h1>
                </div>
                <div>
                    {/* Company Info */}
                    <div>

                        <Link className='mx-3 underline underline-offset-4 text-gray-800'>
                            All Products
                        </Link>
                        <Link className='mx-3 text-gray-500'>
                            Company Profile
                        </Link>
                    </div>

                </div>
            </div>
            <hr className='my-3' />
            <h3 className='text-xl font-bold w-full border-b border-b-gray-100 pb-3' >
                All Products
            </h3>


            {/* Product List */}
            {
                [...Array(10)].map((_, i) => {
                    return <div div className="my-3" >
                        <p className="text-xl font-bold">
                            Category Name
                        </p>
                        <div className="my-5">
                            <ProductViewSlider />
                        </div>
                    </div >
                })
            }
        </div>
    )
}
