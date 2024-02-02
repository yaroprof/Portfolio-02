import React from 'react'
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
                                    <i className='fab fa-facebook-f'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <i className='fab fa-instagram'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <i className='fab fa-linkedin-in'></i>
                                </button>
                            </div>
                        </div>
                        <div className='col-1'>
                            <h4>best skill on</h4>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero