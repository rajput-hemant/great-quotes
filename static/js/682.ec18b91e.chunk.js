"use strict";(self.webpackChunkgreat_quotes=self.webpackChunkgreat_quotes||[]).push([[682],{682:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var s=n(791),c=n(880),r=n(523),o=n(124),a=n(995),m=n(152),d="Comments_comments__9cxIN",i="CommentItem_item__+vwzS",l=n(184),u=function(e){return(0,l.jsx)("li",{className:i,children:(0,l.jsx)("p",{children:e.text})})},x="CommentsList_comments__UVWAR",h=function(e){return(0,l.jsx)("ul",{className:x,children:e.comments.map((function(e){return(0,l.jsx)(u,{text:e.text},e.id)}))})},j=n(405),f="NewCommentForm_form__C3cQf",p="NewCommentForm_control__iR6jS",N="NewCommentForm_actions__NC323",_=function(e){var t=(0,s.useRef)(),n=e.onAddedComment,c=(0,a.Z)(o.Z.addComment),r=c.sendRequest,m=c.status,d=c.error;(0,s.useEffect)((function(){"completed"!==m||d||n()}),[m,d,n]);var i=function(n){n.preventDefault();var s=t.current.value;r({commentData:{text:s},quoteId:e.quoteId})};return(0,l.jsxs)("form",{className:f,onSubmit:i,children:["pending"===m&&(0,l.jsx)("div",{className:"centered",children:(0,l.jsx)(j.Z,{})}),(0,l.jsxs)("div",{className:p,onSubmit:i,children:[(0,l.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,l.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),(0,l.jsx)("div",{className:N,children:(0,l.jsx)("button",{className:"btn",children:"Add Comment"})})]})},C=function(){var e=(0,c.UO)().quoteId,t=(0,a.Z)(o.Z.getAllComments),n=t.sendRequest,r=t.status,i=t.data,u=t.error,x=(0,s.useState)(!1),f=(0,m.Z)(x,2),p=f[0],N=f[1];(0,s.useEffect)((function(){n(e)}),[n,e]);var C,v=(0,s.useCallback)((function(){n(e)}),[n,e]);return"pending"===r?(0,l.jsx)("div",{className:"centered",children:(0,l.jsx)(j.Z,{})}):u?(0,l.jsx)("p",{className:"centered focused",children:u}):("completed"===r&&(i||i.length>0)&&(C=(0,l.jsx)(h,{comments:i})),"completed"!==r||i&&0!==i.length||(C=(0,l.jsx)("p",{children:"No Comments were added yet!"})),(0,l.jsxs)("section",{className:d,children:[(0,l.jsx)("h2",{children:"User Comments"}),!p&&(0,l.jsx)("button",{className:"btn",onClick:function(){N(!0)},children:"Add a Comment"}),p&&(0,l.jsx)(_,{quoteId:e,onAddedComment:v}),(0,l.jsx)("p",{children:C})]}))},v="HighlightedQuote_quote__dE8qA",g=function(e){return(0,l.jsxs)("figure",{className:v,children:[(0,l.jsx)("p",{children:e.text}),(0,l.jsx)("figcaption",{children:e.author})]})},q=function(){var e=(0,c.$B)(),t=(0,c.UO)().quoteId,n=(0,a.Z)(o.Z.getSingleQuote,!0),m=n.sendRequest,d=n.status,i=n.data,u=n.error;return(0,s.useEffect)((function(){m(t)}),[m,t]),"pending"===d?(0,l.jsx)("div",{className:"centered",children:(0,l.jsx)(j.Z,{})}):u?(0,l.jsx)("p",{className:"centered focused",children:u}):i?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{text:i.text,author:i.author}),(0,l.jsx)(c.AW,{path:"".concat(e.path),exact:!0,children:(0,l.jsx)("div",{className:"centered",children:(0,l.jsx)(r.rU,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),(0,l.jsx)(c.AW,{path:"".concat(e.path,"/comments"),children:(0,l.jsx)(C,{})})]}):(0,l.jsx)("p",{children:"No Quote Found"})}}}]);
//# sourceMappingURL=682.ec18b91e.chunk.js.map