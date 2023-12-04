document.querySelector(".js-contact-form").addEventListener("input",(function(e){var t=e.target,o=t.name,a=t.value,r=localStorage.getItem("feedbackForm");console.log(r),(r=r?JSON.parse(r):{})[o]=a,localStorage.setItem("feedbackForm",JSON.stringify(r))}));
//# sourceMappingURL=form.1898e8be.js.map
