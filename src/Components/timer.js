import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [input, setInput] = useState('');
    const [seconds, setSec] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const[resume,setResume]=useState(false);
    const[reset,setReset]=useState(false);

    let timer1;
    useEffect(() => {
       timer1 = setTimeout(() => {
            if (seconds > 0 && minutes >= 0) {
                setSec(seconds - 1);
            }
        }, 1000)

    


        if (seconds === 0 && minutes > 0) {
            setMinutes(minutes - 1);
            setSec(60);
        }
        if (seconds === 0 && minutes < 0) {
            clearTimeout(timer1);
        }

        if(seconds===0 && minutes===0){
            setMinutes(0);
            setSec(0);
        }

    }, [seconds,resume])


    const HandleTimer = () => {
        if (input) {
            if (input > 0) {
                setMinutes(input - 1)
                setSec(59);
            }
        }

    };

const Resume=()=>{
if(!resume){
    setResume(true);
}else{
    setResume(false);
}
}

    const Reset= ()=>{
        setMinutes(0);
        setSec(0);
        setReset(true);
        clearTimeout(timer1)
    }

    const stopTimer=()=>{
        setResume(true);
    }
    return (
        <div>
            <h1>Timer {minutes} : {seconds}</h1>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={HandleTimer}>Enter</button>
            <button onClick={Resume}>resume</button>
            <button onClick={Reset}> Reset</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}

export default Timer;