let e;var t={save:(e,t)=>{try{let a=JSON.stringify(t);localStorage.setItem(e,a)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}};const a=document.querySelector(".js-contact-form");(e=t.load("feedbackForm"))&&Object.entries(e).forEach(([e,t])=>{a.elements[e].value=t}),a.addEventListener("input",e=>{let{name:a,value:r}=e.target,o=t.load("feedbackForm")||{};o[a]=r,t.save("feedbackForm",o)}),a.addEventListener("submit",e=>{e.preventDefault();let{name:t,email:a,message:r}=e.target.elements;console.log({name:t.value,email:a.value,message:r.value}),localStorage.removeItem("feedbackForm"),e.target.reset()});
//# sourceMappingURL=form.7dd3b5bd.js.map
