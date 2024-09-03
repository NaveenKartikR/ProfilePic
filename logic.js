images = [
    [
        "https://th.bing.com/th/id/OIP.b0Rqtt5ye4y4nC5i6pzIMAHaJQ?rs=1&pid=ImgDetMain", 
        "Hi there!"
    ],
    [
        "https://media1.tenor.com/images/d25f1863f92cdce488abd79196976b5b/tenor.gif?itemid=15767751", 
        "I forgot that today is the exam😭"
    ],
    [
        "https://i.imgflip.com/7c1zk8.jpg", 
        "Hands up bro"
    ],
    [
        "https://www.bing.com/th/id/OGC.866d2310f4233902e180cdeb2a6c35f6?pid=1.7&rurl=https%3a%2f%2fgiffiles.alphacoders.com%2f132%2f132182.gif&ehk=9T69HH7nmlMyQJnBs7DM3F0oP0R%2bBP96MpcHouQFeGs%3d", 
        "The day that I got shocked"
    ],
    [
        "https://www.bing.com/th/id/OGC.a52641f0acf81198b5537bd36339e4be?pid=1.7&rurl=https%3a%2f%2fmedia2.giphy.com%2fmedia%2f11QEuO6MtKCl6E%2fgiphy.gif&ehk=egtrCFwezoNtbyQpaGt0rwxdDjsc2bMo8TLui%2fQOnUw%3d", 
        "Delicious food"
    ],
]

let currentImageId = 0;
let prevImageId = currentImageId-1 < 0 ? images.length-1 : currentImageId-1;
let nextImageId = currentImageId+1 >= images.length ? 0 : currentImageId+1;

document.getElementById("image-in-holder").src = images[currentImageId][0];
document.getElementById("caption-text").innerHTML = images[currentImageId][1];

document.getElementById("prev-image").src = images[prevImageId][0];
document.getElementById("next-image").src = images[nextImageId][0];

setImageInHolder = (imageId) => {
    document.getElementById("image-in-holder").src = images[imageId][0];
    document.getElementById("caption-text").innerHTML = images[imageId][1];

    prevImageId = imageId-1 < 0 ? images.length-1 : imageId-1;
    document.getElementById("prev-image").src = images[prevImageId][0];
    
    nextImageId = imageId+1 >= images.length ? 0 : imageId+1;
    document.getElementById("next-image").src = images[nextImageId][0];
}

buttonClicked = (imageId, buttonId, timer) => {
    const buttonEle = document.getElementById(buttonId);
    buttonEle.disabled = "true";

    if (imageId == "bean-image") {
        document.getElementById("image-in-holder").src = "https://c.tenor.com/vJqk_DRsOasAAAAC/tenor.gif";
        document.getElementById("caption-text").innerHTML = "I'm doing good";
    } else if (imageId == "jimmy-image") {
        document.getElementById("image-in-holder").src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzRhcWh3cGF2eDkwZmYwanJ3czF0b3g3M2M4b3FpZGd0MDRjMHYxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nbNWgtnMgIYpUSy3e9/giphy.webp";
        document.getElementById("caption-text").innerHTML = "I told you not to click it!";
    }
    
    setTimeout(() => {
        setImageInHolder(currentImageId);
        buttonEle.removeAttribute("disabled");
    }, timer);
}


document.getElementById("prev").addEventListener("click", ()=>{
    if (currentImageId-1 < 0) {
        currentImageId = images.length-1;
    } else {
        currentImageId -= 1;
    }
    setImageInHolder(currentImageId);
});

document.getElementById("next").addEventListener("click", ()=>{
    if (currentImageId+1 >= images.length) {
        currentImageId = 0;
    } else {
        currentImageId += 1;
    }
    setImageInHolder(currentImageId);
});