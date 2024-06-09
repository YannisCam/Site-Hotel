function boutonplus() {
    var input = document.getElementById("nombre_enf");
    var count = parseInt(input.value) + 1;
    input.value = count;
    
    var tableau = document.getElementById("bloc_1");
    var nouvelleLigne = tableau.insertRow();

    var nouvelleCellule = nouvelleLigne.insertCell();
    nouvelleCellule.textContent = "Age de votre enfant " + count + " : ";
    
    var inputText = document.createElement("input");
    inputText.type = "number";
    var id = "age_enfant_" + count; // Utiliser un ID unique pour chaque champ d'âge d'enfant
    inputText.id = id;
    nouvelleCellule.appendChild(inputText);
    nouvelleCellule.setAttribute("colspan", "4");
}

function boutonmoins() {
    var input = document.getElementById("nombre_enf");
    var count = parseInt(input.value);
    if (count > 0) {
        input.value = count - 1;
        var tableau = document.getElementById("bloc_1");
        tableau.deleteRow(tableau.rows.length - 1);
    }
}

function boutonplusadu() {
    var input = document.getElementById("nombre_adu");
    input.value = parseInt(input.value) + 1;
}

function boutonmoinsadu() {
    var input = document.getElementById("nombre_adu");
    if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

function boutonpluscha() {
    var input = document.getElementById("nombre_cha");
    input.value = parseInt(input.value) + 1;
}

function boutonmoinscha() {
    var input = document.getElementById("nombre_cha");
    if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

function effacer() {
    document.getElementById('lieu').value = "";
    document.getElementById('date_arr').value = "";
    document.getElementById('date_dep').value = "";
    document.getElementById('nombre_adu').value = "0";
    document.getElementById('nombre_enf').value = "0";
    document.getElementById('nombre_cha').value = "0";
    document.getElementById('check').checked = false;
    document.getElementById("confirmation").innerHTML = "";
    while (tableau.rows.length > 9) {
        tableau.deleteRow(tableau.rows.length - 1);
    }
}
function rechercher() {
    const lieu = document.getElementById("lieu").value;
    const depart = document.getElementById("date_dep").value;
    const arrivee = document.getElementById("date_arr").value;
    const nombre_adulte = document.getElementById("nombre_adu").value;
    const nomnbre_enfant = document.getElementById("nombre_enf").value;
    const nombre_chambre = document.getElementById("nombre_cha").value;
    const travail = document.getElementById("check").checked ? "Oui" : "Non";
    
    const date_dep = new Date(depart);
    const date_arr = new Date(arrivee);

    if (date_dep <= date_arr) {
        alert("La date de départ doit être antérieure à la date d'arrivée.");
        return;
    }

    let childAges = '';
    for (let i = 1; i <= nomnbre_enfant; i++) {
        const age = document.getElementById(`age_enfant_${i}`).value;
        const ageNum = parseInt(age);
        if (isNaN(ageNum) || ageNum < 0 || ageNum > 17) {
            alert("L'âge de l'enfant n'est pas correct.");
            return;
        }
        childAges += `<p><strong>Âge de l'enfant ${i} :</strong> ${age} ans</p>`;
    }
    

    const recapitulatif = `
        <p><strong>Lieu de séjour:</strong> ${lieu}</p> 
        <p><strong>Départ:</strong> ${depart}</p> 
        <p><strong>Arrivée:</strong> ${arrivee}</p> 
        <p><strong>Nombre d'adultes:</strong> ${nombre_adulte}</p> 
        <p><strong>Nombre d'enfants:</strong> ${nomnbre_enfant}</p> 
        ${childAges}
        <p><strong>Nombre de chambres:</strong> ${nombre_chambre}</p>
        <p><strong>Voyage pour le travail:</strong> ${travail}</p> 
    `;

    document.getElementById("confirmation").innerHTML = recapitulatif;
    
};