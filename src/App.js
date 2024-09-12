import Header from './Header';
import Schedule from './Schedule';
import {useState} from 'react';
function App() {
  const date=new Date();
  const [Periods,setPeriods]=useState(["P1","P2","P3","P4"]);
  function loginUser(user){
    setPeriods([user.P1,user.P2,user.P3,user.P4]);
    console.log(user);
  }
  return (
    <>
      <Header gotUser={user=>{loginUser(user)}}/>
      <Schedule day={date.getDate()%2===0? 2: 1} P1={"P1"} P2={"P2"} P3={"P3"} P4={"P4"}/>
    </>
  );
}

export default App;
