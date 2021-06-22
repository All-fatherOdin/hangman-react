import { useEffect, useState } from 'react'
import LetterContainer from './LetterContainer';
import Slipknot from './Slipknot'
import Keyboard from './Keyboard'
import EncryptionWord from './EncryptionWord'
import StartButton from './StartButton'
import { Switch, Route, Redirect, useHistory} from 'react-router-dom'

function Main({ history, newWord}) {
   const  [gameStatus, setGameStatus] = useState(false)
   const [ letters, setLetters ] = useState({})
   const [ pressedLetter, setPressedLetter ] = useState('')
   const [ pressedLetterStatus, setPressedLetterStatus] = useState();

   
   function checkGuessed() {
      const encryptedLetters = document.querySelectorAll('.encryption-word__letter')
      const guessedLetters = Array.from(encryptedLetters).filter((letter) => {
         return !letter.classList.contains('put-up-block')
      })
      if(guessedLetters.length === newWord.length){
         let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve()
            }, 1500);
         });
         promise
         .then(()=>{
            history.push('/victory')
         })
      }
      console.log(guessedLetters)
   }
   
   useEffect(() => {
      checkGuessed()
   })

   function buttonOff(e){
      e.target.setAttribute('disabled', true)
      e.target.classList.add('keyboard__button_color-pink')
   }

   function getLetter(e) {
      const letter = e.target.textContent
      setPressedLetter(letter)
      setLetters({...letters, [letter]: true})
      buttonOff(e)
      setPressedLetterStatus(newWord.includes(letter))
   }

   function renderWord(){
      let i = 0;
      const word = Array.from(newWord).map((letter) =>
      (<LetterContainer
         key={i++}
         letter={letter}
         pressedKeyBoardSymbols={letters}
         />))
      return word;
   }

   function startGame() {
      history.push('/main/game')
      setGameStatus(true)
   }

   useEffect(() => {
      history.push('/main/start-game')
   }, [])

   return (
      <main>
         <Slipknot
            letterStatus={pressedLetterStatus}
            gameStatus={gameStatus}
            pressedLetter={pressedLetter}
            history={history}
         />
         <Switch>
            <Route path="/main/start-game">
               <StartButton 
                  startGame={startGame}
               />
            </Route>
            <Route path="/main/game">
               <EncryptionWord 
                  renderWord={renderWord}
               />
               <Keyboard
                  getLetter={getLetter}
               />
            </Route>
         </Switch>
      </main>
   )
}

export default Main;