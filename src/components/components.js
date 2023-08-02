import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState({ seconds: 0, minutes: 0, hours: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                const newSeconds = prevTime.seconds + 1;
                const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
                const newHours = prevTime.hours + Math.floor(newMinutes / 60);
                return {
                    seconds: newSeconds % 60,
                    minutes: newMinutes % 60,
                    hours: newHours,
                };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = `
                           ${String(time.hours).padStart(2, '0')} :
                           ${String(time.minutes).padStart(2, '0')} :
                           ${String(time.seconds).padStart(2, '0')} 
                           `;

    return (
        <div>
            <h1>Timer</h1>
            <p>{formattedTime}</p>
            <h4>
                {time.hours} часов, {time.minutes} минут, {time.seconds} секунд
            </h4>
        </div>
    );
};

export default Timer;
