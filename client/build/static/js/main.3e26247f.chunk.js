(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,o){e.exports=o(84)},34:function(e,t,o){},80:function(e,t,o){},84:function(e,t,o){"use strict";o.r(t);var a=o(2),i=o.n(a),n=o(25),r=o.n(n),s=(o(34),o(7)),l=o(8),c=o(10),u=o(9),d=o(11),m=o(3),p=(o(36),o(26)),h=o(4),g=(o(38),o(14),o(15),o(16),o(17),o(18),o(66),o(1)),y=o.n(g),v=(o(19),o(21),o(22),o(69),o(0));v.icheck(h,y.a),v.select2(h,y.a),v.inputmask(h),v.jquerybarrating(h,y.a),v.jqueryuidatepicker(h,y.a),v.nouislider(h),v.select2tagbox(h,y.a),v.signaturepad(h),v.sortablejs(h),v.ckeditor(h),v.autocomplete(h,y.a),v.bootstrapslider(h);var f=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(o=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).saveMySurvey=function(){console.log(JSON.stringify(o.editor.text))},o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.editor=new p.SurveyEditor("surveyEditorContainer",{showEmbededSurveyTab:!0}),this.editor.saveSurveyFunc=this.saveMySurvey}},{key:"render",value:function(){return i.a.createElement("div",{id:"surveyEditorContainer"})}}]),t}(a.Component),w=o(27),b=o.n(w);o(80),o(82);v.icheck(m,y.a),v.select2(m,y.a),v.inputmask(m),v.jquerybarrating(m,y.a),v.jqueryuidatepicker(m,y.a),v.nouislider(m),v.select2tagbox(m,y.a),v.signaturepad(m),v.sortablejs(m),v.ckeditor(m),v.autocomplete(m,y.a),v.bootstrapslider(m);var k=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(o=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).json={title:"Product Feedback Survey Example",showProgressBar:"top",pages:[{elements:[{type:"barrating",name:"barrating1",ratingTheme:"css-stars",title:"Please rate the movie you've just watched",choices:["1","2","3","4","5"]},{type:"imagepicker",name:"choosepicture",title:"What animal would you like to see first ?",choices:[{value:"lion",imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"},{value:"giraffe",imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"},{value:"panda",imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"},{value:"camel",imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"}]},{type:"bootstrapslider",name:"bootstrapslider"},{type:"dropdown",renderAs:"select2",choicesByUrl:{url:"https://restcountries.eu/rest/v1/all"},name:"countries",title:"Please select the country you have arrived from:"},{type:"signaturepad",name:"sign",title:"Please enter your signature"},{type:"sortablelist",name:"lifepriopity",title:"Life Priorities ",isRequired:!0,colCount:0,choices:["family","work","pets","travels","games"]},{name:"date",type:"datepicker",inputType:"date",title:"Your favorite date:",dateFormat:"mm/dd/yy",isRequired:!0}]},{questions:[{type:"signaturepad",width:"500px",name:"Signature Pad - you can enter your signature here:"},{type:"matrix",name:"Quality",title:"Please indicate if you agree or disagree with the following statements",columns:[{value:1,text:"Strongly Disagree"},{value:2,text:"Disagree"},{value:3,text:"Neutral"},{value:4,text:"Agree"},{value:5,text:"Strongly Agree"}],rows:[{value:"affordable",text:"Product is affordable"},{value:"does what it claims",text:"Product does what it claims"},{value:"better then others",text:"Product is better than other products on the market"},{value:"easy to use",text:"Product is easy to use"}]},{type:"rating",name:"satisfaction",title:"How satisfied are you with the Product?",mininumRateDescription:"Not Satisfied",maximumRateDescription:"Completely satisfied"},{type:"rating",name:"recommend friends",visibleIf:"{satisfaction} > 3",title:"How likely are you to recommend the Product to a friend or co-worker?",mininumRateDescription:"Will not recommend",maximumRateDescription:"I will recommend"},{type:"comment",name:"suggestions",title:"What would make you more satisfied with the Product?"}]},{questions:[{type:"radiogroup",name:"price to competitors",title:"Compared to our competitors, do you feel the Product is",choices:["Less expensive","Priced about the same","More expensive","Not sure"]},{type:"radiogroup",name:"price",title:"Do you feel our current price is merited by our product?",choices:["correct|Yes, the price is about right","low|No, the price is too low for your product","high|No, the price is too high for your product"]},{type:"multipletext",name:"pricelimit",title:"What is the... ",items:[{name:"mostamount",title:"Most amount you would every pay for a product like ours"},{name:"leastamount",title:"The least amount you would feel comfortable paying"}]}]},{questions:[{type:"text",name:"email",title:'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'}]}]},o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){o.e(1).then(o.t.bind(null,85,7)),window.$=window.jQuery=y.a}},{key:"onValueChanged",value:function(e){console.log("value changed!")}},{key:"onComplete",value:function(e){console.log("Complete! "+e)}},{key:"render",value:function(){m.Survey.cssType="bootstrap";var e=new m.Model(this.json);return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-header"},i.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),i.a.createElement("h2",null,"Welcome to React with SurveyJS")),i.a.createElement("div",{className:"surveyjs"},i.a.createElement("h1",null,"SurveyJS library in action:"),i.a.createElement(m.Survey,{model:e,onComplete:this.onComplete,onValueChanged:this.onValueChanged}),i.a.createElement("h1",null,"SurveyJS Editor in action:"),i.a.createElement(f,null)),i.a.createElement("p",{className:"App-intro"},"To get started, edit ",i.a.createElement("code",null,"src/App.js")," and save to reload."))}}]),t}(a.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");j?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):x(e)})}}()}},[[28,3,2]]]);
//# sourceMappingURL=main.3e26247f.chunk.js.map