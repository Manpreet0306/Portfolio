(this["webpackJsonpclassplus-web-react"]=this["webpackJsonpclassplus-web-react"]||[]).push([[133],{2620:function(e,t,a){},3449:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(79),c=a(2),i=a.n(c),o=a(140),u=(a(2620),a(155)),d=(a(95),a(1098)),r=a(263),s=Object(c.lazy)((function(){return a.e(150).then(a.bind(null,3378))})),b=Object(c.lazy)((function(){return a.e(132).then(a.bind(null,3379))})),v=Object(c.lazy)((function(){return a.e(149).then(a.bind(null,3380))})),f=Object(c.lazy)((function(){return a.e(137).then(a.bind(null,3438))}));t.default=Object(o.connect)((function(e){var t,a;return{userType:null===e||void 0===e||null===(t=e.persistedData)||void 0===t||null===(a=t.user)||void 0===a?void 0:a.type}}),{makeApiCall:u.b})((function(e){var t=e.makeApiCall,a=e.history,o=e.entityId,u=e.dateParam,O=e.userType,j=Object(c.useState)(0),m=Object(l.a)(j,2),p=m[0],S=m[1],h=Object(c.useState)(),y=Object(l.a)(h,2),E=y[0],g=y[1],C=Object(c.useState)(),I=Object(l.a)(C,2),A=I[0],k=I[1],w=Object(c.useState)(0),D=Object(l.a)(w,2),P=D[0],z=D[1],L=Object(c.useState)(0),M=Object(l.a)(L,2),T=M[0],N=M[1],J=Object(c.useState)(!0),V=Object(l.a)(J,2),_=V[0],F=V[1],H=Object(c.useState)(),K=Object(l.a)(H,2),q=K[0],x=K[1],B=Object(c.useState)(!1),G=Object(l.a)(B,2),Q=G[0],R=G[1],U=function(){R(!Q)},W=function(){var e=Object(r.l)("liveAttendanceSessions",null,{entityId:o,limit:20,offset:T,filterId:p,dateParam:u,search:q}),a=e.url,l=e.method;t(a,l,void 0,(function(e){var t,a,l,c;(e.data=Object(r.p)(e.data),0===T)?(g(null===e||void 0===e?void 0:e.data),k(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.tabData),z(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.count)):k([].concat(Object(n.a)(A),Object(n.a)(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.tabData)));F(T+20<(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.count)),N(T+20)}),(function(e){console.log(e,"SESSIONLIST")}),!0)};Object(c.useEffect)((function(){N(0),k()}),[q,u,p]),Object(c.useEffect)((function(){0===T&&u&&W()}),[q,T,u,p]);var X={hasMore:_,getSessionsData:W,totalCount:P,offset:T};return i.a.createElement("div",{className:"LiveAttendance"},i.a.createElement(c.Suspense,{fallback:i.a.createElement("div",null,i.a.createElement(d.a,{i18nKey:"components.ContentStore.CourseHome.Attendance.MainPanel.loading"},"Loading..."))},3===O?i.a.createElement("div",{className:"LiveAttendance__panel"},i.a.createElement(s,{data:null===E||void 0===E?void 0:E.attendanceCriteria,updateCriteria:function(e){t("/v3/live/attendance/criteria/set","POST",{percentage:e},(function(e){U(),N(0)}),(function(e){console.log(e)}),!0)},showCriteriaModal:Q,toggleModal:U}),i.a.createElement(b,{data:null===E||void 0===E?void 0:E.count,searchValue:q,setSearchValue:x,setFilterId:S,filterId:p}),i.a.createElement(v,{data:A,infiniteParams:X,history:a,entityId:o})):i.a.createElement(f,{data:null===E||void 0===E?void 0:E.tabData})))}))}}]);