"use strict";(self.webpackChunkgreat_quotes=self.webpackChunkgreat_quotes||[]).push([[241],{241:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var s=n(791),r=n(880),u=n(124),o=n(995),a=n(152),i="Card_card__9h8Dh",c=n(184),l=function(e){return(0,c.jsx)("div",{className:i,children:e.children})},d="QuoteForm_form__ogBoi",h="QuoteForm_loading__gyIuQ",f="QuoteForm_control__8SqBM",x="QuoteForm_actions__I8AC6",m=n(405),_=function(e){var t=(0,s.useState)(!1),n=(0,a.Z)(t,2),u=n[0],o=n[1],i=(0,s.useRef)(),_=(0,s.useRef)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.NL,{when:u,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),(0,c.jsx)(l,{children:(0,c.jsxs)("form",{className:d,onFocus:function(){o(!0)},onSubmit:function(t){t.preventDefault();var n=i.current.value,s=_.current.value;e.onAddQuote({author:n,text:s})},children:[e.isLoading&&(0,c.jsx)("div",{className:h,children:(0,c.jsx)(m.Z,{})}),(0,c.jsxs)("div",{className:f,children:[(0,c.jsx)("label",{htmlFor:"author",children:"Author"}),(0,c.jsx)("input",{type:"text",id:"author",ref:i})]}),(0,c.jsxs)("div",{className:f,children:[(0,c.jsx)("label",{htmlFor:"text",children:"Text"}),(0,c.jsx)("textarea",{id:"text",rows:"5",ref:_})]}),(0,c.jsx)("div",{className:x,children:(0,c.jsx)("button",{onClick:function(){o(!1)},className:"btn",children:"Add Quote"})})]})})]})},j=function(){var e=(0,r.k6)(),t=(0,o.Z)(u.Z.addQuote),n=t.sendRequest,a=t.status;(0,s.useEffect)((function(){"completed"===a&&e.push("/quotes")}),[a,e]);return(0,c.jsx)(_,{isLoading:"pending"===a,onAddQuote:function(e){n(e)}})}}}]);
//# sourceMappingURL=241.9595a393.chunk.js.map