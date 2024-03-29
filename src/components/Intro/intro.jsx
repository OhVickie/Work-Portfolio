import react from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/image.png';
import ViewMoreImg from '../../assets/hireme.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className="introText">My name is <span className="myIntroName">Victory</span> <br></br>
                    <span className="myIntroJob">Front-end Developer</span>
                </span>

                {/* <h2 className='hello'>Hello,</h2>
                <h2 className="introText">My name is <span className="myIntroName">Victory</span> <br></br>
                    -Web Developer-
                </h2> */}
                {/* <div className='introTextBox'>

                </div> */}

                <p className="introParagraph">This is my journey of creating aesthetically-pleasing
                    <br></br>and user-friendly websites.
                </p>
                <Link activeClass='active' to='worksection' spy={true} smooth={true} offset={-50} duration={800} >
                    <button className='btn'>View More</button>
                </Link>

            </div>

        </section>
    );
}

export default Intro;