(this.webpackJsonpClient=this.webpackJsonpClient||[]).push([[0],{103:function(e,t,c){},105:function(e,t,c){},111:function(e,t,c){},116:function(e,t,c){},120:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(42),r=c.n(a),i=(c(103),c(104),c(14)),l=c(19),j=(c(105),c(22)),o=c(21),d=c(126),b=c(127),h=c(89),x=c.p+"static/media/footer-logo.942f1d2f.png",u=c.p+"static/media/payment.18588cb5.png",m=(c(111),c(0)),O=function(){return Object(m.jsxs)("div",{className:"text-black fw-bold",children:[Object(m.jsx)("div",{className:"py-4 gradient",children:Object(m.jsx)(d.a,{children:Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(h.a,{md:6,children:[Object(m.jsx)("div",{className:" my-2",children:Object(m.jsx)("img",{width:"180px",src:x,alt:""})}),Object(m.jsxs)("ul",{className:"list-unstyled",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)(o.a,{icon:j.e}),Object(m.jsx)("span",{className:"ms-1 fs-5",children:" Demra,Dhaka,Bangladesh"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(o.a,{icon:j.d}),Object(m.jsx)("span",{className:"ms-1 fs-5",children:"Official: aharbd@ahar.com"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(o.a,{icon:j.f}),Object(m.jsx)("span",{className:"ms-1 fs-5",children:"HotLine: 01704404410(Available:10:00AM to 10.00PM)"})]})]})]}),Object(m.jsx)(h.a,{md:2,children:Object(m.jsxs)("ul",{className:"list-unstyled footer-link text-black",children:[Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:"/home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:"/about",children:"About us"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:"/contact",children:"Contact us"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:"/services",children:"Services"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:"/policy",children:"Policy"})})]})}),Object(m.jsx)(h.a,{md:4,children:Object(m.jsx)("div",{className:"",children:Object(m.jsx)("img",{className:"img-fluid",src:u,alt:"payment methods"})})})]})})}),Object(m.jsx)("hr",{className:"m-0 p-0"}),Object(m.jsx)("p",{className:"text-center m-0 py-3 copyright",children:"Copyright \xa9 All Reserved by AhaarBD"})]})},p=c(131),f=c(133),g=c(130),y=c(87),v=c(29),N=c(12),w=c(40),A=c(92),C={apiKey:"AIzaSyBVSQwSSLU5RGj7s-YGSLy__KML78jIZHQ",authDomain:"fooddelivery-edf73.firebaseapp.com",projectId:"fooddelivery-edf73",storageBucket:"fooddelivery-edf73.appspot.com",messagingSenderId:"832775461427",appId:"1:832775461427:web:38fc6f28aba16649c46146"};(function(){Object(A.a)(C)})();var k=new w.a,E=Object(w.c)(),S=function(){var e=Object(s.useState)({}),t=Object(N.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(N.a)(a,2),i=r[0],l=r[1],j=Object(s.useState)(""),o=Object(N.a)(j,2),d=o[0],b=o[1],h=Object(s.useState)(""),x=Object(N.a)(h,2),u=x[0],m=x[1],O=Object(s.useState)(""),p=Object(N.a)(O,2),f=p[0],g=p[1],y=Object(s.useState)(""),v=Object(N.a)(y,2),A=v[0],C=v[1],S=Object(s.useState)(!0),P=Object(N.a)(S,2),B=P[0],D=P[1];return Object(s.useEffect)((function(){setTimeout((function(){l("")}),5e3)}),[i]),Object(s.useEffect)((function(){var e=Object(w.d)(E,(function(e){n(e||{}),D(!1)}));return function(){return e}}),[]),{signInWithEmail:function(e){return e.preventDefault(),Object(w.g)(E,d,A)},logOut:function(){Object(w.i)(E).then((function(e){n({})})).catch((function(e){l(e.message)}))},signInWithGoogle:function(){return Object(w.h)(E,k)},user:c,setUser:n,error:i,setError:l,getPassword:function(e){var t;C(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},getEmail:function(e){var t;b(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},singUp:function(e){e.preventDefault(),Object(w.b)(E,d,A).then((function(e){Object(w.j)(E.currentUser,{displayName:u,photoURL:f}).then((function(){})).catch((function(e){l(e.message)})),Object(w.e)(E.currentUser).then((function(){alert("An Verification mail has been set to ".concat(d))})),alert("user has been created")})).catch((function(e){l(e.message)}))},getPhoto:function(e){var t;g(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},getName:function(e){var t;m(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},passwordReset:function(e){e.preventDefault(),Object(w.f)(E,d).then((function(){alert("password reset email has been sent")})).catch((function(e){l(e.message)}))},loading:B}},P=function(){var e=S().user.uid,t=Object(s.useState)([]),c=Object(N.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("https://powerful-shore-86352.herokuapp.com/cart/".concat(e)).then((function(e){return e.json()})).then((function(e){e.length&&a(e)}))}),[e]),{setSelectedCourse:a,remove:function(e){fetch("https://powerful-shore-86352.herokuapp.com/delete/".concat(e),{method:"delete"}).then((function(e){return e.json()})).then((function(t){if(1===t.deletedCount){var c=n.filter((function(t){return t._id!==e}));a(c)}else alert("something went wrong!!")}))},addToCart:function(t){var c=n.find((function(e){return e._id===t._id}));delete t._id,t.uid=e,t.status="pending",c?alert("course has been selected!"):fetch("https://powerful-shore-86352.herokuapp.com/course/add",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){if(e.insertedId){var c=[].concat(Object(v.a)(n),[t]);a(c)}}))},selectedCourse:n}},B=function(){var e=Object(s.useState)([]),t=Object(N.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(0),r=Object(N.a)(a,2),i=r[0],l=r[1],j=Object(s.useState)(0),o=Object(N.a)(j,2),d=o[0],b=o[1];return Object(s.useEffect)((function(){fetch("https://powerful-shore-86352.herokuapp.com/services?size=".concat(9,"&&page=").concat(d)).then((function(e){return e.json()})).then((function(e){n(e.courses);var t=e.count,c=Math.ceil(t/9);l(c)}))}),[d]),{courses:c,setCourses:n,totalPage:i,currentPage:d,setCurrentPage:b}},D=Object(s.createContext)(),G=function(e){var t=e.children,c=S(),s=B(),n=s.courses,a=s.totalPage,r=s.currentPage,i=s.setCurrentPage,l=P(),j={currentPage:r,setCurrentPage:i,AllContexts:c,totalPage:a,courses:n,addToCart:l.addToCart,selectedCourse:l.selectedCourse,remove:l.remove,setSelectedCourse:l.setSelectedCourse};return Object(m.jsx)(D.Provider,{value:j,children:t})},R=function(){return Object(s.useContext)(D)},T=c.p+"static/media/header-bg.ba8b7beb.jpg",Y=c.p+"static/media/logo.942f1d2f.png",H=(c(116),function(){var e=R().AllContexts,t=e.user,c=e.logOut,s=t.displayName,n=t.photoURL,a=t.email;return Object(m.jsx)("div",{className:"mb-4",children:Object(m.jsx)(p.a,{fixed:"top",style:{background:"url(".concat(T,")")},expand:"lg",children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(p.a.Brand,{as:i.c,className:"text-black",to:"/home",children:Object(m.jsx)("img",{width:"150px",src:Y,alt:"Logo"})}),Object(m.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(p.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(f.a,{className:"ms-auto align-items-center text-black fw-bold",children:[Object(m.jsx)(f.a.Link,{as:i.c,to:"/home",children:"Home"}),Object(m.jsx)(f.a.Link,{as:i.c,to:"/services",children:"Services"}),Object(m.jsx)(f.a.Link,{as:y.a,to:"/home#feature",children:"More Services"}),Object(m.jsx)(f.a.Link,{as:i.c,to:"/about",children:"About"}),Object(m.jsx)(f.a.Link,{as:i.c,to:"/contact",children:"Contact"}),s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a.Link,{as:y.a,to:"/dashboard",children:"Dashboard"}),Object(m.jsx)(g.a,{title:Object(m.jsx)("img",{style:{width:"45px",borderRadius:"50%"},src:n,alt:""}),children:Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("h6",{children:s}),Object(m.jsx)("p",{className:"m-0 mb-2",children:a}),Object(m.jsx)("button",{onClick:c,className:"btn btn-danger",children:"Sign Out"})]})})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a.Link,{as:i.c,to:"/signup",children:"Sign Up"}),Object(m.jsx)(f.a.Link,{as:i.c,to:"/login",children:"Log in"})]})]})})]})})})}),I=c(132),L=c(38),U=c.n(L),M=c(80),z=c.n(M),F=c.p+"static/media/sectionBg.13152534.png",J=function(){return Object(m.jsx)("div",{style:{background:"url(".concat(F,")"),backgroundAttachment:"fixed"},className:"py-5",children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(z.a,{children:Object(m.jsx)("h2",{className:"text-center text-white mb-4",children:"WELCOME TO AHAR FOOD DELIVERY"})}),Object(m.jsxs)(b.a,{children:[Object(m.jsx)(h.a,{md:!0,className:"pe-3",children:Object(m.jsxs)(U.a,{bottom:!0,children:[Object(m.jsx)("h5",{className:"text-white",children:"Why Choose Us"}),Object(m.jsx)("p",{className:"text-muted",children:"food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion. Plants, which convert solar energy to food by photosynthesis, are the primary food source. Animals that feed on plants often serve as sources of food for other animals. To learn more about the sequence of transfers of matter and energy in the form of food from organism to organism, see food chain."})]})}),Object(m.jsx)(h.a,{md:!0,className:"pe-3",children:Object(m.jsxs)(U.a,{bottom:!0,children:[Object(m.jsx)("h5",{className:"text-white",children:"Our Vision"}),Object(m.jsxs)("p",{className:"text-muted",children:[Object(m.jsx)("span",{className:"text-danger fw-bold",children:"Within one hour delivery service"})," ",Object(m.jsx)("br",{}),"Food is any substance consumed to provide nutritional support for an organism."]}),Object(m.jsx)("h5",{className:"text-white",children:"Our Mission"}),Object(m.jsxs)("p",{className:"text-muted",children:[Object(m.jsx)("span",{className:"text-danger fw-bold",children:"Within one hour delivery service"}),"Food is any substance consumed to provide nutritional support for an organism.Food is any substance consumed to provide nutritional support for an organism.Food is any substance consumed to provide nutritional support for an organism.Food is any substance consumed to provide nutritional support for an organism."]})]})})]}),Object(m.jsxs)(b.a,{className:"mt-4",children:[Object(m.jsx)(h.a,{md:!0,children:Object(m.jsxs)(U.a,{bottom:!0,children:[Object(m.jsx)("h5",{className:"text-white",children:"Sign up for our monthly newsletter"}),Object(m.jsx)("p",{className:"text-muted",children:"Be the first to know about news and updates.We never share you mail with others. Trust us!"})]})}),Object(m.jsx)(h.a,{md:!0,className:"d-flex align-items-center",children:Object(m.jsx)(U.a,{bottom:!0,children:Object(m.jsxs)(I.a,{className:"w-100",children:[Object(m.jsx)(I.a.Label,{className:"text-white",children:"Leave your mail below"}),Object(m.jsxs)(I.a.Group,{className:"d-flex text-white",controlId:"formBasicEmail",children:[Object(m.jsx)(I.a.Control,{style:{background:"transparent",color:"white"},className:"py-2 rounded-0",type:"email",placeholder:"Enter email"}),Object(m.jsx)("button",{style:{width:"120px"},className:"btn rounded-0 btn-danger",children:"SIGN UP"})]})]})})})]})]})})},X=c(95),K=c(43),W=c.n(K),V={background:"transparent",color:"white"};function Z(){return Object(m.jsxs)("div",{style:{padding:"58px 0 40px"},children:[Object(m.jsx)(U.a,{right:!0,children:Object(m.jsx)("h2",{className:"text-center text-white",children:"Contact Us"})}),Object(m.jsx)(U.a,{left:!0,children:Object(m.jsx)("p",{className:"text-center text-muted mb-4",children:"You can easily reach us through filling up the form"})}),Object(m.jsx)("div",{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(W.a,{bottom:!0,children:Object(m.jsxs)(I.a,{children:[Object(m.jsxs)(b.a,{children:[Object(m.jsx)(h.a,{sm:!0,children:Object(m.jsxs)(I.a.Group,{className:"mb-3 text-white",controlId:"formBasicText",children:[Object(m.jsx)(I.a.Label,{children:"Your Name "}),Object(m.jsx)(I.a.Control,{style:V,type:"text",placeholder:"Enter Your Name"})]})}),Object(m.jsx)(h.a,{sm:!0,children:Object(m.jsxs)(I.a.Group,{className:"mb-3 text-white",controlId:"formBasicEmail",children:[Object(m.jsx)(I.a.Label,{children:"Your Email "}),Object(m.jsx)(I.a.Control,{style:V,type:"email",placeholder:"Enter Your Email"})]})})]}),Object(m.jsx)(I.a.Control,{style:V,className:"my-3",type:"text",placeholder:"Write Your Subject..."}),Object(m.jsxs)(I.a.Group,{className:"mb-3 text-white",controlId:"exampleForm.ControlTextarea1",children:[Object(m.jsx)(I.a.Label,{children:"Your Messages"}),Object(m.jsx)(I.a.Control,{style:V,placeholder:"Write you message...",as:"textarea",rows:3})]}),Object(m.jsx)(X.a,{className:"mb-5 px-4",variant:"danger",type:"submit",children:"Submit"})]})})})})]})}var Q=function(){return Object(m.jsx)("div",{style:{background:"url(".concat(F,")"),backgroundAttachment:"fixed"},children:Object(m.jsx)(Z,{})})},q=c(61),_=c(134),$=c(60),ee=function(e){var t=e.course,c=Object(l.g)(),s=t._id,n=t.img,a=t.title,r=t.desc,d=t.price,x=t.rating,u=t.ratingCount,O=R(),p=O.addToCart,f=O.AllContexts.user.uid;return Object(m.jsx)(h.a,{sm:12,md:6,lg:4,children:Object(m.jsx)(z.a,{children:Object(m.jsx)("div",{className:"m-2",children:Object(m.jsxs)(_.a,{className:"mx-auto",style:{width:"21rem"},children:[Object(m.jsx)(_.a.Img,{variant:"top",style:{minHeight:"220px"},src:n}),Object(m.jsxs)(_.a.Body,{className:"my-1 py-1",children:[Object(m.jsx)(_.a.Title,{children:a.slice(0,25)}),Object(m.jsx)(_.a.Text,{children:r.slice(0,50)})]}),Object(m.jsx)(_.a.Body,{className:"my-1 py-1",children:Object(m.jsxs)("h4",{children:["Price: ",d,"$"]})}),Object(m.jsx)(_.a.Body,{className:"my-1 py-1",children:Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(h.a,{children:[Object(m.jsx)($.a,{initialRating:x,readonly:!0,emptySymbol:Object(m.jsx)(o.a,{className:"text-warning",icon:q.a}),fullSymbol:Object(m.jsx)(o.a,{className:"text-warning",icon:j.g})}),Object(m.jsx)("span",{children:x})]}),Object(m.jsxs)(h.a,{children:["Total review ",u]})]})}),Object(m.jsxs)(_.a.Body,{className:"d-flex",children:[Object(m.jsx)(i.c,{to:"/courses/".concat(s),className:"btn btn-danger w-100 me-1",children:"View Details"}),Object(m.jsx)("button",{onClick:function(){f?p(t):c.push("/login")},className:"btn btn-danger  w-100",children:"Add to Cart"})]})]})})})})},te=function(){var e=R(),t=e.courses,c=e.totalPage,s=e.currentPage,n=e.setCurrentPage;return Object(m.jsxs)("div",{className:"py-5",style:{background:"url(".concat(F,")")},children:[Object(m.jsxs)("div",{className:"text-center text-white",children:[Object(m.jsx)(W.a,{left:!0,children:Object(m.jsxs)("h1",{children:[" ","We are offering you within"," ",Object(m.jsx)("span",{className:"text-danger",children:"One Hour"})," delivery ",Object(m.jsx)("br",{})," any kind of foods"," "]})}),Object(m.jsx)(W.a,{right:!0,children:Object(m.jsx)("p",{className:"mb-0",children:"Here you can find our all latest foods. Choose some of them and try to eat your lunch or dinner."})})]}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)("div",{className:"my-3 d-flex flex-wrap justify-content-between ",children:Object(m.jsx)(b.a,{children:t.map((function(e){return Object(m.jsx)(ee,{course:e},e._id)}))})}),Object(m.jsx)("div",{className:"d-flex justify-content-center",children:Object(v.a)(Array(c).keys()).map((function(e){return Object(m.jsx)("button",{onClick:function(){return function(e){n(e)}(e)},className:e===s?"btn btn-danger rounded-4 border":"btn  text-white rounded-0 ",children:e+1},e)}))})]})]})},ce=function(){var e=R(),t=e.selectedCourse,c=e.remove,s=e.setSelectedCourse,n=(e.AllContexts.user,P().uid),a=Object(l.g)(),r=t.reduce((function(e,t){return e+t.price}),0);return Object(m.jsx)("div",{className:"my-4",children:Object(m.jsx)(d.a,{children:t.length?Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(h.a,{className:"text-center",md:4,children:[Object(m.jsxs)("h4",{children:["Total ",t.length," course selected"]}),Object(m.jsxs)("h6",{children:["Total Price: ",r.toFixed(2)," $"]}),Object(m.jsx)("button",{onClick:function(){fetch("https://powerful-shore-86352.herokuapp.com/purchase/".concat(n),{method:"delete"}).then((function(e){return e.json()})).then((function(e){e.deletedCount>0&&(alert("This for purchasing"),s([]),a.push("/home"))}))},className:"btn btn-primary",children:"Check Out"})]}),Object(m.jsx)(h.a,{className:"",md:8,children:t.map((function(e){var t=e.img,s=e._id,n=e.title,a=e.desc,r=e.rating,l=e.ratingCount,d=e.price;return Object(m.jsxs)(b.a,{className:"my-2 bg-info",children:[Object(m.jsx)(h.a,{sm:5,children:Object(m.jsx)("img",{className:"img-fluid",src:t,alt:""})}),Object(m.jsxs)(h.a,{sm:7,children:[Object(m.jsx)("h5",{children:n}),Object(m.jsx)("p",{className:"mb-0",children:a}),Object(m.jsxs)("h4",{children:["Price: ",d]}),Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(h.a,{sm:4,children:[Object(m.jsxs)(h.a,{children:[Object(m.jsx)($.a,{initialRating:r,readonly:!0,emptySymbol:Object(m.jsx)(o.a,{className:"text-warning",icon:q.a}),fullSymbol:Object(m.jsx)(o.a,{className:"text-warning",icon:j.g})}),Object(m.jsx)("span",{children:r})]}),Object(m.jsxs)(h.a,{children:["Total review ",l]})]}),Object(m.jsx)(h.a,{sm:8,children:Object(m.jsxs)("div",{className:"d-flex",children:[Object(m.jsx)(i.c,{to:"/courses/".concat(s),className:"btn btn-primary w-100 me-1",children:"View Details"}),Object(m.jsx)("button",{onClick:function(){return c(s)},className:"btn btn-primary  w-100",children:"Remove"})]})})]})]})]},s)}))})]}):Object(m.jsx)("div",{className:"text-center my-5 py-5",children:Object(m.jsx)("h1",{children:"No Course Selected!"})})})})},se=function(){var e=R().AllContexts.user,t=e.displayName,c=e.photoURL,s=e.email;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"text-center",children:"Profile"}),Object(m.jsx)(d.a,{className:"my-2",children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(h.a,{md:4,children:Object(m.jsxs)("div",{className:"align-items-center d-flex flex-column",children:[Object(m.jsx)("img",{width:"220px",className:"rounded-circle",src:c,alt:""}),Object(m.jsx)("button",{className:"btn mt-3 btn-primary",children:"Edit Profile"})]})}),Object(m.jsxs)(h.a,{md:8,children:[Object(m.jsx)("h6",{children:"Full name"}),Object(m.jsx)("h4",{children:t}),Object(m.jsx)("h6",{children:"Email Address"}),Object(m.jsx)("h4",{children:s})]})]})})]})},ne=function(){var e=Object(s.useState)("Profile"),t=Object(N.a)(e,2),c=t[0],n=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"d-flex my-2 justify-content-center",children:[Object(m.jsx)("input",{onClick:function(e){n(e.target.value)},type:"button",value:"Profile"}),Object(m.jsx)("input",{onClick:function(e){n(e.target.value)},type:"button",value:"Cart"})]}),"Profile"===c&&Object(m.jsx)(se,{})||"Cart"===c&&Object(m.jsx)(ce,{})]})},ae=function(){var e=Object(l.g)(),t=Object(s.useState)({}),c=Object(N.a)(t,2),n=c[0],a=c[1],r=Object(l.i)().id,i=R(),x=i.addToCart,u=i.AllContexts.user.uid;return Object(s.useEffect)((function(){fetch("https://powerful-shore-86352.herokuapp.com/services/".concat(r)).then((function(e){return e.json()})).then((function(e){(null===e||void 0===e?void 0:e._id)?a(e):alert("something went wrong!")}))}),[r]),Object(m.jsx)("div",{className:"my-4",children:(null===n||void 0===n?void 0:n.title)?Object(m.jsx)(d.a,{children:Object(m.jsxs)(b.a,{className:"d-flex justify-content-center",children:[Object(m.jsx)(h.a,{md:6,children:Object(m.jsx)("img",{className:"img-fluid",src:n.img,alt:""})}),Object(m.jsxs)(h.a,{md:6,className:"d-flex justify-content-center flex-column",children:[Object(m.jsx)("h2",{children:n.title}),Object(m.jsx)("h5",{children:n.desc}),Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(h.a,{children:[Object(m.jsxs)("h1",{children:["Price:",n.price,"$"]}),Object(m.jsxs)("div",{className:"my-2",children:[Object(m.jsx)($.a,{initialRating:n.rating,readonly:!0,emptySymbol:Object(m.jsx)(o.a,{className:"text-warning",icon:q.a}),fullSymbol:Object(m.jsx)(o.a,{className:"text-warning",icon:j.g})}),Object(m.jsxs)("span",{children:[" ",n.rating]}),Object(m.jsxs)("p",{className:"mb-3",children:["Total Review: ",n.ratingCount]}),Object(m.jsx)("button",{onClick:function(){u?x(n):e.push("/login")},className:"btn btn-primary  w-100",children:"Add to Cart"})]})]}),Object(m.jsx)(h.a,{children:Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("img",{width:"120px",className:"rounded-circle",src:n.sellerThumb,alt:""}),Object(m.jsxs)("h5",{children:["Seller: ",n.provider]}),Object(m.jsx)("p",{className:"mb-0",children:"Web Apps Developer"})]})})]})]})]})}):Object(m.jsx)("div",{className:"my-5 py-1",children:Object(m.jsx)("h1",{className:"my-5 p-5 text-center",children:"NO Course Found"})})})},re=c.p+"static/media/bg.498fb9c2.png",ie=function(){var e,t=R().courses;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{style:{background:"url(".concat(re,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",width:"100%"},children:Object(m.jsx)(d.a,{children:Object(m.jsx)("div",{style:{height:"90vh"},className:"d-flex justify-content-center align-items-center",children:Object(m.jsxs)("div",{className:"text-center my-5 py-5",children:[Object(m.jsx)(U.a,{left:!0,cascade:!0,children:Object(m.jsx)(W.a,{left:!0,children:Object(m.jsxs)("h1",{className:"text-white ",children:['"AAHAR" ',Object(m.jsx)("br",{})," FOOD DELIVERY & SERVICE"]})})}),Object(m.jsx)(U.a,{right:!0,cascade:!0,children:Object(m.jsxs)(W.a,{right:!0,children:[" ",Object(m.jsxs)("p",{className:"my-4 text-white fs-5",children:["Food is any substance consumed to provide nutritional support for an organism. ",Object(m.jsx)("br",{})," Food is usually of plant, animal or fungal origin"]})]})}),Object(m.jsx)(U.a,{children:Object(m.jsx)(i.c,{to:"/services",className:"rounded-pill btn btn-danger fs-5 py-2 px-4",children:"View Our Foods"})})]})})})}),Object(m.jsxs)("div",{id:"feature",className:"py-5",style:{background:"url(".concat(F,")")},children:[Object(m.jsx)("div",{children:Object(m.jsx)(te,{})}),Object(m.jsxs)("div",{className:"text-center text-white",children:[Object(m.jsx)(W.a,{left:!0,children:Object(m.jsxs)("h1",{children:["More Foods Items Deliver with"," ",Object(m.jsx)("span",{className:"text-danger",children:"One Hour"})]})}),Object(m.jsx)(W.a,{right:!0,children:Object(m.jsx)("p",{className:"mb-0",children:"Here you can find our all latest Foods Items. Choose your items.."})})]}),Object(m.jsx)(d.a,{children:Object(m.jsx)("div",{className:"my-3 d-flex flex-wrap justify-content-between",children:Object(m.jsx)(b.a,{children:null===(e=t.slice(0,9))||void 0===e?void 0:e.map((function(e){return Object(m.jsx)(ee,{id:e.id,course:e})}))})})})]})]})},le=c(128),je=c(96),oe=function(){var e,t=R().AllContexts,c=Object(l.g)(),s=(null===(e=Object(l.h)().state)||void 0===e?void 0:e.from)||"/home",n=t.getEmail,a=t.getPassword,r=t.signInWithEmail,d=t.error,x=t.setUser,u=t.setError,O=t.signInWithGoogle;return Object(m.jsxs)("div",{className:"text-center my-4",children:[Object(m.jsx)("h2",{children:"Please Login"}),Object(m.jsx)("p",{className:" mt-2",children:"Login with Email & Password"}),Object(m.jsx)("p",{className:"text-danger text-center",children:d}),Object(m.jsx)("div",{style:{maxWidth:"500px"},className:"w-100 px-3 mx-auto",children:Object(m.jsxs)(I.a,{onSubmit:function(){r().then((function(e){x(e.user),c.push(s)})).catch((function(e){u(e.message)}))},children:[Object(m.jsx)(b.a,{children:Object(m.jsxs)(h.a,{className:"text-start",children:[Object(m.jsx)(I.a.Label,{htmlFor:"email",visuallyHidden:!0,children:"Your Email Address"}),Object(m.jsxs)(le.a,{className:"mb-2",children:[Object(m.jsx)(le.a.Text,{children:Object(m.jsx)(o.a,{icon:j.a})}),Object(m.jsx)(je.a,{onBlur:n,type:"email",autoComplete:"current-email",id:"email",placeholder:"Enter your email address"})]})]})}),Object(m.jsx)(b.a,{className:"mt-2",children:Object(m.jsxs)(h.a,{className:"text-start",children:[Object(m.jsx)(I.a.Label,{htmlFor:"password",visuallyHidden:!0,children:"Your Password"}),Object(m.jsxs)(le.a,{className:"mb-2",children:[Object(m.jsx)(le.a.Text,{children:Object(m.jsx)(o.a,{icon:j.c})}),Object(m.jsx)(je.a,{onBlur:a,type:"password",autoComplete:"current-password",id:"password",placeholder:"Enter your password"})]})]})}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 w-100",children:"Login"})]})}),Object(m.jsxs)("p",{className:"mt-2",children:[Object(m.jsx)(i.c,{className:"text-decoration-none",to:"/signup",children:"Need an Account? Please Sign up!"}),Object(m.jsx)("br",{}),Object(m.jsx)(i.c,{className:"text-decoration-none",to:"/reset",children:"Forget password? Reset!"})]}),Object(m.jsx)("p",{className:"mt-3",children:"Or"}),Object(m.jsx)("p",{children:" Login with"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){O().then((function(e){x(e.user),c.push(s)})).catch((function(e){u(e.message)}))},className:"btn",children:Object(m.jsx)("img",{src:"data:image/png;base64,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",width:"46px",alt:"google-icon"})})})]})},de=function(){return Object(m.jsx)("div",{style:{height:"91vh",background:"url(".concat(F,")"),backgroundAttachment:"fixed"},className:"d-flex justify-content-center align-items-center",children:Object(m.jsxs)("div",{className:"text-center my-5",children:[Object(m.jsx)("h1",{style:{fontSize:"100px",color:"red"},children:"404"}),Object(m.jsx)("h4",{className:"text-white",children:"OPPS! PAGE NOT FOUND"}),Object(m.jsx)("p",{className:"text-muted",children:"Sorry, the page you're looking for doesn't exist. you can return to home and look for another."}),Object(m.jsx)(i.c,{to:"/home",children:Object(m.jsx)("button",{className:"btn btn-primary",children:"Return to Home"})})]})})},be=function(){var e=R().AllContexts,t=e.getEmail,c=e.passwordReset,s=e.error;return Object(m.jsx)("div",{className:"text-center w-25 mx-auto my-5",children:Object(m.jsxs)(I.a,{onSubmit:c,children:[Object(m.jsxs)(I.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(m.jsx)(I.a.Label,{children:"Your Email address"}),Object(m.jsx)("p",{className:"text-danger",children:s}),Object(m.jsx)(I.a.Control,{onBlur:t,type:"email",placeholder:"Enter your email"})]}),Object(m.jsx)(X.a,{variant:"primary",type:"submit",children:"send"})]})})},he=function(){var e=R().AllContexts,t=e.getPhoto,c=e.getName,s=e.singUp,n=e.getEmail,a=e.getPassword,r=e.error;return Object(m.jsxs)("div",{className:"text-center my-4",children:[Object(m.jsx)("h2",{children:"Please Sign Up"}),Object(m.jsx)("p",{className:" mt-2",children:"Sign Up with Email & Password"}),Object(m.jsx)("p",{className:"text-danger text-center",children:r}),Object(m.jsx)("div",{style:{maxWidth:"500px"},className:"w-100 px-3 mx-auto",children:Object(m.jsxs)(I.a,{onSubmit:s,children:[Object(m.jsx)(b.a,{children:Object(m.jsxs)(h.a,{className:"text-start",children:[Object(m.jsx)(I.a.Label,{htmlFor:"name",visuallyHidden:!0,children:"Your Name"}),Object(m.jsxs)(le.a,{className:"mb-2",children:[Object(m.jsx)(le.a.Text,{children:Object(m.jsx)(o.a,{icon:j.h})}),Object(m.jsx)(je.a,{required:!0,onBlur:c,type:"text",autoComplete:"current-name",id:"name",placeholder:"Enter your name"})]})]})}),Object(m.jsx)(b.a,{children:Object(m.jsxs)(h.a,{className:"text-start",children:[Object(m.jsx)(I.a.Label,{htmlFor:"email",visuallyHidden:!0,children:"Your Email Address"}),Object(m.jsxs)(le.a,{className:"mb-2",children:[Object(m.jsx)(le.a.Text,{children:Object(m.jsx)(o.a,{icon:j.a})}),Object(m.jsx)(je.a,{required:!0,onBlur:n,type:"email",autoComplete:"current-email",id:"email",placeholder:"Enter your email address"})]})]})}),Object(m.jsx)(b.a,{className:"mt-2",children:Object(m.jsxs)(h.a,{className:"text-start",children:[Object(m.jsx)(I.a.Label,{htmlFor:"password",visuallyHidden:!0,children:"Your Password"}),Object(m.jsxs)(le.a,{className:"mb-2",children:[Object(m.jsx)(le.a.Text,{children:Object(m.jsx)(o.a,{icon:j.c})}),Object(m.jsx)(je.a,{required:!0,onBlur:a,type:"password",autoComplete:"current-password",id:"password",placeholder:"Enter your password"})]})]})}),Object(m.jsx)(b.a,{children:Object(m.jsxs)(h.a,{className:"text-start",children:[Object(m.jsx)(I.a.Label,{htmlFor:"name",visuallyHidden:!0,children:"Your Profile photo URL"}),Object(m.jsxs)(le.a,{className:"mb-2",children:[Object(m.jsx)(le.a.Text,{children:Object(m.jsx)(o.a,{icon:j.b})}),Object(m.jsx)(je.a,{required:!0,onBlur:t,type:"text",autoComplete:"current-text",id:"photo",placeholder:"Enter valid photo url"})]})]})}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 w-100",children:"Sign up"})]})}),Object(m.jsx)("p",{className:"mt-2",children:Object(m.jsx)(i.c,{className:"text-decoration-none",to:"/login",children:"Already have an account? Please login!"})})]})},xe=c(5),ue=c(7),me=c(129),Oe=["children"];var pe=function(e){var t=e.children,c=Object(ue.a)(e,Oe),s=R().AllContexts,n=s.user;return s.loading?Object(m.jsx)("div",{className:"text-center my-5 py-5",children:Object(m.jsx)(me.a,{animation:"border",role:"status",children:Object(m.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(m.jsx)(l.b,Object(xe.a)(Object(xe.a)({},c),{},{render:function(e){var c=e.location;return n.displayName?t:Object(m.jsx)(l.a,{to:{pathname:"/login",state:{from:c}}})}}))};var fe=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(G,{children:Object(m.jsx)(i.a,{children:Object(m.jsxs)(l.d,{children:[Object(m.jsxs)(l.b,{exact:!0,path:"/",children:[Object(m.jsx)(H,{children:" "}),Object(m.jsx)(ie,{}),Object(m.jsx)(O,{})]}),Object(m.jsxs)(l.b,{path:"/home",children:[Object(m.jsx)(H,{children:" "}),Object(m.jsx)(ie,{}),Object(m.jsx)(O,{})]}),Object(m.jsxs)(l.b,{path:"/about",children:[Object(m.jsx)(H,{children:" "}),Object(m.jsx)(J,{}),Object(m.jsx)(O,{})]}),Object(m.jsxs)(l.b,{path:"/contact",children:[Object(m.jsx)(H,{children:" "}),Object(m.jsx)(Q,{}),Object(m.jsx)(O,{})]}),Object(m.jsxs)(l.b,{exact:!0,path:"/services",children:[Object(m.jsx)(H,{children:" "}),Object(m.jsx)(te,{}),Object(m.jsx)(O,{})]}),Object(m.jsxs)(pe,{path:"/dashboard",children:[Object(m.jsx)(H,{children:" "}),Object(m.jsx)(ne,{}),Object(m.jsx)(O,{})]}),Object(m.jsxs)(l.b,{path:"/login",children:[Object(m.jsx)(H,{children:" "}),Object(m.jsx)(oe,{}),Object(m.jsx)(O,{})]}),Object(m.jsxs)(l.b,{path:"/signup",children:[Object(m.jsx)(H,{children:" "}),Object(m.jsx)(he,{}),Object(m.jsx)(O,{})]}),Object(m.jsxs)(l.b,{path:"/reset",children:[Object(m.jsx)(H,{children:" "}),Object(m.jsx)(be,{}),Object(m.jsx)(O,{})]}),Object(m.jsxs)(l.b,{path:"/services/:id",children:[Object(m.jsx)(H,{children:" "}),Object(m.jsx)(ae,{}),Object(m.jsx)(O,{})]}),Object(m.jsx)(l.b,{path:"*",children:Object(m.jsx)(de,{})})]})})})})},ge=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,135)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(fe,{})}),document.getElementById("root")),ge()}},[[120,1,2]]]);
//# sourceMappingURL=main.68044dd9.chunk.js.map