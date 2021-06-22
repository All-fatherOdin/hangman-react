const startButtonContainer = document.querySelector('.start-game');
const startButton = startButtonContainer.querySelector('.game-button');
const keyboard = document.querySelector('.keyboard');
const template = document.querySelector('.template-letter');
const encryption = document.querySelector('.encryption');
const encryptionContainer = encryption.querySelector('.encryption__container');
const hangman = document.querySelector('.hangman-container');
const hangmanHead = hangman.querySelector('.hangman__head');
const hangmanSlipknot = hangman.querySelector('.hangman__slipknot');
const hangmanBody = hangman.querySelector('.hangman__body');
const hangmanLeftHand = hangman.querySelector('.hangman__parts_hand.hangman__parts_left');
const hangmanRightHand = hangman.querySelector('.hangman__parts_hand.hangman__parts_right');
const hangmanLeftLeg = hangman.querySelector('.hangman__parts_leg.hangman__parts_left');
const hangmanRightLeg = hangman.querySelector('.hangman__parts_leg.hangman__parts_right');
const popupGameOver = document.querySelector('#lose');
const popupVictory = document.querySelector('#victory');
const popupFVictory = document.querySelector('#fvictory');

const words = ['frontend', 'backend', 'admin', 'update', 'upgrade', 'bitcoin', 'backup', 'valid', 'workshop', 'development'];
let newWord = '';
function getRandomWord(max){
   return newWord += words[Math.floor(Math.random() * max.length)];
};
getRandomWord(words)

function removeElement(elem) {
   elem.classList.add('display-none')
}

function addElement(elem) {
   elem.classList.remove('display-none')
}

//создает ячейки для букв
function addEncryptionWordSections(word) {
   Array.from(word).forEach(() => {
      const newLetter = template.content.cloneNode(true);
      encryptionContainer.append(newLetter);
   })

};
addEncryptionWordSections(newWord);


//вставляет буквы ячейки
function addLettersInSections(word) {
   const sections = encryptionContainer.querySelectorAll('.encryption__letter');
   for (i = 0; i < word.length; i++){
      Array.from(sections)[i].textContent += word[i] 
   }
   sections[0].classList.remove('put-up-block')
   sections[0].nextElementSibling.classList.remove('put-up-block')
   sections[sections.length - 1].classList.remove('put-up-block')
   sections[sections.length - 1].nextElementSibling.classList.remove('put-up-block')
} 
addLettersInSections(newWord)

//проверяет есть ли выбранная буква в слове. Если есть, то открывает буку, если нет, то добавляет часть виселицы 
function openLetter(evt){
   const sections = encryptionContainer.querySelectorAll('.encryption__letter.put-up-block');
   const firstPart = hangman.querySelector('.display-none');
   const checked = Array.from(sections).some((section) => {
      return section.textContent === evt.target.textContent
   })
   if (checked){
      for (let section of sections){
         if (section.textContent === evt.target.textContent){
            section.classList.remove('put-up-block');
            section.nextElementSibling.classList.remove('put-up-block');
         } 
      }
      if(sections.length === 1 && hangman.querySelectorAll('.display-none').length === 7){
         openPopup(popupFVictory)
      } else if (sections.length === 1){
         openPopup(popupVictory)
      }
   } else if (!checked){
      firstPart.classList.remove('display-none')
      if (hangman.querySelectorAll('.display-none').length === 0){
         openPopup(popupGameOver);
      }
   }
}

function openPopup(popup){
   popup.classList.remove('invisible-block')
}

startButton.addEventListener('click', () => {
   removeElement(startButtonContainer); 
   addElement(keyboard); 
   addElement(encryption);
   removeElement(hangmanHead); 
   removeElement(hangmanSlipknot); 
   removeElement(hangmanBody);
   removeElement(hangmanLeftHand); 
   removeElement(hangmanRightHand); 
   removeElement(hangmanLeftLeg); 
   removeElement(hangmanRightLeg);
})

keyboard.addEventListener('click', (evt) => {
   evt.target.classList.add('keyboard__button_color-pink');
   evt.target.setAttribute('disabled', true);
   if (evt.target.classList.contains('keyboard__button')){
      openLetter(evt);
   }
})

popupGameOver.addEventListener('click', (evt) => {
   if(evt.target.classList.contains('game-button')){
      document.location = document.location
      encryptionContainer.children.remove
      getRandomWord(words)
      addEncryptionWordSections(newWord)
      addLettersInSections(newWord)
   }
})
popupVictory.addEventListener('click', (evt) => {
   if(evt.target.classList.contains('game-button')){
      document.location = document.location
      encryptionContainer.children.remove
      getRandomWord(words)
      addEncryptionWordSections(newWord)
      addLettersInSections(newWord)
      }
})
popupFVictory.addEventListener('click', (evt) => {
   if(evt.target.classList.contains('game-button')){
      document.location = document.location
      encryptionContainer.children.remove
      getRandomWord(words)
      addEncryptionWordSections(newWord)
      addLettersInSections(newWord)
      }
})
