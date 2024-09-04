import logo from './images/skyline-high-resolution-logo.png'
import { useState } from 'react';
function Header() {
  const [login,setLogin]=useState(false);
  return (
    <>
      <div className="header">
        <div className="Logo">
          <img src={logo}/>
        </div>
        <div className='Title'>Schedule</div>
        <div className="User">
          <div onClick={setLogin(true)}>Log In</div>
        </div>
      </div>
      {
        login && (
        <div className="background">
          <div>
            Login
          </div>
        </div>)
      }
    </>
  );
}

export default Header;