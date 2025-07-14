import UserButton from '../userButoon/userbutton'
import './topbar.css'


const Topbar = () => {
    return (
        <div className="topbar">
        <div className='searchbar' >
            <img src="/general/search.svg" alt="" />
            <input type="text" placeholder='Search' />
            </div>   
        <div className='icons'>
            
               <UserButton/>
            </div>      

        </div>
    )
}

export default Topbar