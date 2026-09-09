function o(r){let e=[...r];for(let n=e.length-1;n>0;n--){let t=Math.floor(Math.random()*(n+1));[e[n],e[t]]=[e[t],e[n]]}return e}function l(r,e){return o(r).slice(0,e)}export{o as a,l as b};
