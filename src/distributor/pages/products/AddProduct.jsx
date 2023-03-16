
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { useNavigate } from 'react-router-dom';
import useSwr from 'swr';
import { mixed, number, object, string } from 'yup';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ApiConstant from '../../../constants/ApiConstant';


export default function AddProduct() {

    //Fetching Category All
    const fetcher = (...args) => fetch(...args, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    }).then(res => res.json());
    const { data, error } = useSwr(ApiConstant.API_URL + 'admin/categories', fetcher);
    const { data: subcategoriesData, error: subcategoriesError } = useSwr(ApiConstant.API_URL + 'admin/sub-categories', fetcher);

    const navigate = useNavigate();
    // Schema for Product
    const addProductSchema = object({
        name: string().required('Product Title is required'),
        price: string().required('Product Price is required'),
        moq: string().required('Product MOQ is required'),
        status: number().required('Product Status is required'),
        category_id: number().required('Product Category is required'),
        sub_category_id: number().nullable(),
        thumbnail: mixed().required('Product Thumbnail is required'),
        product_photopath: mixed().required('Product Photo is required'),
    });

    // For Editor
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    );
    const [convertedContent, setConvertedContent] = useState(null);
    useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
    }, [editorState]);

    if (data && subcategoriesData) {
        return (
            <div>
                <h1 className='text-2xl font-bold'>
                    Add Products
                </h1>
                <hr className='my-2' />

                <Formik initialValues={{
                    name: '',
                    price: '',
                    moq: '',
                    status: '',
                    category_id: '',
                    sub_category_id: '',
                    thumbnail: '',
                    product_photopath: '',
                }} validationSchema={addProductSchema} onSubmit={(values) => {
                    console.log(values);
                    const formData = new FormData();
                    formData.append('name', values.name);
                    formData.append('price', values.price);
                    formData.append('moq', values.moq);
                    formData.append('status', values.status);
                    formData.append('category_id', values.category_id);
                    formData.append('sub_category_id', values.sub_category_id);
                    formData.append('thumbnail', values.thumbnail);
                    const imagess = Array.from(values.product_photopath);
                    imagess.forEach((image_file) => {
                        console.log(image_file);
                        formData.append('product_photopath[]', image_file);
                    });
                    // formData.append('product_photopath', values.product_photopath);
                    formData.append('description', convertedContent);

                    fetch(ApiConstant.API_URL + 'distributor/products', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: formData
                    }).then(res => res.json())
                        .then(data => {
                            console.log(data);
                        }
                        )

                }}>
                    {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
                        <form onSubmit={handleSubmit} className='w-full'>
                            {/* Product Title */}
                            <div className="my-2">
                                <label htmlFor="name" className="text-gray-700 font-serif w-full">Product Title</label>
                                <input type="text" onChange={handleChange} name="name" id="name" className="border rounded-md  shadow-md px-4 mt-1 py-2 border-500 w-full outline-none hover: border-gray-400 active:border-gray-600 focus-visible:border-gray-600 active:outline-none focus-visible:outline-none" />
                                <p className="text-red-600 text-sm py-1">{errors.name}</p>

                            </div>

                            {/* Select Category Name Text Field */}
                            <div className="mt-4">
                                <label htmlFor="category_id" className="text-gray-700 font-serif w-full">Select Category</label>
                                <select name="category_id" id="category_id" onChange={handleChange} className="mt-1 border px-1 rounded w-full outline-none hover: border-gray-400 py-1 active:border-gray-600 focus-visible:border-gray-600 active:outline-none focus-visible:outline-none">
                                    <option selected={true} disabled={true} > -- Choose Category -- </option>
                                    {
                                        data.data.map((category, index) => {
                                            return (
                                                <option key={index} value={category.id}>{category.category_name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <p className="text-red-600 text-sm py-1">{errors.category_id}</p>
                            </div>

                            {/* Select Sub Category Name Text Field */}
                            <div className="mt-4">
                                <label htmlFor="sub_category_id" className="text-gray-700 font-serif w-full">Select Sub Category</label>
                                <select name="sub_category_id" id="sub_category_id" onChange={handleChange} className="mt-1 border px-1 rounded w-full outline-none hover: border-gray-400 py-1 active:border-gray-600 focus-visible:border-gray-600 active:outline-none focus-visible:outline-none">
                                    <option selected={true} disabled={true} > -- Choose Sub Category -- </option>
                                    {
                                        subcategoriesData.data.map((subCategory, index) => {
                                            return subCategory.category_id == values.category_id ? <option key={index} value={subCategory.id}>{subCategory.sub_category_name}</option> : <></>

                                        })
                                    }
                                </select>
                                <p className="text-red-600 text-sm py-1">{errors.sub_category_id}</p>
                            </div>

                            {/* Product Price */}
                            <div className="my-2">
                                <label htmlFor="price" className="text-gray-700 font-serif w-full">Product Price</label>
                                <input type="text" onChange={handleChange} name="price" id="price" className="border rounded-md  shadow-md px-4 mt-1 py-2 border-500 w-full outline-none hover: border-gray-400 active:border-gray-600 focus-visible:border-gray-600 active:outline-none focus-visible:outline-none" />
                                <p className="text-red-600 text-sm py-1">{errors.price}</p>

                            </div>

                            {/* Product MOQ */}
                            <div className="my-2">
                                <label htmlFor="moq" className="text-gray-700 font-serif w-full">Minimum Order Quantity (MOQ) </label>
                                <input type="text" onChange={handleChange} name="moq" id="moq" className="border rounded-md  shadow-md px-4 mt-1 py-2 border-500 w-full outline-none hover: border-gray-400 active:border-gray-600 focus-visible:border-gray-600 active:outline-none focus-visible:outline-none" />
                                <p className="text-red-600 text-sm py-1">{errors.moq}</p>

                            </div>

                            {/* Product Description */}
                            <div className='my-2'>
                                <label htmlFor="email" className="text-gray-700 font-serif w-full mb-2">Product Description</label>
                                <Editor
                                    editorState={editorState}
                                    onEditorStateChange={setEditorState}
                                    wrapperClassName="p-2 shadow-md rounded-md border"
                                    editorClassName="bg-white shadow-md border border-gray-300 rounded p-2"
                                />
                            </div>

                            {/* Product Thumbnail Photo Text Field */}
                            <div className="mt-4">
                                <label htmlFor="thumbnail" className="text-gray-700 font-serif w-full">Product Thumbnail </label>
                                {values.thumbnail ? <>
                                    <div className="w-[250px] h-[300px] border-2 border-dashed flex items-center justify-center ">

                                        <img
                                            src={URL.createObjectURL(
                                                values.thumbnail
                                            )}
                                            className="w-full h-full border border-gray-200 rounded-lg shadow-lg p-1 object-cover"
                                            alt=""
                                        />
                                    </div></>
                                    : <></>}

                                <input type="file" onChange={(e) => {
                                    setFieldValue(
                                        "thumbnail",
                                        e.currentTarget.files[0]
                                    );
                                }} className="mt-1 file:border-none file:bg-gray-600 file:rounded-full w-full file:text-white file:px-4 file:py-1" />
                                <p className="text-red-600 text-sm py-1">{errors.thumbnail}</p>
                            </div>

                            {/* Product Images Photo Text Field */}
                            <div className="mt-4">
                                <label htmlFor="product_photopath" className="text-gray-700 font-serif w-full">Product Images </label>


                                <input type="file" multiple={true} onChange={(e) => {
                                    setFieldValue(
                                        "product_photopath",
                                        e.currentTarget.files
                                    );
                                }} className="mt-1 file:border-none file:bg-gray-600 file:rounded-full w-full file:text-white file:px-4 file:py-1" />

                                <div className='max-w-[50vw] flex overflow-scroll gap-3'>
                                    {
                                        Array.from(values.product_photopath).map((image, index) => {
                                            return (
                                                <div key={index} className="w-[250px] h-[150px] border-2 border-dashed flex items-center my-5  justify-center ">
                                                    <img
                                                        src={URL.createObjectURL(
                                                            image
                                                        )}
                                                        className="w-[250px] h-[150px] border border-gray-200 rounded-lg shadow-lg p-1 object-cover"
                                                        alt=""
                                                    />
                                                </div>
                                            )
                                        }
                                        )
                                    }
                                </div>
                                <p className="text-red-600 text-sm py-1">{errors.product_photopath}</p>
                            </div>

                            {/* Product Status */}
                            <div className="mt-4">
                                <label htmlFor="status" className="text-gray-700 font-serif w-full">Status </label>
                                <select name="status" onChange={handleChange} id="status" className="mt-1 border px-1 rounded w-full outline-none hover: border-gray-400 py-1 active:border-gray-600 focus-visible:border-gray-600 active:outline-none focus-visible:outline-none">
                                    <option selected={true} disabled={true}> -- Select Status -- </option>
                                    <option value="Show"> Show </option>
                                    <option value="Hide"> Hide </option>
                                    <option value="Unavailable"> Unavailable </option>

                                </select>
                                <p className="text-red-600 text-sm py-1">{errors.status}</p>


                            </div>

                            <hr className='my-2' />
                            <div className='flex gap-5 mt-5'>
                                <button type='submit' className='bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-full'>Add Product</button>

                                <button onClick={() => navigate('/distributor/products')} className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full'>Cancel</button>
                            </div>
                        </form>
                    )}
                </Formik>

            </div>
        )
    }
}
