(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"img/flower1.jpg","clicked":false},{"id":2,"image":"img/flower2.jpg","clicked":false},{"id":3,"image":"img/flower3.jpg","clicked":false},{"id":4,"image":"img/flower4.jpg","clicked":false},{"id":5,"image":"img/flower5.jpg","clicked":false},{"id":6,"image":"img/flower6.jpg","clicked":false},{"id":7,"image":"img/flower7.jpg","clicked":false},{"id":8,"image":"img/flower8.jpg","clicked":false},{"id":9,"image":"img/flower9.jpg","clicked":false},{"id":10,"image":"img/flower10.jpg","clicked":false},{"id":11,"image":"img/flower11.jpg","clicked":false},{"id":12,"image":"img/flower12.jpg","clicked":false},{"id":13,"image":"img/flower13.jpg","clicked":false},{"id":14,"image":"img/flower14.jpg","clicked":false},{"id":15,"image":"img/flower15.jpg","clicked":false},{"id":16,"image":"img/flower16.jpg","clicked":false}]')},,,,,,,,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),i=t.n(l),r=t(3),c=t.n(r),n=t(4),o=t(5),m=t(7),s=t(6),d=t(8);t(14);var g=function(e){return i.a.createElement("div",{className:"image"},i.a.createElement("div",{className:"img-box"},i.a.createElement("img",{alt:e.id,src:e.image,clicked:e.clicked,onClick:function(){return e.removeFriend(e.id)}})))};t(15);var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};t(16);var f=function(e){return i.a.createElement("h1",{className:"title"},e.children)};t(17),t(18);var h=function(){return i.a.createElement("div",null,i.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg","data-toggle":"modal","data-target":"#exampleModal"},"Rules of the Land"),i.a.createElement("div",{className:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},i.a.createElement("div",{className:"modal-dialog",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h3",{className:"modal-title",id:"exampleModalLabel"},"How to play with my flowers"),i.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),i.a.createElement("div",{className:"modal-body"},i.a.createElement("p",null,"You may play with my flowers tonight. In this garden, my flowers come alive and will dance around for you.",i.a.createElement("h4",null,i.a.createElement("b",null,"Be warned!")),"The flowers only like to be picked once.  Disturb them more than that, and you will be kicked out.")),i.a.createElement("div",{className:"modal-footer"},i.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Let's start"))))))};var p=function(){return i.a.createElement("div",{className:"jumbotron text-center"},i.a.createElement("img",{alt:"logo",className:"logo",src:"/img/logo.png"}),i.a.createElement("hr",null),i.a.createElement(h,null))};t(19);var b=function(e){return i.a.createElement("div",{className:"loss text-center"},i.a.createElement("div",{className:"card mb-3"},i.a.createElement("h2",{className:"card-header"},"You have angered my flowers!"),i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title"},"They may forget about your crimes by tomorrow"),i.a.createElement("p",{className:"card-text"},i.a.createElement("h6",null,"Come back later to try again")),i.a.createElement("a",{className:"btn btn-primary",onClick:function(){return e.closeModal(e.id)}},"Come back to the Garden the next night"))))},v=t(1),E=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,i=new Array(l),r=0;r<l;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={friends:v,clicked:[],score:0,highestscore:0,gameOver:!1},t.removeFriend=function(e){var a=t.state.friends.map(function(a){return a.id!==e});if(!t.state.clicked.includes(e)){t.state.clicked.push(e);var l=t.state.score,i=++l>t.state.highestscore?l:t.state.highestscore;return t.setState({friends:t.state.friends.sort(function(){return Math.random()-.5}),score:l,highestscore:i,clicked:t.state.clicked}),a}t.setState({score:0,clicked:[],gameOver:!0})},t.closeModal=function(e){t.setState({gameOver:!1})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(u,null,i.a.createElement(p,null),i.a.createElement(f,null,"Flowers in current bouquet: ",this.state.score),i.a.createElement(f,null,"Biggest bouquet you've picked: ",this.state.highestscore),this.state.friends.map(function(a){return i.a.createElement(g,{removeFriend:e.removeFriend,id:a.id,key:a.id,image:a.image,clicked:v.clicked})}),this.state.gameOver&&i.a.createElement(b,{closeModal:this.closeModal,gameOver:this.state.gameOver}))}}]),a}(l.Component);t(20);c.a.render(i.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.68437253.chunk.js.map