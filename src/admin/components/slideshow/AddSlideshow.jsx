import { Formik } from 'formik';
import React from 'react';
import { mixed, number, object } from 'yup';
import ApiConstant from '../../../constants/ApiConstant';

export default function AddSlideshow(props) {
    const addSlideshowSchema = object({
        priority: number().required('Prority is required'),
        status: number().required('Status is required'),
        photopath: mixed().required('Slideshow Image     is required'),
    });


    return (
        <div className='top-0 bottom-0 left-0 right-0 fixed h-screen flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm' >
            <div className=' bg-gray-50 rounded-md shadow-xl w-fit h-fit p-10'>
                <h1 className='text-xl font-bold'>
                    Add Slideshow
                </h1>
                <Formik initialValues={{ priority: props.length + 1, photopath: '', status: '' }}
                    validationSchema={addSlideshowSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        const formData = new FormData();
                        formData.append('priority', values.priority);
                        formData.append('photopath', values.photopath);
                        formData.append('status', values.status);

                        fetch(ApiConstant.API_URL + 'admin/slideshows', {
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
                                }
                            })
                            .catch(err => console.log(err));


                    }}
                >
                    {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
                        <form onSubmit={handleSubmit} className='w-full'>
                            {/* Slideshow Priority Text Field */}
                            <div className="mt-4">
                                <label htmlFor="priority" className="text-gray-700 font-serif w-full">Slideshow Priority</label>
                                <input type="text" onChange={handleChange} name="priority" id="priority" className="mt-1 border px-1 rounded w-full outline-none hover: border-gray-400 py-1 active:border-gray-600 focus-visible:border-gray-600 active:outline-none focus-visible:outline-none" value={values.priority} />
                                <p className="text-red-600 text-sm py-1">{errors.priority}</p>
                            </div>

                            {/* Slideshow Photo Text Field */}
                            <div className="mt-4">
                                <label htmlFor="photopath" className="text-gray-700 font-serif w-full">Slideshow Photo</label>
                                {values.photopath ? <>
                                    <div className="w-[250px] h-[250px] border-2 border-dashed flex items-center justify-center ">

                                        <img
                                            src={URL.createObjectURL(
                                                values.photopath
                                            )}
                                            className="w-full h-full border border-gray-200 rounded-lg shadow-lg p-1 object-cover"
                                            alt=""
                                        />
                                    </div></>
                                    : <></>}

                                <input type="file" onChange={(e) => {
                                    setFieldValue(
                                        "photopath",
                                        e.currentTarget.files[0]
                                    );
                                }} className="mt-1 file:border-none file:bg-gray-600 file:rounded-full w-full file:text-white file:px-4 file:py-1" />
                                <p className="text-red-600 text-sm py-1">{errors.photopath}</p>
                            </div>

                            {/* Slideshow Status Field */}
                            <div className="mt-4">
                                <label htmlFor="status" className="text-gray-700 font-serif w-full">Status </label>
                                <select name="status" id="status" onChange={handleChange} className="mt-1 border px-1 rounded w-full outline-none hover: border-gray-400 py-1 active:border-gray-600 focus-visible:border-gray-600 active:outline-none focus-visible:outline-none">
                                    <option selected={true} disabled={true}> -- Select Status -- </option>
                                    <option value="0"> Show </option>
                                    <option value="1"> Hide </option>

                                </select>
                                <p className="text-red-600 text-sm py-1">{errors.status}</p>
                            </div>


                            <hr className='my-2' />
                            <div className='flex gap-5 mt-5'>
                                <button type='submit' className='bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-full'>Add Slideshow</button>

                                <button onClick={() => props.hide()} className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full'>Cancel</button>
                            </div>
                        </form>
                    )}
                </Formik>


            </div>
        </div>

    )
}
