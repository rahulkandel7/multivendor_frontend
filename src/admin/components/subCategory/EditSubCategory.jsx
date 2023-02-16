import { Formik } from 'formik';
import React from 'react';
import useSWR from 'swr';
import { number, object, string } from 'yup';

import ApiConstant from '../../../constants/ApiConstant';

export default function EditSubCategory(props) {
    //Fetching Category All
    const fetcher = (...args) => fetch(...args, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    }).then(res => res.json());
    const { data: categoryData, error: categoryError } = useSWR(ApiConstant.API_URL + 'admin/categories', fetcher);
    //Getting sub category info
    const { data, error, mutate } = useSWR(ApiConstant.API_URL + `admin/sub-categories/${props.id}`, fetcher);


    const editSubCategorySchema = object({
        sub_category_name: string().required('Sub Category Name is required'),
        category_id: number().required('Select Category'),
    });

    if (data) {
        return (
            <div className='top-0 bottom-0 left-0 right-0 fixed h-screen flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm' >
                <div className=' bg-gray-50 rounded-md shadow-xl w-fit h-fit p-10'>
                    <h1 className='text-xl font-bold'>
                        Edit Sub Category
                    </h1>
                    <Formik initialValues={{ sub_category_name: data.data.sub_category_name, category_id: data.data.category_id }}
                        validationSchema={editSubCategorySchema}
                        onSubmit={(values) => {
                            console.log(values);
                            const formData = new FormData();
                            formData.append('sub_category_name', values.sub_category_name);
                            formData.append('category_id', values.category_id);
                            formData.append('_method', 'PUT');

                            fetch(ApiConstant.API_URL + `admin/sub-categories/${props.id}`, {
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
                                {/* Sub Category Name Text Field */}
                                <div className="mt-4">
                                    <label htmlFor="sub_category_name" className="text-gray-700 font-serif w-full">Sub Category Name</label>
                                    <input type="text" onChange={handleChange} name="sub_category_name" id="sub_category_name" className="mt-1 border px-1 rounded w-full outline-none hover: border-gray-400 py-1 active:border-gray-600 focus-visible:border-gray-600 active:outline-none focus-visible:outline-none" value={values.sub_category_name} />
                                    <p className="text-red-600 text-sm py-1">{errors.sub_category_name}</p>
                                </div>

                                {/* Sub Category Name Text Field */}
                                <div className="mt-4">
                                    <label htmlFor="category_id" className="text-gray-700 font-serif w-full">Select Category</label>
                                    <select name="category_id" id="category_id" onChange={handleChange} className="mt-1 border px-1 rounded w-full outline-none hover: border-gray-400 py-1 active:border-gray-600 focus-visible:border-gray-600 active:outline-none focus-visible:outline-none">
                                        <option disabled={true} > -- Choose Category -- </option>
                                        {
                                            categoryData.data.map((category, index) => {
                                                return (
                                                    <option selected={values.category_id == category.id ? true : false} key={index} value={category.id}>{category.category_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <p className="text-red-600 text-sm py-1">{errors.category_id}</p>
                                </div>


                                <hr className='my-2' />
                                <div className='flex gap-5 mt-5'>
                                    <button type='submit' className='bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-full'>Update Sub Category</button>

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
