
var qrcode=document.getElementById('qrcode');
var user_input=document.getElementById('name');
var gen_btn=document.getElementById('form-btn');
var error=document.getElementById('error');
qrcode.style.display="none";
error.textContent="";
gen_btn.addEventListener("click",()=>{
    if(user_input.value==""){
        error.textContent="Please enter a value";
    }
    else{
        error.textContent="";
        qrcode.style.display="block";
        var url=`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${user_input.value}`;
        qrcode.src=url;
    }
    
    
})