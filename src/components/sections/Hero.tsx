import background from '../../assets/img/bg/bg-wave.png';
import children from '../../assets/img/hero-section/children listening.png';
import TypingAnimation from '../magicui/typing-animation';

export default function Hero() {
    return (
        <div className='relative w-full flex justify-start items-start'>
            <img className='w-full h-screen' src={background} alt="bg-wave" />
            <div className='absolute z-10 flex justify-between items-center p-32 space-x-32'>
                <img className='scale-100' src={children} alt="children listening" />
                <div className='flex flex-col justify-center items-center space-y-12'>
                    <TypingAnimation
                        className="text-8xl font-bold text-white"
                        text="EMPOWER."
                    />
                    <p className='text-white text-2xl scale-110 text-justify'>CVISNET powers Central Visayas with seamless ICT services, boosting e-Governance and e-Commerce.  Join us to pioneer public service innovation and showcase ICT excellence nationwide!</p>
                    <div className='flex items-center space-x-28'>
                        <button className='text-white text-lg bg-blue-400 px-14 py-4 rounded-full'>Learn More</button>
                        <button className='text-white text-lg bg-blue-400 px-14 py-4 rounded-full'>Priorities</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
