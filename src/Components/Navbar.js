import './Navbar.css'
import { Link } from 'react-router-dom';
import { MenuItems } from './Menuitems';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = props=>{

    const [menuCLicked,setMenuClicked] = useState(false)
    const logged = useSelector(state=>state.loggedin.logged)

    const MenuToggleHandler =()=>{
            setMenuClicked(prev=>!prev)

    }

return(
<nav className='navbarItems'>
    <h1 className='styles.navbarLogo'>Trippy</h1>
    <div className='menu-icon'>
        <i  onClick={MenuToggleHandler} className={menuCLicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    <ul className={menuCLicked? 'navMenu active':'navMenu'}>
        {MenuItems.map((item,index)=>{
          
            return(<li key={index}>
                <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>{item.title}
                </Link>
            </li>)
        })}
        {!logged && <li key={5}><Link className='navLink' to='/login'>
                <i className='fa-solid fa-right-to-bracket'></i>Login
                </Link></li>}
        {logged && <li key={5}><Link className='navLink' to='/profile'>
        <i className='fa-solid fa-user'></i>Profile
        </Link></li>}
    </ul>
</nav>
)
}

export default Navbar;