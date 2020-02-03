(this.webpackJsonpbeejee=this.webpackJsonpbeejee||[]).push([[0],{27:function(e,t,a){e.exports=a(62)},32:function(e,t,a){},51:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),c=a.n(r),o=(a(32),a(8)),l=a(12),i=a.n(l),m=a(2),u=a(25),p=a(3),d=a(4),h=a(6),g=a(5),f=a(7),b=a(9),v=a.n(b),E=(a(51),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={text:a.props.task.text,status:a.props.task.status,id:a.props.task.id,isBeingEditText:!1},a.handleInputChange=function(e){var t=e.target.name,n="checkbox"===e.target.type?e.target.checked:e.target.value;a.setState(Object(m.a)({},t,n))},a.handleEditSuccess=function(e){e.preventDefault(),a.endEditText(),a.props.onEditSuccess(a.state)},a.startEditText=function(){a.setState({isBeingEditText:!0})},a.endEditText=function(){a.setState({isBeingEditText:!1})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.task;return s.a.createElement("li",{key:e.id,className:"m-2"},s.a.createElement("div",{className:"card",style:{width:"18rem"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},e.username),s.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},e.email),s.a.createElement("form",{onSubmit:this.handleEditSuccess},""===this.props.isLogged?s.a.createElement("p",{className:"card-text"},e.text):s.a.createElement(s.a.Fragment,null,this.state.isBeingEditText?s.a.createElement("input",{type:"text",onChange:this.handleInputChange,name:"text",value:this.state.text}):s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"card-text"},e.text),s.a.createElement("button",{className:"btn btn-primary",onClick:this.startEditText},"Edit"))),""===this.props.isLogged?s.a.createElement("div",null,0===e.status?s.a.createElement("p",{style:{color:"red"}},"In progress"):s.a.createElement("p",{style:{color:"green"}},"Done")):s.a.createElement("label",null,"Task completed",s.a.createElement("input",{type:"checkbox",className:"ml-2",onChange:this.handleInputChange,name:"status",checked:this.state.status})),this.props.isLogged?s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-primary mt-2"},"Save")," "):null))))}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).handleSubmit=function(e){a.props.updateTask(e)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("ul",{className:"d-flex justify-content-around"},this.props.tasks.map((function(t){return s.a.createElement(E,Object.assign({key:t.id,task:t},e.props,{handleInputChange:e.handleInputChange,onEditSuccess:e.handleSubmit}))})))}}]),t}(n.Component),y=function(e){return s.a.createElement("nav",{className:"d-flex justify-content-center"},s.a.createElement("ul",{className:"pagination pagination-sm"},function(e,t,a){for(var n=[],r=function(e){var r=t===e?"page-item disabled":"page-item";n.push(s.a.createElement("li",{className:r,key:e},s.a.createElement("button",{className:"page-link",onClick:function(){return a(e)}},e)))},c=1;c<=Math.ceil(e/3);c+=1)r(c);return n}(e.total_task_count,e.page,e.pickPage)))},N={username:"",email:"",text:""},x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state=Object(o.a)({},N),a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(m.a)({},t,n))},a.handleSubmit=function(e){if(e.preventDefault(),!a.state.username||!a.state.text||""!==a.state.email){var t=a.state,n=t.username,s=t.email,r=t.text;a.props.createNewTask({username:n,email:s,text:r}),a.setState(Object(o.a)({},N))}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"card m-4 p-4",onSubmit:this.handleSubmit},s.a.createElement("h2",null,"Create New Task"),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"m-2"},"username",s.a.createElement("input",{onChange:this.handleInputChange,type:"text",className:"form-control",name:"username",required:!0,value:this.state.username})),s.a.createElement("label",{className:"m-2"},"email",s.a.createElement("input",{onChange:this.handleInputChange,type:"email",className:"form-control",name:"email",value:this.state.email})),s.a.createElement("label",{className:"m-2"},"text",s.a.createElement("input",{onChange:this.handleInputChange,type:"text",className:"form-control",name:"text",required:!0,value:this.state.text})),s.a.createElement("button",{className:"btn btn-primary"},"Create")))}}]),t}(n.Component),O={username:"",password:""},j=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state=Object(o.a)({},O),a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(m.a)({},t,n))},a.handleSubmit=function(e){if(e.preventDefault(),!a.state.username||""!==a.state.password){var t=a.state,n=t.username,s=t.password;a.props.userLogin({username:n,password:s}),a.setState(Object(o.a)({},O))}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{"aria-label":"breadcrumb"},this.props.isLogged?s.a.createElement("p",{className:"breadcrumb d-flex justify-content-end"},"You logged in",s.a.createElement("button",{className:"btn btn-primary",onClick:this.props.logOut},"Log Out")):s.a.createElement("form",{onSubmit:this.handleSubmit,className:"breadcrumb d-flex justify-content-end"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"m-2"},"username",s.a.createElement("input",{onChange:this.handleInputChange,type:"text",className:"form-control",name:"username",value:this.state.username})),s.a.createElement("label",{className:"m-2"},"password",s.a.createElement("input",{onChange:this.handleInputChange,type:"password",className:"form-control",name:"password",value:this.state.password})),s.a.createElement("button",{className:"btn btn-primary"},"Login"))))}}]),t}(n.Component),w=a(26),C=a.n(w),S={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},_=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={tasks:[],total_task_count:null,page:1,sort_field:"id",sort_direction:"asc",token:"",isModalOpen:!1,isLogged:!1,message:""},a.getData=function(){var e="https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Vitalii&page=".concat(a.state.page,"&sort_field=").concat(a.state.sort_field,"&sort_direction=").concat(a.state.sort_direction);v.a.get(e).then((function(e){console.log(e),a.setState({tasks:e.data.message.tasks})}))},a.pickPage=function(e){v.a.get("https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Vitalii&page=".concat(e)).then((function(t){a.setState({tasks:t.data.message.tasks,page:e})}))},a.changeSelect=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.name,s=t.target.value,e.next=4,a.setState(Object(m.a)({},n,s));case 4:a.getData();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.createNewTask=function(e){var t=new FormData;t.append("username",e.username),t.append("email",e.email),t.append("text",e.text),v.a.post("https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Vitalii",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e.status;e.data;200===t&&a.getData()})).then((function(){a.setState({message:"Task added successfully"})})).then((function(){return a.openModal()}))},a.userLogin=function(e){var t=new FormData;t.append("username",e.username),t.append("password",e.password),v.a.post("https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=Vitalii",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e.data;"error"!==t.status?a.setState({token:t.message.token,isLogged:!0}):a.setState({message:t.message.password,isModalOpen:!0})}))},a.updateTask=function(e){var t=e.status,n=e.text,s=e.id;t=t?10:0;var r=a.state.tasks.find((function(e){return e.id===s})),c=Object(o.a)({},r,{text:n,status:t}),l=new FormData;l.append("token",a.state.token),l.append("task ",c),v.a.post("https://uxcandy.com/~shapoval/test-task-backend/v2/edit/".concat(c.id,"?developer=Vitalii"),l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200===e.status&&a.getData()}))},a.closeModal=function(){a.setState({isModalOpen:!1,message:""})},a.logOut=function(){a.setState({token:"",isLogged:!1})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Vitalii").then((function(t){e.setState({tasks:t.data.message.tasks,total_task_count:Number(t.data.message.total_task_count)})}))}},{key:"openModal",value:function(){this.setState({isModalOpen:!0})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement(j,{isLogged:this.state.isLogged,userLogin:this.userLogin,logOut:this.logOut}),s.a.createElement("h1",{className:"text-center"},"Tasks App"),s.a.createElement(x,{createNewTask:this.createNewTask})),s.a.createElement("div",{className:"col-3 offset-9"},s.a.createElement("label",{className:"d-flex"}," sort_field",s.a.createElement("select",{className:"form-control form-control-sm ml-2",value:this.state.sort_field,name:"sort_field",onChange:this.changeSelect},s.a.createElement("option",{value:"id"},"id"),s.a.createElement("option",{value:"username"},"username"),s.a.createElement("option",{value:"email"},"email"),s.a.createElement("option",{value:"status"},"status")))),s.a.createElement("div",{className:"col-3 offset-9"},s.a.createElement("label",{className:"d-flex"}," sort_direction",s.a.createElement("select",{className:"form-control form-control-sm ml-2",value:this.state.sort_direction,name:"sort_direction",onChange:this.changeSelect},s.a.createElement("option",{value:"asc"},"asc"),s.a.createElement("option",{value:"desc"},"desc")))),s.a.createElement("div",{className:"col-12"},s.a.createElement(k,{tasks:this.state.tasks,isLogged:this.state.token,updateTask:this.updateTask}),s.a.createElement(y,{total_task_count:this.state.total_task_count,page:this.state.page,pickPage:this.pickPage}))),s.a.createElement(C.a,{isOpen:this.state.isModalOpen,onRequestClose:this.closeModal,style:S,contentLabel:"Example Modal",ariaHideApp:!1},s.a.createElement("div",{className:"m-4 p-4"},this.state.message),s.a.createElement("button",{className:"btn btn-primary",onClick:this.closeModal},"Ok")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.b6c9f2a2.chunk.js.map