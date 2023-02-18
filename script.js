const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input");
generatebtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");



generatebtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generatebtn.innerText = "Generating QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrValue}`;
    qrImg.addEventListener("load", () =>{
    wrapper.classList.add("active");
   });
});