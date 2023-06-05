const images= ["C++.png", "html.png", "python.png","json.png","linux.png","js2.png", "leader.png", "cowork.png", "speak.png"];
let imageIndex = 0;


for (let i = 2; i <= 9; i++) {
    document.getElementById("image" + i).style.display = 'none';
    document.getElementById("texte" + i).style.display = 'none';
    document.getElementById("desc" + i).style.display = 'none';
}

function changerlogo() {

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

function fermermenu(affichageId, boutId) {
        const affichage = document.getElementById(affichageId);
        affichage.style.animation = "fadeOut 0.5s";

        const elementsToUnblur = document.querySelectorAll(".blur-effect");
        elementsToUnblur.forEach(element => {
            element.classList.remove("blur-effect");
        });
        setTimeout(function() {
            affichage.style.display = "none";
            affichage.style.animation = "";
        }, 500);
    };

function projet(index) {
    document.getElementById("img" + index).onclick = function() {
        const affichage = document.getElementById("affichage" + index);
        affichage.style.animation = "fadeIn 0.5s";
        affichage.style.display = "block";
        const projDiv = this.closest(".proj");
        const elementsToBlur = projDiv.querySelectorAll(":scope > *:not(.panel)");
        elementsToBlur.forEach(element => {
            element.classList.add("blur-effect");
        });
    };
}

const image = [
    ["projet11.png", "projet12.png", "projet13.png", "projet14.png"],
    ["projet21.png", "projet22.png"],
    ["projet31.png", "projet32.png", "projet33.png", "projet34.png"],
    ["projet41.png", "projet42.png"],
    ["projet51.png", "projet52.png", "projet53.png", "projet54.png", "projet55.png", "projet56.png"]
  ];
  
  const indexes = [0, 0, 0, 0, 0];
  
  function changerImage(index) {
    const currentProj = document.getElementById(`proj${index + 1}${indexes[index] + 1}`);
    currentProj.style.display = 'none';
    currentProj.classList.add('hidden');
    indexes[index] = (indexes[index] + 1) % image[index].length;
    const nextProj = document.getElementById(`proj${index + 1}${indexes[index] + 1}`);
    nextProj.style.display = 'block';
    nextProj.classList.remove('hidden');
    nextProj.src = image[index][indexes[index]];
  }
  
  for (let i = 0; i < image.length; i++) {
    for (let j = 1; j < image[i].length; j++) {
      const proj = document.getElementById(`proj${i + 1}${j + 1}`);
      proj.classList.add('hidden');
    }
  }
  

function handleTextClick(textId, affichageId) {
    document.getElementById(textId).onclick = function() {
      const affichage = document.getElementById(affichageId);
      affichage.style.animation = "fadeIn 1s";
      affichage.style.display = "block";
      const projDiv = this.closest(".proj");
      const elementsToBlur = projDiv.querySelectorAll(":scope > *:not(.panel)");
      elementsToBlur.forEach(element => {
        element.classList.add("blur-effect");
      });
    };
  }
  
  handleTextClick("texte1", "affichage3");
  handleTextClick("texte2", "affichage4");
  handleTextClick("texte3", "affichage1");
  handleTextClick("texte4", "affichage1");
  handleTextClick("texte5", "affichage5");
  handleTextClick("texte6", "affichage4");
  