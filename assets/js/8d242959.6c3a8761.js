"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3467],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>p});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=t.createContext({}),h=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=h(e.components);return t.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=h(a),p=i,u=c["".concat(d,".").concat(p)]||c[p]||s[p]||r;return a?t.createElement(u,l(l({ref:n},m),{},{components:a})):t.createElement(u,l({ref:n},m))}));function p(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var h=2;h<r;h++)l[h]=a[h];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7654:(e,n,a)=>{a.d(n,{Z:()=>r});var t=a(7294),i=a(9604);const r=e=>{let{defaultValue:n,editorHeight:a="40vh",outputHeight:r="30vh"}=e;const[l,o]=t.useState(n),d=t.useRef(null);return t.useEffect((()=>{null!=d&&(d.current.src="data:text/html;charset=utf-8,"+encodeURIComponent(l))}),[l]),t.createElement("div",{style:{marginBottom:"1rem"}},t.createElement("div",{style:{borderRadius:"0.5rem",overflow:"hidden"}},t.createElement(i.ZP,{height:a,defaultLanguage:"html",defaultValue:n,theme:"vs-dark",onChange:e=>o(e),loading:"Loading Code Editor...",options:{minimap:{enabled:!1}}})),t.createElement("h4",{style:{marginTop:"1rem"}},"Output:"),t.createElement("iframe",{style:{width:"100%",minHeight:r,backgroundColor:"white",borderRadius:"0.5rem"},ref:d}))}},8346:(e,n,a)=>{a.d(n,{MX:()=>h,N1:()=>t,Qq:()=>r,SA:()=>m,YO:()=>d,Z1:()=>l,gU:()=>o,wP:()=>s,yq:()=>i});const t='\x3c!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas --\x3e\n<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>Document</title>\n    </head>\n    <body>\n        Hello, World!\n    </body>\n</html>',i='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h2>Berikut ini adalah contoh paragraf</h2>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet\n            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus\n            massa venenatis lorem, malesuada rutrum ligula justo id lacus.\n        </p>\n        <p>\n            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.\n            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.\n        </p>\n    </body>\n</html>\n',r='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h1>Saya adalah h1</h1>\n        <h2>Saya adalah h2</h2>\n        <h3>Saya adalah h3</h3>\n        <h4>Saya adalah h4</h4>\n        <h5>Saya adalah h5</h5>\n        <h6>Saya adalah h6</h6>\n    </body>\n</html>\n',l='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <p>\n            <a href="#">Halo, saya adalah link</a>\n        </p>\n        <p>\n            \x3c!-- Target _parent digunakan karena kode output di render dalam sebuah iframe --\x3e\n            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>\n        </p>\n        <p>\n            \x3c!-- Target _blank akan membuka link pada page baru --\x3e\n            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>\n        </p>\n        <p>\n            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>\n        </p>\n    </body>\n</html>\n',o='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <p>Clickable Button</p>\n        <a href="https://google.com" target="_blank">\n            <button>Button juga dapat dirubah menjadi link</button>\n        </a>\n        <p>Clickable Image</p>\n        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">\n            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />\n        </a>\n    </body>\n</html>\n',d='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Ini adalah gambar</h4>\n        <img src="https://via.placeholder.com/300x150" />\n\n        <h4>Gambar ini tidak bisa di load</h4>\n        <img src="lasflkasjf" alt="Unloadable Image" />\n\n        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>\n        <img src="https://via.placeholder.com/300x150" width="250px" />\n    </body>\n</html>\n',h='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Button dengan sendirinya tidak melakukan apapun</h4>\n        <button>Does Nothing</button>\n\n        <h4>Button ini adalah link</h4>\n        <a href="https://google.com/" target="_blank">\n            <button>Open Google</button>\n        </a>\n\n        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>\n        <button id="click-me">Click Me</button>\n        <script>\n            // Line ini akan assign sebuah arrow function ke event onclick pada button.\n            // () => alert("Clicked!") memiliki arti "buatlah fungsi\n            // tak bernama yang membuat popup dengan tulisan \'Clicked!\'\n            document.getElementById("click-me").onclick = () => alert("Clicked!")\n        <\/script>\n    </body>\n</html>\n',m='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        \x3c!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen --\x3e\n        <div style="background-color: lightgrey;">\n            <h3>Artikel 1</h3>\n            <p>Lorem ipsum yadda yadda this is the first article</p>\n        </div>\n        \x3c!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya --\x3e\n        <div style="background-color: grey; margin-top: 2rem">\n            <h3>Artikel 2</h3>\n            <p>Lorem ipsum yadda yadda this is the second article</p>\n        </div>\n    </body>\n</html>\n',s='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Kelompok ini akan tersusun secara vertikal</h4>\n        <div>\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-top: 2rem">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n\n        \x3c!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes --\x3e\n        <h4>Kelompok ini akan tersusun secara horizontal</h4>\n        <div style="display: flex; align-items: center;">\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-left: 1rem;">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n    </body>\n</html>\n'},1244:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>s});var t=a(7462),i=(a(7294),a(3905)),r=a(7654),l=a(8346);const o={sidebar_position:2,sidebar_label:"<h1> Heading",title:"<h1> Heading"},d="&lt;h1&gt; - Heading",h={unversionedId:"html/html-elements/html-h-element",id:"html/html-elements/html-h-element",title:"<h1> Heading",description:"Elemen heading adalah elemen teks berukuran besar yang dapat digunakan sebagai title atau awalan dari section pada website. Elemen heading dapat didefinisikan dengan menggunakan tag ``.",source:"@site/docs/html/html-elements/html-h-element.mdx",sourceDirName:"html/html-elements",slug:"/html/html-elements/html-h-element",permalink:"/pbp0/docs/html/html-elements/html-h-element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/html/html-elements/html-h-element.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"<h1> Heading",title:"<h1> Heading"},sidebar:"tutorialSidebar",previous:{title:"<p> Paragraph",permalink:"/pbp0/docs/html/html-elements/html-p-element"},next:{title:"<a> Anchor",permalink:"/pbp0/docs/html/html-elements/html-a-element"}},m={},s=[{value:"Contoh Penggunaan",id:"contoh-penggunaan",level:3}],c={toc:s};function p(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"h1---heading"},"<","h1",">"," - Heading"),(0,i.kt)("p",null,"Elemen heading adalah elemen teks berukuran besar yang dapat digunakan sebagai title atau awalan dari section pada website. Elemen heading dapat didefinisikan dengan menggunakan tag ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1></h1>"),"."),(0,i.kt)("p",null,"Selain ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1></h1>"),", terdapat pula variasi-variasi lain dari heading, dimana angka yang lebih besar menandakan heading yang berukuran lebih kecil."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ukuran-ukuran heading yang valid:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h2>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h3>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h4>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h5>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h6>")),(0,i.kt)("h3",{id:"contoh-penggunaan"},"Contoh Penggunaan"),(0,i.kt)(r.Z,{defaultValue:l.Qq,mdxType:"CodeEditor"}))}p.isMDXComponent=!0}}]);