import React from 'react'
import { Link } from 'react-router-dom'
import ManufacutreCard from '../components/manufacture/ManufacutreCard'

export default function Category() {
    return (
        <div>
            {/* Category name */}
            <h1 className='mt-10 mb-5 text-3xl  text-gray-800'>
                Electronics And Automobile
            </h1>
            <hr />
            <div className='my-3 flex overflow-scroll gap-5'>
                {/* Subcategory CHIP */}
                {
                    [...Array(10)].map((_) => {
                        return <div>
                            <Link to="/subcategory">
                                <div className='rounded-full px-5 py-1 shadow-sm border border-gray-600'>
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
