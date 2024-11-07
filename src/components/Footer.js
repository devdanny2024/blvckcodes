import Image from 'next/image';

function Footer() {
    return(
    <>
    <div className='footer-contain'>
        <div className='footer-cont'>
                <div className='comp-profile'>
                    <Image 
                        src="/images/bc.png" // Path relative to the 'public' folder
                        alt="Example Image"
                        width={110} // Specify width
                        height={50} // Specify height
                    />                
                    <p>
                        With home automation, you can control all the systems in your 
                        home easily. From wherever you are, with just voice command, 
                        button tap, touch on digital screens and even new generation remotes.
                    </p>
                    <div className='socials'>
                    <a href='https://www.instagram.com/blvckcode_io?igsh=MTZ5OWh4enl4Y3d1MQ==' target="_blank" rel="noopener noreferrer">
                        <Image 
                        src="/images/instagram.png" // Path relative to the 'public' folder
                        alt="Example Image"
                        width={30} // Specify width
                        height={30} // Specify height
                        />
                    </a>
                        <a href='https://ng.linkedin.com/company/blvck-code-llc' target="_blank" rel="noopener noreferrer">
                            <Image 
                            src="/images/linkedin.png" // Path relative to the 'public' folder
                            alt="Example Image"
                            width={30} // Specify width
                            height={30} // Specify height
                            />
                        </a>
                        
                    </div>
                </div>
                <div className='comp-links'>
                    <h1>Company</h1>
                    <p>About Us</p>
                    <p>Our Services</p>
                    <p>Our Packages</p>
                </div>
        </div>
        <hr></hr>
    </div>
        
    </>
    )
};

export default Footer;
