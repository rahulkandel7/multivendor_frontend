import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { MdOutlineCategory } from 'react-icons/md';
import useSwr from 'swr';
import ApiConstant from '../../../constants/ApiConstant';
import AddSubCategory from '../../components/subCategory/AddSubCategory';
import EditSubCategory from '../../components/subCategory/EditSubCategory';
import DeleteBox from '../../components/utils/DeleteBox';
import SearchBox from '../../components/utils/SearchBox';


export default function SubCategoryIndex() {
    //Fetching subcategory data
    const fetcher = (...args) => fetch(...args, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    }).then(res => res.json());
    const { data, error, mutate } = useSwr(ApiConstant.API_URL + 'admin/sub-categories', fetcher);

    // For adding subcategory
    const [showModal, setShowModal] = useState(false);
    function toggleModal() {
        setShowModal(!showModal);
    }

    //Setting id for edit and delete
    const [id, setId] = useState(null);

    //for Delete Modal
    const [deleteModal, setDeleteModal] = useState(false);
    const toggleDeleteModal = (id) => {
        setId(id);
        setDeleteModal(!deleteModal);
    }
    function deleteSubCategory() {
        fetch(ApiConstant.API_URL + 'admin/sub-categories/' + id, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
        }).then(res => res.json()).then(data => {
            toggleDeleteModal();
            mutate();
            console.log(data);
        });
    }

    //For Editing SubCategory
    const [editModal, setEditModal] = useState(false);
    const toggleEditModal = (id) => {
        setId(id);
        setEditModal(!editModal);
    }

    // For Searching Sub Category
    const [search, setSearch] = useState('');

    if (data) {
        return (
            <div className='py-5'>
                {/* Card for showing Total info */}
                <div className="bg-rose-500 py-4 hover:bg-rose-600 hover:shadow-lg cursor-pointer text-white rounded-md shadow-md px-5 w-fit">
                    <div className='flex justify-center'>
                        <MdOutlineCategory className='text-4xl' />

                    </div>
                    <p className='text-xl'>
                        Total Sub Category

                    </p>
                    <p className='text-xl font-bold text-center'>
                        {data.data.length}
                    </p>
                </div>



                {/* Search Box */}
                <SearchBox title="Sub Category" change={(e) => setSearch(e.target.value)} />

                {/* Table To Show Category */}
                <div className='w-full'>
                    <table className='w-full border '>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Sub Category Name</th>
                                <th>Category Name</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody className='w-full'>
                            {
                                data.data.filter((subCategory) => {
                                    if (search == '') {
                                        return subCategory;
                                    }
                                    else if (subCategory.sub_category_name.toLowerCase().includes(search.toLowerCase())) {
                                        return subCategory;
                                    }
                                }).map((subCategory, index) => {
                                    return <tr className='border' key={index}>
                                        <td className='px-4'>{index + 1}</td>
                                        <td className='px-4 text-center'>{subCategory.sub_category_name} </td>
                                        <td className='px-4 text-center'>
                                            {subCategory.category_name}
                                        </td>
                                        <td >
                                            <div className='flex items-center justify-center h-full gap-3'>
                                                <button onClick={() => toggleEditModal(subCategory.id)} className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md' >Edit</button>
                                                <button onClick={() => toggleDeleteModal(subCategory.id)} className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                })

                            }

                        </tbody>
                    </table>
                    <div className='fixed right-5 bottom-2'>
                        <button onClick={() => toggleModal()} className=' flex justify-center items-center rounded-full bg-rose-500 hover:bg-rose-600 text-white px-2 py-2 text-2xl' title='Add Category'>
                            <IoIosAdd />
                        </button>
                    </div>

                </div>
                {/* Modal for Adding sub category */}
                {
                    showModal && <AddSubCategory hide={toggleModal} refresh={mutate} />
                }
                {/* Modal for Delete Sub Category */}
                {
                    deleteModal && <DeleteBox delete={deleteSubCategory} hide={toggleDeleteModal} />
                }
                {/* Modal for Edit Sub Category */}
                {
                    editModal && <EditSubCategory hide={toggleEditModal} id={id} refresh={mutate} />
                }
            </div >
        )
    }
}
