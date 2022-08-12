"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5699],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>h});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),u=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},s=function(e){var a=u(e.components);return t.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=i,p=c["".concat(d,".").concat(h)]||c[h]||m[h]||l;return n?t.createElement(p,r(r({ref:a},s),{},{components:n})):t.createElement(p,r({ref:a},s))}));function h(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,a,n)=>{n.d(a,{Z:()=>r});var t=n(7294),i=n(6010);const l="tabItem_Ymn6";function r(e){let{children:a,hidden:n,className:r}=e;return t.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n},a)}},5488:(e,a,n)=>{n.d(a,{Z:()=>h});var t=n(7462),i=n(7294),l=n(6010),r=n(2389),o=n(7392),d=n(7094),u=n(2466);const s="tabList__CuJ",m="tabItem_LNqP";function c(e){var a,n;const{lazy:r,block:c,defaultValue:h,values:p,groupId:g,className:b}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=p?p:k.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),f=(0,o.l)(y,((e,a)=>e.value===a.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===h?h:null!=(a=null!=h?h:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?a:k[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:w}=(0,d.U)(),[E,U]=(0,i.useState)(v),A=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=g){const e=T[g];null!=e&&e!==E&&y.some((a=>a.value===e))&&U(e)}const x=e=>{const a=e.currentTarget,n=A.indexOf(a),t=y[n].value;t!==E&&(N(a),U(t),null!=g&&w(g,String(t)))},O=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{var t;const a=A.indexOf(e.currentTarget)+1;n=null!=(t=A[a])?t:A[0];break}case"ArrowLeft":{var i;const a=A.indexOf(e.currentTarget)-1;n=null!=(i=A[a])?i:A[A.length-1];break}}null==(a=n)||a.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",s)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},y.map((e=>{let{value:a,label:n,attributes:r}=e;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,key:a,ref:e=>A.push(e),onKeyDown:O,onFocus:x,onClick:x},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":E===a})}),null!=n?n:a)}))),r?(0,i.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==E})))))}function h(e){const a=(0,r.Z)();return i.createElement(c,(0,t.Z)({key:String(a)},e))}},7654:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(7294),i=n(9604);const l=e=>{let{defaultValue:a,editorHeight:n="40vh",outputHeight:l="30vh"}=e;const[r,o]=t.useState(a),d=t.useRef(null);return t.useEffect((()=>{null!=d&&(d.current.src="data:text/html;charset=utf-8,"+encodeURIComponent(r))}),[r]),t.createElement("div",{style:{marginBottom:"1rem"}},t.createElement("div",{style:{borderRadius:"0.5rem",overflow:"hidden"}},t.createElement(i.ZP,{height:n,defaultLanguage:"html",defaultValue:a,theme:"vs-dark",onChange:e=>o(e),loading:"Loading Code Editor...",options:{minimap:{enabled:!1}}})),t.createElement("h4",{style:{marginTop:"1rem"}},"Output:"),t.createElement("iframe",{style:{width:"100%",minHeight:l,backgroundColor:"white",borderRadius:"0.5rem"},ref:d}))}},8346:(e,a,n)=>{n.d(a,{MX:()=>u,N1:()=>t,Qq:()=>l,SA:()=>s,YO:()=>d,Z1:()=>r,gU:()=>o,wP:()=>m,yq:()=>i});const t='\x3c!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas --\x3e\n<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>Document</title>\n    </head>\n    <body>\n        Hello, World!\n    </body>\n</html>',i='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h2>Berikut ini adalah contoh paragraf</h2>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet\n            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus\n            massa venenatis lorem, malesuada rutrum ligula justo id lacus.\n        </p>\n        <p>\n            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.\n            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.\n        </p>\n    </body>\n</html>\n',l='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h1>Saya adalah h1</h1>\n        <h2>Saya adalah h2</h2>\n        <h3>Saya adalah h3</h3>\n        <h4>Saya adalah h4</h4>\n        <h5>Saya adalah h5</h5>\n        <h6>Saya adalah h6</h6>\n    </body>\n</html>\n',r='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <p>\n            <a href="#">Halo, saya adalah link</a>\n        </p>\n        <p>\n            \x3c!-- Target _parent digunakan karena kode output di render dalam sebuah iframe --\x3e\n            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>\n        </p>\n        <p>\n            \x3c!-- Target _blank akan membuka link pada page baru --\x3e\n            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>\n        </p>\n        <p>\n            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>\n        </p>\n    </body>\n</html>\n',o='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <p>Clickable Button</p>\n        <a href="https://google.com" target="_blank">\n            <button>Button juga dapat dirubah menjadi link</button>\n        </a>\n        <p>Clickable Image</p>\n        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">\n            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />\n        </a>\n    </body>\n</html>\n',d='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Ini adalah gambar</h4>\n        <img src="https://via.placeholder.com/300x150" />\n\n        <h4>Gambar ini tidak bisa di load</h4>\n        <img src="lasflkasjf" alt="Unloadable Image" />\n\n        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>\n        <img src="https://via.placeholder.com/300x150" width="250px" />\n    </body>\n</html>\n',u='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Button dengan sendirinya tidak melakukan apapun</h4>\n        <button>Does Nothing</button>\n\n        <h4>Button ini adalah link</h4>\n        <a href="https://google.com/" target="_blank">\n            <button>Open Google</button>\n        </a>\n\n        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>\n        <button id="click-me">Click Me</button>\n        <script>\n            // Line ini akan assign sebuah arrow function ke event onclick pada button.\n            // () => alert("Clicked!") memiliki arti "buatlah fungsi\n            // tak bernama yang membuat popup dengan tulisan \'Clicked!\'\n            document.getElementById("click-me").onclick = () => alert("Clicked!")\n        <\/script>\n    </body>\n</html>\n',s='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        \x3c!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen --\x3e\n        <div style="background-color: lightgrey;">\n            <h3>Artikel 1</h3>\n            <p>Lorem ipsum yadda yadda this is the first article</p>\n        </div>\n        \x3c!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya --\x3e\n        <div style="background-color: grey; margin-top: 2rem">\n            <h3>Artikel 2</h3>\n            <p>Lorem ipsum yadda yadda this is the second article</p>\n        </div>\n    </body>\n</html>\n',m='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Kelompok ini akan tersusun secara vertikal</h4>\n        <div>\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-top: 2rem">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n\n        \x3c!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes --\x3e\n        <h4>Kelompok ini akan tersusun secara horizontal</h4>\n        <div style="display: flex; align-items: center;">\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-left: 1rem;">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n    </body>\n</html>\n'},7110:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>h});var t=n(7462),i=(n(7294),n(3905)),l=n(5488),r=n(5162),o=n(7654),d=n(8346);const u={sidebar_position:3,sidebar_label:"<a> Anchor",title:"<a> Anchor"},s="&lt;a&gt; - Anchor",m={unversionedId:"html/html-elements/html-a-element",id:"html/html-elements/html-a-element",title:"<a> Anchor",description:"Elemen anchor adalah elemen yang dapat digunakan untuk membuat link ke situs lain di internet (termasuk situs yang sama dengan page yang sedang dikunjungi). Elemen anchor dapat didefinisikan dengan menggunakan tag ``",source:"@site/docs/html/html-elements/html-a-element.mdx",sourceDirName:"html/html-elements",slug:"/html/html-elements/html-a-element",permalink:"/pbp0/docs/html/html-elements/html-a-element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/html/html-elements/html-a-element.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"<a> Anchor",title:"<a> Anchor"},sidebar:"tutorialSidebar",previous:{title:"<h1> Heading",permalink:"/pbp0/docs/html/html-elements/html-h-element"},next:{title:"<img> Image",permalink:"/pbp0/docs/html/html-elements/html-img-element"}},c={},h=[{value:"Daftar Atribut Anchor Tag:",id:"daftar-atribut-anchor-tag",level:4},{value:"Contoh Penggunaan",id:"contoh-penggunaan",level:3}],p={toc:h};function g(e){let{components:a,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a---anchor"},"<","a",">"," - Anchor"),(0,i.kt)("p",null,"Elemen anchor adalah elemen yang dapat digunakan untuk membuat link ke situs lain di internet (termasuk situs yang sama dengan page yang sedang dikunjungi). Elemen anchor dapat didefinisikan dengan menggunakan tag ",(0,i.kt)("inlineCode",{parentName:"p"},"<a></a>")),(0,i.kt)("p",null,"Link yang ingin dituju oleh elemen anchor dapat didefinisikan dengan memberikan atribut href ke anchor tag yang nilainya berupa string URL."),(0,i.kt)("h4",{id:"daftar-atribut-anchor-tag"},"Daftar Atribut Anchor Tag:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"href"),": URL yang ingin dituju"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target"),": Target window dimana halaman akan dibuka. Dapat memiliki nilai sebagai berikut:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_self"),": Buka link pada halaman yang sama (default)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_blank"),": Buka link pada halaman baru."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_parent"),": Buka link pada halaman ",(0,i.kt)("em",{parentName:"li"},"parent")," (khusus untuk iframe).")))),(0,i.kt)("h3",{id:"contoh-penggunaan"},"Contoh Penggunaan"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"example1",label:"Elemen teks sebagai link",default:!0,mdxType:"TabItem"},(0,i.kt)(o.Z,{defaultValue:d.Z1,mdxType:"CodeEditor"})),(0,i.kt)(r.Z,{value:"example2",label:"Elemen non-teks sebagai link",mdxType:"TabItem"},(0,i.kt)(o.Z,{defaultValue:d.gU,mdxType:"CodeEditor"}))))}g.isMDXComponent=!0}}]);