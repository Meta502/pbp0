"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3102],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>c});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),m=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},s=function(e){var a=m(e.components);return t.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),h=m(n),c=i,p=h["".concat(o,".").concat(c)]||h[c]||u[c]||r;return n?t.createElement(p,l(l({ref:a},s),{},{components:n})):t.createElement(p,l({ref:a},s))}));function c(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var m=2;m<r;m++)l[m]=n[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7654:(e,a,n)=>{n.d(a,{Z:()=>r});var t=n(7294),i=n(9604);const r=e=>{let{defaultValue:a,editorHeight:n="40vh",outputHeight:r="30vh"}=e;const[l,d]=t.useState(a),o=t.useRef(null);return t.useEffect((()=>{null!=o&&(o.current.src="data:text/html;charset=utf-8,"+encodeURIComponent(l))}),[l]),t.createElement("div",{style:{marginBottom:"1rem"}},t.createElement("div",{style:{borderRadius:"0.5rem",overflow:"hidden"}},t.createElement(i.ZP,{height:n,defaultLanguage:"html",defaultValue:a,theme:"vs-dark",onChange:e=>d(e),loading:"Loading Code Editor...",options:{minimap:{enabled:!1}}})),t.createElement("h4",{style:{marginTop:"1rem"}},"Output:"),t.createElement("iframe",{style:{width:"100%",minHeight:r,backgroundColor:"white",borderRadius:"0.5rem"},ref:o}))}},8346:(e,a,n)=>{n.d(a,{MX:()=>m,N1:()=>t,Qq:()=>r,SA:()=>s,YO:()=>o,Z1:()=>l,gU:()=>d,wP:()=>u,yq:()=>i});const t='\x3c!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas --\x3e\n<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>Document</title>\n    </head>\n    <body>\n        Hello, World!\n    </body>\n</html>',i='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h2>Berikut ini adalah contoh paragraf</h2>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet\n            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus\n            massa venenatis lorem, malesuada rutrum ligula justo id lacus.\n        </p>\n        <p>\n            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.\n            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.\n        </p>\n    </body>\n</html>\n',r='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h1>Saya adalah h1</h1>\n        <h2>Saya adalah h2</h2>\n        <h3>Saya adalah h3</h3>\n        <h4>Saya adalah h4</h4>\n        <h5>Saya adalah h5</h5>\n        <h6>Saya adalah h6</h6>\n    </body>\n</html>\n',l='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <p>\n            <a href="#">Halo, saya adalah link</a>\n        </p>\n        <p>\n            \x3c!-- Target _parent digunakan karena kode output di render dalam sebuah iframe --\x3e\n            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>\n        </p>\n        <p>\n            \x3c!-- Target _blank akan membuka link pada page baru --\x3e\n            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>\n        </p>\n        <p>\n            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>\n        </p>\n    </body>\n</html>\n',d='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <p>Clickable Button</p>\n        <a href="https://google.com" target="_blank">\n            <button>Button juga dapat dirubah menjadi link</button>\n        </a>\n        <p>Clickable Image</p>\n        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">\n            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />\n        </a>\n    </body>\n</html>\n',o='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Ini adalah gambar</h4>\n        <img src="https://via.placeholder.com/300x150" />\n\n        <h4>Gambar ini tidak bisa di load</h4>\n        <img src="lasflkasjf" alt="Unloadable Image" />\n\n        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>\n        <img src="https://via.placeholder.com/300x150" width="250px" />\n    </body>\n</html>\n',m='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Button dengan sendirinya tidak melakukan apapun</h4>\n        <button>Does Nothing</button>\n\n        <h4>Button ini adalah link</h4>\n        <a href="https://google.com/" target="_blank">\n            <button>Open Google</button>\n        </a>\n\n        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>\n        <button id="click-me">Click Me</button>\n        <script>\n            // Line ini akan assign sebuah arrow function ke event onclick pada button.\n            // () => alert("Clicked!") memiliki arti "buatlah fungsi\n            // tak bernama yang membuat popup dengan tulisan \'Clicked!\'\n            document.getElementById("click-me").onclick = () => alert("Clicked!")\n        <\/script>\n    </body>\n</html>\n',s='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        \x3c!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen --\x3e\n        <div style="background-color: lightgrey;">\n            <h3>Artikel 1</h3>\n            <p>Lorem ipsum yadda yadda this is the first article</p>\n        </div>\n        \x3c!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya --\x3e\n        <div style="background-color: grey; margin-top: 2rem">\n            <h3>Artikel 2</h3>\n            <p>Lorem ipsum yadda yadda this is the second article</p>\n        </div>\n    </body>\n</html>\n',u='\x3c!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    </head>\n    <body>\n        <h4>Kelompok ini akan tersusun secara vertikal</h4>\n        <div>\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-top: 2rem">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n\n        \x3c!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes --\x3e\n        <h4>Kelompok ini akan tersusun secara horizontal</h4>\n        <div style="display: flex; align-items: center;">\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-left: 1rem;">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n    </body>\n</html>\n'},6592:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var t=n(7462),i=(n(7294),n(3905)),r=n(7654),l=n(8346);const d={sidebar_position:2,sidebar_label:"Struktur Dasar Dokumen"},o="HTML - Struktur Dasar",m={unversionedId:"html/basic-html-structure",id:"html/basic-html-structure",title:"HTML - Struktur Dasar",description:"Sebuah dokumen HTML tersusun atas elemen-elemen yang didefinisikan menggunakan sebuah HTML tag. HTML tag pada umumnya selalu ditulis secara berpasangan, dimana definisi sebuah elemen dimulai dengan opening tag yang memiliki nama dari elemen yang diapit dengan simbol panah (contoh: `) dan ditutup dengan closing tag yang berbentuk mirip dengan opening tag, namun diawali dengan `), dengan konten yang ingin kalian tampilkan pada website berada di antara kedua tag tersebut.",source:"@site/docs/html/basic-html-structure.mdx",sourceDirName:"html",slug:"/html/basic-html-structure",permalink:"/pbp0/docs/html/basic-html-structure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/html/basic-html-structure.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Struktur Dasar Dokumen"},sidebar:"tutorialSidebar",previous:{title:"What Is HTML?",permalink:"/pbp0/docs/html/what-is-html"},next:{title:"<p> Paragraph",permalink:"/pbp0/docs/html/html-elements/html-p-element"}},s={},u=[{value:"Contoh Halaman HTML Sederhana",id:"contoh-halaman-html-sederhana",level:3}],h={toc:u};function c(e){let{components:a,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"html---struktur-dasar"},"HTML - Struktur Dasar"),(0,i.kt)("p",null,"Sebuah dokumen HTML tersusun atas elemen-elemen yang didefinisikan menggunakan sebuah ",(0,i.kt)("strong",{parentName:"p"},"HTML tag"),". HTML tag pada umumnya selalu ditulis secara berpasangan, dimana definisi sebuah elemen dimulai dengan ",(0,i.kt)("em",{parentName:"p"},"opening tag")," yang memiliki nama dari elemen yang diapit dengan simbol panah (contoh: ",(0,i.kt)("inlineCode",{parentName:"p"},"<html>"),") dan ditutup dengan ",(0,i.kt)("em",{parentName:"p"},"closing tag")," yang berbentuk mirip dengan opening tag, namun diawali dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"</")," (contoh: ",(0,i.kt)("inlineCode",{parentName:"p"},"</html>"),"), dengan konten yang ingin kalian tampilkan pada website berada di antara kedua tag tersebut."),(0,i.kt)("h3",{id:"contoh-halaman-html-sederhana"},"Contoh Halaman HTML Sederhana"),(0,i.kt)(r.Z,{defaultValue:l.N1,mdxType:"CodeEditor"}),(0,i.kt)("p",null,"Setiap elemen pada dokumen tersebut mewakili sebuah elemen pada halaman website yang akan di-render. Berikut ini adalah kegunaan dari setiap elemen yang ada pada dokumen tersebut:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<html>"),": Elemen utama dari dokumen yang menjadi ",(0,i.kt)("em",{parentName:"li"},"parent")," dari semua elemen lain-nya"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<head>"),": Menampung informasi tambahan mengenai website.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<meta>"),": Mendefinisikan informasi tambahan yang digunakan oleh browser saat proses ",(0,i.kt)("em",{parentName:"li"},"rendering"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<title>"),": Mendefinisikan title dari halaman website."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<body>"),": Menampung elemen-elemen yang mendefinisikan konten dan layout dari website.")))}c.isMDXComponent=!0}}]);