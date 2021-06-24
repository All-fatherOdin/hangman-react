import {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import { Switch, Route, useHistory} from 'react-router-dom';
import EndGame from './EndGame';
import apiMovies from '../utils/api';
import useSound from 'use-sound';
import startGameSound from '../audio/start-game-button.mp3';

function App() {
  const [newWord, setWord] = useState('');
  const [render, setRender] = useState(false);
  const history = useHistory();
  const [playStartGameSound] = useSound(startGameSound, { volume: 0.25 });
  const regStr = /[a-zA-z]+/g;
  const regexp = new RegExp(regStr);

  function toStartGame() {
    history.push('/main/start-game');
    setRender(!render);
    playStartGameSound();
  };

  function checkNewWord(word) {
    if (word.length > 25 || word.length < 4 || word.match(regexp)) {
      setRender(!render);
      console.log(`Не прошло ${word}`);
    } else {
      setWord(word);
      console.log(word);
    };
  };

  function getMovieName(moviesList) {
    return moviesList.results[Math.floor(Math.random() * 20)].title;
  };

  function getMoviesList(word) {
    apiMovies.getMovies()
    .then((moviesList) => {
      word = getMovieName(moviesList);
    })
    .then(() => {
      checkNewWord(word, regexp)
    })
  }
  
  useEffect(() => {
    let word = '';
    getMoviesList(word);
    history.push('/main/start-game');
  }, [render]);

  return (
    <div className = "page__container">
      <Header />
        <Switch>
          <Route path="/main">
            <Main
              history={history} 
              newWord={newWord}
              playStartGameSound={playStartGameSound}
            />
          </Route>
          <Route path="/victory">
            <EndGame 
              toStartGame={toStartGame}
            >
              <h2 className="popup__title">Victory</h2>
            </EndGame>
          </Route>
          <Route path="/gameover">
            <EndGame 
              toStartGame={toStartGame}
            >
              <h2 className="popup__title">Game Over</h2>
            </EndGame>
          </Route>
        </Switch>
    </div>
  );
};

export default App;
