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

const loadingImageLink = "https://cdn.dribbble.com/users/1415337/screenshots/10781083/loadingdots2.gif";

let currentImageId = 0;
let prevImageId = currentImageId-1 < 0 ? images.length-1 : currentImageId-1;
let nextImageId = currentImageId+1 >= images.length ? 0 : currentImageId+1;

document.getElementById("image-in-holder").src = images[currentImageId][0];
document.getElementById("caption-text").innerHTML = images[currentImageId][1];

document.getElementById("prev-image").src = images[prevImageId][0];
document.getElementById("next-image").src = images[nextImageId][0];

const myPromise = new Promise((func, reject) => {
    func();
});

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
        document.getElementById("image-in-holder").src = images[currentImageId][0];
        document.getElementById("caption-text").innerHTML = images[currentImageId][1];

        buttonEle.removeAttribute("disabled");
    }, timer);
}


document.getElementById("prev").addEventListener("click", ()=>{
    document.getElementById("prev").disabled = "true";

    nextImageId = currentImageId;
    currentImageId = prevImageId;

    if (prevImageId-1 < 0) {
        prevImageId = images.length-1;
    } else {
        prevImageId -= 1;
    }
    // console.log("prevImageId:", prevImageId);
    // console.log("currentImageId:", currentImageId);
    // console.log("nextImageId:", nextImageId);
    
    document.getElementById("prev-prev-image").src = images[prevImageId][0];
    
    document.getElementById("image-in-holder").classList.add("current-image-holder-forward-animation");
    document.getElementById("prev-image").classList.add("prev-image-holder-forward-animation");
    
    setTimeout(() => {
        document.getElementById("caption-text").innerHTML = images[currentImageId][1];
    }, 400);
    
    setTimeout(() => {
        document.getElementById("next-image").src = images[nextImageId][0];
        document.getElementById("prev-image").src = images[prevImageId][0];
        document.getElementById("image-in-holder").src = images[currentImageId][0];

        document.getElementById("image-in-holder").classList.remove("current-image-holder-forward-animation");
        document.getElementById("prev-image").classList.remove("prev-image-holder-forward-animation");

        document.getElementById("prev-prev-image").removeAttribute("src");
        document.getElementById("prev").removeAttribute("disabled");
    }, 1000);

});

document.getElementById("next").addEventListener("click", ()=>{
    document.getElementById("next").disabled = "true";

    prevImageId = currentImageId;
    currentImageId = nextImageId;

    if (nextImageId+1 >= images.length) {
        nextImageId = 0;
    } else {
        nextImageId += 1;
    }
    // console.log("prevImageId:", prevImageId);
    // console.log("currentImageId:", currentImageId);
    // console.log("nextImageId:", nextImageId);

    document.getElementById("next-next-image").src = images[nextImageId][0];
    
    document.getElementById("image-in-holder").classList.add("current-image-holder-backward-animation");
    document.getElementById("next-image").classList.add("next-image-holder-backward-animation");
    
    setTimeout(() => {
        document.getElementById("caption-text").innerHTML = images[currentImageId][1];
    }, 400);
    
    setTimeout(() => {
        document.getElementById("next-image").src = images[nextImageId][0];
        document.getElementById("prev-image").src = images[prevImageId][0];
        document.getElementById("image-in-holder").src = images[currentImageId][0];

        document.getElementById("image-in-holder").classList.remove("current-image-holder-backward-animation");
        document.getElementById("next-image").classList.remove("next-image-holder-backward-animation");

        document.getElementById("next-next-image").removeAttribute("src");
        document.getElementById("next").removeAttribute("disabled");
    }, 1000);

});