"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7244],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>h});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),m=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},u=function(e){var n=m(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(a),h=i,p=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return a?t.createElement(p,r(r({ref:n},u),{},{components:a})):t.createElement(p,r({ref:n},u))}));function h(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,n,a)=>{a.d(n,{Z:()=>r});var t=a(7294),i=a(6010);const l="tabItem_Ymn6";function r(e){let{children:n,hidden:a,className:r}=e;return t.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:a},n)}},5488:(e,n,a)=>{a.d(n,{Z:()=>h});var t=a(7462),i=a(7294),l=a(6010),r=a(2389),o=a(7392),s=a(7094),m=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var n,a;const{lazy:r,block:c,defaultValue:h,values:p,groupId:g,className:b}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:k.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),y=(0,o.l)(v,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===h?h:null!=(n=null!=h?h:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?n:k[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:w}=(0,s.U)(),[E,U]=(0,i.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,m.o5)();if(null!=g){const e=T[g];null!=e&&e!==E&&v.some((n=>n.value===e))&&U(e)}const A=e=>{const n=e.currentTarget,a=x.indexOf(n),t=v[a].value;t!==E&&(N(n),U(t),null!=g&&w(g,String(t)))},O=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{var t;const n=x.indexOf(e.currentTarget)+1;a=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{var i;const n=x.indexOf(e.currentTarget)-1;a=null!=(i=x[n])?i:x[x.length-1];break}}null==(n=a)||n.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},v.map((e=>{let{value:n,label:a,attributes:r}=e;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:e=>x.push(e),onKeyDown:O,onFocus:A,onClick:A},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":E===n})}),null!=a?a:n)}))),r?(0,i.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==E})))))}function h(e){const n=(0,r.Z)();return i.createElement(c,(0,t.Z)({key:String(n)},e))}},7654:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(7294),i=a(9604);const l=e=>{let{defaultValue:n,editorHeight:a="40vh",outputHeight:l="30vh"}=e;const[r,o]=t.useState(n),s=t.useRef(null);return t.useEffect((()=>{null!=s&&(s.current.src="data:text/html;charset=utf-8,"+encodeURIComponent(r))}),[r]),t.createElement("div",{style:{marginBottom:"1rem"}},t.createElement("div",{style:{borderRadius:"0.5rem",overflow:"hidden"}},t.createElement(i.ZP,{height:a,defaultLanguage:"html",defaultValue:n,theme:"vs-dark",onChange:e=>o(e),loading:"Loading Code Editor...",options:{minimap:{enabled:!1}}})),t.createElement("h4",{style:{marginTop:"1rem"}},"Output:"),t.createElement("iframe",{style:{width:"100%",minHeight:l,backgroundColor:"white",borderRadius:"0.5rem"},ref:s}))}},8346:(e,n,a)=>{a.d(n,{MX:()=>m,N1:()=>t,Qq:()=>l,SA:()=>u,YO:()=>s,Z1:()=>r,gU:()=>o,wP:()=>d,yq:()=>i});const t='\x3c!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas --\x3e\n<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>Document</title>\n    </head>\n    <body>\n        Hello, World!\n    </body>\n</html>',i='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h2>Berikut ini adalah contoh paragraf</h2>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet\n            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus\n            massa venenatis lorem, malesuada rutrum ligula justo id lacus.\n        </p>\n        <p>\n            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.\n            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.\n        </p>\n    </body>\n</html>\n',l='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h1>Saya adalah h1</h1>\n        <h2>Saya adalah h2</h2>\n        <h3>Saya adalah h3</h3>\n        <h4>Saya adalah h4</h4>\n        <h5>Saya adalah h5</h5>\n        <h6>Saya adalah h6</h6>\n    </body>\n</html>\n',r='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <p>\n            <a href="#">Halo, saya adalah link</a>\n        </p>\n        <p>\n            \x3c!-- Target _parent digunakan karena kode output di render dalam sebuah iframe --\x3e\n            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>\n        </p>\n        <p>\n            \x3c!-- Target _blank akan membuka link pada page baru --\x3e\n            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>\n        </p>\n        <p>\n            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>\n        </p>\n    </body>\n</html>\n',o='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <p>Clickable Button</p>\n        <a href="https://google.com" target="_blank">\n            <button>Button juga dapat dirubah menjadi link</button>\n        </a>\n        <p>Clickable Image</p>\n        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">\n            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />\n        </a>\n    </body>\n</html>\n',s='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Ini adalah gambar</h4>\n        <img src="https://via.placeholder.com/300x150" />\n\n        <h4>Gambar ini tidak bisa di load</h4>\n        <img src="lasflkasjf" alt="Unloadable Image" />\n\n        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>\n        <img src="https://via.placeholder.com/300x150" width="250px" />\n    </body>\n</html>\n',m='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Button dengan sendirinya tidak melakukan apapun</h4>\n        <button>Does Nothing</button>\n\n        <h4>Button ini adalah link</h4>\n        <a href="https://google.com/" target="_blank">\n            <button>Open Google</button>\n        </a>\n\n        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>\n        <button id="click-me">Click Me</button>\n        <script>\n            // Line ini akan assign sebuah arrow function ke event onclick pada button.\n            // () => alert("Clicked!") memiliki arti "buatlah fungsi\n            // tak bernama yang membuat popup dengan tulisan \'Clicked!\'\n            document.getElementById("click-me").onclick = () => alert("Clicked!")\n        <\/script>\n    </body>\n</html>\n',u='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        \x3c!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen --\x3e\n        <div style="background-color: lightgrey;">\n            <h3>Artikel 1</h3>\n            <p>Lorem ipsum yadda yadda this is the first article</p>\n        </div>\n        \x3c!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya --\x3e\n        <div style="background-color: grey; margin-top: 2rem">\n            <h3>Artikel 2</h3>\n            <p>Lorem ipsum yadda yadda this is the second article</p>\n        </div>\n    </body>\n</html>\n',d='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Kelompok ini akan tersusun secara vertikal</h4>\n        <div>\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-top: 2rem">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n\n        \x3c!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes --\x3e\n        <h4>Kelompok ini akan tersusun secara horizontal</h4>\n        <div style="display: flex; align-items: center;">\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-left: 1rem;">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n    </body>\n</html>\n'},5568:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>h});var t=a(7462),i=(a(7294),a(3905)),l=a(5488),r=a(5162),o=a(7654),s=a(8346);const m={sidebar_position:6,sidebar_label:"<div> Container",title:"<div> Container"},u="&lt;div&gt; - Container",d={unversionedId:"html/html-elements/html-div-element",id:"html/html-elements/html-div-element",title:"<div> Container",description:"Elemen div atau container yang dapat digunakan untuk menggabungkan beberapa elemen kedalam satu elemen gabungan.",source:"@site/docs/html/html-elements/html-div-element.mdx",sourceDirName:"html/html-elements",slug:"/html/html-elements/html-div-element",permalink:"/pbp0/docs/html/html-elements/html-div-element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/html/html-elements/html-div-element.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"<div> Container",title:"<div> Container"},sidebar:"tutorialSidebar",previous:{title:"<button> Button",permalink:"/pbp0/docs/html/html-elements/html-button-element"},next:{title:"More Elements",permalink:"/pbp0/docs/html/more-elements"}},c={},h=[{value:"Beberapa Fungsi Container",id:"beberapa-fungsi-container",level:3},{value:"Contoh Penggunaan",id:"contoh-penggunaan",level:3}],p={toc:h};function g(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"div---container"},"<","div",">"," - Container"),(0,i.kt)("p",null,"Elemen div atau container yang dapat digunakan untuk menggabungkan beberapa elemen kedalam satu elemen gabungan."),(0,i.kt)("p",null,"Elemen ini ",(0,i.kt)("strong",{parentName:"p"},"sangat berguna")," dalam mengimplementasikan layout yang lebih kompleks karena memungkinkan kita mengaplikasikan CSS style untuk positioning dan penampilan ke masing-masing kelompok komponen."),(0,i.kt)("p",null,"Tanpa menggunakan container, akan ",(0,i.kt)("strong",{parentName:"p"},"sangat susah")," atau bahkan ",(0,i.kt)("strong",{parentName:"p"},"tidak mungkin")," untuk mengatur posisi sekelompok elemen pada halaman dengan rapih, sehingga elemen ini adalah elemen yang fundamental. "),(0,i.kt)("h3",{id:"beberapa-fungsi-container"},"Beberapa Fungsi Container"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mempermudah management elemen pada sebuah page yang kompleks."),(0,i.kt)("li",{parentName:"ul"},"Memungkinkan kita membagi sebuah halaman menjadi beberapa bagian terpisah."),(0,i.kt)("li",{parentName:"ul"},"Bersama dengan CSS dapat digunakan untuk memposisikan sekelompok elemen relatif terhadap halaman (misal ke bagian tengah halaman).")),(0,i.kt)("h3",{id:"contoh-penggunaan"},"Contoh Penggunaan"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"example1",label:"Mengelompokkan Elemen",default:!0,mdxType:"TabItem"},(0,i.kt)(o.Z,{defaultValue:s.SA,mdxType:"CodeEditor"})),(0,i.kt)(r.Z,{value:"example2",label:"Memposisikan Sekelompok Elemen",mdxType:"TabItem"},(0,i.kt)(o.Z,{defaultValue:s.wP,mdxType:"CodeEditor"}))))}g.isMDXComponent=!0}}]);