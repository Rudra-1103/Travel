import { useDispatch, useSelector } from 'react-redux';
import ProfileCard from './ProfileCard';
import './ProfileData.css'
import { loggedinActions } from '../store/loggedSlice';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import ProfileLogin from './ProfileLogin';

const ProfileData = () => {
    const name = useSelector(state => state.loggedin.name)
    const email = useSelector(state => state.loggedin.email)
    const country = useSelector(state => state.loggedin.country)
    const image = useSelector(state=>state.loggedin.image)
    const birthday = useSelector(state=>state.loggedin.birthday)
    const gender = useSelector(state=>state.loggedin.gender)
    const marital = useSelector(state=>state.loggedin.marital)
    const address = useSelector(state=>state.loggedin.address)
    const pincode = useSelector(state=>state.loggedin.pincode)
    const state = useSelector(state=>state.loggedin.state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const logoutHandler=()=>{
        dispatch(loggedinActions.signout())
        localStorage.clear();
        navigate('/login')
    }

    return (<div className='maim'>
        <div className='profile-container'>
            <ProfileCard className='profile card'>
                <div className='profile-pic'>
                    <img alt='pic' src={image}></img>
                </div>
                <div className='name-container'>
                    <div className='name'><h4>{name}</h4></div>
                    <div className='text-2'>PERSONAL PROFILE</div>
                </div>
                <div className='links'>
                    <ul>
                        <li className='links-list'><i class="fa-regular fa-user"></i><a>Profile</a></li>
                        <li className='links-list'><i class="fa-solid fa-right-to-bracket"></i><a>Login Details</a></li>
                        <li className='links-list'><i class="fa-solid fa-person"></i><a>Save Travellers</a></li>
                        <li  onClick={logoutHandler} className='links-list'><i class="fa-solid fa-right-from-bracket"></i><a>Logout</a></li>
                    </ul>
                </div>
            </ProfileCard>
        </div>
       <div className='main-comp'>
        <div className='profile-data-container'>
            <ProfileCard className='card main-profile'>
                <div className='heading'>
                    <h1>Profile</h1>
                    <p>Basic info for a faster booking expirence</p>
                    </div>
                    <ul className='profile-link-list'>
                        <li>
                    <div className='profile-data'>
                        <div className='profile-list'>
                            <div className='title' ><p>Name</p></div>
                            <div className='value'><p>{name}</p></div>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className='profile-data'>
                        <div className='profile-list'>
                            <div className='title' ><p>Birthday</p></div>
                            <div className='value'>{birthday===''?<p className='add'>+Add</p>:<p>{birthday}</p>}</div>
                            <hr />
                        </div>
                    </div>
                    </li>
                    <li> <div className='profile-data'>
                        <div className='profile-list'>
                            <div className='title' ><p>Gender</p></div>
                            <div className='value'>{gender===''?<p className='add'>+Add</p>:<p>{gender}</p>}</div>
                            <hr />
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className='profile-data'>
                        <div className='profile-list'>
                            <div className='title' ><p>Matital Status</p></div>
                            <div className='value'>{marital===''?<p className='add'>+Add</p>:<p>{marital}</p>}</div>
                            <hr />
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className='profile-data'>
                        <div className='profile-list'>
                            <div className='title' ><p>Your Address</p></div>
                            <div className='value'>{address===''?<p className='add'>+Add</p>:<p>{address}</p>}</div>
                            <hr />
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className='profile-data'>
                        <div className='profile-list'>
                            <div className='title' ><p>Pincode</p></div>
                            <div className='value'>{pincode===''?<p className='add'>+Add</p>:<p>{pincode}</p>}</div>
                            <hr />
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className='profile-data'>
                        <div className='profile-list'>
                            <div className='title' ><p>State</p></div>
                            <div className='value'>{state===''?<p className='add'>+Add</p>:<p>{state}</p>}</div>
                            <hr />
                        </div>
                    </div>
                    </li>
                    </ul>
                    
            </ProfileCard>
        </div>
        <ProfileLogin />
        </div>
        </div>
    )
}

export default ProfileData;