!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var i=r("h6c0i"),a=function(e,t){var n=new URLSearchParams({query:e,page:t,per_page:20,color:"black_and_white",orientation:"portrait",client_id:"LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc"});return fetch("".concat("https://api.unsplash.com","/search/photos?").concat(n)).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)}))},o=function(e){return e.map((function(e){var t=e.urls,n=e.alt_description;return'<li class="gallery__item">\n    <img src="'.concat(t.small,'" alt="').concat(n,'" class="gallery-img">\n</li>')})).join("")},s=1,c="",l=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),u=document.querySelector(".js-load-more");l.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.query.value;t?(s=1,c=t,d.innerHTML="",u.classList.add("is-hidden"),a(c,s).then((function(e){if(0===e.total)throw new Error("we not find any photos");var t=o(e.results);d.insertAdjacentHTML("beforeend",t),s<Math.ceil(e.total/20)&&u.classList.remove("is-hidden")})).catch((function(e){i.Notify.failure(e.message),u.classList.add("is-hidden")}))):i.Notify.failure("Please, input some text!")}));u.addEventListener("click",(function(){a(c,s+=1).then((function(e){var t=o(e.results);d.insertAdjacentHTML("beforeend",t),s===Math.ceil(e.total/20)&&u.classList.add("is-hidden")})).catch((function(e){i.Notify.failure(e.message),u.classList.add("is-hidden")}))}))}();
//# sourceMappingURL=gallery.5b5dc32f.js.map
