var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,s.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=s);var n=s("iQIUW");const i=(e,t)=>{const r=new URLSearchParams({query:e,page:t,per_page:20,color:"black_and_white",orientation:"portrait",client_id:"LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc"});return fetch(`https://api.unsplash.com/search/photos?${r}`).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)}))},a=e=>e.map((({urls:e,alt_description:t})=>`<li class="gallery__item">\n    <img src="${e.small}" alt="${t}" class="gallery-img">\n</li>`)).join("");let o=1,l="";const d=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=document.querySelector(".js-load-more");d.addEventListener("submit",(e=>{e.preventDefault();const{value:t}=e.target.elements.query;t?(o=1,l=t,c.innerHTML="",u.classList.add("is-hidden"),i(l,o).then((e=>{if(0===e.total)throw new Error("we not find any photos");const t=a(e.results);c.insertAdjacentHTML("beforeend",t),o<Math.ceil(e.total/20)&&u.classList.remove("is-hidden")})).catch((e=>{n.Notify.failure(e.message),u.classList.add("is-hidden")}))):n.Notify.failure("Please, input some text!")}));u.addEventListener("click",(()=>{o+=1,i(l,o).then((e=>{const t=a(e.results);c.insertAdjacentHTML("beforeend",t),o===Math.ceil(e.total/20)&&u.classList.add("is-hidden")})).catch((e=>{n.Notify.failure(e.message),u.classList.add("is-hidden")}))}));
//# sourceMappingURL=gallery.382fe327.js.map
