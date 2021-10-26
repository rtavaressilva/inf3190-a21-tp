fetch('/../assets/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

fetch('/../assets/footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

//Validation de courriel et mot de passe dans la page connexion.html
function valider() {
      
    var monCourriel = document.getElementById("courriel").value;
    var monMotDePasse = document.getElementById("mdp").value;
        
    if(monMotDePasse.length < 8){
      alert("Le mot de passe doit contenir au moins 8 caracteres. Veuillez ressayer.")
    } else if(monCourriel.length < 6) {
      alert("Courriel invalide. Veuillez ressayer.")
    }
    
    
  }