let qrtext = document.getElementById('qrtext');
let imgbox = document.getElementById('imgbox');
let qrimg = document.getElementById('qrimg');

function generateQr(){
    if(qrtext.value.length > 0){
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    imgbox.classList.add("show-img");
    }
};    