(this["webpackJsonphangman-react"]=this["webpackJsonphangman-react"]||[]).push([[0],{28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(19),r=a.n(s),o=(a(28),a(4)),i=a(0);var b=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h1",{className:"header__title",children:"Hangman"})})},l=a(12),u=a(15),j=a(8),d=a.p+"static/media/open-cover.b39044a0.mp3";var h=function(e){var t=e.letter,a=e.pressedKeyBoardSymbols,c=e.letterStatus,s=new RegExp(/[^\u0430-\u044f\u0410-\u042f\u0401\u0451]+/g),r=Object(j.a)(d,{volume:.1,playbackRate:1.7}),b=Object(o.a)(r,1)[0];Object(n.useEffect)((function(){c&&b()}),[c,b,a]);var l=t.match(s)||a["".concat("\u0451"===t?"\u0435":t.toLowerCase())]?"encryption-word__cover":"encryption-word__cover put-up-block";return Object(i.jsx)(i.Fragment,{children:" "===t?Object(i.jsx)("div",{className:"encryption-word__space"}):Object(i.jsxs)("li",{className:"encryption-word__letter-container",children:[Object(i.jsx)("h2",{className:"encryption-word__letter",children:t}),Object(i.jsx)("div",{className:l})]})})},m=a.p+"static/media/wrong-click.fe297604.mp3",_=a.p+"static/media/lose.fbcf06de.mp3";var O=function(e){var t=e.letterStatus,a=e.gameStatus,c=e.pressedLetter,s=e.history,r=Object(j.a)(m,{volume:.25}),b=Object(o.a)(r,1)[0],l=Object(j.a)(_,{volume:1}),u=Object(o.a)(l,1)[0],d=document.querySelectorAll("#hangman-part");return Object(n.useEffect)((function(){a&&d.forEach((function(e){e.classList.add("invisible-block")}))}),[a]),Object(n.useEffect)((function(){var e=Array.from(d).filter((function(e){return e.classList.contains("invisible-block")}));if(e.length>1&&!t)e[0].classList.remove("invisible-block"),b();else if(1===e.length&&!t){e[0].classList.remove("invisible-block"),b(),new Promise((function(e,t){setTimeout((function(){e()}),1e3)})).then((function(){s.push("/gameover"),u()}))}}),[c]),Object(i.jsxs)("section",{className:"hangman",children:[Object(i.jsx)("div",{className:"hangman__gallows"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__slipknot"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__head"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__body"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__parts hangman__parts_hand hangman__parts_left"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__parts hangman__parts_hand hangman__parts_right"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__parts hangman__parts_leg hangman__parts_left"}),Object(i.jsx)("div",{id:"hangman-part",className:"hangman__parts hangman__parts_leg hangman__parts_right"})]})};var p=function(e){var t=e.getLetter;return Object(i.jsxs)("section",{className:"keyboard",children:[Object(i.jsxs)("div",{className:"keyboard__line",children:[Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0439"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0446"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0443"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u043a"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0435"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u043d"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0433"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0448"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0449"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0437"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0445"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u044a"})]}),Object(i.jsxs)("div",{className:"keyboard__line",children:[Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0444"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u044b"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0432"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0430"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u043f"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0440"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u043e"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u043b"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0434"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0436"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u044d"})]}),Object(i.jsxs)("div",{className:"keyboard__line",children:[Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u044f"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0447"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0441"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u043c"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0438"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0442"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u044c"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u0431"}),Object(i.jsx)("button",{className:"keyboard__button",onClick:t,children:"\u044e"})]})]})};var g=function(e){var t=e.renderWord;return Object(i.jsx)("section",{className:"encryption-word",children:Object(i.jsx)("ul",{className:"encryption-word__container",children:t()})})};var k=function(e){var t=e.startGame;return Object(i.jsx)("section",{className:"start-game",children:Object(i.jsx)("button",{onClick:t,className:"game-button",type:"button",children:"start"})})},x=a(2),y=a.p+"static/media/start-game-button.0bd8a468.mp3",f=a.p+"static/media/victory.7202315e.mp3";var v=function(e){var t=e.history,a=e.newWord,c=e.setGameStatus,s=e.gameStatus,r=Object(n.useState)({}),b=Object(o.a)(r,2),d=b[0],m=b[1],_=Object(n.useState)(""),v=Object(o.a)(_,2),N=v[0],C=v[1],w=Object(n.useState)(),S=Object(o.a)(w,2),L=S[0],E=S[1],A=Object(j.a)(y,{volume:.1}),G=Object(o.a)(A,1)[0],R=Object(j.a)(f,{volume:.5}),M=Object(o.a)(R,1)[0];return Object(n.useEffect)((function(){!function(){var e=document.querySelectorAll(".encryption-word__cover"),n=document.querySelectorAll(".encryption-word__space");Array.from(e).filter((function(e){return!e.classList.contains("put-up-block")})).length+n.length===a.length&&!0===s&&new Promise((function(e,t){setTimeout((function(){e()}),1500)})).then((function(){t.push("/victory"),M()}))}()}),[d]),Object(n.useEffect)((function(){t.push("/hangman-react/start-game")}),[]),Object(i.jsxs)("main",{children:[Object(i.jsx)(O,{letterStatus:L,gameStatus:s,pressedLetter:N,history:t}),Object(i.jsxs)(x.d,{children:[Object(i.jsx)(x.b,{path:"/hangman-react/start-game",children:Object(i.jsx)(k,{startGame:function(){t.push("/hangman-react/game"),c(!0),G()}})}),Object(i.jsxs)(x.b,{path:"/hangman-react/game",children:[Object(i.jsx)(g,{renderWord:function(){var e=0;return Array.from(a).map((function(t){return Object(i.jsx)(h,{letter:t,pressedKeyBoardSymbols:d,letterStatus:L},e++)}))}}),Object(i.jsx)(p,{getLetter:function(e){var t=e.target.textContent;C(t),m(Object(u.a)(Object(u.a)({},d),{},Object(l.a)({},t,!0))),function(e){e.target.setAttribute("disabled",!0),e.target.classList.add("keyboard__button_color-pink")}(e),a.toLowerCase().includes("\u0451")&&"\u0435"===t?E(!0):E(a.toLowerCase().includes(t))}})]})]})]})};var N=function(e){var t=e.history,a=e.children,n=e.setRender,c=e.render,s=e.setGameStatus,r=Object(j.a)(y,{volume:.1}),b=Object(o.a)(r,1)[0];return Object(i.jsxs)("div",{className:"popup",children:[a,Object(i.jsx)("button",{className:"game-button game-button_popup-fz",type:"button",onClick:function(){t.push("/hangman-react/start-game"),n(!c),s(!1),b()},children:"New game"})]})},C=a(21),w=a(22),S=new(function(){function e(t){Object(C.a)(this,e),this._key=t.key,this._headers=t.headers,this._baseUrl=t.baseUrl}return Object(w.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"_getPageNumber",value:function(){return Math.floor(10*Math.random()+1)}},{key:"getMovies",value:function(){return fetch("".concat(this._baseUrl,"movie/top_rated?").concat(this._key,"&language=ru&page=").concat(this._getPageNumber()),{headers:this._headers}).then(this._checkResponse)}}]),e}())({baseUrl:"https://api.themoviedb.org/3/",key:"api_key=0706708a09112ac472ec559c98705314",headers:{"Content-Type":"application/json"}});var L=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(o.a)(s,2),l=r[0],u=r[1],j=Object(n.useState)(""),d=Object(o.a)(j,2),h=d[0],m=d[1],_=Object(x.g)();function O(e){var t=new RegExp(/[a-zA-z]+/g),a=e.results[Math.floor(20*Math.random())].title;return a.match(t)||a.length>30?O(e):a.match(t)?void 0:a}return Object(n.useEffect)((function(){window.addEventListener("onbeforeunload",(function(e){return e.preventDefault(),Object(i.jsx)(x.a,{to:"/hangman-react/index.html"})}))})),Object(n.useEffect)((function(){u(!1);var e="";S.getMovies().then((function(t){e=O(t)})).then((function(){console.log(e),m(e),_.push("/hangman-react/start-game")}))}),[a]),Object(i.jsxs)("div",{className:"page__container",children:[Object(i.jsx)(b,{}),Object(i.jsxs)(x.d,{children:[Object(i.jsx)(x.b,{path:"/hangman-react",children:Object(i.jsx)(v,{history:_,newWord:h,gameStatus:l,setGameStatus:u})}),Object(i.jsx)(x.b,{path:"/victory",children:Object(i.jsx)(N,{history:_,render:a,setRender:c,setGameStatus:u,children:Object(i.jsx)("h2",{className:"popup__title",children:"Victory"})})}),Object(i.jsx)(x.b,{path:"/gameover",children:Object(i.jsx)(N,{history:_,render:a,setRender:c,setGameStatus:u,children:Object(i.jsx)("h2",{className:"popup__title",children:"Game Over"})})})]})]})},E=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},A=a(11);r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(A.a,{basename:"/hangman-react",children:Object(i.jsx)(L,{})})}),document.getElementById("root")),E()}},[[34,1,2]]]);
//# sourceMappingURL=main.2b486dbe.chunk.js.map