import { Formik } from 'formik';
import React from 'react';
import useSWR from 'swr';
import { mixed, object, string } from 'yup';

import ApiConstant from '../../../constants/ApiConstant';

export default function EditCategory(props) {
    const editCategorySchema = object({
        category_name: string().required('Category Name is required'),
        category_photo: mixed().nullable(),
    });

    //For Getting Category Data
    const fetcher = (...args) => fetch(...args, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json());
    const { data, error, mutate } = useSWR(ApiConstant.API_URL + `admin/categories/${props.id}`, fetcher);


    if (data) {
        return (
            <div className='top-0 bottom-0 left-0 right-0 fixed h-screen flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm' >
                <div className=' bg-gray-50 rounded-md shadow-xl w-fit h-fit p-10'>
                    <h1 className='text-xl font-bold'>
                        Edit Category
                    </h1>
                    <Formik initialValues={{ category_name: data.data.category_name, category_photo: '' }}
                        validationSchema={editCategorySchema}
                        onSubmit={(values) => {
                            console.log(values);
                            const formData = new FormData();
                            formData.append('category_name', values.category_name);
                            formData.append(
                                "category_photo",
                                values.category_photo
                            );
                            formData.append('_method', 'PUT');

                            fetch(ApiConstant.API_URL + `admin/categories/${props.id}`, {
                                method: 'POST',
                                headers: {
                                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                                },
                                body: formData
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.status != false) {
                                        props.refresh();
                                        props.hide();
                                        mutate();
                                    }
                                })
                                .catch(err => console.log(err));


                        }}
                    >
                        {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
                            <form onSubmit={handleSubmit} className='w-full'>
                                {/* Category Name Text Field */}
                                <div className="mt-4">
                                    <label htmlFor="category_name" className="text-gray-700 font-serif w-full">Category Name</label>
                                    <input type="text" onChange={handleChange} value={values.category_name} name="category_name" id="category_name" className="mt-1 border px-1 rounded w-full outline-none hover: border-gray-400 py-1 active:border-gray-600 focus-visible:border-gray-600 active:outline-none focus-visible:outline-none" />
                                    <p className="text-red-600 text-sm py-1">{errors.category_name}</p>
                                </div>

                                {/* Organization Photo Text Field */}
                                <div className="mt-4">
                                    <label htmlFor="category_photo" className="text-gray-700 font-serif w-full">Category Photo</label>
                                    {values.category_photo ? <>
                                        <div className="w-[250px] h-[300px] border-2 border-dashed flex items-center justify-center ">

                                            <img
                                                src={URL.createObjectURL(
                                                    values.category_photo
                                                )}
                                                className="w-full h-full border border-gray-200 rounded-lg shadow-lg p-1 object-cover"
                                                alt=""
                                            />
                                        </div></>
                                        : <>
                                            <img
                                                src={ApiConstant.API_IMAGE_URL + data.data.category_photo}
                                                className="w-32 h-full border border-gray-200 rounded-lg shadow-lg p-1 object-cover"
                                                alt=""
                                            />
                                        </>}

                                    <input type="file" onChange={(e) => {
                                        setFieldValue(
                                            "category_photo",
                                            e.currentTarget.files[0]
                                        );
                                    }} className="mt-1 file:border-none file:bg-gray-600 file:rounded-full w-full file:text-white file:px-4 file:py-1" />
                                    <p className="text-red-600 text-sm py-1">{errors.category_photo}</p>
                                </div>
                                <hr className='my-2' />
                                <div className='flex gap-5 mt-5'>
                                    <button type='submit' className='bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-full'>Update Category</button>

                                    <button onClick={() => props.hide()} className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full'>Cancel</button>
                                </div>
                            </form>
                        )}
                    </Formik>


                </div>
            </div>

        )
    }
}
