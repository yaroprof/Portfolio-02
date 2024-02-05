import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

import './Hero.css'
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"

const Hero = () => {

    return (
        <section className='hero' id='hero'>
            <div className='container f_flex top' >
                <div className='left top'>
                    <h3>Wellcome to the NBA game</h3>
                    <h1>Hi, i'm <span>John Doe</span></h1>
                    {/* Typewriter text */}
                    <h2>
                        # <span>
                            <Typewriter
                                words={['Prof Coder', 'Developer']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                            />
                        </span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis debitis esse nisi provident accusamus aspernatur sapiente, ratione vero fuga sit earum veniam beatae optio eaque reiciendis dolorem excepturi aliquid!</p>

                    <div className='hero_btn d_flex'>
                        {/* Social icon byttons */}
                        <div className='col_1'>
                            <h4>find with me</h4>
                            <div className='button'>
                                <button className='btn_shadow'>
                                    <i className='fab fa-facebook-f'>FB</i>
                                </button>
                                <button className='btn_shadow'>
                                    <i className='fab fa-instagram'>INST</i>
                                </button>
                                <button className='btn_shadow'>
                                    <i className='fab fa-linkedin-in'>LIN</i>
                                </button>
                            </div>
                        </div>
                        <div className='col-1'>
                            <h4>best skill on</h4>
                            <button className='btn_shadow'>
                                <img src={skill1} alt='skill1' />
                            </button>
                            <button className='btn_shadow'>
                                <img src={skill2} alt='skill1' />
                            </button>
                            <button className='btn_shadow'>
                                <img src={skill3} alt='skill1' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='right'>
                    <div className='right_img'>
                        <img src={hero} alt="hero-img"/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero