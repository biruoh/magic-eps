(this["webpackJsonpmagic-eps"]=this["webpackJsonpmagic-eps"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/upload-file.1fec5a8d.png"},,,function(e,t,a){e.exports=a.p+"static/media/close-btn.891cf985.svg"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),i=a.n(r);function o(){return l.a.createElement("div",{className:"Header"},l.a.createElement("h1",null,"MAGIC EPS",l.a.createElement("span",null,l.a.createElement("a",{href:"https://www.facebook.com/biruoh/",target:"_blank"},"by Biruoh"))),l.a.createElement("h2",null,"Start adding EPS metadata to see some magic happen!"))}var c=a(1),s=a(2),d=a(3),m=a(4),u=a(9),p=a.n(u),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"popup"},l.a.createElement("div",{className:"popup_inner"},l.a.createElement("div",{className:"popup-header"},this.props.text),l.a.createElement("p",null,"Phatthranit Osman (Creator)",l.a.createElement("br",null),"Supakit Poroon",l.a.createElement("br",null),"Phubet Rattanachotiwan",l.a.createElement("br",null),"Siriwong Na Ayutthaya Prontiwa",l.a.createElement("br",null),"Ploen kongsuwan",l.a.createElement("br",null),"Yanin Buasook",l.a.createElement("br",null),"Sarocha Siripan Boonsen",l.a.createElement("br",null),"\u202aSureerat Srinilrat\u202c",l.a.createElement("br",null),"\u202aPhanida Thanya\u202c",l.a.createElement("br",null),"\u202aPhakorn Kasikij\u202c",l.a.createElement("br",null),"Chonlada Manum",l.a.createElement("br",null),"\u202aNantawan Dokmai\u202c",l.a.createElement("br",null),"Meaw Rujipat",l.a.createElement("br",null),"Todsaporn Sudon",l.a.createElement("br",null),"RiRi FaRi",l.a.createElement("br",null),"Thantharee Netipreechapat",l.a.createElement("br",null),"Mithita Malai",l.a.createElement("br",null),"Chamaiporn Ratchatanon",l.a.createElement("br",null),"\u202aRattanaporn Yamkerd\u202c",l.a.createElement("br",null),"Phruetthiphong Thongmanasathian",l.a.createElement("br",null),"Atom Lapkajornkij"),l.a.createElement("button",{className:"close-btn",onClick:this.props.closePopup},l.a.createElement("img",{className:"uploadImg",src:p.a,alt:"Close"}))))}}]),a}(l.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={showPopup:!1},n}return Object(s.a)(a,[{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("div",{id:"copyright"},"Copyright \xa9 2020 Biruoh. All rights reserved. | "),l.a.createElement("button",{className:"contributors",onClick:this.togglePopup.bind(this)},"Contributors"),this.state.showPopup?l.a.createElement(h,{text:"Contributors",closePopup:this.togglePopup.bind(this)}):null)}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).onClick=function(){var t=e.props,a=t.label;(0,t.onClick)(a)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,n=t.label,r="tab-list-item";return a===n&&(r+=" tab-list-active"),l.a.createElement("li",{className:r,onClick:e},n)}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onClickTabItem=function(e){n.setState({activeTab:e})},n.state={activeTab:n.props.children[0].props.label},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return l.a.createElement("div",{className:"tabs"},l.a.createElement("ol",{className:"tab-list"},t.map((function(t){var n=t.props.label;return l.a.createElement(b,{activeTab:a,key:n,label:n,onClick:e})}))),l.a.createElement("div",{className:"tab-content"},t.map((function(e){if(e.props.label===a)return e.props.children}))))}}]),a}(n.Component),g=a(5),v=a(6),k=a.n(v),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).showFile=function(e){var t=document.getElementById("fileName"),a=e.target.files[0],n=e.target.files[0].name,l=new FileReader,r=this;l.onload=function(e){var a=l.result;r.setState({text:a,file:n}),t.innerHTML=n,console.log("EPS file is ready >>>"),console.log("File name: "+n)},l.readAsText(a)},e.state={file:"",text:"",title:"",description:"",keyword:""},e.showFile=e.showFile.bind(Object(g.a)(e)),e.handleChange=e.handleChange.bind(Object(g.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(g.a)(e)),e}return Object(s.a)(a,[{key:"handleChange",value:function(e){return function(t){var a={};a[e]=t.target.value,this.setState(a)}.bind(this)}},{key:"handleSubmit",value:function(e){var t={file:this.state.file,text:this.state.text,title:this.state.title,description:this.state.description,keyword:this.state.keyword};console.log("Title: "+t.title+"\nDescription: "+t.description+"\nKeyword: "+t.keyword),e.preventDefault(),console.log(t.keyword.split(/[ ,]+/).length,new Map(Object.entries(t.keyword.split(/[ ,]+/))));var a=t.text.split(/\n/);console.log(a.length);var n=t.text.split(/\n/,48).map((function(e){return e+"\n"})).join(""),l=t.keyword.split(/[ ,]+/).map((function(e){return"\n\t\t\t<rdf:li>"+e+"</rdf:li>"})).join(""),r=t.text.split(/\n/).slice(49).map((function(e){return e+"\n"})).join(""),i=document.createElement("a"),o=new Blob([n+'\n\t<dc:format>application/postscript</dc:format>\n\t<dc:title>\n\t\t<rdf:Alt>\n\t\t\t<rdf:li xml:lang="x-default">'+t.title+'</rdf:li>\n\t\t</rdf:Alt>\n\t</dc:title>\n\t<dc:description>\n\t\t<rdf:Alt>\n\t\t\t<rdf:li xml:lang="x-default">'+t.description+"</rdf:li>\n\t\t</rdf:Alt>\n\t</dc:description>\n\t<dc:subject>\n\t\t<rdf:Bag>"+l+"\n\t\t</rdf:Bag>\n\t</dc:subject>\n\n"+r],{type:"text/eps"});i.href=URL.createObjectURL(o),i.download="Magic-EPS-"+t.file,document.body.appendChild(i),i.click()}},{key:"render",value:function(){return l.a.createElement("div",{className:"mainContent"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{className:"uploadFile"},l.a.createElement("img",{className:"uploadImg",src:k.a,alt:"Upload File"}),l.a.createElement("div",{id:"fileName"},"Choose an EPS File"),l.a.createElement("input",{required:!0,type:"file",accept:".eps",onChange:this.showFile}),l.a.createElement("div",{name:"text",id:"metaFile",value:this.state.text,onChange:this.handleChange("text")})),l.a.createElement("label",null,l.a.createElement("input",{required:!0,type:"text",maxLength:200,name:"title",id:"metaTitle",placeholder:"Title",value:this.state.title,onChange:this.handleChange("title")})),l.a.createElement("label",null,l.a.createElement("input",{required:!0,type:"text",maxLength:200,name:"description",id:"metaDescription",placeholder:"Description",value:this.state.description,onChange:this.handleChange("description")})),l.a.createElement("label",null,l.a.createElement("textarea",{required:!0,name:"keyword",id:"metaKeyword",placeholder:"Enter your keywords here...",value:this.state.keyword,onChange:this.handleChange("keyword")})),l.a.createElement("input",{type:"submit",id:"addMeta",value:"Download EPS File"})))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).showFile=function(e){var t=document.getElementById("fileName"),a=e.target.files[0],n=e.target.files[0].name,l=new FileReader,r=this;l.onload=function(e){var a=l.result;r.setState({text:a,file:n}),t.innerHTML=n,console.log("EPS file is ready >>>"),console.log("File name: "+n)},l.readAsText(a)},e.state={file:"",text:"",title:"",description:"",keyword:""},e.showFile=e.showFile.bind(Object(g.a)(e)),e.handleChange=e.handleChange.bind(Object(g.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(g.a)(e)),e}return Object(s.a)(a,[{key:"handleChange",value:function(e){return function(t){var a={};a[e]=t.target.value,this.setState(a)}.bind(this)}},{key:"handleSubmit",value:function(e){var t={file:this.state.file,text:this.state.text,title:this.state.title,description:this.state.description,keyword:this.state.keyword};console.log("Title: "+t.title+"\nDescription: "+t.description+"\nKeyword: "+t.keyword),e.preventDefault(),console.log(t.keyword.split(/[ ,]+/).length,new Map(Object.entries(t.keyword.split(/[ ,]+/))));var a=t.text.split(/\n/);console.log(a.length);var n=t.text.split(/\n/,14).map((function(e){return e+"\n"})).join(""),l=t.keyword.split(/[ ,]+/).map((function(e){return"\n\t\t\t<rdf:li>"+e+"</rdf:li>"})).join(""),r=t.text.split(/\n/).slice(15).map((function(e){return e+"\n"})).join(""),i=document.createElement("a"),o=new Blob([n+'\n/currentdistillerparams where\n{pop currentdistillerparams /CoreDistVersion get 5000 lt} {true} ifelse\n{userdict /EPSHandler1_pdfmark /cleartomark load put\nuserdict /EPSHandler1_ReadMetadata_pdfmark {flushfile cleartomark} bind put}\n{ userdict /EPSHandler1_pdfmark /pdfmark load put\nuserdict /EPSHandler1_ReadMetadata_pdfmark {/PUT pdfmark} bind put } ifelse\n[/NamespacePush EPSHandler1_pdfmark\n[/_objdef {eps_metadata_stream} /type /stream /OBJ EPSHandler1_pdfmark\n[{eps_metadata_stream} 2 dict begin\n/Type /Metadata def /Subtype /XML def currentdict end /PUT EPSHandler1_pdfmark\n[{eps_metadata_stream}\ncurrentfile 0 (% &&end EPS XMP packet marker&&)\n/SubFileDecode filter EPSHandler1_ReadMetadata_pdfmark\n<?xpacket begin="\ufeff" id="W5M0MpCehiHzreSzNTczkc9d"?>\n<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="XMP Core 5.5.0">\n<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n<rdf:Description rdf:about=""\nxmlns:exif="http://ns.adobe.com/exif/1.0/"\nxmlns:tiff="http://ns.adobe.com/tiff/1.0/"\nxmlns:photoshop="http://ns.adobe.com/photoshop/1.0/"\nxmlns:xmp="http://ns.adobe.com/xap/1.0/"\nxmlns:xmpMM="http://ns.adobe.com/xap/1.0/mm/"\nxmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#"\ntiff:ResolutionUnit="2"\ntiff:XResolution="72.0"\ntiff:YResolution="72.0"\nphotoshop:ColorMode="3"\nphotoshop:ICCProfile="sRGB IEC61966-2.1"\n\t<dc:format>application/postscript</dc:format>\n\t<dc:title>\n\t\t<rdf:Alt>\n\t\t\t<rdf:li xml:lang="x-default">'+t.title+'</rdf:li>\n\t\t</rdf:Alt>\n\t</dc:title>\n\t<dc:description>\n\t\t<rdf:Alt>\n\t\t\t<rdf:li xml:lang="x-default">'+t.description+"</rdf:li>\n\t\t</rdf:Alt>\n\t</dc:description>\n\t<dc:subject>\n\t\t<rdf:Bag>"+l+'\n\t\t</rdf:Bag>\n\t</dc:subject>\n\n\n</rdf:Description>\n</rdf:RDF>\n</x:xmpmeta>\n\n\n<?xpacket end="w"?>\n% &&end EPS XMP packet marker&&\n[/Document\n1 dict begin /Metadata {eps_metadata_stream} def\ncurrentdict end /BDC EPSHandler1_pdfmark\n[/NamespacePop EPSHandler1_pdfmark\n\ngsave\n'+r],{type:"text/eps"});i.href=URL.createObjectURL(o),i.download="Magic-EPS-"+t.file,document.body.appendChild(i),i.click()}},{key:"render",value:function(){return l.a.createElement("div",{className:"mainContent"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{className:"uploadFile"},l.a.createElement("img",{className:"uploadImg",src:k.a,alt:"Upload File"}),l.a.createElement("div",{id:"fileName"},"Choose an EPS File"),l.a.createElement("input",{required:!0,type:"file",accept:".eps",onChange:this.showFile}),l.a.createElement("div",{name:"text",id:"metaFile",value:this.state.text,onChange:this.handleChange("text")})),l.a.createElement("label",null,l.a.createElement("input",{required:!0,type:"text",maxLength:200,name:"title",id:"metaTitle",placeholder:"Title",value:this.state.title,onChange:this.handleChange("title")})),l.a.createElement("label",null,l.a.createElement("input",{required:!0,type:"text",maxLength:200,name:"description",id:"metaDescription",placeholder:"Description",value:this.state.description,onChange:this.handleChange("description")})),l.a.createElement("label",null,l.a.createElement("textarea",{required:!0,name:"keyword",id:"metaKeyword",placeholder:"Enter your keywords here...",value:this.state.keyword,onChange:this.handleChange("keyword")})),l.a.createElement("input",{type:"submit",id:"addMeta",value:"Download EPS File"})))}}]),a}(n.Component);function y(){return l.a.createElement("div",{className:"App"},l.a.createElement(o,null),l.a.createElement(E,null,l.a.createElement("div",{label:"Desktop"},l.a.createElement(x,null)),l.a.createElement("div",{label:"iPad"},l.a.createElement(w,null))),l.a.createElement(f,null))}a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.351b0490.chunk.js.map