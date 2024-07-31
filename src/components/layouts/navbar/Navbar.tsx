import logo from '../../../assets/img/logos/logo-cvisnet.png';

export default function Navbar () {
    return (
        <>
            <nav className="flex justify-between bg-white pl-14 pr-24 py-5">
                <div className="">
                    <img className='w-60 h-auto' src={logo} alt="logo-cvisnet" />
                </div>
                <div className="flex items-center">
                   <ul className="flex space-x-8">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Latest News</li>
                    <li>Awards</li>
                    <li>Programs</li>
                    <li>Projects</li>
                    <li>Gallery</li>
                    <li>Services</li>
                    <li>Partners</li>
                    <li>Contact</li>
                   </ul>
                </div>
            </nav>

        </>
    );
}