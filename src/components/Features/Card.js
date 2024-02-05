import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    return (
        <>
            <div className='box btn_shadow'>
                <img src={props.image} alt='' />
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <a href=''>
                    <i>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </i>
                </a>

            </div>
        </>
    )
}

export default Card