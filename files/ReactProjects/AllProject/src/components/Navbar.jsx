import { Link } from "react-router";

function Navbar(){
    return(
            <nav className="bg-[#111828] px-6 py-4">
                <div className="flex justify-between items-center bg-[#11193E] h-20  rounded-full">
                <h1 className="text-white ml-16 text-4xl font-bold">Prithwi</h1>
                <div className="flex gap-16 text-2xl text-[#beccbe]  ">
                    <Link  to="/home" className="text-[#f0b336] underline" >
                    Home
                    </Link>
                    <Link  to="/services" className=" hover:text-[#f0b336]" >
                    Services
                    </Link>
                    <Link  to="/about" className=" hover:text-[#f0b336]" >
                    About
                    </Link>
                    <Link  to="/projects" className=" hover:text-[#f0b336]" >
                    Projects
                    </Link>
                    <Link  to="/blogs" className=" hover:text-[#f0b336]" >
                    Blogs
                    </Link>
                </div>

                <div className="h-14 max-w-fit bg-white mr-4 rounded-full">
                    <h2 className="px-10 text-2xl mt-2.5 text-[#344c36]">Contact Me</h2>
                </div>


            </div>
        </nav>
    )
}

export default Navbar;

