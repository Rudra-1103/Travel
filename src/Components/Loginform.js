import { Fragment, useEffect, useState } from 'react';
import './Loginform.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loggedinActions } from '../store/loggedSlice';

var Data=[]
var USER ={}
const BreakError ={}

const Loginform =(props)=>{
    const navigate = useNavigate()
    const dispatch =useDispatch()
    const isLogged =useSelector(state=>state.loggedin.logged)
    
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    

    const [emailValid, setEmailValid] = useState(false)
    const [passValid, setPassValid] = useState(false)
    const [touched,setTouched] = useState(false)
    var vartouched = false;
    var varemailValid = false;
    var varpassValid =false



    useEffect(()=>{
        const fetchData =async()=>{

            const response = await fetch('https://travel-13514-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')
            const responseData = await response.json()
           Data = Object.values(responseData)
        }
        fetchData()
    },[])


    
    const emailChangeHandler =(event)=>{
        setEmail(event.target.value)
    }

    const emailBlurHandler =()=>{
        
    }

    const passwordChangeHandler =(event)=>{
        setPass(event.target.value)
    }
        const formSubmitHandler=(event)=>{
            setTouched(true)
            vartouched = true;
            event.preventDefault()
            emailAuth();
            passAuth();
            if (varemailValid && varpassValid) {
                const user_data = {...USER, password:'******'}
                console.log(user_data);
                console.log('logged');
                localStorage.setItem('user-data', JSON.stringify(user_data))
                console.log(USER);
                console.log(isLogged);
                dispatch(loggedinActions.login(USER))
                navigate('/profile')

            }
        }

        const emailAuth =()=>{

            try{
            Data.forEach((item)=>{

                
                if (item.email===email) {
                    setEmailValid(true)
                    varemailValid = true
                    USER =item;
                    throw BreakError
                   
                }
                else if (item.email!==email) {
                    setEmailValid(false)
                    varemailValid=false
                }
                })
            } catch (err){
                if(err!== BreakError) throw err;
            }
        }

        const passAuth=()=>{
            if (USER.password===pass) {
                setPassValid(true)
                varpassValid = true
                
            }
            else {setPassValid(false)
             varpassValid =false}
        }

    return(
        <Fragment>
            <div className='form-container'>
                <form onSubmit={formSubmitHandler}>
                    <input onBlur={emailBlurHandler} className={!emailValid && touched?'input invalid':'input'} onChange={emailChangeHandler} placeholder='Email' />
                    {!emailValid && touched && <p className='invalid-text'>The Email is not registered</p>}
                    <input type='password' className={!passValid && emailValid &&touched?' input invalid':'input'} onChange={passwordChangeHandler} placeholder='password' />
                    {!passValid && emailValid && touched && <p className='invalid-text'>The password is Invalid</p>}
                   <div className='buttons'>
                    <button type='submit'>Log In</button>
                    <Link to='signup' url='../signup'><button className='signup'>Sign Up</button></Link>
                    </div>
                </form>
            </div>
        </Fragment>
        )
}

export default Loginform;