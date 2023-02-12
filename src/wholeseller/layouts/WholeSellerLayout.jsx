import { AiOutlineUser } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { GrFavorite } from 'react-icons/gr';
import { VscSignOut } from 'react-icons/vsc';
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

function WholeSellerLayout() {
    return (<>
        {/* Desktop Nav Bar Code */}
        <div className="w-11/12 mx-auto pt-2">
            <div className="flex gap-10 items-center justify-between">
                {/* Logo of the app */}
                <div>
                    <Link to="/">
                        <img src="./logo.png" alt="Multivendor logo" className='w-52 mt-0' />
                    </Link>
                </div>
                {/* Search Box */}
                <div className=' flex-1 items-center justify-center flex'>
                    <div className='relative w-9/12' >
                        <div className='absolute top-[50%] -translate-y-[50%] left-[2%]'>
                            <GoSearch className='text-gray-600' />
                        </div>
                        <input type="search" name="" id="" className="bg-gray-100 border-gray-100 pl-8 pr-4 outline-none focus-visible:outline-none rounded-full py-1 shadow-sm focus:border-gray-600 active:border-gray-600 placeholder-shown:text-sm w-full" placeholder="Looking for something..." />
                    </div>
                </div>
                {/* Others icons of the app */}
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
                    <div className='flex item-center h-full justify-center'>
                        <VscSignOut className='mt-1' /> <p className='pl-2'>Logout</p>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
        <Footer />
    </>);
}

export default WholeSellerLayout;