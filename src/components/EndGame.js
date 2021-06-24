function EndGame({ children, toStartGame }) {
   return (
      <div className="popup">
         {children}
         <button 
            className="game-button game-button_popup-fz" 
            type="button" 
            onClick={toStartGame}
         >
            New game
         </button>
      </div>
   );
};

export default EndGame;
