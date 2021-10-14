(this["webpackJsonpmy-react-eportfolio"]=this["webpackJsonpmy-react-eportfolio"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),i=n.n(r),a=(n(11),n(3)),l=n.n(a),j=n(5),o=n(6),d=n(0);var b=function(e){var t=e.profileimg;return Object(d.jsxs)("div",{className:"aside-header",children:[Object(d.jsx)("div",{className:"avatar-icon",children:Object(d.jsx)("img",{src:t,alt:"avatar"})}),Object(d.jsxs)("div",{className:"aside-text",children:[Object(d.jsx)("h5",{children:"Luke Dixon"}),Object(d.jsxs)("p",{children:["Front-end Developer,",Object(d.jsx)("br",{}),"Devops Admin"]})]})]})};var x=function(e){var t=e.rowinfo.map((function(e){return Object(d.jsxs)("div",{className:"info-row",children:[Object(d.jsx)("p",{children:e.label}),Object(d.jsx)("p",{children:e.value})]},e.id)}));return Object(d.jsx)("div",{className:"aside-info",children:t})};var h=function(e){var t=e.skills.map((function(e){return Object(d.jsx)("li",{children:e.skill},e.id)}));return Object(d.jsxs)("div",{className:"skills-tags",children:[Object(d.jsx)("p",{children:"Skills:"}),Object(d.jsx)("ul",{children:t})]})};var u=function(e){var t=e.knowledge.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"fa-li",children:Object(d.jsx)("i",{className:"fas fa-check"})}),e.skill]},e.id)}));return Object(d.jsx)("div",{className:"skills-check",children:Object(d.jsx)("ul",{children:t})})};var O=function(e){var t=e.downloads.map((function(e){return Object(d.jsxs)("a",{href:e.link,children:[e.text," ",Object(d.jsx)("i",{className:"fas "+e.icon})]},e.id)}));return Object(d.jsx)("div",{className:"cv-download",children:t})};var f=function(e){var t=e.social.map((function(e){return Object(d.jsx)("a",{href:e.link,rel:"noreferrer",target:"_blank",children:Object(d.jsx)("i",{className:"fab "+e.icon})},e.id)}));return Object(d.jsx)("div",{className:"aside-social",children:t})};var m=function(e){var t=e.info,n=t.avatar,c=t.name,s=t.jobtitle,r=t.rowinfo,i=t.skills,a=t.knowledge,l=t.downloads,j=t.social;return Object(d.jsxs)("aside",{className:"aside",children:[Object(d.jsx)("button",{className:"aside-button",onClick:function(){var e=document.getElementsByClassName("aside")[0];e&&e.classList.toggle("slide")},children:"I"}),Object(d.jsx)(b,{profileimg:n,name:c,jobtitle:s}),Object(d.jsxs)("div",{className:"aside-content",children:[Object(d.jsx)(x,{rowinfo:r}),Object(d.jsx)("hr",{}),Object(d.jsx)(h,{skills:i}),Object(d.jsx)("hr",{}),Object(d.jsx)(u,{knowledge:a}),Object(d.jsx)("hr",{}),Object(d.jsx)(O,{downloads:l})]}),Object(d.jsx)(f,{social:j})]})};var v=function(e){var t=e.bgimg,n=e.title,c=e.text,s=e.btntext;return Object(d.jsxs)("div",{className:"hero-banner",style:{backgroundImage:"url("+t+")"},children:[Object(d.jsxs)("div",{className:"hero-content",children:[Object(d.jsx)("h1",{children:n}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("a",{href:"#.",className:"primary-btn",children:s})]}),Object(d.jsx)("div",{className:"hero-image",children:Object(d.jsx)("img",{src:"/",alt:"hero code"})})]})};var p=function(e){var t=e.rows.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:e.value}),e.label]},e.id)}));return Object(d.jsx)("div",{className:"numbers-row",children:Object(d.jsx)("ul",{children:t})})};var g=function(e){var t=e.items,n=e.title,c=t.map((function(e){return Object(d.jsxs)("div",{className:"experience-item",children:[Object(d.jsx)("h5",{children:e.title}),Object(d.jsx)("span",{children:e.date}),Object(d.jsx)("p",{children:e.text})]},e.id)}));return Object(d.jsxs)("div",{className:"experience-grid",children:[Object(d.jsx)("h4",{children:n}),Object(d.jsx)("div",{className:"experience-grid-inner",children:c})]})};var N=function(e){var t=e.left,n=e.right;return Object(d.jsxs)("footer",{children:[Object(d.jsx)("p",{children:t}),Object(d.jsx)("p",{children:n})]})};var k=function(e){var t=e.info,n=t.heroimage,c=t.herotitle,s=t.herotext,r=t.herobtntext,i=t.numbersrow,a=t.experiencestitle,l=t.experiences,j=t.footerleft,o=t.footerright;return Object(d.jsx)("main",{children:Object(d.jsxs)("div",{className:"main-scrollbox",children:[Object(d.jsx)(v,{bgimg:n,title:c,text:s,btntext:r}),Object(d.jsx)(p,{rows:i}),Object(d.jsx)(g,{items:l,title:a}),Object(d.jsx)(N,{left:j,right:o})]})})};var w=function(e){var t=e.data;return Object(d.jsxs)("div",{className:"eportfolio-section",children:[Object(d.jsx)(m,{info:t}),Object(d.jsx)(k,{info:t})]})};var y=function(){var e="$2b$10$ivpXQdDDS2iZg51CyZoTOexyot0GfQv9fWFA2pynpbjIGD.MJ3TqC",t="https://api.jsonbin.io/b/6167f2f2aa02be1d445933c7/latest",n=Object(c.useState)({loading:!0,edata:null,error:null}),s=Object(o.a)(n,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){function n(){return(n=Object(j.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t,{method:"GET",headers:{"secret-key":e}}).then((function(e){return e.json()})).then((function(e){e.hasOwnProperty("name")?(i({loading:!1,edata:e,error:null}),console.log("Got data")):(console.log(e.message),i({loading:!0,edata:null,error:e}))}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(d.jsx)("div",{className:"App",children:r.loading||!r.edata?Object(d.jsx)("div",{className:"loading",children:"1Loading..."}):Object(d.jsx)(w,{data:r.edata})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),C()}},[[14,1,2]]]);
//# sourceMappingURL=main.48fb76b6.chunk.js.map