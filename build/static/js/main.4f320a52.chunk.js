(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(30)},21:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(14),r=t.n(l),c=t(5),s=t(6),i=t(9),m=t(7),u=t(10),h=t(12),d="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var b={Accept:"application/json",Authorization:k},v=function(){return fetch("".concat(d,"/books"),{headers:b}).then(function(e){return e.json()}).then(function(e){return e.books})},f=function(e,a){return fetch("".concat(d,"/books/").concat(e.id),{method:"PUT",headers:Object(h.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:a})}).then(function(e){return e.json()})},E=(t(21),t(32));var p=function(e){var a=this;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},e.books.filter(function(e){return"currentlyReading"===e.shelf}).map(function(a){return o.a.createElement("li",{key:a.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(a.imageLinks.smallThumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{name:a.id,value:a.shelf,onChange:e.onChangeBookValue},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},a.title),o.a.createElement("div",{className:"book-authors"},a.authors)))})))),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},e.books.filter(function(e){return"wantToRead"===e.shelf}).map(function(a){return o.a.createElement("li",{key:a.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(a.imageLinks.smallThumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{name:a.id,value:a.shelf,onChange:e.onChangeBookValue},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},a.title),o.a.createElement("div",{className:"book-authors"},a.authors)))})))),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},e.books.filter(function(e){return"read"===e.shelf}).map(function(a){return o.a.createElement("li",{key:a.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:192,backgroundImage:"url(".concat(a.imageLinks.smallThumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{name:a.id,value:a.shelf,onChange:e.onChangeBookValue},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},a.title),o.a.createElement("div",{className:"book-authors"},"J",a.authors)))})))))),o.a.createElement("div",{className:"open-search"},o.a.createElement(E.a,{to:"/search",onClick:function(){return a.setState({showSearchPage:!0})}},"Add a book")))},g=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={query:""},t.updateQuery=function(e){t.setState({query:e.trim()}),console.log("searching")},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e,a,t,n=this,l=[];for(void 0!==this.props.newbooks&&this.props.newbooks.length>0&&(l=this.props.newbooks),e=this.props.books,a=0;a<l.length;a++){for(l[a].shelf="none",t=0;t<e.length;t++)e[t].id===l[a].id&&(l[a].shelf=e[t].shelf);if(void 0===l[a].imageLinks){l[a].imageLinks={smallThumbnail:"http://placehold.it/500x500",thumbnail:"http://placehold.it/500x500"}}}return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(E.a,{className:"close-search",to:"/",onClick:function(){return n.setState({showSearchPage:!0})}},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:function(e){return n.props.onSearchBooksvalue(e.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},l.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.imageLinks.smallThumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{name:e.id,defaultValue:e.shelf,onChange:n.props.onChangeBookValue},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors)))}))))}}]),a}(n.Component),N=t(33),y=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={books:[],newbooks:[]},t.handlechange_search=function(e,a){f(t.state.newbooks.filter(function(a){return a.id===e.target.name})[0],e.target.value).then(function(e){v().then(function(e){t.setState({books:e})})})},t.handlechange=function(e,a){var n=Object.assign({},t.state.books.filter(function(a){return a.id===e.target.name}));console.log(n[0]),n[0].shelf=e.target.value,f(t.state.books.filter(function(a){return a.id===e.target.name})[0],e.target.value),t.setState({book:n})},t.handleOnNavigateBack=function(){v().then(function(e){t.setState({books:e})}),t.props.navigation.goBack()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then(function(a){e.setState({books:a})})}},{key:"searchNewBook",value:function(e){var a=this;(function(e){return fetch("".concat(d,"/search"),{method:"POST",headers:Object(h.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})})(e).then(function(e){a.setState({newbooks:e})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(N.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement(p,{onChangeBookValue:e.handlechange,books:e.state.books}))}}),o.a.createElement(N.a,{path:"/search",render:function(){return o.a.createElement(g,{books:e.state.books,onChangeBookValue:function(a){e.handlechange_search(a)},newbooks:e.state.newbooks,onSearchBooksvalue:function(a){e.searchNewBook(a)},NavigateBack:function(){e.handleOnNavigateBack()}})}}))}}]),a}(n.Component),w=(t(28),t(34));r.a.render(o.a.createElement(w.a,null,o.a.createElement(y,null)),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.4f320a52.chunk.js.map