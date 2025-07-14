import './leftbar.css'

const Leftbar = () => {
    return (
        <div className="leftbar">
            <div className='menuIcons'>
                <a href="/" className='menuIcon' >
                    <img src="/general/logo.png " alt="" className='logo'/>
                </a>
                 <a href="/" className='menuIcon' >
                    <img src="/general/home.svg " alt="" />
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/general/create.svg " alt="" />
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/general/updates.svg " alt="" />
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/general/messages.svg" alt="" />
                </a>

            </div>
            <a href="/" className='menuIcon'>
                    <img src="/general/settings.svg " alt="" />
                </a>
        </div>
    )
}

export default Leftbar