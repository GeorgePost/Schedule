import logo from './images/skyline-high-resolution-logo.png'
function Header() {
  return (
    <>
      <div className="header">
        <div className="Logo">
            <img src={logo}/>
        </div>
        <div className='Title'>Schedule</div>
        <div className="User">
            <div>Log In</div>
        </div>
      </div>
    </>
  );
}

export default Header;