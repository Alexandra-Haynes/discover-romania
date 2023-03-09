import React from 'react'
import './HeroStyles.css'



const Hero = (props) => {
  return (
    <>
    <div className='hero'>
    <img alt='Hero img' src={props.heroSrc} className={props.heroImg}/>
   
    <div className='hero-text'>
        <h1 >{props.title}</h1>
        <p>{props.text}</p>
        <a href='/about' className={props.heroButton}> Quick Facts</a> 
        {/* <a href={props.btnUrl} className={props.btnClass}>{props.btnText}</a> */}
        
    </div>
    </div>

    
    </>
  )
}

export default Hero
