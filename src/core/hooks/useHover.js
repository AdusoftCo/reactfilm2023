import React, { useState } from 'react'

const useHover = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    
    //Son CONTROLADORES
    const handlers = {
        onMouseEnter:handleMouseEnter,
        onMouseLeave:handleMouseLeave
    }

    return [isHovered, handlers]
};


export default useHover;