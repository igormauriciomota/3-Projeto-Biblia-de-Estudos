class validator {

    constructor() {
        this.validations = [
            "data-min-length",

        ]
    }

    // iniciar a validação de todos os campos
    validate(form) {

        //pegar os inputs
        let inputs = form.getElementByIdTagName("input");

        //HTMLCollection -> array
        let inputsArray = [...inputs];

        //loop no inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input) {

            //loop em todas as validaçoes existentes
            for(let i = 0; this.validations.length > i; i++) {
                console.log("achou validação");
            }

        }, this);

    }

}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new validator();


//evento que dispara as validaçoes
submit.addEventListener("click", function(e) {

    e.preventDefault();

    validator.validate(form);

});