
import logo from './images/skyline-high-resolution-logo.png'
import { useState , useEffect } from 'react';
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios"
function Header({gotUser}) {
  const [login,setLogin]=useState(false);
  const [loginEntry, setLoginEntry] = useState(undefined);
  const [email,setEmail]=useState(undefined);
  const [user,setUser] = useState(undefined);
  const makeLoginEntry  = useGoogleLogin({
    onSuccess: (codeResponse) => setLoginEntry(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });
  async function fetchData (email){
    await axios.get(`https://schedule-backend-l8j8.onrender.com/api/users/${email.toLowerCase()}`,{}).then((r)=>
      {
        setUser(r);
        setLogin(false);
      }
    ).catch(()=>{
      alert("User Not Found")
    })
  }
  useEffect( ()=>{
    if(user){
      gotUser(user);
    }
    if(loginEntry){
       axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${loginEntry.access_token}`,{
        headers:{
          Authorization: `Bearer ${loginEntry.access_token}`,
          Accept: 'application/json',
        }
      }).then((res)=>{
        setEmail(res.email);
        
      })
    }
    if(email){
      fetchData(email);
    }
  })
  
  return (
    <>
      <div className="header">
        <div className="Logo">
          <img src={logo}/>
        </div>
        <div className='Title'>Schedule</div>
        <div className="User">
          <div onClick={()=>setLogin(true)}>Log In</div>
        </div>
      </div>
      {
        login && (<>
        <div className="background"/>
        <div className="user">
            <button onClick={()=>makeLoginEntry()}>Login In With Google</button>
            <button onClick={()=>setLogin(false)}>Close</button>
          </div>
        </>
        )
      }
    </>
  );
}

export default Header;