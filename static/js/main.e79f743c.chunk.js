(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"name":"ab","img":"./assets/images/ab.jpg","clicked":false},{"name":"aj","img":"./assets/images/aj.jpg","clicked":false},{"name":"dh","img":"./assets/images/dh.jpg","clicked":false},{"name":"fs","img":"./assets/images/fs.jpg","clicked":false},{"name":"pp","img":"./assets/images/pp.jpg","clicked":false},{"name":"r","img":"./assets/images/r.jpg","clicked":false},{"name":"rbd","img":"./assets/images/rbd.jpg","clicked":false},{"name":"s","img":"./assets/images/s.jpg","clicked":false},{"name":"sb","img":"./assets/images/sb.jpg","clicked":false},{"name":"sl","img":"./assets/images/sl.jpg","clicked":false},{"name":"tl","img":"./assets/images/tl.jpg","clicked":false},{"name":"ts","img":"./assets/images/ts.jpg","clicked":false}]')},function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),s=a.n(r),i=(a(14),a(1)),o=a(2),l=a(4),m=a(3),u=a(5);var p=function(e){return c.a.createElement("div",{className:"header row"},c.a.createElement("h1",{className:"col-10"},"PonyClick, Don't ask me why, I just needed some images"),c.a.createElement("ul",{className:"list-group col-2"},c.a.createElement("li",{className:"list-group-item"},"Current Score is: ",e.score.currentScore),c.a.createElement("li",{className:"list-group-item"},"Top score is: ",e.score.topScore)))},f=(a(15),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=this,t=this.shuffle(this.props.ponies),a=[],n=function(n){var r={backgroundImage:"url('"+t[n].img+"')"};a.push(c.a.createElement("div",{className:"clicker",style:r,key:t[n].name,onClick:function(){return e.props.clickEvent(t[n].name,t[n].clicked)}}))},r=0;r<t.length;r++)n(r);return a}}]),t}(c.a.Component)),g=a(8),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={ponies:g},a.clickEvent=function(e,t){var n=a.state.ponies;for(var c in n)n[c].name===e&&!1===n[c].clicked?(n[c].clicked=!0,a.props.updateScore()):n[c].name===e&&!0===n[c].clicked&&(n.forEach((function(e){return e.clicked=!1,e})),a.props.resetScore());a.setState({ponies:n})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("p",null,"Click the Ponies to earn points, Don't click the same pony more than once"),c.a.createElement("div",{className:"clickerContainer row clearfix"},c.a.createElement(f,{ponies:this.state.ponies,clickEvent:this.clickEvent})))}}]),t}(c.a.Component);a(16);var d=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("p",null,"Thanks for checking out my page"),c.a.createElement("p",null,"This page was made by James Rudd to test the React Javascript library"))},k=(a(17),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={currentScore:0,topScore:0},a.updateScore=function(){a.state.currentScore===a.state.topScore?a.setState((function(e){return{currentScore:e.currentScore+1,topScore:e.topScore+1}})):a.setState((function(e){return{currentScore:e.currentScore+1}}))},a.resetScore=function(){a.setState({currentScore:0})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p,{score:this.state}),c.a.createElement(h,{currentScore:this.state.currentScore,updateScore:this.updateScore,resetScore:this.resetScore}),c.a.createElement(d,null))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e79f743c.chunk.js.map