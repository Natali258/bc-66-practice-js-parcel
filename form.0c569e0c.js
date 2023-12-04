document.querySelector(".js-contact-form").addEventListener("input",(e=>{const{name:t,value:o}=e.target;let a=localStorage.getItem("feedbackForm");console.log(a),a=a?JSON.parse(a):{},a[t]=o,localStorage.setItem("feedbackForm",JSON.stringify(a))}));
//# sourceMappingURL=form.0c569e0c.js.map
