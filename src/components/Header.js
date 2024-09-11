import Image from 'next/image';

function Header() {
    return(
    <div className='hero-container'>
        <div className='hero-back'>
            <div className='hero-title'> 
                Take Control of your home with smart automation devices.
            </div>
            <div className='contact-us-btn'>
                Contact us
            </div>
        </div>
        <div className='num-proj'>
            <div className='comp-project'>
                <div className='fifty'>
                    <h1>50+</h1>
                    <p>Smart products for your home</p>
                </div>
                <div className='fifty'>
                    <h1>16+</h1>
                    <p>Since 2022 We Started to innovate</p>
                </div>
                <div className='fifty'>
                    <h1>100+</h1>
                    <p>Customers</p>
                </div>
            </div>
            <div className='samp-vid'>
                <div className='play-btn'>
                    <div className='play'>
                    <Image
                    src="/images/play-btn.png" // Path relative to the 'public' folder
                    alt="Example Image"
                    width={20} // Specify width
                    height={20} // Specify height
                    />
                    </div>
                    <p>How it works</p>
                </div>
            </div>
        </div>
   </div>
    )
   
};

export default Header;
