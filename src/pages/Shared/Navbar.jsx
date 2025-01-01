import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const routerOptions = <>
        <li><NavLink to={"/"} className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"}>HOME</NavLink></li>
        <li><NavLink to={"fd"} className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"} >CONTACT US</NavLink></li>
        <li><NavLink to={"dfd"} className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"}>DASHBOARD</NavLink></li>
        <li><NavLink to={"/our-menu"} className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"}>OUR MENU</NavLink></li>
        <li><NavLink to={"df"} className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"}>OUR SHOP</NavLink></li>
    </>

    return (
        <div className="navbar fixed z-50 bg-opacity-30 max-w-screen-2xl mx-auto bg-black text-white px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {routerOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BISTRO BOSS <br />Restaurant</a>
            </div>

            <div className="navbar-end gap-2">
                <div className="navbar-center hidden lg:flex font-semibold">
                    <ul className="menu menu-horizontal px-1 "
                    >
                        {routerOptions}
                    </ul>
                </div>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;