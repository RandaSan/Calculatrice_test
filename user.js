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

    isValid() {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(this.email.match(mailformat)) {
            if(this.age < 13) {
                console.log('Too young')
            }
            if(this.nom === null || this.prenom === null) {
                console.log("Missing lastname or fistname !")
            }   
            
            return User 
        } else {
            console.log("Wrong email format")
        }
        
    }
}