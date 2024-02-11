import { Fragment } from 'react'
import './Hero.css'

const Hero =(props)=>{
    return(
        <Fragment>
            <div className={props.cName}>
        <img alt='heroImg' src={props.imgUrl} />

        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.btnText}  </a>
        </div>
            </div>
        </Fragment>
    )
}

export default Hero;
