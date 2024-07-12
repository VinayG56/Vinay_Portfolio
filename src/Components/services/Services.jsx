import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
    <section className='services section' id='services'>
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I Can Do</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">Web <br /> Developer</h3>
                </div>
                <span className="services_button" onClick={()=> toggleTab(1)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState===1 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Web Developer</h3>
                        <p className="services_modal-description">"I utilize a variety of project experiences to develop innovative web solutions, ensuring high-quality deliverables that exceed company expectations."</p>
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Proficient in crafting engaging and intuitive User Interfaces.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Expert in Frontend Web Development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Expert in creating attractive, responsive websites with CSS.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Dedicated to aligning development with company strategies.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Experienced in crafting tailored Full Stack Websites to company needs.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">Data <br /> Scientist</h3>
                </div>
                <span onClick={()=> toggleTab(2)}  className="services_button">View More <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState===2 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Data Scientist</h3>
                        <p className="services_modal-description">"Through a rich variety of project experiences, I consistently deliver high-quality, data-driven solutions that drive business success."</p>
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Committed to leveraging data for strategic insights
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Skilled in designing and implementing data-driven solutions.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Proficient in developing advanced analytical solutions.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Committed to continuous innovation in data science.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Skilled in deploying machine learning models for business solutions.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-brackets-curly services_icon"></i>
                    <h3 className="services_title">Competitive <br /> Programmer</h3>
                </div>
                <span onClick={()=> toggleTab(3)} className="services_button">View More <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState===3 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Competitive Programmer</h3>
                        <p className="services_modal-description">"I deliver high-quality solutions by leveraging a diverse range of project experiences and skills."</p>
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Expert in competitive programming problem-solving.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Dedicated to mastering algorithms and data structures.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Passionate about continuous improvement in coding.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Experienced in scalable software solutions.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Proficient in developing efficient code solutions for industrial applications.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
