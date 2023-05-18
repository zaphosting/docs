"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=u(n),c=i,m=g["".concat(o,".").concat(c)]||g[c]||p[c]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[g]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),i=n(6010);const a={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),i=n(7294),a=n(6010),l=n(2466),s=n(6550),o=n(1980),u=n(7392),d=n(12);function g(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,u]=m({queryString:n,groupId:r}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Nk)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=o??g;return c({value:e,tabValues:a})?e:null})();(0,i.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!c({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var f=n(2389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),r=u[n].value;r!==s&&(g(t),o(r))},c=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:p},l,{className:(0,a.Z)("tabs__item",w.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=b(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",w.tabList)},i.createElement(k,(0,r.Z)({},e,t)),i.createElement(h,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return i.createElement(v,(0,r.Z)({key:String(t)},e))}},6955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>g});var r=n(7462),i=(n(7294),n(3905)),a=n(4866),l=n(5162);const s={id:"vserver_windows_port",title:"Ports bei Windows Servern freigeben",description:"Informationen, wie du Ports bei deinem Windows vServer von ZAP-Hosting freigeben kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Port freigeben"},o=void 0,u={unversionedId:"vserver_windows_port",id:"vserver_windows_port",title:"Ports bei Windows Servern freigeben",description:"Informationen, wie du Ports bei deinem Windows vServer von ZAP-Hosting freigeben kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/vserver_windows_port.md",sourceDirName:".",slug:"/vserver_windows_port",permalink:"/guides/de/docs/vserver_windows_port",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_windows_port.md",tags:[],version:"current",frontMatter:{id:"vserver_windows_port",title:"Ports bei Windows Servern freigeben",description:"Informationen, wie du Ports bei deinem Windows vServer von ZAP-Hosting freigeben kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Port freigeben"},sidebar:"vpsrootSidebar",previous:{title:"Erstzugriff (RDP)",permalink:"/guides/de/docs/vserver_windows_userdp"},next:{title:"Zus\xe4tzliche IPs hinzuf\xfcgen",permalink:"/guides/de/docs/vserver_windows_addip"}},d={},g=[{value:"Die Firewall",id:"die-firewall",level:2},{value:"Programme in der Windows-Firewall freigeben",id:"programme-in-der-windows-firewall-freigeben",level:2},{value:"Port in der Windows-Firewall freigeben",id:"port-in-der-windows-firewall-freigeben",level:2}],p={toc:g},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"die-firewall"},"Die Firewall"),(0,i.kt)("p",null,"Eine Firewall kontrolliert den ein- und ausgehenden Verkehr zwischen Server und Internet.\nGe\xf6ffnete Ports k\xf6nnen ein Sicherheitsrisiko darstellen, aufgrund dessen wird nicht automatisch jeder Port ge\xf6ffnet."),(0,i.kt)("p",null,"Wenn geblockte Ports f\xfcr einen Spiele Server oder bestimmte Applikationen ben\xf6tigt werden, muss eine Portfreigabe durchgef\xfchrt werden."),(0,i.kt)("p",null,'Zu Beginn muss die "',(0,i.kt)("strong",{parentName:"p"},"Windows Firewall mit erweiterter Sicherheit"),'" ge\xf6ffnet werden.\nDiese kann nach einem Klick auf das Windows Logo gesucht werden'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196225-575cd720-6e9c-4383-8918-a65620930d4f.png",alt:null})),(0,i.kt)("hr",null),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:" Programme in der Windows-Firewall freigeben",label:" Programme in der Windows-Firewall freigeben",mdxType:"TabItem"},(0,i.kt)("h2",{id:"programme-in-der-windows-firewall-freigeben"},"Programme in der Windows-Firewall freigeben"),(0,i.kt)("p",null,'Die freigabe f\xfcr die "',(0,i.kt)("strong",{parentName:"p"},"Ausgehende Regel"),'" funktioniert auf gleichem Wege wie f\xfcr die "',(0,i.kt)("strong",{parentName:"p"},"Eingehende Regel"),'", wir zeigen in diesem Beispiel daher nur die Freigabe eines Programms f\xfcr die "',(0,i.kt)("strong",{parentName:"p"},"Eingehende Regel"),'".'),(0,i.kt)("p",null,'Sobald in der Firewall Verwaltung die "',(0,i.kt)("strong",{parentName:"p"},"Eingehende Regel"),'" oder "',(0,i.kt)("strong",{parentName:"p"},"Ausgehende Regel"),'" ausgew\xe4hlt wurde, muss bei diesem eine "',(0,i.kt)("strong",{parentName:"p"},"Neue Regel"),'" erstellt werden.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196248-d3fea6fc-1111-45f3-afb6-f29fc612e264.png",alt:null})),(0,i.kt)("p",null,'Bei dieser neuen Regel wird als "',(0,i.kt)("strong",{parentName:"p"},"Regeltyp"),'" "',(0,i.kt)("strong",{parentName:"p"},"Programm"),'" gew\xe4hlt und mit "',(0,i.kt)("strong",{parentName:"p"},"Weiter >"),'" best\xe4tigt'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196273-17cdc85b-38b9-49c8-9935-4fe58aec1134.png",alt:null})),(0,i.kt)("p",null,"Hier kann direkt nach unserem Programm gesucht werden, in unserem fall nehmen wir beispielweise Chrome:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196294-911b8e60-007d-4e5f-bb5f-645f73a1fa0f.png",alt:null})),(0,i.kt)("p",null,"Nun kann gew\xe4hlt werden ob der Server die Verbindung mit dem Programm erlaubt, nur unter bestimmten Voraussetzungen zul\xe4sst oder blockieren soll."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196311-b9c2c430-5885-4022-8267-66b90d713898.png",alt:null})),(0,i.kt)("p",null,'Dies wird erneut mit dem "',(0,i.kt)("strong",{parentName:"p"},"Weiter >"),'" best\xe4tigt.'),(0,i.kt)("p",null,'In dem "',(0,i.kt)("strong",{parentName:"p"},"Profil"),'" kann nun gew\xe4hlt werden, ob diese Regel nur f\xfcr bestimmte Netzwerke oder alle aktiv sein soll. '),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196402-98c13256-3c11-4160-bf6b-c28a2d9c5a17.png",alt:null})),(0,i.kt)("p",null,'Bei "',(0,i.kt)("strong",{parentName:"p"},"Name"),'" muss nur noch ein Name f\xfcr diese neue "',(0,i.kt)("strong",{parentName:"p"},"Regel"),'" eingetragen werden, dieser ist frei w\xe4hlbar.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'\u26a0\ufe0f Hierbei sollte ein Name gew\xe4hlt werden der noch ungenutzt und eindeutig ist, damit dieser unter "',(0,i.kt)("strong",{parentName:"p"},"Eingehende Regel"),'" bzw. "',(0,i.kt)("strong",{parentName:"p"},"Ausgehende Regel"),'" wiedergefunden werden kann.')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196419-6d443e71-18ff-4e46-9bda-4f32db3c9fd8.png",alt:null})),(0,i.kt)("p",null,'Sobald mit dem Button "',(0,i.kt)("strong",{parentName:"p"},"Fertig stellen"),'" best\xe4tigt, wird die Regel aktiviert und der Port ist freigegeben.')),(0,i.kt)(l.Z,{value:" Port in der Windows-Firewall freigeben",label:" Port in der Windows-Firewall freigeben",mdxType:"TabItem"},(0,i.kt)("h2",{id:"port-in-der-windows-firewall-freigeben"},"Port in der Windows-Firewall freigeben"),(0,i.kt)("p",null,"Bei der eingehenden Regel werden die Ports f\xfcr Anwendungen freigegeben welche von au\xdfen versuchen mit dem Server zu kommunizieren.\nBei der ausgehenden Regel werden die Ports f\xfcr Anwendungen freigegeben welche vom Server nach au\xdfen kommunizieren m\xf6chten."),(0,i.kt)("p",null,'Die Portfreigabe f\xfcr die "',(0,i.kt)("strong",{parentName:"p"},"Ausgehende Regel"),'" funktioniert auf gleichem Wege wie f\xfcr die "',(0,i.kt)("strong",{parentName:"p"},"Eingehende Regel"),'", wir zeigen in diesem Beispiel daher nur die Freigabe eines Ports f\xfcr die "',(0,i.kt)("strong",{parentName:"p"},"Eingehende Regel"),'".'),(0,i.kt)("p",null,'Sobald in der Firewall Verwaltung die "',(0,i.kt)("strong",{parentName:"p"},"Eingehende Regel"),'" oder "',(0,i.kt)("strong",{parentName:"p"},"Ausgehende Regel"),'" ausgew\xe4hlt wurde, muss bei diesem eine "',(0,i.kt)("strong",{parentName:"p"},"Neue Regel"),'" erstellt werden.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196453-1670f479-b6b9-4dff-868c-1b977086ec68.png",alt:null})),(0,i.kt)("p",null,'Bei dieser neuen Regel wird als "',(0,i.kt)("strong",{parentName:"p"},"Regeltyp"),'" der "',(0,i.kt)("strong",{parentName:"p"},"Port"),'" gew\xe4hlt und mit "',(0,i.kt)("strong",{parentName:"p"},"Weiter >"),'" best\xe4tigt'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196486-d2163bde-7f8c-43d7-9be9-3a3c0ec13b21.png",alt:null})),(0,i.kt)("p",null,'Je nach Anwendung muss nun "',(0,i.kt)("strong",{parentName:"p"},"TCP"),'" oder "',(0,i.kt)("strong",{parentName:"p"},"UDP"),'" gew\xe4hlt werden.\nSobald herausgefunden und ausgew\xe4hlt wurde welches der Beiden f\xfcr die gew\xfcnschte Anwendung genutzt werden soll, muss nun bei "',(0,i.kt)("strong",{parentName:"p"},"Bestimmte lokale Ports:"),'" der Port eingetragen werden welcher freigegeben werden soll.\nDies wird erneut mit dem "',(0,i.kt)("strong",{parentName:"p"},"Weiter >"),'" best\xe4tigt.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196510-d4204faf-9a0d-47f8-bb8c-13528b95cb2a.png",alt:null})),(0,i.kt)("p",null,'Nun kann gew\xe4hlt werden ob der Server die Verbindung mit dem Port zulassen, nur unter bestimmten Voraussetzungen zulassen oder blockieren soll.\nDies wird erneut mit dem "',(0,i.kt)("strong",{parentName:"p"},"Weiter >"),'" best\xe4tigt.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196533-5e6e44da-117d-4648-b6dc-8053d2c35245.png",alt:null})),(0,i.kt)("p",null,'In dem "',(0,i.kt)("strong",{parentName:"p"},"Profil"),'" kann nun gew\xe4hlt werden, ob diese Regel nur f\xfcr bestimmte Netzwerke oder alle aktiv sein soll.\nDies wird erneut mit dem "',(0,i.kt)("strong",{parentName:"p"},"Weiter >"),'" best\xe4tigt.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196581-ece45bbd-c55e-4da7-bf60-ba8e304276e7.png",alt:null})),(0,i.kt)("p",null,'Bei "',(0,i.kt)("strong",{parentName:"p"},"Name"),'" muss nur noch ein Name f\xfcr diese neue "',(0,i.kt)("strong",{parentName:"p"},"Regel"),'" eingetragen werden, dieser ist frei w\xe4hlbar.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'\u26a0\ufe0f Hierbei sollte ein Name gew\xe4hlt werden der noch ungenutzt und eindeutig ist, damit dieser unter "',(0,i.kt)("strong",{parentName:"p"},"Eingehende Regel"),'" bzw. "',(0,i.kt)("strong",{parentName:"p"},"Ausgehende Regel"),'" wiedergefunden werden kann.')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166196602-7cd1ce91-a826-4737-b74e-d062489b7630.png",alt:null})),(0,i.kt)("p",null,'Sobald mit dem Button "',(0,i.kt)("strong",{parentName:"p"},"Fertig stellen"),'" best\xe4tigt, wird die Regel aktiviert und der Port ist freigegeben.'))))}m.isMDXComponent=!0}}]);