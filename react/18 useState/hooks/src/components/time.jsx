import React, { useState } from "react";

export default function Time() {
  // const [inputTime, setInputTime] = useState({ sec: 0, min: 0, hours: 0 });
  const [inputSec, setInputSec] = useState(0)
  const [inputMin, setInputMin] = useState(0)
  const [inputHours, setInputHours] = useState(0)

  function handleInputChange(event) {
    setInputTime({ [event.target.name]: event.target.value });
  }
  handleInputChange1=(event)=>{
    setInputHours(event.target.)

  
 

  return (
    <div>
      <div>
        <lable>seconds</lable>
        <input
          type="number"
          onChange={handleInputChange}
          name="seconds"
          value={inputTime.sec}
        ></input>
      </div>
      <div>
        <lable>minutes</lable>
        <input
          type="number"
          onChange={handleInputChange}
          name="minutes"
          value={inputTime.min}
        ></input>
      </div>
      <div>
        <lable>hours</lable>
        <input
          type="number"
          onChange={handleInputChange}
          name="hours"
          value={inputTime.hours}
        ></input>
      </div>
    </div>
  );
}

// computingTimeFromSec = (sec) => {
//   min = sec / 60;
//   hour = sec / 3600;
//   return min, hour;
// };
// computingTimeFromMin = (min) => {
//   sec = min * 60;
//   hour = min / 60;
//   return sec, hour;
// };
// computingTimeFromHour = (hour) => {
//   sec = hour * 3600;
//   min = hour * 60;
//   return min, sec;
// };
