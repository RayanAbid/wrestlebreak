"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9],{85617:function(e,n,r){r.d(n,{J:function(){return t}});var t="https://app-12ed252b-e47b-4112-9f32-596fff918d76.cleverapps.io"},71601:function(e,n,r){r.d(n,{AL:function(){return u},Iy:function(){return l},eX:function(){return d},lh:function(){return i},oL:function(){return f}});var t=r(42982),a=r(74165),o=r(15861),s=r(85617),c=r(61044),i=function(e){return function(){var n=(0,o.Z)((0,a.Z)().mark((function n(r,t){var o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={method:"get",url:"".concat(s.J,"/news/get-all-news"),headers:{}},n.next=3,(0,c.ZP)(o).then((function(n){console.log(JSON.stringify(n.data)),n.data.success&&(r({type:"set",newsArr:n.data.news,exploreNewsArr:n.data.news,featuredNews:n.data.news.slice(9,17)}),null===e||void 0===e||e.setLoading())})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},u=function(e){return function(){var n=(0,o.Z)((0,a.Z)().mark((function n(r,t){var o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={method:"get",url:"".concat(s.J,"/news/get-all-news"),headers:{}},n.next=3,(0,c.ZP)(o).then((function(n){console.log(JSON.stringify(n.data)),n.data.success&&(r({type:"set",exploreNewsArr:n.data.news}),null===e||void 0===e||e.setLoading())})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},l=function(e){return function(){var n=(0,o.Z)((0,a.Z)().mark((function n(r,t){var o,i;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i={method:"get",url:"".concat(s.J,"/news/get-specific-source-news/").concat(null===e||void 0===e?void 0:e.source),headers:{Authorization:"Bearer ".concat(null===(o=t())||void 0===o?void 0:o.accessToken)}},(0,c.ZP)(i).then((function(n){console.log("source",n.data),n.data.success&&r({type:"set",exploreNewsArr:n.data.news}),null===e||void 0===e||e.setLoading()})).catch((function(n){console.log(n),null===e||void 0===e||e.setLoading()}));case 2:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},d=function(e){return function(){var n=(0,o.Z)((0,a.Z)().mark((function n(r,o){var i,u,l;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u=JSON.stringify({userId:null===(i=o().user)||void 0===i?void 0:i.id}),l={method:"post",url:"".concat(s.J,"/news/like-post/").concat(null===e||void 0===e?void 0:e.newsId),headers:{"Content-Type":"application/json"},data:u},(0,c.ZP)(l).then((function(n){var a;if(null!==n&&void 0!==n&&null!==(a=n.data)&&void 0!==a&&a.success)if(null!==e&&void 0!==e&&e.isFromHomeFeatured){var s,c=(0,t.Z)(o().newsArr.slice(6,12));c[null===e||void 0===e?void 0:e.index]=null===n||void 0===n||null===(s=n.data)||void 0===s?void 0:s.data,r({type:"set",featuredNews:c})}else{var i,u=(0,t.Z)(o().newsArr);u[null===e||void 0===e?void 0:e.index]=null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.data,r({type:"set",newsArr:u})}})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},f=function(e){return function(){var n=(0,o.Z)((0,a.Z)().mark((function n(r,o){var i,u,l;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u=JSON.stringify({userId:null===(i=o().user)||void 0===i?void 0:i.id}),l={method:"post",url:"".concat(s.J,"/news/dislike-post/").concat(null===e||void 0===e?void 0:e.newsId),headers:{"Content-Type":"application/json"},data:u},(0,c.ZP)(l).then((function(n){var a;if(null!==n&&void 0!==n&&null!==(a=n.data)&&void 0!==a&&a.success)if(null!==e&&void 0!==e&&e.isFromHomeFeatured){var s,c=(0,t.Z)(o().newsArr.slice(6,12));c[null===e||void 0===e?void 0:e.index]=null===n||void 0===n||null===(s=n.data)||void 0===s?void 0:s.data,r({type:"set",featuredNews:c})}else{var i,u=(0,t.Z)(o().newsArr);u[null===e||void 0===e?void 0:e.index]=null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.data,r({type:"set",newsArr:u})}})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}},76219:function(e,n,r){r.d(n,{oL:function(){return t.oL},eX:function(){return t.eX},x4:function(){return i},kS:function(){return l},z2:function(){return u}});var t=r(71601),a=r(74165),o=r(15861),s=r(85617),c=r(61044),i=function(e,n){return function(){var r=(0,o.Z)((0,a.Z)().mark((function r(t,o){var i,u;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=JSON.stringify({email:null===e||void 0===e?void 0:e.email,password:null===e||void 0===e?void 0:e.password}),u={method:"post",url:"".concat(s.J,"/user/login"),headers:{"Content-Type":"application/json"},data:i},(0,c.ZP)(u).then((function(e){var r,a,o,s,c;(console.log("resp",null===(r=e.data)||void 0===r?void 0:r.data),null!==(a=e.data)&&void 0!==a&&a.success)?(t({type:"set",accessToken:null===(o=e.data)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.accessToken,user:null===(c=e.data)||void 0===c?void 0:c.data}),n("/")):console.log("err")})).catch((function(e){console.log(e)}));case 3:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}()},u=function(e,n){return function(){var r=(0,o.Z)((0,a.Z)().mark((function r(t,o){var i,u;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=JSON.stringify({fullName:null===e||void 0===e?void 0:e.fullName,email:null===e||void 0===e?void 0:e.email,password:null===e||void 0===e?void 0:e.password}),u={method:"post",url:"".concat(s.J,"/user/register"),headers:{"Content-Type":"application/json"},data:i},(0,c.ZP)(u).then((function(e){var r,a,o,s,c;(console.log("resp",null===(r=e.data)||void 0===r?void 0:r.data),null!==(a=e.data)&&void 0!==a&&a.success)?(t({type:"set",accessToken:null===(o=e.data)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.accessToken,user:null===(c=e.data)||void 0===c?void 0:c.data}),n("/")):console.log("err")})).catch((function(e){console.log(e)}));case 3:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}()},l=function(e){return function(){var n=(0,o.Z)((0,a.Z)().mark((function n(r,t){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r({type:"set",accessToken:"",user:{}}),e("/login");case 2:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}},64009:function(e,n,r){r.r(n);var t=r(74165),a=r(15861),o=r(72791),s=r(78983),c=r(24846),i=r(62412),u=r(7600),l=r(63232),d=r(59434),f=r(76219),p=r(9085),v=r(57689),h=r(80184);n.default=function(){var e=(0,d.I0)(),n=((0,d.v9)((function(e){return e})),(0,o.useRef)()),r=(0,o.useRef)(),m=(0,o.useRef)(),w=(0,o.useRef)(),x=(0,v.s0)(),Z=function(){var o=(0,a.Z)((0,t.Z)().mark((function a(){return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.current){t.next=3;break}return p.Am.error("Please enter username!"),t.abrupt("return");case 3:if(r.current){t.next=6;break}return p.Am.error("Please enter email!"),t.abrupt("return");case 6:if(m.current){t.next=9;break}return p.Am.error("Please enter password!"),t.abrupt("return");case 9:if(w.current){t.next=12;break}return p.Am.error("Please confirm password!"),t.abrupt("return");case 12:if(m.current==w.current){t.next=15;break}return p.Am.error("Passwords don't match!"),t.abrupt("return");case 15:return t.next=17,e((0,f.z2)({fullName:n.current,email:r.current,password:m.current},x));case 17:case"end":return t.stop()}}),a)})));return function(){return o.apply(this,arguments)}}();return(0,h.jsx)("div",{className:"bg-black min-vh-100 d-flex flex-row align-items-center",children:(0,h.jsx)(s.KB,{children:(0,h.jsx)(s.rb,{className:"justify-content-center",children:(0,h.jsx)(s.b7,{md:9,lg:7,xl:6,children:(0,h.jsx)(s.xH,{className:"mx-4",children:(0,h.jsx)(s.sl,{className:"p-4",children:(0,h.jsxs)(s.lx,{children:[(0,h.jsx)("h1",{children:"Register"}),(0,h.jsx)("p",{className:"text-white",children:"Create your account"}),(0,h.jsxs)(s.YR,{className:"mb-3",children:[(0,h.jsx)(s.wV,{className:"bg-black",children:(0,h.jsx)(c.Z,{icon:i.E})}),(0,h.jsx)(s.jO,{onChange:function(e){n.current=e.target.value},placeholder:"Username",autoComplete:"username"})]}),(0,h.jsxs)(s.YR,{className:"mb-3",children:[(0,h.jsx)(s.wV,{className:"bg-black",children:(0,h.jsx)(c.Z,{color:"black",icon:u.W})}),(0,h.jsx)(s.jO,{onChange:function(e){r.current=e.target.value},placeholder:"Email",autoComplete:"email"})]}),(0,h.jsxs)(s.YR,{className:"mb-3",children:[(0,h.jsx)(s.wV,{className:"bg-black",children:(0,h.jsx)(c.Z,{icon:l.U})}),(0,h.jsx)(s.jO,{onChange:function(e){m.current=e.target.value},type:"password",placeholder:"Password",autoComplete:"new-password"})]}),(0,h.jsxs)(s.YR,{className:"mb-4",children:[(0,h.jsx)(s.wV,{className:"bg-black",children:(0,h.jsx)(c.Z,{icon:l.U})}),(0,h.jsx)(s.jO,{onChange:function(e){w.current=e.target.value},type:"password",placeholder:"Repeat password",autoComplete:"new-password"})]}),(0,h.jsx)("div",{className:"d-grid",children:(0,h.jsx)(s.u5,{style:{backgroundColor:"#ec6ead",border:0},onClick:function(e){e.preventDefault(),Z()},children:"Create Account"})})]})})})})})})})}},7600:function(e,n,r){r.d(n,{W:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M16,112V496H496V112ZM236.8,341.6a32.167,32.167,0,0,0,38.4,0L298.667,324,464,448v16H48V448L213.333,324ZM256,316,48,160V144H464v16ZM48,200,186.667,304,48,408ZM464,408,325.333,304,464,200Z' class='ci-primary'/>"]},63232:function(e,n,r){r.d(n,{U:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},62412:function(e,n,r){r.d(n,{E:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=9.997b32f1.chunk.js.map