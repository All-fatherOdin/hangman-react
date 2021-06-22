import React from 'react'

function LetterContainer({letter, pressedKeyBoardSymbols}) {
   
   const letterClassName = pressedKeyBoardSymbols[`${letter}`] ? "encryption-word__letter" 
   : "encryption-word__letter put-up-block";
   const coverClassName = pressedKeyBoardSymbols[`${letter}`] ? "encryption-word__cover" : "encryption-word__cover put-up-block";

   return(
      <li className="encryption-word__letter-container">
         <h2 className={letterClassName}>
            {letter}
         </h2>
         <div className={coverClassName}></div>
      </li>
   )
} 

export default LetterContainer;