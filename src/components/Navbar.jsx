import logo from '../assets/images/logo.png'
const Navbar = (isLogin) => {
    return ( 
        <nav className="flex flex-row justify-between w-full py-4 px-6 bg-transparent backdrop-blur-xl">
            {/* Logo */}
            <div className='flex flex-row'>
                <img src={logo} alt="Taprobana Logo"  className='w-8'/>
                <span className='font-aquire text-xl pt-1 text-white'>Taprobana</span>
            </div>
            <div className='space-x-10 font-semibold pt-2 text-sm text-slate-200'>
                <a href="/">Products</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>
            {
                isLogin?<button className='w-24 h-6 rounded-sm font-bold text-sm bg-yellow-500 mt-[5.5px]'>Login</button>:""
            }
        </nav>
     );
}
 
export default Navbar;