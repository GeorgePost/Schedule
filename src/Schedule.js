
function Schedule({day,P1,P2,P3,P4}) {
    return (
        <>
            <div className="Schedule">
                <div className="P1">
                    <div>9:00<br/>10:20</div>
                    <div>{P1}</div>
                </div>
                <div className="P2">
                    <div>10:25<br/>11:40</div>
                    <div>{P2}</div>
                </div>
                <div className="Lunch">
                    <div>11:40<br/>12:40</div>
                    <div>Lunch</div> 
                </div>
                <div className="P3">
                    <div>12:40<br/>1:55</div>
                    <div>{day===1?P3: P4}</div>
                </div>
                <div className="P4">
                    <div>2:00<br/>3:15</div>
                    <div>{day===1?P4:P3}</div>
                </div>
            </div>
        </>
    );
}
  export default Schedule;