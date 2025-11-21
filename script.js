const input = document.querySelector('.main .options input');
const errorBox = document.querySelector('.main .options #error');
const generateBtn = document.querySelector('.main .options #generateBtn');
const qrCode = document.querySelector('.main .qrCode');
var inputValue = '';

generateBtn.addEventListener('click', () => {triggerGenerate()});
document.body.addEventListener('keypress', (e) =>
{
    if(e.key == 'Enter')
      triggerGenerate();
});

const triggerGenerate = () =>
{
    inputValue = input.value;

    if(inputValue == '')
        errorBox.innerText = 'Enter Something!';
    else
    {
        errorBox.innerText = '';
        generateQR(inputValue);

    }
}

async function generateQR(data)
{
    await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&margin=0&data=${data}`)
    .then(res => res.blob())
    .then(image => 
    {
        qrCode.querySelector('img').setAttribute('src' ,URL.createObjectURL(image));

        document.querySelector('.main .qrContainer').style.display = 'flex';

    })
    .catch(err => console.log(err));
}