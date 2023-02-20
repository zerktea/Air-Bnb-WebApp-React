import React from 'react'
import ReactDOM from 'react-dom/client'
import group from '../../public/images/group.png'
import '../index.css'
export default function Hero(){
    return(
        <div className='hero'>
            <div className='imgalign'>
            <img className='groupimg' src={group} alt="group" />
            </div>
            <div className="textalign">
            <h1 className='title'> this is the one time airbnb</h1>
            <p className='text'>hello world how is life going i hope everything is fine</p>
            </div>
        </div>

    )

}