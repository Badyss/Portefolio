const images= ["C++.png", "html.png", "python.png","sql.png","linux.png","java.png",];
let imageIndex = 0;


for (let i = 2; i <= 6; i++) {
    document.getElementById("image" + i).style.display = 'none';
    document.getElementById("texte" + i).style.display = 'none';
    document.getElementById("desc" + i).style.display = 'none';
}

function changerImage() {

    const currentImage = document.getElementById("image" + (imageIndex + 1));
    const currentText = document.getElementById("texte" + (imageIndex + 1));
    const currentDesc = document.getElementById("desc" + (imageIndex + 1));
    currentImage.style.display = 'none';
    currentText.style.display = 'none';
    currentDesc.style.display = 'none';
    
    imageIndex = (imageIndex + 1) % images.length;
    const nextImage = document.getElementById("image" + (imageIndex + 1));
    const nextText = document.getElementById("texte" + (imageIndex + 1));
    const nextDesc = document.getElementById("desc" + (imageIndex + 1));
    
    nextImage.style.display = 'block';
    nextText.style.display = 'block';
    nextDesc.style.display = 'block';
    nextImage.src = images[imageIndex];
}

const image= ["projet11.png", "projet12.png", "projet13.png", "projet14.png"]
let proj1Index = 0;

for (let i = 2; i <= 4; i++) {
    document.getElementById("proj1" + i).style.display = 'none';
}

function changerImage2() {

    const currentproj1 = document.getElementById("proj1" + (proj1Index + 1));
    currentproj1.style.display = 'none';
    proj1Index = (proj1Index + 1) % image.length;
    const nextproj1 = document.getElementById("proj1" + (proj1Index + 1));
    nextproj1.style.display = 'block';
    nextproj1.src = image[proj1Index];
}

function intro() {
    document.getElementById("savoir").style.display = "none"
    document.getElementById("javaw").style.display = "block"
}

function navbar() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
}

function siu() {
    const accordion = document.querySelector('.accordion');
    const panel = document.querySelector('.panel');
  
    accordion.addEventListener('click', function() {
      panel.classList.toggle('show');
    });
}

function projet() {
    document.getElementById("imagent").onclick = function() {
        document.getElementById("affichage").style.display = "block";
        const projDiv = this.closest(".proj");
        const elementsToBlur = projDiv.querySelectorAll(":scope > *:not(.panel)");
        elementsToBlur.forEach(element => {
            element.classList.add("blur-effect");
        });
    };
}

function fermermenu() {
    document.getElementById("bout").onclick = function() {
        document.getElementById("affichage").style.display = "none";
        const elementsToUnblur = document.querySelectorAll(".blur-effect");
        elementsToUnblur.forEach(element => {
            element.classList.remove("blur-effect");
        });
    };
}

