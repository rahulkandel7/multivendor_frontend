import React from 'react'
import { Link } from 'react-router-dom'
import ManufacutreCard from '../components/manufacture/ManufacutreCard'

export default function Category() {
    return (
        <div>
            {/* Category name */}
            <h1 className='mt-10 mb-1 md:mb-5 text-xl md:text-3xl  text-gray-800'>
                Electronics And Automobile
            </h1>
            <hr />
            <div className='my-3 flex overflow-scroll  md:gap-5 gap-2'>
                {/* Subcategory CHIP */}
                {
                    [...Array(10)].map((_) => {
                        return <div>
                            <Link to="/subcategory">
                                <div className='rounded-full px-2 md:px-5 py-1 text-xs md:text-base shadow-sm border border-gray-600'>
                                    Samsung
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
            <div className='my-5'>
                {/* Manufacture Loop */}
                {
                    [...Array(10)].map((_) => {
                        return <ManufacutreCard />
                    })
                }
            </div>
        </div>
    )
}
