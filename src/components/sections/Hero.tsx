import background from '../../assets/img/bg/bg-wave-removebg.png';
// import children from '../../assets/img/hero-section/children listening.png';

export default function Hero () {
    return (
        <div className='h-screen'>
        <div className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})`, height: '100vh', width: 'auto', overflow: 'hidden' }}
        >
        </div>
        
        </div>
    );
}