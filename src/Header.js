
import logo from './images/skyline-high-resolution-logo.png'
import { useState , useEffect } from 'react';
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios"
function Header({gotUser}) {
  const [login,setLogin]=useState(false);
  const [loginEntry, setLoginEntry] = useState(undefined);
  const [user,setUser] = useState(undefined);
  const makeLoginEntry  = useGoogleLogin({
    onSuccess: (codeResponse) => setLoginEntry(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });
  async function fetchData (user){
    const u= user;
    setUser(undefined);
    console.log(u);
    await axios.get(`https://schedule-backend-l8j8.onrender.com/api/users/${u.email.toLowerCase()}`,{}).then((r)=>
      {
        if(r.data){
          gotUser(r.data);
        }
      }
    ).catch((err)=>{
      if(err.status===404){
        console.log(u);
        newUser(u);
      }
    })
    
  }
  async function newUser(user){
    await axios.post(`https://schedule-backend-l8j8.onrender.com/api/users`,{
      name:user.name,
      email:user.email,
    },{
      'Content-Type' : 'application/json; charset=utf-8',
      'access-control-allow-credentials':"true",
      'access-control-allow-headers':"X-Requested-With,content-type",
      'access-control-allow-methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    }).then((r)=>{
      gotUser(r);
    }) .catch(()=>{
      alert("Couldn't Make User");
    })
  }
  useEffect( ()=>{
    if(user){
      setLogin(false);
      setLoginEntry(undefined);
      fetchData(user);
    }else if(loginEntry){
      console.log(loginEntry);
       axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${loginEntry.access_token}`,{
        headers:{
          Authorization: `Bearer ${loginEntry.access_token}`,
          Accept: 'application/json',
        }
      }).then((res)=>{
        setUser(res.data);
      }).catch((err)=>{
        console.log(err);
      })
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