import Image from 'next/image';

function Ourpackages() {
    return(
    <>
    <div className='pack-cont'>
        <h1>Our Packages</h1>
        <h2>Explore Our Selection of Cutting Edge Smart Home Packages</h2>
        <div className='package-cont'>
            <div className='Helios'>
                <h1>Helios Package</h1>
                <p>
                    Designed for 2-bedroom homes. Automate lighting, air conditioning, and access control for seamless living.
                 </p>
            </div>
            <div className='Helios'>
                <h1>Hermes Package</h1>
                <p>
                Perfect for 3-bedroom setups, including living room and kitchen. Features smart lighting, air conditioning, and access control.
                 </p>
            </div>
            <div className='Helios'>
                <h1>Zeus Package</h1>
                <p>
                For 4-bedroom homes with added luxury. Includes curtain control, lighting, air conditioning, and access control.
                 </p>
            </div>
            <div className='Helios'>
                <h1>Zeus Package</h1>
                <p>
                Looking for something custom? Contact us at 0913 130 0627 to build your unique smart home solution.
                </p>
            </div>
        </div>
        <a 
                    href="https://wa.me/23491300627?text=Hello,%20I%20am%20interested%20in%20your%20smart%20home%20automation%20devices!" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
        >
        <div className='package-btn'>Contact us</div>
        </a>

    </div>
    </>
    )
};

export default Ourpackages;
