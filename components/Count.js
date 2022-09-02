import React, { useState, useEffect } from 'react';



const Count = ({ number,  speed = 10 }) => {

    const [countNumber, setCountNumber] = useState(0);

    let i = 0;
    let onceScroll = true;
    const startCount = () => {
        var counting = setInterval(() => {
            i++;

            if (i <= number) {
                setCountNumber(i);
            } else if (i > number) {
                clearInterval(counting);
                console.log("i")
            }
        }, speed);
    }


    const reveal = () => {

        if (onceScroll) {
            var reveals = document.querySelectorAll(".cnt");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    startCount();
                    onceScroll = false;
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", reveal);

    },[])

    return (
        <span className='cnt'>
            {countNumber}
        </span>
    );
};

export default Count;