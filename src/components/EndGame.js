function EndGame({ history, children }) {
   function toStartGame() {
      history.push('/main/start-game')
   }
   return(
      <div className="popup">
         {children}
         <button className="game-button game-button_popup-fz" type="button" onClick={toStartGame}>New game</button>
      </div>
   )
}


export default EndGame;
