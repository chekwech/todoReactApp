(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),l=(n(13),n(4)),i=n(7),s=n(1),u=n(3),d=n(2),m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).render=function(){return o.a.createElement("h4",{className:"bg-primary text-white text-center p-2"},e.props.name,"'s To Do List (",e.props.tasks.filter((function(e){return!e.done})).length," items to do)")},e}return n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).updateNewTextValue=function(e){a.setState({newItemText:e.target.value})},a.createNewTodo=function(){a.props.callback(a.state.newItemText),a.setState({newItemText:""})},a.render=function(){return o.a.createElement("div",{className:"my-1"},o.a.createElement("input",{className:"form-control",value:a.state.newItemText,onChange:a.updateNewTextValue}),o.a.createElement("button",{className:"btn btn-primary mt-1",onClick:a.createNewTodo},"Add"))},a.state={newItemText:""},a}return n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).render=function(){return o.a.createElement("tr",null,o.a.createElement("td",null,e.props.item.action),o.a.createElement("td",null,o.a.createElement("input",{type:"checkbox",checked:e.props.item.done,onChange:function(){return e.props.callback(e.props.item)}})))},e}return n}(a.Component),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).render=function(){return o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{ClassName:"form-check-input",type:"checkbox",checked:e.props.isChecked,onChange:function(t){return e.props.callback(t.target.checked)}}),o.a.createElement("label",{className:"form-check-label"},"Show ",e.props.description))},e}return n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).updateNewTextValue=function(e){a.setState({newItemText:e.target.value})},a.createNewTodo=function(e){a.state.todoItems.find((function(t){return t.action===e}))||a.setState({todoItems:[].concat(Object(i.a)(a.state.todoItems),[{action:e,done:!1}])},(function(){return localStorage.setItem("todos",JSON.stringify(a.state))}))},a.toggleTodo=function(e){return a.setState({todoItems:a.state.todoItems.map((function(t){return t.action===e.action?Object(l.a)(Object(l.a)({},t),{},{done:!t.done}):t}))})},a.todoTableRows=function(e){return a.state.todoItems.filter((function(t){return t.done===e})).map((function(e){return o.a.createElement(f,{key:e.action,item:e,callback:a.toggleTodo})}))},a.componentDidMount=function(){var e=localStorage.getItem("todos");a.setState(null!=e?JSON.parse(e):{userName:"Emma",todoItems:[{action:"Read React",done:!1},{action:"Call LF",done:!1},{action:"Go for a walk",done:!1},{action:"Watch a tutorial",done:!0}],showCompleted:!0})},a.render=function(){return o.a.createElement("div",null,o.a.createElement(m,{name:a.state.userName,tasks:a.state.todoItems}),o.a.createElement("div",{className:"container-fluid"},o.a.createElement(p,{callback:a.createNewTodo}),o.a.createElement("table",{className:"table table-striped table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Done"))),o.a.createElement("tbody",null,a.todoTableRows(!1))),o.a.createElement("div",{className:"bg-secondary text-white text-center p-2"},o.a.createElement(h,{description:"Completed Tasks",isChecked:a.state.showCompleted,callback:function(e){return a.setState({showCompleted:e})}})),a.state.showCompleted&&o.a.createElement("table",{className:"table table-striped table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Done"))),o.a.createElement("tbody",null,a.todoTableRows(!0)))))},a.state={userName:"Emma",todoItems:[{action:"Read React",done:!1},{action:"Call LF",done:!1},{action:"Go for a walk",done:!1},{action:"Watch a tutorial",done:!1}],showCompleted:!0},a}return n}(a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(14);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todoReactApp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todoReactApp","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.495c04fd.chunk.js.map