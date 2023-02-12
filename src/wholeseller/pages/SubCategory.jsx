import React from 'react'
import SubcategoryCard from '../components/subcateogry/SubcategoryCard'

export default function SubCategory() {
    return (
        <div>
            {/* Category name */}
            <h1 className='mt-10 mb-5 text-2xl  text-gray-800'>
                SubCategory Name Will be here
            </h1>
            <hr />
            {/* Subcategory Filterbox and products Card */}
            <div className='grid gap-5  grid-cols-4 my-6'>
                <div className='border-r border-r-gray-300' >
                    Filter Box Will be gere
                </div>
                <div className='col-span-3'>
                    <div className='flex flex-wrap gap-3 justify-around'>
                        {
                            [...Array(10)].map((_) => {
                                return <SubcategoryCard />
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
