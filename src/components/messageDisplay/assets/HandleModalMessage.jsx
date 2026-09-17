function handleModalMessage(message, setMessage, setDisplay, color, setColor,) {
  setMessage(message);
  setDisplay(false);
  setColor(color)
  setTimeout(() => { setDisplay(true) }, 50);
}

export default handleModalMessage

//For parent
// const [display, setDisplay] = useState(false)
// const [message, setMessage] = useState("This is a message!!")
// const [color, setColor] = useState("text-[red]")
//// const [portalPage, setPortalPage] = useState(false)
// function displayMessage(message, color, portalPage = false) {
//   handleModalMessage(message,setMessage, setDisplay, color, portalPage,setPortalPage) //<--portalPage and setPortalPages is Modification for context use
// }
// function displayMessage(message, color) {
//   handleModalMessage(message, setMessage, setDisplay, color, setColor)
// }