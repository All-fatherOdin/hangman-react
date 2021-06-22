function EncryptionWord({ renderWord }) {
   return(
      <section className="encryption-word">
            <ul className="encryption-word__container">
               {renderWord()}
            </ul>
         </section>
   )
}

export default EncryptionWord;