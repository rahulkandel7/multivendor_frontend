import { AiOutlineUser } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { GoSearch } from 'react-icons/go';
import { GrFavorite } from 'react-icons/gr';
import { RiHome2Line } from 'react-icons/ri';
import { VscSignOut } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';
import ApiConstant from '../../constants/ApiConstant';
import { authActions } from '../../data/auth-slice';
import { Footer } from '../components/Footer';

function WholeSellerLayout() {
    const dispatcher = useDispatch();
    //Logout Function Code 
    async function logout() {
        fetch(ApiConstant.API_URL + 'logout', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    dispatcher(authActions.logout());
                });
            }
            else {
                response.json().then((data) => {
                    alert(data.message);
                });
            }
        });

    }
    const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
    return (<>
        {/* Desktop Nav Bar Code */}
        <div className="w-11/12 mx-auto pt-2">
            <div className="flex gap-10 items-center justify-between">
                {/* Logo of the app */}
                <div>
                    <Link to="/">
                        <img src="./logo.png" alt="Multivendor logo" className='w-32 md:w-52 mt-0' />
                    </Link>
                </div>
                {/* Search Box */}
                <div className=' flex-1 items-center justify-center flex'>
                    <div className='relative md:w-9/12 w-full' >
                        <div className='absolute top-[50%] -translate-y-[50%] left-[2%]'>
                            <GoSearch className='text-gray-600' />
                        </div>
                        <input type="search" name="" id="" className="bg-gray-100 border-gray-100 pl-8 pr-4 outline-none focus-visible:outline-none rounded-full py-1 shadow-sm focus:border-gray-600 active:border-gray-600 placeholder-shown:text-sm w-full" placeholder="Looking for something..." />
                    </div>
                </div>
                {/* Others icons of the app */}
                <div className='hidden md:flex gap-5'>
                    {
                        isLoggedIn ?
                            <div className='flex gap-5'>
                                {/* Wishlist Icon */}
                                <div className='flex item-center h-full justify-center'>
                                    <GrFavorite className='mt-1' /> <p className='pl-2'>Wishlist</p>
                                </div>
                                {/* Profile Icon */}
                                <div className='flex item-center h-full justify-center'>
                                    <AiOutlineUser className='mt-1' /> <p className='pl-2'>Profile</p>
                                </div>
                                {/* Logout Icon */}
                                <div className='flex item-center h-full justify-center cursor-pointer' onClick={() => logout()}>
                                    <VscSignOut className='mt-1' /> <p className='pl-2'>Logout</p>
                                </div>
                            </div> : <div className='flex gap-5'>
                                {/* Wishlist Icon */}
                                <div className='flex item-center h-full justify-center'>
                                    <GrFavorite className='mt-1' /> <p className='pl-2'>Wishlist</p>
                                </div>
                                {/* Login Icon */}
                                <Link to="/login">
                                    <div className='flex item-center h-full justify-center'>
                                        <VscSignOut className='mt-1' /> <p className='pl-2'>Login</p>
                                    </div>
                                </Link>

                                {/* Register Icon */}
                                <Link to="/register">
                                    <div className='flex item-center h-full justify-center'>
                                        <VscSignOut className='mt-1' /> <p className='pl-2'>Register</p>
                                    </div>
                                </Link>
                            </div>
                    }

                </div>
            </div>
            <Outlet />
        </div>

        {/* Mobile navigation */}
        <div className=' md:hidden fixed bottom-0 w-full bg-white shadow-md z-10'>
            <div className='flex gap-1 justify-around items-center px-6 py-2'>

                <Link to='/' className=' flex flex-col items-center text-gray-900  px-2 py-3 '>
                    <RiHome2Line />
                    <p className='mt-1'>
                        Home
                    </p>
                </Link>

                <Link to='/' className=' flex flex-col items-center text-gray-500  px-2 py-3 '>
                    <BiCategoryAlt />
                    <p className='mt-1'>Category</p>
                </Link>

                <Link to='/' className=' flex flex-col items-center text-gray-500  px-2 py-3 '>
                    <GrFavorite />
                    <p className='mt-1'>Wishlist</p>
                </Link>

                <Link to='/' className=' flex flex-col items-center text-gray-500  px-2 py-3 '>
                    <AiOutlineUser />
                    <p className='mt-1'>Profile</p>
                </Link>

            </div>
        </div>
        <Footer />
    </>);
}

export default WholeSellerLayout;