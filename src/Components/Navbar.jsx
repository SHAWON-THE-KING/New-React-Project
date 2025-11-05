import Button from "./Button";

export default function Navbar() {
    return (
        <>
            <nav className='bg-[#1C1E53]'>
                <div className="container">
                    <div className="flex justify-between py-8 items-center">
                        <div>
                            <a href="#">
                                <img src="/logo.png" alt="" />
                            </a>
                        </div>

                        <div>
                            <ul className="flex gap-8 text-[#BBBBCB]">
                                <li><a href="#" className="hover:text-white">Home</a></li>
                                <li><a href="#" className="hover:text-white">About us</a></li>
                                <li><a href="#" className="hover:text-white">Features</a></li>
                                <li><a href="#" className="hover:text-white">Pricing</a></li>
                                <li><a href="#" className="hover:text-white">FAQ</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                            </ul>
                        </div>

                        <div>
                            <Button>Contact us</Button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
