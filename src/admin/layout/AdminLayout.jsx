import React from 'react';
import { BiCategoryAlt, BiSlideshow } from 'react-icons/bi';
import { GoDashboard } from 'react-icons/go';
import { MdOutlineCategory } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
import ApiConstant from '../../constants/ApiConstant';
import { authActions } from '../../data/auth-slice';


export default function AdminLayout() {
    const isLoggedIn = useSelector(state => state.auth.isAuthenticated);

    const dispatcher = useDispatch();
    const navigate = useNavigate();
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
                    navigate('/login');
                });
            }
            else {
                response.json().then((data) => {
                    alert(data.message);
                });
            }
        });

    }

    const adminNav = [
        {
            id: 1,
            name: 'Dashboard',
            icon: <GoDashboard />,
            link: '/admin/dashboard',
        },
        {
            id: 2,
            name: 'Slideshow',
            icon: <BiSlideshow />,
            link: '/admin/slideshow',
        },
        {
            id: 3,
            name: 'Category',
            icon: <BiCategoryAlt />,
            link: '/admin/category',
        },
        {
            id: 4,
            name: 'Sub Category',
            icon: <MdOutlineCategory />,
            link: '/admin/subcategory',
        },
    ];

    let activeclassName = 'flex bg-gray-500  text-white border py-2 my-2  rounded-xl  text-white px-3 shadow-sm hover:bg-gray-600';
    let unactiveclassName = 'flex border-gray-500 border  text-black py-2 my-2  rounded-xl hover:text-white px-3 shadow-sm hover:bg-gray-600';
    if (isLoggedIn) {
        return (
            <div className='bg-gray-50'>
                <div className=' mx-auto py-2'>
                    <div className='flex gap-10'>
                        <div className='shadow-md w-64 px-5 py-3 min-h-screen h-auto'>
                            <div className='flex justify-center'>
                                <img src="./logo.png" alt="Logo" className='w-32' />

                            </div>
                            <div>
                                <ul className='mt-10'>
                                    {
                                        adminNav.map((nav, index) => {
                                            return <li key={nav.id} >
                                                <NavLink key={index} to={nav.link} className={({ isActive }) =>
                                                    isActive ? activeclassName : unactiveclassName
                                                }>
                                                    <p className='flex gap-5 items-center'>
                                                        {nav.icon}
                                                        <span>{nav.name}</span>
                                                    </p>
                                                </NavLink>
                                            </li>
                                        })
                                    }

                                </ul>
                                <div className='absolute bottom-5 shadow-md p-2 bg-indigo-500 text-white rounded-md'>
                                    Powered By BITS
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 px-4'>
                            <div className='flex w-full justify-between'>
                                <h1 className='text-2xl font-bold'>Multivendor App</h1>
                                <button onClick={() => logout()}>
                                    Logout
                                </button>
                            </div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <Navigate to='/login' />
    }
}
