!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1);const o=document.getElementById("container");var d=()=>void 0===window.orientation||(o.insertAdjacentHTML("afterend",'<div id="device-not-supported">\n                <p>Mobile screens not supported. Please, open the game on a large screen.</p>\n            </div>'),!1);n(2),n(3);const i=document.getElementById("container");var c={blackScreenIn:'<div id="black-screen-in"></div>',blackScreenOut:'<div id="black-screen-out"></div>',toBlack:function(){i.insertAdjacentHTML("afterend",this.blackScreenIn),this.removeToBlack()},fromBlack:function(){i.insertAdjacentHTML("afterend",this.blackScreenOut),this.removeFromBlack()},removeToBlack:function(){const e=document.getElementById("black-screen-in");e.addEventListener("animationend",()=>{e.remove()})},removeFromBlack:function(){const e=document.getElementById("black-screen-out");e.addEventListener("animationend",()=>{e.remove()})}};var a={sound:!1,fullscreen:!1};var s={create:function(e,t=!1,n=!0){let o=new Audio;o.id="soundtrack",o.src=`static/media-files/sound/${e}`,o.style.display="none",o.autoplay=!0,o.loop=t,o.muted=n,document.getElementById("container").appendChild(o),o.onended=(()=>{o.remove()}),o.pause()},play:function(){document.getElementById("soundtrack").load()},change:function(e){document.getElementById("soundtrack").src=`static/media-files/sound/${e}`},effect:function(e){let t=new Audio(`static/media-files/sound/${e}`);t.muted=!a.sound,t.play()}};n(4);const r=document.getElementById("container");var l=()=>r.insertAdjacentHTML("beforeend",'<div id="game-scene"></div>');n(5),n(6),n(7);const u=()=>'<div class="blood-image"></div>',m=()=>{document.getElementById("container").insertAdjacentHTML("beforeend",(()=>`<div id="blood">${u()}</div>`)())},v=()=>'<div class="cage-airi"></div>',g=()=>'<div class="cage-broken-chain"></div>',f=()=>{document.querySelector("#cage").style.setProperty("--cage-margin-top",0)},y=()=>{const e=document.querySelector("#cage"),t=document.querySelector(".cage-airi");e.addEventListener("transitionend",{handleEvent:function(n){t.classList.add("cage-airi-game-over"),s.effect("girl-scream.mp3"),e.removeEventListener(n.type,this,!1),t.addEventListener("transitionend",()=>{s.effect("body-hit-ground.mp3"),document.getElementById("blood").classList.add("blood-show")})}})},b=()=>{const e=document.querySelector(".battleground-stats-airi");let t=parseInt(e.style.getPropertyValue("--stats-airi-health"));t<=20&&t>0&&s.effect("heartbeat.mp3")},p=()=>{document.getElementById("container").insertAdjacentHTML("beforeend",(()=>`<div id="cage">${v()+g()}</div>`)())};let E={airi:100,you:101};const h=document.getElementById("container"),k=()=>`<div class="battleground-stats-image">${B()+L()}</div>`,B=()=>'<div class="battleground-stats-airi"></div>',L=()=>'<div class="battleground-stats-player"></div>',I=()=>{const e=document.querySelector(".battleground-stats-airi");E.airi=E.airi-20,e.style.setProperty("--stats-airi-health",E.airi+"%"),(()=>{const e=document.querySelector("#cage");let t=parseInt(e.style.getPropertyValue("--cage-margin-top"));e.style.setProperty("--cage-margin-top",t+26+"px"),s.effect("chain-down.mp3"),b()})()},S=()=>{h.insertAdjacentHTML("beforeend",(()=>`<div id="battleground-stats">${k()}</div>`)())};n(8),n(9);var x=["1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","10.gif","11.gif","12.gif","13.gif","14.gif","15.gif","16.gif","17.gif","18.gif","19.gif","20.gif","21.gif","22.gif"];let w=[],M=[];class C{constructor(e,t,n){this.id=C.id(),this.x=e,this.y=t,this.image=n}static id(){return w.length+1}}const T=e=>e.sort(()=>Math.random()-.5),$=()=>x.slice(0,6),H=()=>(T(x),$(),(()=>{let e=$();for(let t=e.length-1;t>=0;t--)e.push(e[t]);M=e})(),T(M),(()=>{let e=75,t=90;for(let n=0;n<12;n++)6===n&&(e=75),n>=6&&(t=210),e+=120,w.push(new C(e,t,M[n]))})(),(()=>{let e="";for(let t=0;t<12;t++)e+=`<div class="card" id="${w[t].id}">\n                      <div class="card-content" style="margin-left: ${w[t].x}px; margin-top: ${w[t].y}px">\n                        <div class="card-front"></div>\n                        <div class="card-back" style="background-image: url(static/images/card-images/${w[t].image})"></div>\n                      </div>\n                    </div>`;return e})()),j=document.getElementById("container"),q=()=>`<div class="battleground-board-image">${A()}</div>`,A=()=>`<div class="battleground-board-field">${H()}</div>`;var F=()=>{j.insertAdjacentHTML("beforeend",(()=>`<div id="battleground-board" class="battleground-board-disable">${q()}</div>`)())};n(10);let O={x:null,y:null};const P=e=>{const t=document.querySelector(".sentry-gun");let n=t.getBoundingClientRect(),o=n.left+n.width/2,d=n.top+n.height/2;t.style.transform="rotate("+(Math.atan2(e.clientY-d,e.clientX-o)-1.57)+"rad)",D(e)},D=e=>{O.x=e.clientX,O.y=e.clientY},Y=()=>{document.getElementById("game-scene").insertAdjacentHTML("afterend",'<div class="sentry-gun"></div>'),window.addEventListener("mousemove",P),(()=>{const e=document.querySelector(".sentry-gun");setTimeout(()=>{console.log("fire"),e.insertAdjacentHTML("beforeend",'<div class="fire-ball"></div>')},500)})()};n(11),n(12),n(13);const _=document.getElementById("container"),N={text:"Well Done!",style:"score-page-victory"},R={text:"Game Over",style:"score-page-defeat"};var V=e=>{_.insertAdjacentHTML("beforeend",(e=>`<div id="score-page" class="${e.style}">\n                <div class="score-page-congratulation">${e.text}</div>\n            </div>`)((e=>{switch(e){case"victory":return N;case"defeat":return R}})(e)));const t=document.getElementById("score-page");t.addEventListener("animationend",()=>{t.classList.add("score-page-rebound")})};n(14),n(15);const z=(e,t="")=>{const n=document.getElementById("full-screen-video");n.src=`static/media-files/video/${e}`,n.loop="loop"==t,n.play()},G=()=>{c.toBlack();const e=document.getElementById("black-screen-in"),t=document.getElementById("soundtrack");e.addEventListener("animationend",()=>{K(),t.pause(),z("kottans-end.mp4"),document.getElementById("full-screen-video").onended=function(e){he(),s.change("starting-page.mp3")}})},K=()=>{document.getElementById("game-scene").remove(),document.querySelector(".sentry-gun").remove(),document.getElementById("cage").remove(),document.getElementById("battleground-stats").remove(),document.getElementById("battleground-board").remove(),document.getElementById("blood").remove(),document.getElementById("score-page").remove()};var W=()=>{const e=document.getElementById("score-page"),t=document.querySelector(".score-page-congratulation");e.insertAdjacentHTML("beforeend",'<div id="score-table">\n                <div class="scores">Web server for score table will be available in next updates...</div>\n                <buttom id="play-again">Play again</button>\n            </div>');const n=document.getElementById("score-table");t.addEventListener("animationend",()=>{n.classList.add("score-table-visible")}),document.getElementById("play-again").addEventListener("click",()=>{G()})};var X=e=>{s.change("score-page.mp3"),V(e),W()};let J=[],Q=0,U=2;const Z=e=>{e.firstElementChild.classList.add("card-content-show"),J.push({id:e.attributes.id.value,img:w[e.attributes.id.value-1].image}),ee()},ee=()=>{null!=J[1]&&(J[0].img!==J[1].img?(ne(),((e,t)=>{e&&I(),t&&playerReduceLife()})(te()),"dead"===(()=>{if(0===E.airi||0===E.player)return"dead"})()&&de("defeat")):J[0].img===J[1].img&&oe())},te=()=>!0,ne=()=>{const e=document.getElementById(J[0].id),t=document.getElementById(J[1].id);J=[],setTimeout(()=>{e.firstElementChild.classList.remove("card-content-show"),t.firstElementChild.classList.remove("card-content-show")},500)},oe=()=>{const e=document.getElementById(J[0].id),t=document.getElementById(J[1].id);Q+=1,J=[],setTimeout(()=>{6==Q&&de("victory"),e.firstElementChild.classList.add("card-content-correct"),t.firstElementChild.classList.add("card-content-correct"),e.firstElementChild.classList.remove("card-content-show"),t.firstElementChild.classList.remove("card-content-show"),e.firstElementChild.addEventListener("transitionend",()=>{e.firstElementChild.classList.add("card-content-correct-grayscale"),t.firstElementChild.classList.add("card-content-correct-grayscale")})},500)},de=e=>{const t=document.querySelector("#battleground-board");switch(e){case"victory":ie();break;case"defeat":ce()}t.classList.add("battleground-board-disable"),re(),s.effect("slide-fall.mp3")},ie=()=>{se("victory")},ce=()=>{s.effect("chain-down-game-over.mp3"),f(),y(),setTimeout(()=>{se("defeat")},3e3)},ae=()=>{const e=document.querySelectorAll(".card-content"),t=document.getElementById("battleground-board");e.forEach(e=>{e.classList.add("card-content-show")}),setTimeout(()=>{t.classList.remove("battleground-board-disable"),document.querySelector(".battleground-board-field").addEventListener("click",e=>{const t=e.target.closest(".card");null!==t&&Z(t)}),e.forEach(e=>{e.classList.remove("card-content-show")})},2e3)},se=e=>{setTimeout(()=>{X(e)},500)},re=()=>{(()=>w=[])(),E.airi=100,E.player=101,J=[],Q=0,U=2};var le=()=>{setTimeout(()=>{ae()},2e3)};const ue=document.getElementById("container");var me=()=>{ue.insertAdjacentHTML("beforeend",'<div id="countdown">3</div>'),(()=>{const e=document.getElementById("countdown");let t=setInterval(()=>{1==e.innerHTML?(clearInterval(t),e.remove(),le()):e.innerHTML-=1},1e3)})()};const ve=()=>{const e=document.getElementById("dialog"),t=document.getElementById("battleground-board");e.classList.add("dialog-hide"),e.addEventListener("transitionend",()=>{e.remove(),document.querySelector("#cage").style.setProperty("--cage-margin-top","-220px"),s.effect("chain-down.mp3"),me(),setTimeout(()=>{s.effect("board-fall.mp3"),t.classList.add("battleground-board-show"),t.addEventListener("transitionend",{handleEvent:function(e){s.effect("board-hit-floor.mp3"),t.classList.add("battleground-board-rebound"),t.removeEventListener(e.type,this,!1)}})},3e3)})};var ge=(e,t,n)=>{const o=document.getElementById("game-scene"),d=((e,t,n)=>`<div id="dialog">${e}${t}${n}</div>`)((e=>`<div class="dialog-box-avatar" style="background-image: url(static/images/${e})"></div>`)(e),((e,t)=>`<div class="dialog-box">${e}${t}</div>`)((e=>`<div class="dialog-box-avatar-name">${e}</div>`)(t),(e=>`<div class="dialog-box-text">${e}</div>`)(n)),'<div class="dialog-box-button">ok</div>');o.insertAdjacentHTML("beforeend",d),document.querySelector(".dialog-box-button").addEventListener("click",()=>{ve()})};var fe=()=>{c.fromBlack(),s.change("main-page.mp3"),l(),F(),Y(),p(),S(),m();ge("captain-sad.png","capitan","Hey, sergeant! You are in the alpha version of the game,<br>so you can't save a princess or lost your life.<br>She will wait for you in next update.")};const ye=e=>{be();const t=document.getElementById("black-screen-in"),n=document.getElementById("full-screen-video");return n.classList.add("full-screen-video-zoom"),t.addEventListener("animationend",()=>{n.classList.remove("full-screen-video-zoom"),document.getElementById("full-screen-video").pause(),document.querySelector(".difficulty-menu").remove(),document.getElementById("game-options-button").remove(),document.getElementById("game-options-menu").remove(),fe()})},be=()=>{document.querySelector(".difficulty-menu").classList.add("difficulty-menu-transition"),c.toBlack(),s.effect("planet-transition.mp3")};var pe=()=>{document.getElementById("container").insertAdjacentHTML("beforeend",'<div class="difficulty-menu">\n                <button class="difficulty-name difficulty-disabled" value="easy">Easy</button>\n                <button class="difficulty-name" value="normal">Normal</button>\n                <button class="difficulty-name difficulty-disabled" value="hard">Hard</button>\n            </div>'),document.querySelector(".difficulty-menu").addEventListener("click",e=>{switch(e.target.value){case"easy":case"normal":case"hard":ye(e.target.value)}})};n(16);var Ee={openMenuButton:function(){return'<button id="game-options-button">Game options</button>'},mainMenu:function(){return'<div id="game-options-menu">\n                    <div class="game-options-checkboxs">\n                        <h3>Options</h3>\n                        <label class="game-options-label">\n                            <input type="checkbox" class="checkbox" id="game-options-menu-sound" value="sound" checked>\n                            <span>Sound</span>\n                        </label>\n                        <label class="game-options-label">\n                            <input type="checkbox" class="checkbox" id="game-options-menu-fullscreen" value="fullscreen" checked>\n                            Fullscreen\n                        </label>\n                    </div>\n                    <div class="game-options-info">\n                        <h3>Hotkeys</h3>\n                        <p>M - Sound off/on</p>\n                        <p>F - Fullscreen off/on</p>\n                    </div>\n                    <button id="game-options-menu-close">Close<button>\n                </div>'},openMenuClickEvent:function(){document.getElementById("game-options-button").addEventListener("click",()=>{this.applyMenuClickEven()})},closeMenuClickEvent:function(){document.getElementById("game-options-menu-close").addEventListener("click",()=>{this.applyMenuClickEven()})},applyMenuClickEven:function(){const e=document.getElementById("game-options-menu"),t=document.querySelector(".difficulty-menu"),n=document.getElementById("game-options-button");e.classList.toggle("game-options-menu-visible"),t.classList.toggle("difficulty-menu-hide"),n.classList.toggle("difficulty-menu-hide")},checkboxClickEvent:function(){document.querySelectorAll(".checkbox").forEach(e=>{e.addEventListener("click",()=>{this.applyCheckbox(e.value)})})},applyCheckbox:function(e){return this.checkboxFunc(e)},checkboxFunc:function(e){switch(e){case"sound":return this.checkboxSound();case"fullscreen":return this.checkboxFullscreen()}},checkboxSound:function(){a.sound=!a.sound;const e=document.getElementById("soundtrack"),t=document.getElementById("full-screen-video");e.muted=!e.muted,t.muted=!t.muted},checkboxFullscreen:function(){const e=null==document.webkitCurrentFullScreenElement;a.fullscreen=!a.fullscreen,e?document.documentElement.webkitRequestFullScreen():document.webkitCancelFullScreen()},setsettings:function(){document.getElementById("game-options-menu-sound").checked=a.sound,document.getElementById("game-options-menu-fullscreen").checked=a.fullscreen},render:function(){document.getElementById("container").insertAdjacentHTML("beforeend",this.openMenuButton()+this.mainMenu()),this.setsettings(),this.openMenuClickEvent(),this.closeMenuClickEvent(),this.checkboxClickEvent()}};var he=()=>{c.fromBlack(),s.play(),z("planet.mp4","loop"),pe(),Ee.render()};var ke={fullscreen:function(){document.body.addEventListener("keydown",e=>{const t=null==document.webkitCurrentFullScreenElement;if(("f"==e.key||70==e.keyCode)&&"BODY"==e.target.nodeName){e.preventDefault(),a.fullscreen=!a.fullscreen;const n=document.getElementById("game-options-menu-fullscreen");n&&(n.checked=!n.checked),t?document.documentElement.webkitRequestFullScreen():document.webkitCancelFullScreen()}})},sound:function(){document.body.addEventListener("keydown",e=>{if(("m"==e.key||77==e.keyCode)&&"BODY"==e.target.nodeName){e.preventDefault();const t=document.getElementById("full-screen-video"),n=document.getElementById("soundtrack"),o=document.getElementById("game-options-menu-sound");n.muted=!n.muted,a.sound=!a.sound,t&&(t.muted=!t.muted),o&&(o.checked=!o.checked)}})},introVideoSkipButton:function(){document.body.addEventListener("keydown",{handleEvent:function(e){if(("Escape"==e.key||"Esc"==e.key||27==e.keyCode)&&"BODY"==e.target.nodeName){e.preventDefault();const t=document.getElementById("intro-video-menu"),n=document.getElementById("intro-video-menu-skip");void 0!==t&&null!=t?(t.remove(),n.remove(),he(),document.body.removeEventListener(e.type,this,!1)):document.body.removeEventListener(e.type,this,!1)}}})},applyHotKeys:function(){this.introVideoSkipButton(),this.sound(),this.fullscreen()}};n(17);const Be=e=>Le(e),Le=e=>{switch(e){case"sound":return Ie();case"screen":return Se();case"hide":return xe()}},Ie=()=>{document.querySelector(".intro-video-menu-box").classList.toggle("intro-video-menu-box-active");const e=document.getElementById("full-screen-video");a.sound=!a.sound;const t=document.getElementById("soundtrack");t.muted=!t.muted,e.muted?e.muted=!1:e.muted=!0},Se=()=>{const e=document.getElementsByClassName("intro-video-menu-box")[1],t=null==document.webkitCurrentFullScreenElement;e.classList.toggle("intro-video-menu-box-active"),a.fullscreen=!a.fullscreen,t?document.documentElement.webkitRequestFullScreen():document.webkitCancelFullScreen()},xe=()=>{const e=document.getElementById("intro-video-menu");e.classList.add("intro-video-menu-hide-button"),e.addEventListener("animationend",()=>{e.remove()})};var we=()=>{document.getElementById("container").insertAdjacentHTML("beforeend",'<div id="intro-video-menu">\n                <button class="intro-video-menu-box" value="sound">Sound</button>\n                <button class="intro-video-menu-box" value="screen">Full Screen</button>\n                <button class="intro-video-menu-box" value="hide">Hide</button>\n            </div><div id="intro-video-menu-skip">\n                Press ESC to skip\n            </div>'),document.querySelectorAll(".intro-video-menu-box").forEach(e=>{e.addEventListener("click",()=>{Be(e.value)})}),(()=>{const e=document.getElementById("intro-video-menu"),t=document.getElementById("intro-video-menu-skip");e.addEventListener("animationend",()=>{e.remove(),t.remove()})})()};if(d()){((e,t="")=>{document.getElementById("container").insertAdjacentHTML("beforeend",((e,t)=>`<video autoplay muted ${t} id="full-screen-video">\n                <source src="static/media-files/video/${e}" type="video/mp4">\n            </video>`)(e,t))})("kottans-intro.mp4",""),we(),ke.applyHotKeys(),s.create("starting-page.mp3",!0),document.getElementById("full-screen-video").onended=function(e){he()}}}]);