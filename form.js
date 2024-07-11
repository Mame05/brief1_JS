/*let id = (id) =>document.getElementById(id);
let formClass = (formClass) => document.getElementsByClassName(formClass);
let prenom = id("prenom"),
    nom = id("nom"),
    email = id("email"),
    password = id("password"),
    errorMsg = formClass("error"),
    failureIcon = formClass("failure-icon"),
    successIcon = formClass("success-icon");


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    invalForm(prenom, 0, "Le champ ne doit pas être vide");
    invalForm(nom, 1, "Le champ ne doit pas être vide");
    invalForm(email, 2, "Le champ ne doit pas être vide");
    invalForm(password, 3, "Le champ ne doit pas être vide");
});


let invalForm = (id, serial, message) =>{
    if (id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }


let form = document.querySelector('#form');
//Ecouter la modification de l'email
form.email.addEventListener('change', function(){
    validEmail(this);
});

const validEmail = function(inputEmail){
    //Création de la reg exp pour la validation email
    let emailRegExp = new RegExp(
      '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
    );
    let testEmail = emailRegExp.test(inputEmail.value);
    let errorMsg = inputEmail.nextElementSibing;

    if (testEmail){
        errorMsg[serial].innerHTML = "Adresse valide";
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";

    }else{
        errorMsg[serial].innerHTML = "Adresse non valide";
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }

}
};*/

const form = document.getElementById('form');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();


    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Contrainte de validation pour le prénom
const isValidPrenomlongueur = prenom =>{
    const re = /^.{3,13}$/
    return re.test(String(prenom).toLocaleLowerCase());
}
const isValidPrenom = prenom =>{
    const re = /^[a-zA-Z]+$/
    return re.test(String(prenom).toLocaleLowerCase());
}

// Contrainte de validation pour le non
const isValidNom = nom =>{
    const re =  /^[a-zA-Z]+$/
    return re.test(String(nom).toLocaleLowerCase());
}
const isValiNomlongueur = nom =>{
    const re = /^.{3,13}$/
    return re.test(String(nom).toLocaleLowerCase());
}

// Contrainte de validation pour l'adresse email
const isValidEmail = email =>{
    const re = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/
    return re.test(String(email).toLocaleLowerCase());
}

//Contrainte de validation pour le mot de passe
const isValidPassword1 = password =>{
    const re =  /^.{8,}$/
    return re.test(String(password).toLocaleLowerCase());
}

const validateInputs = () => {
        const prenomValue = prenom.value.trim();
        const nomValue = nom.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        // Prénom
        if(prenomValue === ''){
            setError(prenom, 'Le champ ne doit pas être vide');
        } else if (!isValidPrenomlongueur(prenomValue )){
            setError(prenom, 'Le prenom doit contenir entre 3 et 13 caractères')
        }else if (!isValidPrenom(prenomValue)){
            setError(prenom, 'Le prénom doit contenir que des lettres');
        }else {
            setSuccess(prenom);
        }

        // Nom
        if(nomValue === ''){
            setError(nom, 'Le champ ne doit pas être vide');
        }  else if (!isValidPrenomlongueur(nomValue)){
            setError(nom, 'Le nom doit contenir entre 3 et 13 caractères')
        }else if (!isValidNom(nomValue)){
            setError(nom, 'Le nom doit contenir que des lettres');
        }else {
            setSuccess(nom);
        }

        // Email
        if(emailValue === ''){
            setError(email, 'Le champ ne doit pas être vide');
        } else if (!isValidEmail(emailValue)){
            setError(email, 'Entrer un adresse email qui est valide');
        } else{
            setSuccess(email);
        }

        // Mot de passe
        if(passwordValue === ''){
            setError(password, 'Le champ ne doit pas être vide');
        } else if (!isValidPassword1(passwordValue)){
            setError(password, 'Le mot de passe doit contenir au moins 8 caractères')
        }else{
            setSuccess(password);
        }

        // Vérifier si tous les champs sont valides pour afficher un message de succès
        if (isValidPrenom(prenomValue) && isValidNom(nomValue) && isValidEmail(emailValue) && (passwordValue)) {
        // Masquer le formulaire
        document.getElementById('container').style.display = 'none';
        // Afficher le message de succès
        document.getElementById('messageSucces').style.display = 'block';
    }
};




