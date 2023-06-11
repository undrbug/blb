
// const btn = document.querySelector("btn");
// const btnText = document.querySelector(".btn_text");    

// btn.addEventListener("click", ()=> {
//   console.log("click");
// })


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    const btn = document.getElementById("btn");
    const hidden = document.getElementById("hidden");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        btn.innerText = "Enviando...";
        setTimeout(() => {
            setTimeout(() => {
                btn.innerText = "Enviado!"
            }, 1000);
            form.reset();
            setTimeout(() => {
                btn.innerText = "Enviar"
            }, 2000);
        }, 2000);
    });
});
