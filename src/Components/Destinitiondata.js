import './Destination.css'


const Destinationdata = (props)=>{
return(
    <div className={props.cName}>
    <div className='des-text'>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        </div>
    <div className='image'>
        <img alt='1img' src={props.img1}/>
        <img alt='2img' src={props.img2}/>
        </div>    
</div>
)
}

export default Destinationdata;