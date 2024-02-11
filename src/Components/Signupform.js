import { useEffect, useState } from 'react'
import './Signupform.css'
import { Link, useNavigate } from 'react-router-dom'
const COUNTRIES = []


const Signupform = () => {

    const [Countries, setCountries] = useState([])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const [showPass, setShowPass] = useState(false)

    const [nameAuth, setNameAuth] = useState({ valid: false, touched: false })
    const [emailAuth, setEmailAuth] = useState({ valid: false, touched: false })
    const [passwordAuth, setPasswordAuth] = useState({ valid: false, touched: false })
    const formValid = nameAuth.valid && nameAuth.touched && emailAuth.valid && emailAuth.touched && passwordAuth.valid && passwordAuth.touched;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch('https://travel-13514-default-rtdb.asia-southeast1.firebasedatabase.app/Countries.json')
            const responseData = await response.json()
            responseData.map((item, index) => {
                COUNTRIES.push({
                    id: index,
                    name: item.name,
                    code: item.code
                })
            })
            setCountries(COUNTRIES)
        }

        fetchCountries()
    }, [])

    const image_placeholder=(name)=>{
        const letter = name[0].toLowerCase()
        console.log(letter);
    return `/assets/dp-placeholders/${letter}.png`
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        
        

        setNameAuth((prev)=>{
            return({...prev,touched:true})
        })
        setEmailAuth((prev)=>{
            return({...prev,touched:true})
        })
        setPasswordAuth((prev)=>{
            return({...prev,touched:true})
        })
        
        if(formValid){
            const image = image_placeholder(name)
            const reqData ={
                name:name,
                email:email,
                country:country,
                password:password,
                image:image
            }
        fetch('https://travel-13514-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',{
            method:'POST',
            body:JSON.stringify(reqData)
        })
        navigate('/login')
}
    return;
    }


    const nameBlurHandler = (event) => {
        setNameAuth((prev)=>{
            return({...prev,touched:true})
        })
        if(name.trim().length>=2){
            setNameAuth((prev)=>{
                return({...prev,valid:true})
            })
        }
    }
    const emailBlurHandler = (event) => {
        setEmailAuth((prev)=>{
            return({...prev,touched:true})
        })
        if(email.length>=2 && email.includes('@gmail.com')){
            setEmailAuth((prev)=>{
                return({...prev,valid:true})
            })
        }
    }
    const passwordBlurHandler = (event) => {
        setPasswordAuth((prev)=>{
            return({...prev,touched:true})
        })
        if(event.target.value===password){
            setPasswordAuth((prev)=>{
                return({...prev,valid:true})
            })
        }
    }


    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }
    const countryChangeHandler = (event) => {
        setCountry(event.target.value)
    }

    const passwordToggleHandler = () => {
        setShowPass((prev) => !prev)
    }

    const option = Countries.map(((item) => {
        return (
            <option value={item.code}>{item.name}</option>
        )
    }))
    return (
        <div className='form-container'>
            <form onSubmit={formSubmitHandler}>
                <input className={!nameAuth.valid && nameAuth.touched ? 'input invalid' : 'input '} onBlur={nameBlurHandler} onChange={nameChangeHandler} placeholder='Full Name' />
                {!nameAuth.valid && nameAuth.touched && <p className='invalid-text'>Enter a Valid Name</p>}
                <input className={!emailAuth.valid && emailAuth.touched ? 'input invalid' : 'input '} onBlur={emailBlurHandler} onChange={emailChangeHandler} placeholder='Email' />
                {!emailAuth.valid && emailAuth.touched && <p className='invalid-text'>Enter a Valid Email</p>}
                <div className='show-password'>
                    <input  className={!passwordAuth.valid && passwordAuth.touched ? 'input invalid' : 'input '} onChange={passwordChangeHandler} type={showPass ? 'text' : 'password'} placeholder='Password' />
                    <i onClick={passwordToggleHandler} className={showPass ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}></i>
                </div>
                <input className={!passwordAuth.valid && passwordAuth.touched ? 'input invalid' : 'input '} onBlur={passwordBlurHandler} type={showPass ? 'text' : 'password'} placeholder='Confirm Password' />
                {!passwordAuth.valid && passwordAuth.touched && <p className='invalid-text'>Password does not match</p>}
                <select onChange={countryChangeHandler} placeholder='Country'>
                    {option}
                </select>


                <button type='submit'>Sign up</button>
            </form>
        </div>
    )

}

export default Signupform;