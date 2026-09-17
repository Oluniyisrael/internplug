import { useEffect, useState, useRef } from "react";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";


function MessageDisplay({ display, setDisplay, message, color, style, }) {
  const [opacity, setOpacity] = useState(0);
  const controllerRef = useRef(null);

  function fadeOutAndRemove(signal) {
    let startTime = Date.now();
    const fadeDuration = 2000;

    const fadeOut = () => {
      if (signal.aborted) return;

      const elapsedTime = Date.now() - startTime;
      const newOpacity = Math.max(1 - elapsedTime / fadeDuration, 0);

      setOpacity(newOpacity);

      if (newOpacity > 0 && !signal.aborted) {
        requestAnimationFrame(fadeOut);
      } else if (!signal.aborted) {
        setDisplay(false);
      }
    };

    requestAnimationFrame(fadeOut);
  }

  const handleClose = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    setDisplay(false);
  };

  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();
    const { signal } = controllerRef.current;

    if (display) {
      setOpacity(1);

      const timeoutId = setTimeout(() => {
        if (!signal.aborted) {
          fadeOutAndRemove(signal);
        }
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
        controllerRef.current.abort();
      };
    }

    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [display]);


  return (
    display && (
      <div className={`w-auto h-auto fixed inset-5 ${(window.innerWidth < 640) ? "top-21" : "top-29 "} py-2 bottom-auto flex justify-between  z-100 bg-[black] rounded`} style={{ opacity: opacity, ...style }}>
        <div className={`flex-18 ${color} pl-4 `} >  {/*line-clamp-2, Removed for context use*/}
          {message}
        </div>
        <div className="transition duration-400 flex-2 h-full flex max-w-6 ">
          <Button className="cursor-pointer max-w-6 min-w-6 min-h-6 mr-2 text-[red] rounded-full bg-[transparent] hover:text-[black] hover:bg-[red]" onClick={handleClose} value={<FontAwesomeIcon icon={faX} />} />
        </div>
      </div>
    )
  );
}

export default MessageDisplay;