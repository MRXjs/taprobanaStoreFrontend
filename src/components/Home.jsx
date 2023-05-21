// import logo from '../assets/images/logo.png'
const Home = () => {
    return ( 
        <main className="home w-full min-h-[80vh]">
            <section className="w-full min-h-[80vh] backdrop-blur-md flex flex-col justify-center items-center">
                   <div className="">
                    {/* <img src={logo} alt="Taprobana Logo" className='home-logo w-40 mx-auto' /> */}
                    <h1 className="font-aquire text-white text-4xl mt-4">
                        Welcome to taprobana
                        <span className='w-24 h-2 bg-gradient-to-tr from-red-500 to-blue-800 block'></span>
                    </h1>
                   </div>
            </section>
        </main>
     );
}
 
export default Home;