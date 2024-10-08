import Image from 'next/image';

function Aboutus() {
    return(
    <>
    <div id='about' className='about-cont'>
        <div className='about-title'>
            <h1>ABOUT US</h1>
            <h2> MAKE YOUR HOME DO MORE FOR YOU</h2>
        </div>
        <div className='about-content'>
            <div className='about-imgg'></div>
            <div className='about-content2'>
                <div className='about-images'> 
                    <div className='camera'></div>
                    <div className='kwh'></div>
                </div>
                <div className='ab-text'>
                    Enhance your home capabilities with Blvck Code. While there are limites to what we can manage ourselves,
                    imagine a home that truly supports you in it's daily funtions. at Blvckcode.io, we optimize your
                    home to perfecrly suit your needs, so it works seamlessly for you.
                </div>
                <div className='phone-ab'>
                We work with top brands to recommend the right smart home products for you. Whether it's smart lighting, security systems, or climate control, we find the perfect fit for your needs.
                </div>
                <a 
                    href="https://wa.me/2349131300627?text=Hello,%20I%20am%20interested%20in%20your%20smart%20home%20automation%20devices!" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div className='ab-btn'>
                    Learn More
                    </div>
                </a>
            </div>
        </div>
    </div>
    </>
    )
   
};

export default Aboutus;
