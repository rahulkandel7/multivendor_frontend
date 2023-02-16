import React from 'react'
import { BsSearch } from 'react-icons/bs'

export default function SearchBox(props) {
    return (
        <div className="flex justify-end items-center my-3">
            <div className="relative">
                <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={props.change}
                    className="border border-gray-200 pl-5 outline-none focus-visible:border-gray-400 hover:border-gray-300 pr-10 text-gray-500 rounded-full shadow-md shadow-gray-100 focus-visible:shadow-gray-300 py-2"
                    placeholder={`Search ${props.title} ...`}
                />
                <div className="absolute top-[50%] -translate-y-[50%] right-3 text-xl text-gray-500">
                    <BsSearch />
                </div>
            </div>
        </div>
    )
}
