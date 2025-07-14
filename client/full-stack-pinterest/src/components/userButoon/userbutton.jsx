import './userButton.css'

import React, { useState } from 'react'
const UserButton = () => {
    const [open, setOpen] = useState(false)
    const currentUser = true

    return currentUser ? (
        <div className="user-button">
            <img src="/general/noAvatar.png" alt="" />
            <img onClick={() => setOpen((prev) => !prev)} src="/general/arrow.svg" alt="" className='arrow' />
            {open && (<div className='userOptions'>
                <div className='userOption'>Profile</div>
                <div className='userOption'>Settings</div>
                <div className='userOption'>Logout</div>
            </div>)
            }
        </div>
    ) : (<a href="" className='login'>login/signup</a>)
}

export default UserButton