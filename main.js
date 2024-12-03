const myImage = document.querySelector("#image");
const ogImage = document.querySelector("#og");
const compImage = document.querySelector("#comp");

myImage.addEventListener("change", (evt) => {
    const image = evt.target.files[0];

    const reader = new FileReader();
    reader.onload = () =>{
        const newImage = new Image();
        newImage.src = reader.result;
        newImage.onload = () => {  


            const canvas = document.createElement("canvas");
            canvas.height= newImage.height;
            canvas.width= newImage.width;
            const ctx = canvas.getContext('2d');
            newImage.width = 150;
            ogImage.appendChild(newImage);

            ctx.drawImage(newImage, 0, 0);

            const newUrl = canvas.toDataURL('image/jpeg',0.5);

            compImage.innerHTML = `<img src="${newUrl}" width="150" onclick="downloadImage(event)">`
        };
        
    };
    reader.readAsDataURL(image);
});
 
const downloadImage = (evt => {
    const a  = document.createElement('a');
    a.download = 'compressed_version.jpg';
    a.href = evt.target.src;
    a.target = '_blank';
    a.click();
})