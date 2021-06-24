function LetterContainer({ letter, pressedKeyBoardSymbols }) {
   const regStr = /[^а-яА-Яё]+/g;
   const regexp = new RegExp(regStr);
   
   const coverClassName = letter.match(regexp) ? "encryption-word__cover" :
   pressedKeyBoardSymbols[`${letter === "ё" ? "е" : letter.toLowerCase()}`] ? 
   "encryption-word__cover" : "encryption-word__cover put-up-block";

   return (
      <>
         { 
            letter === " " ? <div className="encryption-word__space"></div> :
            <li className="encryption-word__letter-container">
               <h2 className={"encryption-word__letter"}>
                  {letter}
               </h2>
               <div className={coverClassName}></div>
            </li>
         }
      </>
   );
}; 

export default LetterContainer;