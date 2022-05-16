import key from '../vendor/key'

class Api {
   constructor(infoForFetch) {
      this._baseUrl = infoForFetch.baseUrl;
      this._key = infoForFetch.key;
   };

   _checkResponse(res) {
      if (res.ok) {
         return res.json();
      };
      return Promise.reject(`Ошибка ${res.status}`);
   };

   _getPageNumber() {
      return (Math.floor(Math.random() * 10) + 1);
   }

   getMovies() {
      return fetch(`${this._baseUrl}movie/top_rated?${this._key}&language=ru&page=${this._getPageNumber()}`, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
      .then(this._checkResponse).catch(()=> ['asd','asd']);
   }
}

const apiMovies = new Api({
   baseUrl: "https://api.themoviedb.org/3/", 
   key: `api_key=${key}`,
});

export default apiMovies;