
const qrcode=document.getElementById('qrcode');
const user_input=document.getElementById('name');
const gen_btn=document.getElementById('form-btn');
const error=document.getElementById('error');
const scantext=document.getElementById('scan-text');

const resetbtn=document.getElementById('reset-btn');


qrcode.style.display="none";
error.textContent="";
// generate button functionality
gen_btn.addEventListener("click",()=>{
    if(user_input.value==""){
        error.textContent="Oops! Please enter a text or url";
    }
    else{
        error.textContent="";
        qrcode.style.display="block";
        url=`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${user_input.value}`;
        qrcode.src=url;
        scantext.innerHTML="scan this qr code."
        
        // resetbutton functuionality
        resetbtn.addEventListener("click",()=>{
            qrcode.src="";
            qrcode.style.display="none";
            scantext.innerHTML="";
        });
    } 
    
})

