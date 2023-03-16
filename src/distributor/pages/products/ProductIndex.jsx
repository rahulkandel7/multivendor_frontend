import { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import DeleteBox from '../../../admin/components/utils/DeleteBox';
import SearchBox from '../../../admin/components/utils/SearchBox';
import ApiConstant from '../../../constants/ApiConstant';


export default function ProductIndex() {

    const navigate = useNavigate();

    //Creating fetcher for showing prducts
    const fetcher = (...args) => fetch(...args, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json());
    const { data, error, mutate } = useSWR(ApiConstant.API_URL + 'distributor/products', fetcher);

    //For getting id
    const [id, setId] = useState('');

    // For Deleting product
    const [deleteModal, setDeleteModal] = useState(false);
    function toggleDeleteModal(id) {
        setId(id);
        setDeleteModal(!deleteModal);
    }

    function deleteProduct() {
        fetch(ApiConstant.API_URL + 'distributor/products/' + id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => {
                toggleDeleteModal();
                mutate();
                console.log(data);
            })
    }

    //For Searching product
    const [search, setSearch] = useState('');

    if (data) {
        return (
            <div className='py-5'>
                {/* Card for showing Total info */}
                <div className="bg-emerald-500 py-4 hover:bg-emerald-600 hover:shadow-lg cursor-pointer text-white rounded-md shadow-md px-5 w-fit">
                    <div className='flex justify-center'>
                        <MdOutlineProductionQuantityLimits className='text-4xl' />

                    </div>
                    <p className='text-xl'>
                        Total Products

                    </p>
                    <p className='text-xl font-bold text-center'>
                        {data.data.length}
                    </p>
                </div>



                {/* Search Box */}
                <SearchBox title="Products" change={(e) => setSearch(e.target.value)} />

                {/* Table To Show Category */}
                <div className='w-full'>
                    <table className='w-full border '>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>MOQ</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody className='w-full'>
                            {
                                data.data.filter((product) => {
                                    if (search == '') {
                                        return product
                                    } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
                                        return product
                                    }
                                }).map((product, index) => {
                                    return <tr className='border' key={index}>
                                        <td className='px-4'>{index + 1}</td>
                                        <td className='px-4 text-center'>{product.name} </td>
                                        <td className='px-4 text-center'>{product.price} </td>
                                        <td className='px-4 text-center'>{product.moq} </td>
                                        <td className='px-4 text-center'>{product.status} </td>
                                        <td >
                                            <div className='flex items-center justify-center h-full gap-3'>
                                                <button onClick={() => navigate(`/distributor/products/edit/${product.id}`)} className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md' >Edit</button>
                                                <button onClick={() => toggleDeleteModal(product.id)} className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>

                    </table>
                    <div className='fixed right-5 bottom-2'>
                        <button onClick={() => navigate('/distributor/products/add')} className=' flex justify-center items-center rounded-full bg-green-500 hover:bg-green-600 text-white px-2 py-2 text-2xl' title='Add Product'>
                            <IoIosAdd />
                        </button>
                    </div>

                    {
                        deleteModal && <DeleteBox hide={toggleDeleteModal} delete={deleteProduct} />
                    }

                </div>
            </div >
        )
    }
}
