(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=a(6),s=a(1),u=a(2),i=a(4),m=a(3),d=a(5),p=function(e){var t=e.players.reduce(function(e,t){return e+t.score},0),a=e.players.length;return r.a.createElement("table",{className:"stats"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Players:"),r.a.createElement("td",null,a)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Points:"),r.a.createElement("td",null,t))))},h=function(e){return r.a.createElement("header",null,r.a.createElement(p,{players:e.players}),r.a.createElement("h1",null,e.title))},y=[{name:"Guil",score:0,id:0},{name:"Treasure",score:0,id:1},{name:"Ashley",score:0,id:2},{name:"James",score:0,id:3}],f=function(e){return r.a.createElement("div",{className:"counter"},r.a.createElement("button",{className:"counter-action decrement",onClick:function(){return e.changeScore(e.id,-1)}}," - "),r.a.createElement("span",{className:"counter-score"},e.score),r.a.createElement("button",{className:"counter-action increment",onClick:function(){return e.changeScore(e.id,1)}}," + "))},E=function(e){return r.a.createElement("div",{className:"player"},r.a.createElement("span",{className:"player-name"},r.a.createElement("button",{className:"remove-player",onClick:function(){return e.removePlayer(e.id)}},"\u2716"),e.name),r.a.createElement(f,{score:e.score,changeScore:e.changeScore,id:e.id}))},b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.addPlayer(a.state.value)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Add a new player",value:this.state.value,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Add Player"}))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={players:y},a.handleChangeScore=function(e,t){a.setState(function(a){return{players:a.players.map(function(a){return a.id!==e?a:Object.assign(a,{score:a.score+t})})}})},a.handleRemovePlayer=function(e){a.setState(function(t){return{players:t.players.filter(function(t){return t.id!==e})}})},a.handleAddPlayer=function(e){a.setState(function(t){return{players:Object(o.a)(t.players).concat([{name:e,id:1+Math.max.apply(Math,Object(o.a)(a.state.players.map(function(e){return e.id}))),score:0}])}})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"scoreboard"},r.a.createElement(h,{title:"Scoreboard",players:this.state.players}),this.state.players.map(function(t){return r.a.createElement(E,{name:t.name,id:t.id,key:t.id.toString(),removePlayer:e.handleRemovePlayer,changeScore:e.handleChangeScore,score:t.score})}),r.a.createElement(b,{addPlayer:this.handleAddPlayer}))}}]),t}(n.Component);l.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,2,1]]]);
//# sourceMappingURL=main.2f1cf6a7.chunk.js.map