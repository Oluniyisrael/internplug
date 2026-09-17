import { useEffect, useState } from 'react';
import { Loader2 } from "lucide-react"

function Button({ className, value, disabled, onClick, onDisabledClick, isLoading, ...props }) {
    const [divClassName, setDivClassName] = useState("flex relative");

    useEffect(() => {
        const matches = className?.match(/\b(?:w-|max-w-|h-|max-h-|min-h-|min-w-)[^\s]+/g);
        if (matches && matches.length > 0) {
            const combined = matches.join(" ");
            setDivClassName(() => `${combined} cursor-pointer relative `);
        }
    }, [className]);


    return (
        <div className={divClassName} onClick={!disabled ? onClick : undefined}>
            <button className={className + ` flex-grow w-full inset-0 z-2 cursor-pointer ${disabled && " disabled:opacity-60"} `} disabled={disabled}{...props}>
                {
                    isLoading ? <span className='flex justify-center'><Loader2 className='animate-spin' /></span> : value}
            </button>
            {disabled && (
                <div onClick={onDisabledClick} className="absolute inset-0 z-10 cursor-not-allowed"></div>
            )}
        </div>
    );
}

export default Button;