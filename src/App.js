import Header from './Header';
import Schedule from './Schedule';
function App() {
  const date=new Date();
  return (
    <>
      <Header/>
      <Schedule day={date.getDate()%2===0? 2: 1} P1={"P1"} P2={"P2"} P3={"P3"} P4={"P4"}/>
    </>
  );
}

export default App;
