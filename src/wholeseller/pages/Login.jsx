
function Login() {
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-center min-h-screen" >
                    <img src="./wholeseller/login.svg" alt="" />
                </div>
                <div className="px-10 flex items-center justify-center min-h-screen">
                    <div>
                        <h1 className="text-4xl font-semibold text-gray-800  text-center my-8">Login</h1>
                        <h2 className="text-gray-600 ">
                            Welcome to multi-vendor marketplace. Please login to your account.
                        </h2>
                        <form action="">
                            {/* Email Address Text Field */}
                            <div className="mt-4">
                                <label htmlFor="email" className="text-gray-700 font-serif w-full">Email Address</label>
                                <input type="text" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                            </div>

                            {/* Password Text Field */}
                            <div className="mt-4">
                                <label htmlFor="email" className="text-gray-700 font-serif w-full">Password</label>
                                <input type="text" className="border-b border-b-500 w-full outline-none hover: border-b-gray-400 active:border-b-gray-600 focus-visible:border-b-gray-600 active:outline-none focus-visible:outline-none" />
                            </div>

                            {/* Forget Password Button */}
                            <p className="text-right text-gray-600 my-4">
                                <a href="">
                                    Forget Password ?
                                </a>
                            </p>

                            {/* Login Button */}
                            <div className="flex items-center justify-center">
                                <button className="w-6/12 bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-full">Login</button>
                            </div>


                            {/* Register Button */}
                            <div className="flex items-center justify-center mt-4">
                                <p className="text-gray-500">Don't have an account ?</p>
                                <a href="" className="text-gray-500 hover:text-gray-800 ml-2 underline underline-offset-4">Register</a>
                            </div>


                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;