import './ProfileCard.css'

const ProfileCard =(props)=>{

return(
    <div className={props.className}>
        {props.children}
    </div>
)
    
}

export default ProfileCard;