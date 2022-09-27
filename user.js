export class User {
    email
    nom
    prenom
    age

    constructor(email, nom, prenom, age) {
        this.email = email
        this.nom = nom
        this.prenom = prenom
        this.age = age
    }

    isValid(email, nom, prenom, age) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat)) {
            if(age < 13) {
                console.log('Too young')
            }
            if(nom === null || prenom === null) {
                console.log("Missing lastname or fistname !")
            }   
            
            return User 
        } else {
            console.log("Wrong email format")
        }
        
    }
}