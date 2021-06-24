function StartButton({ startGame }) {
   return (
      <section className="start-game">
         <button 
            onClick={startGame} 
            className="game-button" 
            type="button"
         >
            start
         </button>
      </section>
   );
};

export default StartButton;