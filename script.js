const qrText=document.getElementById('qrText');
const sizes=document.getElementById('sizes');
let size=sizes.value;
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');

const qrContainer=document.querySelector('.qr-body');

generateBtn.addEventListener('click',(e)=>{
    //prevents the webpage from refreshing again and again...
    e.preventDefault();
    if(qrText.value.length>0) generateQRCode();
    else alert('Enter a valid Text or URL');
})

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
})

function generateQRCode(){
    qrContainer.innerHTML='';
    new QRCode(qrContainer,{
        text: qrText.value,
        height: size,
        width:size,
        colorLight: '#ffffff',
        colorDark: '#000000',
    })
}

downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img');
    if(img){
        let imgSrc=img.getAttribute('src');
        downloadBtn.setAttribute('href',imgSrc);
    }
    else{
        downloadBtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`);
    }
})
