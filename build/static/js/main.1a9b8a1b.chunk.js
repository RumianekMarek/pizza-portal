(this["webpackJsonppizza-portal"]=this["webpackJsonppizza-portal"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var c=a(2),n=(a(97),a(0)),r=a.n(n),i=a(9),s=a.n(i),j=a(58),l=a(47),o=a(27),d=function(e){return"app/".concat("products","/").concat(e)},b=d("FETCH_ALL_START"),O=d("FETCH_ALL_SUCCESS"),h=d("FETCH_ALL_ERROR");var x={products:{loading:{active:!1,error:!1},data:[]}},p={products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object(o.a)(Object(o.a)({},e),{},{loading:{active:!0,error:!1}});case O:return Object(o.a)(Object(o.a)({},e),{},{loading:{active:!1,error:!1},data:t.payload});case h:return Object(o.a)(Object(o.a)({},e),{},{loading:{active:!1,error:t.payload}});default:return e}}};Object.keys(x).forEach((function(e){"undefined"==typeof p[e]&&(p[e]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e})}));var u,m=Object(l.b)(p),v=Object(l.c)(m,x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=a(11),g=a(12),C=a(14),y=a(13),N=a(21),S=a(37),k=a(50),T=a.n(k),w=a(45),E=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(c.jsx)("header",{className:T.a.component,children:Object(c.jsx)(w.Grid,{children:Object(c.jsxs)(w.Row,{between:"md",middle:"xs",children:[Object(c.jsx)(w.Col,{md:3,lg:2,children:Object(c.jsx)(N.b,{to:"/",children:Object(c.jsx)("div",{className:T.a.logo,children:Object(c.jsx)("span",{className:T.a.name,children:"Pizza Portal Inside"})})})}),Object(c.jsx)(w.Col,{md:6,children:Object(c.jsxs)("nav",{children:[Object(c.jsx)(N.c,{to:"".concat("","/Login"),activeClassName:"active",children:"Login"}),Object(c.jsx)(N.c,{to:"".concat("","/tables"),activeClassName:"active",children:"Tables"}),Object(c.jsx)(N.c,{to:"".concat("","/tables/booking/:id"),activeClassName:"active",children:"BookedTable"}),Object(c.jsx)(N.c,{to:"".concat("","/tables/event/:id"),activeClassName:"active",children:"BookedEvent"}),Object(c.jsx)(N.c,{to:"".concat("","/ordering"),activeClassName:"active",children:"OrderForm"}),Object(c.jsx)(N.c,{to:"".concat("","/ordering/new"),activeClassName:"active",children:"CreateOrder"}),Object(c.jsx)(N.c,{to:"".concat("","/ordering/order/:id"),activeClassName:"active",children:"TableOrder"}),Object(c.jsx)(N.c,{to:"".concat("","/kitchen"),activeClassName:"active",children:"Kitchen"})]})}),Object(c.jsx)(w.Col,{md:3,lg:2,children:Object(c.jsx)("div",{className:T.a.contact})})]})})})}}]),a}(r.a.Component),_=function(e){var t=e.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)(E,{}),Object(c.jsx)("main",{children:t})]})},A=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"Home"})})}}]),a}(r.a.Component),B=a(169),L=a(159),W=a(153),F=a(164),z=a(158),D=a(163),R=a(150),I=a(160),M=a(162),P=a(80),U=a.n(P),H=a(81),J=a(151),X=a(152),G=a(79),V=a.n(G),q=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"Copyright",value:function(){return Object(c.jsxs)(H.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(c.jsx)(R.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}},{key:"render",value:function(){var e=Object(J.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));return Object(c.jsxs)(X.a,{component:"main",maxWidth:"xs",children:[Object(c.jsx)("h2",{className:V.a.h2,children:"Login"}),Object(c.jsx)(W.a,{}),Object(c.jsxs)("div",{className:e.paper,children:[Object(c.jsx)(B.a,{className:e.avatar,children:Object(c.jsx)(U.a,{})}),Object(c.jsx)(H.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(c.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(c.jsx)(F.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(c.jsx)(F.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(c.jsx)(z.a,{control:Object(c.jsx)(D.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(c.jsx)(L.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(c.jsxs)(I.a,{container:!0,children:[Object(c.jsx)(I.a,{item:!0,xs:!0,children:Object(c.jsx)(R.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(c.jsx)(I.a,{item:!0,children:Object(c.jsxs)(R.a,{href:"#",variant:"body2",children:["Do not have an account? Sign Up",";"]})})]})]})]}),Object(c.jsx)(M.a,{mt:8,children:Object(c.jsx)(this.Copyright,{})})]})}}]),a}(r.a.Component),K=a(157),Y=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=Object(J.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));return Object(c.jsxs)(X.a,{component:"main",maxWidth:"xs",children:[Object(c.jsx)("h1",{children:"Tables"}),Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsxs)(I.a,{container:!0,spacing:2,children:[Object(c.jsx)(I.a,{item:!0,xs:4,children:Object(c.jsxs)(K.a,{className:e.paper,children:[Object(c.jsx)(B.a,{children:"T1"})," ",Object(c.jsx)("br",{}),"Order:"]})}),Object(c.jsx)(I.a,{item:!0,xs:4,children:Object(c.jsxs)(K.a,{className:e.paper,children:[Object(c.jsx)(B.a,{children:"T2"}),Object(c.jsx)("br",{}),"Order:"]})}),Object(c.jsx)(I.a,{item:!0,xs:4,children:Object(c.jsxs)(K.a,{className:e.paper,children:[Object(c.jsx)(B.a,{children:"T3"}),Object(c.jsx)("br",{}),"Order:"]})})]}),Object(c.jsxs)(I.a,{container:!0,spacing:2,children:[Object(c.jsx)(I.a,{item:!0,xs:4,children:Object(c.jsxs)(K.a,{className:e.paper,children:[Object(c.jsx)(B.a,{children:"T4"}),Object(c.jsx)("br",{}),"Order:"]})}),Object(c.jsx)(I.a,{item:!0,xs:4,children:Object(c.jsxs)(K.a,{className:e.paper,children:[Object(c.jsx)(B.a,{children:"T5"}),Object(c.jsx)("br",{}),"Order:"]})}),Object(c.jsx)(I.a,{item:!0,xs:4,children:Object(c.jsxs)(K.a,{className:e.paper,children:[Object(c.jsx)(B.a,{children:"T6"}),Object(c.jsx)("br",{}),"Order:"]})})]})]})]})}}]),a}(r.a.Component),Q=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"BookedTable"}),Object(c.jsx)("h3",{children:this.props.match.params.id})]})}}]),a}(r.a.Component),Z=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=Object(J.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));return Object(c.jsxs)(X.a,{component:"main",maxWidth:"xs",children:[Object(c.jsx)("h2",{children:"BookedEvent"}),Object(c.jsx)("h3",{children:this.props.match.params.id}),Object(c.jsx)(I.a,{container:!0,children:Object(c.jsx)(I.a,{item:!0,xs:!0,children:Object(c.jsx)(K.a,{className:e.paper,children:JSON.stringify({data:"23/03/2021",People:"12",Appetizers:"Chipps, Crackers, SaltySticks",MainDish:"Fries*4, MiniSadwich*4, ChickenStrips*4",Beverages:"Coca-cola*mix, Water, Juice*mix",Alkohol:"Seperate Bill"})})})})]})}}]),a}(r.a.Component),$=a(165),ee=a(166),te=a(156),ae=a(161),ce=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=Object(J.a)((function(e){return{formControl:{margin:e.spacing(6),minWidth:120},selectEmpty:{marginTop:e.spacing(4)}}}));return Object(c.jsxs)(X.a,{componnet:"main",maxWidth:"xs",children:[Object(c.jsx)("h1",{children:"OrderForm"}),Object(c.jsx)(X.a,{children:Object(c.jsxs)(te.a,{variant:"outlined",className:e.formControl,children:[Object(c.jsx)($.a,{id:"tableSelect",children:"Select Table"}),Object(c.jsxs)(ae.a,{id:"tableSelector",children:[Object(c.jsx)(ee.a,{value:""}),Object(c.jsx)(ee.a,{value:1,children:"Table 1"}),Object(c.jsx)(ee.a,{value:2,children:"Table 2"}),Object(c.jsx)(ee.a,{value:3,children:"Table 3"})]})]})}),Object(c.jsxs)(X.a,{children:[Object(c.jsxs)(te.a,{variant:"outlined",className:e.formControl,children:[Object(c.jsx)($.a,{id:"Appetizer",children:"Appetizer"}),Object(c.jsxs)(ae.a,{id:"tableSelector",children:[Object(c.jsx)(ee.a,{value:""}),Object(c.jsx)(ee.a,{value:"chips",children:"Chips"}),Object(c.jsx)(ee.a,{value:"crachers",children:"Crackers"}),Object(c.jsx)(ee.a,{value:"cStrips",children:"Chicken Strips"})]})]}),Object(c.jsxs)(te.a,{variant:"outlined",className:e.formControl,children:[Object(c.jsx)($.a,{id:"AppetizerBeverage",children:"Beverage"}),Object(c.jsxs)(ae.a,{id:"tableSelector",children:[Object(c.jsx)(ee.a,{value:""}),Object(c.jsx)(ee.a,{value:"Cola",children:"CocaCola"}),Object(c.jsx)(ee.a,{value:"water",children:"Water"}),Object(c.jsx)(ee.a,{value:"beer",children:"Beer"})]})]})]}),Object(c.jsxs)(X.a,{children:[Object(c.jsxs)(te.a,{variant:"outlined",className:e.formControl,children:[Object(c.jsx)($.a,{id:"Main",children:"Main Dish"}),Object(c.jsxs)(ae.a,{id:"tableSelector",children:[Object(c.jsx)(ee.a,{value:""}),Object(c.jsx)(ee.a,{value:"salad",children:"Salad"}),Object(c.jsx)(ee.a,{value:"chicken",children:"Chicken"}),Object(c.jsx)(ee.a,{value:"fish",children:"Fish"})]})]}),Object(c.jsxs)(te.a,{variant:"outlined",className:e.formControl,children:[Object(c.jsx)($.a,{id:"MainBeverage",children:"Beverage"}),Object(c.jsxs)(ae.a,{id:"tableSelector",children:[Object(c.jsx)(ee.a,{value:""}),Object(c.jsx)(ee.a,{value:"Cola",children:"CocaCola"}),Object(c.jsx)(ee.a,{value:"water",children:"Water"}),Object(c.jsx)(ee.a,{value:"beer",children:"Beer"})]})]})]}),Object(c.jsx)(L.a,{id:"OrderFormSave",variant:"contained",color:"primary",children:"Send Order"})]})}}]),a}(r.a.Component),ne=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"CreateOrder"})}}]),a}(r.a.Component),re=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"TableOrder"}),Object(c.jsx)("h3",{children:this.props.match.params.id})]})}}]),a}(r.a.Component),ie=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"Kitchen"})}}]),a}(r.a.Component),se=(u="SET_MULTIPLE_STATES","app/".concat("global","/").concat(u));var je=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(c.jsx)(N.a,{children:Object(c.jsx)(_,{children:Object(c.jsxs)(S.c,{children:[Object(c.jsx)(S.a,{exact:!0,path:"".concat("","/"),component:A}),Object(c.jsx)(S.a,{exact:!0,path:"".concat("","/login"),component:q}),Object(c.jsx)(S.a,{exact:!0,path:"".concat("","/tables"),component:Y}),Object(c.jsx)(S.a,{exact:!0,path:"".concat("","/tables/booking/:id"),component:Q}),Object(c.jsx)(S.a,{exact:!0,path:"".concat("","/tables/event/:id"),component:Z}),Object(c.jsx)(S.a,{exact:!0,path:"".concat("","/ordering"),component:ce}),Object(c.jsx)(S.a,{exact:!0,path:"".concat("","/ordering/new"),component:ne}),Object(c.jsx)(S.a,{exact:!0,path:"".concat("","/ordering/order/:id"),component:re}),Object(c.jsx)(S.a,{exact:!0,path:"".concat("","/kitchen"),component:ie})]})})})}}]),a}(r.a.Component),le=Object(j.b)((function(){return{}}),(function(e){return{setStates:function(t){return e({payload:t,type:se})}}}))(je);s.a.render(Object(c.jsx)(j.a,{store:v,children:Object(c.jsx)(le,{})}),document.getElementById("app"))},50:function(e,t,a){},79:function(e,t,a){},97:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.1a9b8a1b.chunk.js.map