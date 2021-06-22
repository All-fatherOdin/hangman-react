import { useEffect } from "react"

function Slipknot({ letterStatus, gameStatus, pressedLetter, history}) {

   const hangmanParts = document.querySelectorAll("#hangman-part");

   useEffect(() => {
      if(gameStatus){
         hangmanParts.forEach((item) => {
            item.classList.add("invisible-block")
         })
      }
   }, [gameStatus])

   useEffect(() => {
      const invisibleParts = Array.from(hangmanParts).filter((item) => {
         return item.classList.contains('invisible-block')
      })
      console.log(letterStatus)
      if(invisibleParts.length > 1 && !letterStatus){
         invisibleParts[0].classList.remove('invisible-block')
      } else if (invisibleParts.length === 1 && gameStatus){
         invisibleParts[0].classList.remove('invisible-block')
         let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve()
            }, 1000);
         });
         promise
         .then(()=>{
            history.push('/gameover')
         })
         
      }
   }, [pressedLetter])

   return(
      <section className="hangman">
            <div className={"hangman__gallows"}></div>
            <div id="hangman-part" className={"hangman__slipknot"}></div>
            <div id="hangman-part" className={"hangman__head"}></div>
            <div id="hangman-part" className={"hangman__body"}></div>
            <div id="hangman-part" className={"hangman__parts hangman__parts_hand hangman__parts_left"}></div>
            <div id="hangman-part" className={"hangman__parts hangman__parts_hand hangman__parts_right"}></div>
            <div id="hangman-part" className={"hangman__parts hangman__parts_leg hangman__parts_left"}></div>
            <div id="hangman-part" className={"hangman__parts hangman__parts_leg hangman__parts_right"}></div>
         </section>
   )
}

export default Slipknot;