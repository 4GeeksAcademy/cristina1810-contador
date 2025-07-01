import React, { useState, useEffect } from "react";
import Button from "./Button"

export default function SecondsCounter({ initialVal }) {
    const [seconds, setSeconds] = useState(initialVal)
    const [estado, setEstado] = useState('play'); // play, reverse, pause

    // const saludar = (nombre) => `Hola, ${nombre}`;


    useEffect(() => {
        if (estado == 'pause') return;

        const interval = setInterval(() => {
            setSeconds(prev => estado === 'reverse' ? Number(prev - 1) : Number(prev + 1));
        }, 1000)

        if (seconds === 10) return alert("Ha llegado a 10");
        return () => clearInterval(interval);
    }, [estado]);


    useEffect(() => {
        if (seconds === 10) {
            alert('¡Has llegado a 10 segundos!');
        }
    }, [seconds]);

    const btnPlayPause = () => {
        setEstado(prev => prev === 'play' ? 'pause' : 'play');
    }

    const btnReverse = () => {
        setEstado(
            prev => prev === 'play' ? 'reverse' : 'play'
        );
    }
    const btnReset = () => {
        setSeconds(initialVal)
        setEstado('play')
    }
    return (
        <div className=" d-flex flex-column justify-content-center align-items-center ">
            <div className="p-3 mb-2 bg-dark text-white d-flex align-items-center justify-content-center rounded">
                <i className="fa-regular fa-clock fa-2x m-3 fa-md"></i>
                <p className="m-0" style={{ fontFamily: 'serif', fontSize: '2rem', letterSpacing: '1rem' }}>{seconds.toString().padStart(6, '0')}</p>
            </div>
            <div>
                <Button titulo={
                    estado === 'reverse' ?
                        <i className="fa-solid fa-forward"></i> :
                        <i className="fa-solid fa-backward"></i>
                }
                    onClick={btnReverse} />
                <Button titulo={
                    estado === 'pause' ?
                        <i className=" fa-solid fa-play"></i> :
                        <i className=" fa-solid fa-pause"></i>
                } onClick={btnPlayPause} />
                <Button titulo={<i className="fa-solid fa-arrow-rotate-left"></i>} onClick={btnReset} />
            </div>
        </div >
    );
}

