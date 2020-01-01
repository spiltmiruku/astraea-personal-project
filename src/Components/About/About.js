import React from 'react';
import venus from '../../resources/Venus.png';

const About = () => {
    return(
        <div className='about-box'>
        <img src={venus} alt='Venus' className='venus' />
            <div className='title-content-wrapper'>
            <h1 className='page-title'>ASTRAEA</h1>
            <section className='about'>
                <p>    
                In Greek mythology, ASTRAEA is the 'star-maiden', and the goddess of innocence. 
                </p>
                <br/>
                <p>
                ASTRAEA is a lifestyle brand, and the future of travel, however, we are more than a space travel company. We create luxury experiences for our clientele. With choices like the Moon, Mars, and Jupiter, you can choose the ultimate travel destination. 
                </p>
            </section>
            </div>
        </div>
    )
}

export default About;