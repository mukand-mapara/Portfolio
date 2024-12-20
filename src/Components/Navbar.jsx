import { useContext, useEffect, useState } from 'react';
import { FaBars, FaHandPointUp } from "react-icons/fa";
import HomeDiv from './HomeDiv';
import Skills from './Skills';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import { motion } from "framer-motion"
import { Theme } from '../Context/Context';
import { navbarLogo, themes } from '../Constants/Constants';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { darkTheme, setDarkTheme } = useContext(Theme);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <>
            <nav className={`navbar navbar-expand-lg sticky-top ${scrolled && 'bg-scroll'} ${darkTheme && "darkTheme"}`}>
                <div className="container-fluid px-5">
                    <div className="logo">
            <span className="letter m">M</span>
            <span className="letter k">K</span>
          </div>
                    <button className="navbarToggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="togglerIcon">
                            <FaBars className='toggler' />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav nav-pills pe-4">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    Home
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">
                                    about
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">
                                    services
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">
                                    portfolio
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    contact
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <button className={`themeBtn ${darkTheme && "darkTheme"}`} onClick={() => setDarkTheme(!darkTheme)}>
                                    <img src={themes.lightModeImg} style={{ visibility: !darkTheme ? "visible" : "hidden" }} alt="☀️" />
                                    <img src={themes.nightModeImg} style={{ visibility: darkTheme ? "visible" : "hidden" }} alt="🌜" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary rounded-2" tabIndex="0">
                <div id='home' className={`homeDiv ${darkTheme && "darkTheme"} px-3`}>
                    <HomeDiv />
                </div>
                <div id='skills' className="skillsDiv px-3 py-5">
                    <Skills />
                </div>
                <div id='service' className="services px-3 py-5">
                    <motion.div
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <Services />
                    </motion.div>
                </div>
                <div id='portfolio' className="portfolio" >
                    <Portfolio />
                </div>
                <div id='contact' className="contact px-5 pt-5 py-5">
                    <Contact />
                </div>

                <div className="footer">
                    <Footer />
                </div>

                <a href="#home" className="topBtn" style={{ visibility: scrolled ? "visible" : "hidden" }}>
                    <FaHandPointUp />
                </a>
            </div>
        </>
    )
}
