import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { TiTimes } from 'react-icons/ti';

export default function DeleteBox(props) {
    return (
        <div className='top-0 bottom-0 left-0 right-0 fixed h-screen flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm' >
            <div className=' bg-gray-50 rounded-md shadow-xl w-fit h-fit p-10'>
                <h1 className='text-xl font-bold text-center'>
                    Are you sure want to delete this?
                </h1>
                <p className='text-sm font-bold text-center'>
                    This action cannot be undone.
                </p>
                <div className='mt-5 flex justify-center gap-3'>
                    <button onClick={() => props.delete()} className='bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-4 flex items-center gap-2 py-2'>
                        <AiOutlineCheck /> Yes
                    </button>
                    <button onClick={() => props.hide()} className='bg-red-500 hover:bg-red-700 text-white rounded-md px-4 flex items-center gap-2 py-2'>
                        <TiTimes /> Cancel
                    </button>
                </div>
            </div>
        </div>

    )
}
