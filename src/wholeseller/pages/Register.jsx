import { Link } from "react-router-dom";

function Register() {
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
                        <form action="">
                            {/* Full Name Text Field */}
                            <div className="mt-4">
                                <label htmlFor="email" className="text-gray-700 font-serif w-full">Full Name</label>
                                <input type="text" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                            </div>

                            {/* Phone Number Text Field */}
                            <div className="mt-4">
                                <label htmlFor="phone" className="text-gray-700 font-serif w-full">Phone Number</label>
                                <input type="text" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                            </div>

                            {/* Address Text Field */}
                            <div className="mt-4">
                                <label htmlFor="address" className="text-gray-700 font-serif w-full">Address</label>
                                <input type="text" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                            </div>

                            {/* Email Address Text Field */}
                            <div className="mt-4">
                                <label htmlFor="email" className="text-gray-700 font-serif w-full">Email Address</label>
                                <input type="email" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                            </div>

                            {/* PAN/VAT Text Field */}
                            <div className="mt-4">
                                <label htmlFor="panvat" className="text-gray-700 font-serif w-full">PAN / VAT</label>
                                <input type="text" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                            </div>

                            {/* Organization Name Text Field */}
                            <div className="mt-4">
                                <label htmlFor="organization_name" className="text-gray-700 font-serif w-full">Organization Name</label>
                                <input type="text" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                            </div>

                            {/* Organization Photo Text Field */}
                            <div className="mt-4">
                                <label htmlFor="organization_photo" className="text-gray-700 font-serif w-full">Organization Photo</label>
                                <input type="file" className="mt-1 file:border-none file:bg-gray-600 file:rounded-full w-full file:text-white file:px-4 file:py-1" />
                            </div>

                            {/* Organization Phone Number Text Field */}
                            <div className="mt-4">
                                <label htmlFor="office_number" className="text-gray-700 font-serif w-full">Office Number</label>
                                <input type="text" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                            </div>

                            {/* Profile Photo Text Field */}
                            <div className="mt-4">
                                <label htmlFor="profile_photo" className="text-gray-700 font-serif w-full">Profile Photo</label>
                                <input type="file" className="mt-1 file:border-none file:bg-gray-600 file:rounded-full w-full file:text-white file:px-4 file:py-1" />
                            </div>

                            {/* Forget Password Button */}
                            <p className="text-right text-gray-600 my-4">
                                <a href="">
                                    Forget Password ?
                                </a>
                            </p>

                            {/* Register Button */}
                            <div className="flex items-center justify-center">
                                <button className="w-6/12 bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-full">Register</button>
                            </div>


                            {/* Login Button */}
                            <div className="flex items-center justify-center mt-4">
                                <p className="text-gray-500">Already have an account ?</p>
                                <Link to="/login" className="text-gray-500 hover:text-gray-800 ml-2 underline underline-offset-4">Login</Link>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Register;