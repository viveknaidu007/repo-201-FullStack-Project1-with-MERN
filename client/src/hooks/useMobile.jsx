// this is for mobile version:

import React, { useEffect, useState } from "react"

const useMobile = (breakpoint = 768)=>{
    const [isMobile,setIsMobile] = useState(window.innerWidth < breakpoint)

    const handleResize = ()=>{
        const checkpoint = window.innerWidth < breakpoint
        setIsMobile(checkpoint)
    }

    useEffect(()=>{
        handleResize()

        window.addEventListener('resize',handleResize)

        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])

    return [ isMobile ]
}

export default useMobile


/*

This code defines a custom React hook, useMobile, that helps determine whether the current viewport width qualifies as "mobile" based on a specified breakpoint. Here's a step-by-step explanation:
What the code does:

    Detects the viewport width:
        It checks if the current width of the window (window.innerWidth) is smaller than a provided breakpoint value (default is 768 pixels).

    Keeps track of the "mobile" state:
        The hook manages a state variable, isMobile, using the useState hook to track whether the viewport width is less than the breakpoint.

    Listens to window resizing events:
        It listens for changes in the viewport width using the resize event of the window object and updates the isMobile state accordingly.

    Cleans up the event listener:
        When the component using this hook unmounts, the event listener for the resize event is removed to prevent memory leaks or unnecessary updates.

    Returns a value:
        It returns the isMobile value (as an array) to the component that calls the hook. The component can use this value to render UI differently based on whether the device is in "mobile" view

*/