import { User } from "./user.js"
class Calculatrice {
    n1
    n2

    constructor(n1, n2) {
        this.n1 = n1
        this.n2 = n2
    }

    add(n1, n2) {
        let result 
        result = n1 + n2
        return result
    }

    sous(n1, n2) {
        let result 
        result = n1 - n2
        return result
    }

    mul(n1, n2) {
        let result 
        result = n1 * n2
        return result
    }

    div(n1, n2) {
        let result 
        result = n1 / n2
        return result
    }
}

function testAdd(n1, n2) {
    let testResult = n1 + n2
    let Calc = new Calculatrice(n1, n2)
    let result = Calc.add(n1, n2)
    
    if(result === testResult) {
        return console.log("Test Add True")
    } else {
        return console.log("Test Add False")
    }
}

testAdd(1, 2)

function testSous(n1, n2) {
    let testResult = n1 - n2
    let Calc = new Calculatrice(n1, n2)
    let result = Calc.sous(n1, n2)
    
    if(result === testResult) {
        return console.log("Test Sous True")
    } else {
        return console.log(" Test Sous False")
    }
}

testSous(2, 1)

function testMul(n1, n2) {
    let testResult = n1 * n2
    let Calc = new Calculatrice(n1, n2)
    let result = Calc.mul(n1, n2)
    
    if(result === testResult) {
        return console.log("Test Mul True")
    } else {
        return console.log("Test Mul False")
    }
}

testMul(2, 1)

function testDiv(n1, n2) {
    let testResult = n1 * n2
    let Calc = new Calculatrice(n1, n2)
    let result = Calc.div(n1, n2)
    
    if(result === testResult) {
        return console.log("Test Div True")
    } else {
        return console.log("Test Div False")
    }
}

testDiv(2, 1)

let user = new User("nom@mail.fr", "Nom", "Prenom", 22)
let user2 = new User("nom@mail.fr", "Nom", "Prenom", 10)
let user3 = new User("notanmail.fr", "Nomp", "Prenom", 15)
let user4 = new User("nom@mail.fr", null, "Prenom", 22)

user.isValid()
user2.isValid()
user3.isValid()
user4.isValid()
