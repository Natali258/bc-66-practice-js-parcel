!function(){function e(e){let o=document.createElement("script");return o.setAttribute("src",e),document.body.append(o),new Promise((e,s)=>{o.addEventListener("load",()=>{e(o)}),o.addEventListener("error",()=>{s("error")})})}e("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js").then(o=>(console.log("Download success ",o),e("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"))).then(o=>(console.log("Download success ",o),e("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"))).then(e=>{console.log("Download succes ",e)}).catch(e=>{console.log(e)})}();
//# sourceMappingURL=index.94139623.js.map
