import logo from '../../../assets/img/logos/logo-cvisnet.png';

export default function Navbar () {
    return (
        <>
            <nav className="flex justify-between bg-white pl-14 pr-24 py-5">
                <div className="">
                    <img className='w-70 h-auto' src={logo} alt="logo-cvisnet" />
                </div>
                <div className="flex items-center">
                   <ul className="flex space-x-8">
                    <li className='hover:text-blue-400'>Home</li>
                    <li className='hover:text-blue-400'>About Us</li>
                    <li className='hover:text-blue-400'>Latest News</li>
                    <li className='hover:text-blue-400'>Awards</li>
                    <li className='hover:text-blue-400'>Programs</li>
                    <li className='hover:text-blue-400'>Projects</li>
                    <li className='hover:text-blue-400'>Gallery</li>
                    <li className='hover:text-blue-400'>Services</li>
                    <li className='hover:text-blue-400'>Partners</li>
                    <li className='hover:text-blue-400'>Contact</li>
                   </ul>
                </div>
            </nav>

        </>
    );
}