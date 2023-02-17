import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { mixed, object, ref, string } from "yup";
import ApiConstant from "../../constants/ApiConstant";
import { authActions } from "../../data/auth-slice";

function Register() {
    const dispatcher = useDispatch();
    const navigate = useNavigate();


    const registerSchema = object({
        name: string().required("Full Name is required"),
        phone: string().required("Phone Number is required"),
        address: string().required("Address is required"),
        email: string().email().required("Email Address is required"),
        panvat: string().nullable("PAN / VAT is required"),
        role: string().nullable("Choose what you want to signup as."),
        organization_name: string().required("Organization Name is required"),
        organization_photo: mixed().nullable("Organization Photo is required"),
        office_number: string().required("Office Number is required"),
        profile_photo: mixed().nullable("Profile Photo is required"),
        password: string().required("Password is required"),
        confirm_password: string().oneOf([ref('password'), null], 'Confirm Password doesnot match').required("Password Confirmation is required"),
    });
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-center min-h-screen" >
                    <img src="./wholeseller/login.svg" alt="" />
                </div>
                <div className="px-10 flex items-center justify-center min-h-screen">
                    <div>
                        <h1 className="text-4xl font-semibold text-gray-800  text-center my-8">Don't have an Account ? Create a new one</h1>
                        <h2 className="text-gray-600 text-center">
                            Welcome to multi-vendor marketplace. Please register to proceed.
                        </h2>
                        <Formik initialValues={{ name: '', phone: '', address: '', email: '', panvat: '', organization_name: '', organization_photo: '', office_number: '', profile_photo: '', password: '', confirm_password: '', role: '' }}
                            validationSchema={registerSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                const formData = new FormData();
                                formData.append('name', values.name);
                                formData.append('phone', values.phone);
                                formData.append('address', values.address);
                                formData.append('email', values.email);
                                formData.append('panvat', values.panvat);
                                formData.append('role', values.role);
                                formData.append('organization_name', values.organization_name);
                                formData.append('organization_photo', values.organization_photo);
                                formData.append('office_number', values.office_number);
                                formData.append('profile_photo', values.profile_photo);
                                formData.append('password', values.password);
                                formData.append('confirm_password', values.confirm_password);

                                fetch(
                                    ApiConstant.API_URL + 'register',
                                    {
                                        method: 'POST',
                                        body: formData,
                                    }
                                ).then((response) => {
                                    if (response.ok) {
                                        response.json().then((data) => {
                                            dispatcher(authActions.login({ token: data.token, user: data.user }));
                                            navigate('/');
                                        });
                                    }
                                    else {
                                        response.json().then((data) => {
                                            alert(data.message);
                                        });
                                    }

                                });

                            }}
                            validateOnChange={false}
                            validateOnBlur={false}
                        >
                            {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
                                <form onSubmit={handleSubmit}>
                                    {/* Full Name Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="email" className="text-gray-700 font-serif w-full">Full Name</label>
                                        <input type="text" name="name" id="name" onChange={handleChange} className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                                        <p className="text-red-600 text-sm py-1">{errors.name}</p>
                                    </div>

                                    {/* Phone Number Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="phone" className="text-gray-700 font-serif w-full">Phone Number</label>
                                        <input type="text" onChange={handleChange} name="phone" id="phone" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                                        <p className="text-red-600 text-sm py-1">{errors.phone}</p>

                                    </div>

                                    {/* Address Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="address" className="text-gray-700 font-serif w-full">Address</label>
                                        <input type="text" onChange={handleChange} name="address" id="address" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                                        <p className="text-red-600 text-sm py-1">{errors.address}</p>

                                    </div>

                                    {/* Email Address Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="email" className="text-gray-700 font-serif w-full">Email Address</label>
                                        <input type="email" onChange={handleChange} name="email" id="email" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                                        <p className="text-red-600 text-sm py-1">{errors.email}</p>

                                    </div>

                                    {/* Password  Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="password" className="text-gray-700 font-serif w-full">Password</label>
                                        <input type="password" onChange={handleChange} name="password" id="password" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                                        <p className="text-red-600 text-sm py-1">{errors.password}</p>

                                    </div>

                                    {/* Confirm Password  Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="confirm_password" className="text-gray-700 font-serif w-full">Confirm Password</label>
                                        <input type="password" onChange={handleChange} name="confirm_password" id="confirm_password" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                                        <p className="text-red-600 text-sm py-1">{errors.confirm_password}</p>

                                    </div>

                                    {/* PAN/VAT Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="panvat" className="text-gray-700 font-serif w-full">PAN / VAT</label>
                                        <input type="text" onChange={handleChange} name="panvat" id="panvat" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                                        <p className="text-red-600 text-sm py-1">{errors.panvat}</p>

                                    </div>

                                    {/* Organization Name Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="organization_name" className="text-gray-700 font-serif w-full">Organization Name</label>
                                        <input type="text" onChange={handleChange} name="organization_name" id="organization_name" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                                        <p className="text-red-600 text-sm py-1">{errors.organization_name}</p>

                                    </div>

                                    {/* Organization Photo Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="organization_photo" className="text-gray-700 font-serif w-full">Organization Photo</label>
                                        {values.organization_photo ? <>
                                            <div className="w-[250px] h-[300px] border-2 border-dashed flex items-center justify-center ">

                                                <img
                                                    src={URL.createObjectURL(
                                                        values.organization_photo
                                                    )}
                                                    className="w-full h-full border border-gray-200 rounded-lg shadow-lg p-1 object-cover"
                                                    alt=""
                                                />
                                            </div></>
                                            : <></>}

                                        <input type="file" onChange={(e) => {
                                            setFieldValue(
                                                "organization_photo",
                                                e.currentTarget.files[0]
                                            );
                                        }} className="mt-1 file:border-none file:bg-gray-600 file:rounded-full w-full file:text-white file:px-4 file:py-1" />
                                        <p className="text-red-600 text-sm py-1">{errors.organization_photo}</p>

                                    </div>

                                    {/* Organization Phone Number Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="office_number" className="text-gray-700 font-serif w-full">Office Number</label>
                                        <input type="text" onChange={handleChange} name="office_number" id="office_number" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                                        <p className="text-red-600 text-sm py-1">{errors.office_number}</p>

                                    </div>

                                    {/* Profile Photo Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="profile_photo" className="text-gray-700 font-serif w-full">Profile Photo</label>
                                        {values.profile_photo ? <>
                                            <div className="w-[250px] h-[300px] border-2 border-dashed flex items-center justify-center ">

                                                <img
                                                    src={URL.createObjectURL(
                                                        values.profile_photo
                                                    )}
                                                    className="w-full h-full border border-gray-200 rounded-lg shadow-lg p-1 object-cover"
                                                    alt=""
                                                />
                                            </div></>
                                            : <></>}

                                        <input type="file" onChange={(e) => {
                                            setFieldValue(
                                                "profile_photo",
                                                e.currentTarget.files[0]
                                            );
                                        }} className="mt-1 file:border-none file:bg-gray-600 file:rounded-full w-full file:text-white file:px-4 file:py-1" />
                                        <p className="text-red-600 text-sm py-1">{errors.profile_photo}</p>

                                    </div>

                                    {/* Role Text Field */}
                                    <div className="mt-4">
                                        <label htmlFor="role" className="text-gray-700 font-serif w-full">Signup As: </label>
                                        <select name="role" onChange={handleChange} id="role" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600  mt-2 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none">
                                            <option value="" selected={true} disabled={true}> -- Select Signup As --</option>
                                            <option value="wholeseller" > Wholeseller </option>
                                            <option value="distributor" > Distributor </option>
                                        </select>
                                        <p className="text-red-600 text-sm py-1">{errors.role}</p>

                                    </div>


                                    {/* Forget Password Button */}
                                    <p className="text-right text-gray-600 my-4">
                                        <a href="">
                                            Forget Password ?
                                        </a>
                                    </p>

                                    {/* Register Button */}
                                    <div className="flex items-center justify-center">
                                        <button type="submit" className="w-6/12 bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-full">Register</button>
                                    </div>


                                    {/* Login Button */}
                                    <div className="flex items-center justify-center mt-4">
                                        <p className="text-gray-500">Already have an account ?</p>
                                        <Link to="/login" className="text-gray-500 hover:text-gray-800 ml-2 underline underline-offset-4">Login</Link>
                                    </div>

                                </form>
                            )}
                        </Formik>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Register;