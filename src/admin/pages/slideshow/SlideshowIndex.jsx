import { useState } from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import { IoIosAdd } from 'react-icons/io';
import useSWR from 'swr';
import ApiConstant from '../../../constants/ApiConstant';
import AddSlideshow from '../../components/slideshow/AddSlideshow';
import EditSlideshow from '../../components/slideshow/EditSlideshow';
import DeleteBox from '../../components/utils/DeleteBox';

export default function SlideshowIndex() {
    // For Showing Modal to add Slideshow
    const [showModal, setShowModal] = useState(false);
    function toggleModal() {
        setShowModal(!showModal);
    }

    //Creating fetcher for showing slideshow
    const fetcher = (...args) => fetch(...args, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json());
    const { data, error, mutate } = useSWR(ApiConstant.API_URL + 'admin/slideshows', fetcher);

    //For getting id
    const [id, setId] = useState('');

    // For Deleting slideshow
    const [deleteModal, setDeleteModal] = useState(false);
    function toggleDeleteModal(id) {
        setId(id);
        setDeleteModal(!deleteModal);
    }

    function deleteSlideshow() {
        fetch(ApiConstant.API_URL + 'admin/slideshows/' + id, {
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

    //For Editing Category
    const [editModal, setEditModal] = useState(false);
    function toggleEditModal(id) {
        setId(id);
        setEditModal(!editModal);
    }

    //For Searching Category
    const [search, setSearch] = useState('');

    if (data) {
        return (
            <div className='py-5'>
                {/* Card for showing Total info */}
                <div className="bg-amber-500 py-4 hover:bg-amber-600 hover:shadow-lg cursor-pointer text-white rounded-md shadow-md px-5 w-fit">
                    <div className='flex justify-center'>
                        <BiCategoryAlt className='text-4xl' />

                    </div>
                    <p className='text-xl'>
                        Total Slideshow

                    </p>
                    <p className='text-xl font-bold text-center'>
                        {data.data.length}
                    </p>
                </div>

                {/* Table To Show Category */}
                <div className='w-full mt-10'>
                    <table className='w-full border '>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Priority</th>
                                <th>Slideshow Photo</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody className='w-full'>
                            {
                                data.data.map((slideshow, index) => {
                                    return <tr className='border' key={index}>
                                        <td className='px-4'>{index + 1}</td>
                                        <td className='px-4 text-center'>{slideshow.priority} </td>
                                        <td className='px-4 text-center'>
                                            <img src={ApiConstant.API_IMAGE_URL + slideshow.photopath} alt="" className="w-32 mx-auto py-2" />
                                        </td>
                                        <td className='px-4 text-center'>{slideshow.status == 0 ? 'Show' : 'Hide'} </td>
                                        <td >
                                            <div className='flex items-center justify-center h-full gap-3'>
                                                <button onClick={() => toggleEditModal(slideshow.id)} className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md' >Edit</button>
                                                <button onClick={() => toggleDeleteModal(slideshow.id)} className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>

                    </table>
                    <div className='fixed right-5 bottom-2'>
                        <button onClick={() => toggleModal()} className=' flex justify-center items-center rounded-full bg-amber-500 hover:bg-amber-600 text-white px-2 py-2 text-2xl' title='Add Category'>
                            <IoIosAdd />
                        </button>
                    </div>
                    {
                        showModal && <AddSlideshow hide={toggleModal} refresh={mutate} length={data.data.length} />
                    }
                    {
                        deleteModal && <DeleteBox hide={toggleDeleteModal} delete={deleteSlideshow} />
                    }
                    {
                        editModal && <EditSlideshow hide={toggleEditModal} id={id} refresh={mutate} />
                    }
                </div>
            </div >
        )
    }
}
