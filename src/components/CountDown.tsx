// Usamos el componente en el lado del cliente, por eso se debe llamar a "use client"
'use client'

import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'


const endingDate = new Date("2023-08-20");

const CountDown = () => {
    // Para poder renderizar el componente del lado del cliente, se usa el HOOK STATE.
    const [isClient, setIsClient] = useState(false);

    // En el efecto deseado, set al cliente
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        isClient && <Countdown className='text-yellow-300 text-5xl font-bold' date={endingDate} />
    )
}

export default CountDown