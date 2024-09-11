import Image from 'next/image';

function Whyus() {
    return(
    <>
    <div id='services' className='why-cont'>
        <div className='why-title'>
            <h1>WHY CHOOSE US</h1>
            <h2>The Benefits of Partnering with blvck</h2>
        </div>
        <div className='content-w'>
            <div className='content-why'>
                <div className='w-cont-title'>
                    <h1>01.</h1>
                    <h2>Smart Home Solution</h2>
                </div>
                <div className='why-content'>
                    Do you always forget to turn off the lights
                    when leaving the house, or do you want to 
                    turn it off without leaving your bed? We have automation 
                    that allows you to turn them on/off without much effort.
                </div>
            </div>
            <div className='content-why'>
                <div className='w-cont-title'>
                    <h1>02.</h1>
                    <h2>Expert Advice</h2>
                </div>
                <div className='why-content'>
                    Not sure where to start? We simplify the process by guiding you through the best smart home options on the market, based on your lifestyle and budget.                
                </div>
            </div>
            <div className='content-why'>
                <div className='w-cont-title'>
                    <h1>03.</h1>
                    <h2>Tailored Solution</h2>
                </div>
                <div className='why-content'>
                    Your home is unique, and so are our solutions. We customize everything to suit your specific needs, from the devices you choose to how they’re set up.                
                </div>
            </div>
            <div className='content-why'>
                <div className='w-cont-title'>
                    <h1>04.</h1>
                    <h2>Trusted Brand</h2>
                </div>
                <div className='why-content'>
                    We only work with reliable and trusted brands, ensuring that you get high-quality products that last.
                </div>
            </div>
            <div className='content-why'>
                <div className='w-cont-title'>
                    <h1>05.</h1>
                    <h2>Hassle free setup</h2>
                </div>
                <div className='why-content'>
                    No need to worry about the technical stuff. Our experienced team handles all installations and setups, so you can start enjoying your smart home right away.                
                </div>
            </div>
            <div className='content-why'>
                <div className='w-cont-title'>
                    <h1>06.</h1>
                    <h2>Wireless connection</h2>
                </div>
                <div className='why-content'>
                    No need to worry about the technical stuff. Our experienced team handles all installations and setups, so you can start enjoying your smart home right away.
                </div>
            </div>
        </div>
        <div className='phone-w'>
            <div className='lists-t'>
            <Image 
                        src="/images/tick.png" // Path relative to the 'public' folder
                        alt="tick"
                        width={20} // Specify width
                        height={20} // Specify height
            />  
            <p>Smart Home Solutions</p>
            </div>
            <div className='lists-t'>
            <Image 
                        src="/images/tick.png" // Path relative to the 'public' folder
                        alt="tick"
                        width={20} // Specify width
                        height={20} // Specify height
            />  
            <p>Expert Advice</p>
            </div>
            <div className='lists-t'>
            <Image 
                        src="/images/tick.png" // Path relative to the 'public' folder
                        alt="tick"
                        width={20} // Specify width
                        height={20} // Specify height
            />  
            <p>Tailored Solution</p>
            </div>
            <div className='lists-t'>
            <Image 
                        src="/images/tick.png" // Path relative to the 'public' folder
                        alt="tick"
                        width={20} // Specify width
                        height={20} // Specify height
            />  
            <p>Trusted Brands</p>
            </div>
            <div className='lists-t'>
            <Image 
                        src="/images/tick.png" // Path relative to the 'public' folder
                        alt="tick"
                        width={20} // Specify width
                        height={20} // Specify height
            />  
            <p>Hassle Free Setup</p>
            </div>
            <div className='lists-t'>
            <Image 
                        src="/images/tick.png" // Path relative to the 'public' folder
                        alt="tick"
                        width={20} // Specify width
                        height={20} // Specify height
            />  
            <p>Wireless Connection</p>
            </div>
        </div>
    </div>
    </>
    )
   
};

export default Whyus;
