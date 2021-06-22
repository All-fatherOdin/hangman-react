(this["webpackJsonphangman-react"]=this["webpackJsonphangman-react"]||[]).push([[0],{26:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),r=(n(26),n(7)),i=n(0);var b=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h1",{className:"header__title",children:"Hangman"})})},l=n(11),j=n(14);var u=function(t){var e=t.letter,n=t.pressedKeyBoardSymbols,a=n["".concat(e)]?"encryption-word__letter":"encryption-word__letter put-up-block",c=n["".concat(e)]?"encryption-word__cover":"encryption-word__cover put-up-block";return Object(i.jsxs)("li",{className:"encryption-word__letter-container",children:[Object(i.jsx)("h2",{className:a,children:e}),Object(i.jsx)("div",{className:c})]})};var d=function(t){var e=t.letterStatus,n=t.gameStatus,c=t.pressedLetter,s=t.history,o=document.querySelectorAll("#hangman-part");return Object(a.useEffect)((function(){n&&o.forEach((function(t){t.classList.add("invisible-block")}))}),[n]),Object(a.useEffect)((function(){var t=Array.from(o).filter((function(t){return t.classList.contains("invisible-block")}));if(console.log(e),t.length>1&&!e)t[0].classList.remove("invisible-block");else if(1===t.length&&n){t[0].classList.remove("invisible-block"),new Promise((function(t,e){setTimeout((function(){t()}),1e3)})).then((function(){s.push("/gameover")}))}}),[c]),Object(i.jsxs)("section",{className:"hangman",children:[Object(i.jsx)("div",{className:"hangman__gallows"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__slipknot"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__head"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__body"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__parts hangman__parts_hand hangman__parts_left"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__parts hangman__parts_hand hangman__parts_right"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__parts hangman__parts_leg hangman__parts_left"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__parts hangman__parts_leg hangman__parts_right"})]})};var h=function(t){var e=t.getLetter;return Object(i.jsxs)("section",{className:"keyboard",children:[Object(i.jsxs)("div",{className:"keyboard__line",children:[Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0439"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0446"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0443"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u043a"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0435"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u043d"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0433"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0448"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0449"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0437"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0445"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u044a"})]}),Object(i.jsxs)("div",{className:"keyboard__line",children:[Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0444"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u044b"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0432"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0430"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u043f"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0440"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u043e"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u043b"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0434"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0436"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u044d"})]}),Object(i.jsxs)("div",{className:"keyboard__line",children:[Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u044f"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0447"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0441"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u043c"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0438"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0442"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u044c"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u0431"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:e,children:"\u044e"})]})]})};var _=function(t){var e=t.renderWord;return Object(i.jsx)("section",{className:"encryption-word",children:Object(i.jsx)("ul",{className:"encryption-word__container",children:e()})})};var m=function(t){var e=t.startGame;return Object(i.jsx)("section",{className:"start-game",children:Object(i.jsx)("button",{onClick:e,className:"game-button",type:"button",children:"start"})})},O=n(2);var k=function(t){var e=t.history,n=t.newWord,c=Object(a.useState)(!1),s=Object(r.a)(c,2),o=s[0],b=s[1],k=Object(a.useState)({}),x=Object(r.a)(k,2),g=x[0],p=x[1],y=Object(a.useState)(""),f=Object(r.a)(y,2),v=f[0],N=f[1],C=Object(a.useState)(),w=Object(r.a)(C,2),S=w[0],L=w[1];return Object(a.useEffect)((function(){!function(){var t=document.querySelectorAll(".encryption-word__letter"),a=Array.from(t).filter((function(t){return!t.classList.contains("put-up-block")}));a.length===n.length&&new Promise((function(t,e){setTimeout((function(){t()}),1500)})).then((function(){e.push("/victory")})),console.log(a)}()})),Object(a.useEffect)((function(){e.push("/main/start-game")}),[]),Object(i.jsxs)("main",{children:[Object(i.jsx)(d,{letterStatus:S,gameStatus:o,pressedLetter:v,history:e}),Object(i.jsxs)(O.c,{children:[Object(i.jsx)(O.a,{path:"/main/start-game",children:Object(i.jsx)(m,{startGame:function(){e.push("/main/game"),b(!0)}})}),Object(i.jsxs)(O.a,{path:"/main/game",children:[Object(i.jsx)(_,{renderWord:function(){var t=0;return Array.from(n).map((function(e){return Object(i.jsx)(u,{letter:e,pressedKeyBoardSymbols:g},t++)}))}}),Object(i.jsx)(h,{getLetter:function(t){var e=t.target.textContent;N(e),p(Object(j.a)(Object(j.a)({},g),{},Object(l.a)({},e,!0))),function(t){t.target.setAttribute("disabled",!0),t.target.classList.add("keyboard__button_color-pink")}(t),L(n.includes(e))}})]})]})]})};var x=function(t){var e=t.history,n=t.children;return Object(i.jsxs)("div",{className:"popup",children:[n,Object(i.jsx)("button",{className:"game-button game-button_popup-fz",type:"button",onClick:function(){e.push("/main/start-game")},children:"New game"})]})},g=n(20),p=n(21),y=new(function(){function t(){Object(g.a)(this,t)}return Object(p.a)(t,[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(t.status))}},{key:"getMovies",value:function(){return fetch("https://api.themoviedb.org/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&language=ru",{headers:{"Content-Type":"application/json"}}).then(this._checkResponse)}}]),t}());var f=function(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)({}),o=Object(r.a)(s,2),l=o[0],j=o[1],u=Object(O.f)();return y.getMovies().then((function(t){console.log(t)})),Object(a.useEffect)((function(){y.getMovies().then((function(t){console.log(t)})),u.push("/main/start-game");var t=["\u044f\u043d\u0434\u0435\u043a\u0441"];c(t[Math.floor(Math.random()*t.length)])}),[]),Object(i.jsxs)("div",{className:"page__container",children:[Object(i.jsx)(b,{}),Object(i.jsxs)(O.c,{children:[Object(i.jsx)(O.a,{path:"/main",children:Object(i.jsx)(k,{history:u,newWord:n,keyBoardSymbol:l,getKeyBoardSymbol:j})}),Object(i.jsx)(O.a,{path:"/victory",children:Object(i.jsx)(x,{history:u,children:Object(i.jsx)("h2",{className:"popup__title",children:"Victory"})})}),Object(i.jsx)(O.a,{path:"/gameover",children:Object(i.jsx)(x,{history:u,children:Object(i.jsx)("h2",{className:"popup__title",children:"Game Over"})})})]})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),s(t),o(t)}))},N=n(10);o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(N.a,{children:Object(i.jsx)(f,{})})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.c6f16212.chunk.js.map