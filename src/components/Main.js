import { useEffect, useState } from 'react';
import LetterContainer from './LetterContainer';
import Slipknot from './Slipknot';
import Keyboard from './Keyboard';
import EncryptionWord from './EncryptionWord';
import StartButton from './StartButton';
import { Switch, Route } from 'react-router-dom';
import useSound from 'use-sound';
import victorySound from '../audio/victory.mp3';
import openCoverSound from '../audio/open-cover.mp3';

function Main({ history, newWord, playStartGameSound }) {
   const [gameStatus, setGameStatus] = useState(false);
   const [pressedLetters, setPressedLetters] = useState({});
   const [pressedLetterStatus, setPressedLetterStatus] = useState(false);
   
   const [playVictorySound] = useSound(victorySound, { volume: 0.5 });
   const [playOpenCoverSound] = useSound(openCoverSound, { volume: 0.4, playbackRate: 1 });

   const spaces = document.querySelectorAll(".encryption-word__space");
   const encryptedLetters = document.querySelectorAll('.encryption-word__cover');
   const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve();
      }, 2000);
   });

   function getGuessedLetters() {
      return Array.from(encryptedLetters).filter((letter) => {
         return !letter.classList.contains('put-up-block');
      });
   };

   function setVictory() {
      history.push('/victory');
      playVictorySound();
   };
   
   function checkGuessedLetters() {
      const guessedLetters = getGuessedLetters()
      if (guessedLetters.length + spaces.length === newWord.length && gameStatus) {
         promise
         .then(setVictory);
      };
   };

   function buttonOff(e) {
      e.target.setAttribute('disabled', true);
      e.target.classList.add('keyboard__button_color-pink');
   };

   function getLetterPressedLetter(e) {
      const letter = e.target.textContent;
      setPressedLetters({...pressedLetters, [letter]: true});
      buttonOff(e);
      if (letter === "е" && newWord.includes('ё')) {
         setPressedLetterStatus(true);
         return;
      }
      setPressedLetterStatus(newWord.toLowerCase().includes(letter));
   };

   function splitNewWord() {
      let i = 0;
      return Array.from(newWord).map((letter) =>
         (<LetterContainer
            key={i++}
            letter={letter}
            pressedKeyBoardSymbols={pressedLetters}
            pressedLetterStatus={pressedLetterStatus}
         />)
      );
   };

   function renderWord() {
      const word = splitNewWord()
      return word;
   };

   function startGame() {
      history.push('/main/game');
      setGameStatus(true);
      playStartGameSound();
   };

   function checkPressedLetterStatus() {
      if (pressedLetterStatus) {
         playOpenCoverSound();
      };
   };

   useEffect(() => {
      checkGuessedLetters();
      checkPressedLetterStatus()
   }, [pressedLetters]);

   return (
      <main>
         <Slipknot
            letterStatus={pressedLetterStatus}
            gameStatus={gameStatus}
            pressedLetters={pressedLetters}
            history={history}
            setTimeOut={promise}
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
                  getLetter={getLetterPressedLetter}
               />
            </Route>
         </Switch>
      </main>
   );
}

export default Main;