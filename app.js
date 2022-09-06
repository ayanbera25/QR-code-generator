
var qrcode=document.getElementById('qrcode');
var user_input=document.getElementById('name');
var gen_btn=document.getElementById('form-btn');
var error=document.getElementById('error');
var scantext=document.getElementById('scan-text');
var download_qr = document.getElementById('download-qr');
var download_btn = document.getElementById('download-btn');

qrcode.style.display="none";
error.textContent="";
gen_btn.addEventListener("click",()=>{
    if(user_input.value==""){
        error.textContent="Please enter a text or url";
    }
    else{
        error.textContent="";
        qrcode.style.display="block";
        url=`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${user_input.value}`;
        qrcode.src=url;
        scantext.innerHTML="scan this qr code."
        download_btn.style.display="block";
        download_btn.addEventListener("click",()=>{
            download_qr.href=url+".jpeg";
            download_qr.download=user_input.value +".jpeg";
        })
    } 
    
})

