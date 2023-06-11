
// const btn = document.querySelector("btn");
// const btnText = document.querySelector(".btn_text");    

// btn.addEventListener("click", ()=> {
//   console.log("click");
// })


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    const btn = document.getElementById("btn");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        // alert("formulario enviado");
        
        btn.disabled = true;

        setTimeout(() => {
            btn.disabled = false;
            form.reset();
        }, 2000);
    });
});

