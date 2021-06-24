function Keyboard({ getLetter }) {
   return (
      <section className="keyboard">
         <div className="keyboard__line">
            <button className="keyboard__button" onClick={getLetter}>й</button>
            <button className="keyboard__button" onClick={getLetter}>ц</button>
            <button className="keyboard__button" onClick={getLetter}>у</button>
            <button className="keyboard__button" onClick={getLetter}>к</button>
            <button className="keyboard__button" onClick={getLetter}>е</button>
            <button className="keyboard__button" onClick={getLetter}>н</button>
            <button className="keyboard__button" onClick={getLetter}>г</button>
            <button className="keyboard__button" onClick={getLetter}>ш</button>
            <button className="keyboard__button" onClick={getLetter}>щ</button>
            <button className="keyboard__button" onClick={getLetter}>з</button>
            <button className="keyboard__button" onClick={getLetter}>х</button>
            <button className="keyboard__button" onClick={getLetter}>ъ</button>
         </div>
         <div className="keyboard__line">
            <button className="keyboard__button" onClick={getLetter}>ф</button>
            <button className="keyboard__button" onClick={getLetter}>ы</button>
            <button className="keyboard__button" onClick={getLetter}>в</button>
            <button className="keyboard__button" onClick={getLetter}>а</button>
            <button className="keyboard__button" onClick={getLetter}>п</button>
            <button className="keyboard__button" onClick={getLetter}>р</button>
            <button className="keyboard__button" onClick={getLetter}>о</button>
            <button className="keyboard__button" onClick={getLetter}>л</button>
            <button className="keyboard__button" onClick={getLetter}>д</button>
            <button className="keyboard__button" onClick={getLetter}>ж</button>
            <button className="keyboard__button" onClick={getLetter}>э</button>
         </div>
         <div className="keyboard__line">
            <button className="keyboard__button" onClick={getLetter}>я</button>
            <button className="keyboard__button" onClick={getLetter}>ч</button>
            <button className="keyboard__button" onClick={getLetter}>с</button>
            <button className="keyboard__button" onClick={getLetter}>м</button>
            <button className="keyboard__button" onClick={getLetter}>и</button>
            <button className="keyboard__button" onClick={getLetter}>т</button>
            <button className="keyboard__button" onClick={getLetter}>ь</button>
            <button className="keyboard__button" onClick={getLetter}>б</button>
            <button className="keyboard__button" onClick={getLetter}>ю</button>
         </div>
      </section>
   );
};

export default Keyboard;