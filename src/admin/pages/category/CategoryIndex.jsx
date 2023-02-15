import { BiCategoryAlt } from 'react-icons/bi'
import { IoIosAdd } from 'react-icons/io'
import { RiFileSearchLine } from 'react-icons/ri'

export default function CategoryIndex() {
    return (
        <div className='py-5'>
            {/* Card for showing Total info */}
            <div className="bg-emerald-500 py-4 hover:bg-emerald-600 hover:shadow-lg cursor-pointer text-white rounded-md shadow-md px-5 w-fit">
                <div className='flex justify-center'>
                    <BiCategoryAlt size='2rem' />

                </div>
                <p className='text-xl'>
                    Total Category

                </p>
                <p className='text-xl font-bold text-center'>
                    10
                </p>
            </div>

            {/* Search Box */}
            <div className="flex justify-end items-center my-3">
                <div className="relative">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="border border-gray-200 pl-5 outline-none focus-visible:border-gray-400 hover:border-gray-300 pr-10 text-gray-500 rounded-full shadow-md shadow-gray-100 focus-visible:shadow-gray-300 py-2"
                        placeholder={`Search Category ...`}

                    />
                    <div className="absolute top-[50%] -translate-y-[50%] right-3 text-xl text-gray-500">
                        <RiFileSearchLine />
                    </div>
                </div>
            </div>

            {/* Table To Show Category */}
            <div className='w-full'>
                <table className='w-full border '>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Category Name</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        {
                            [...Array(10)].map((_, index) => {
                                return <tr className='border'>
                                    <td className='px-4'>{index + 1}</td>
                                    <td className='px-4 text-center'>Mobile {index}</td>
                                    <td className='flex gap-3 my-2'>
                                        <button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md'>Edit</button>
                                        <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
                <div className='fixed right-5 bottom-2'>
                    <button className=' flex justify-center items-center rounded-full bg-green-500 hover:bg-green-600 text-white px-2 py-2 text-2xl' title='Add Category'>
                        <IoIosAdd />
                    </button>
                </div>
            </div>
        </div >
    )
}
