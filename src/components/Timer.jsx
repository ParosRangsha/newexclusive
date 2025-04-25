import React, { useEffect, useState } from 'react'

const Timer = ({duration}) => {
    let [time, setTime] = useState(duration)
    useEffect(()=>{
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000);
    })
    let getFormatedTime = (milliseconds)=>{
        let totalSeconds = parseInt(Math.floor(milliseconds / 1000))
        let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
        let totalHour = parseInt(Math.floor(totalMinutes / 60))
        let days = parseInt(Math.floor(totalHour / 24))
        
        let seconds = parseInt(totalSeconds % 60)
        let minutes = parseInt(totalMinutes % 60)
        let hours = parseInt(totalHour % 24)

        return(
            <div className="flex items-center gap-1">
                <div className="day flex flex-col items-center justify-center w-[100px]">
                    <h1>Days</h1>
                    <p className='font-bold text-[32px]'>{days < 10 ? `0${days}` : days}</p>
                </div>
                <p className='text-[32px] font-bold'>:</p>
                <div className="hour flex flex-col items-center justify-center w-[100px]">
                    <h1>Hours</h1>
                    <p className='font-bold text-[32px]'>{hours < 10 ? `0${hours}` : hours}</p>
                </div>
                <p className='text-[32px] font-bold'>:</p>
                <div className="minute flex flex-col items-center justify-center w-[100px]">
                    <h1>Minutes</h1>
                    <p className='font-bold text-[32px]'>{minutes < 10 ? `0${minutes}` : minutes}</p>
                </div>
                <p className='text-[32px] font-bold'>:</p>
                <div className="second flex flex-col items-center justify-center w-[100px]">
                    <h1>Seconds</h1>
                    <p className='font-bold text-[32px]'>{seconds < 10 ? `0${seconds}` : seconds}</p>
                </div>
            </div>
        )
    }
  return (
    <div>{getFormatedTime(time)}</div>
  )
}

export default Timer