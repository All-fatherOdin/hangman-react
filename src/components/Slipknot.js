import { useEffect } from "react";
import useSound from 'use-sound';
import wrongClickSound from '../audio/wrong-click.mp3';
import loseSound from '../audio/lose.mp3';

function Slipknot({ letterStatus, gameStatus, pressedLetters, history, setTimeOut }) {
   const [playWrongClickSound] = useSound(wrongClickSound, { volume: 0.1 });
   const [playLoseSound] = useSound(loseSound, { volume: 0.50 });
   const hangmanParts = document.querySelectorAll("#hangman-part");

   function getInvisibleParts(){
      return Array.from(hangmanParts).filter((item) => {
         return item.classList.contains('invisible-block');
      })
   }

   function makePartsVisible(invisibleParts) {
      invisibleParts[0].classList.remove('invisible-block');
      playWrongClickSound();
   }

   function setGameOver() {
      history.push('/gameover')
      playLoseSound()
   }

   function changePartsVisibility() {
      const invisibleParts = getInvisibleParts();
      if (invisibleParts.length > 1 && !letterStatus) {
         makePartsVisible(invisibleParts);
         return;
      } 
      if (invisibleParts.length === 1 && !letterStatus) {
         makePartsVisible(invisibleParts);
         setTimeOut
         .then(setGameOver);
      };
   };

   function makePartsInvisible() {
      if (gameStatus) {
         hangmanParts.forEach((item) => {
            item.classList.add("invisible-block");
         });
      };
   };

   useEffect(() => {
      makePartsInvisible();
   }, [gameStatus]);

   useEffect(() => {
      changePartsVisibility();
   }, [pressedLetters]);

   return (
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
   );
};

export default Slipknot;