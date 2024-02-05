import React from 'react'
import './Features.css'
import data from './FeaturesApi'

import Card from './Card'

const Featues = () => {
    return (
        <section className='features top' id='features'>
            <div className='container'>
                <div className='heading'>
                    <h4>Featues</h4>
                    <h1>What I Do</h1>
                </div>

                <div className='content grid'>
                    {data.map((val, index) => {
                        return <Card 
                        key={index}
                        image={val.image}
                        title={val.title}
                        desc={val.desc}
                        />
                    })}

                </div>
            </div>
        </section>
    )
}

export default Featues