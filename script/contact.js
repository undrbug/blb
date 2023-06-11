
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
        console.log(btn.value);
        setTimeout(() => {
            setTimeout(() => {
                btn.innerText = "Enviado!"
            }, 1000);
            console.log(btn.value);
            form.reset();
        }, 2000);
    });
});

