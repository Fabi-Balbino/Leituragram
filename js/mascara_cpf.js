const cfp = document.querySelector('cpf')

input.addEventListener ('keypress', () =>{ 
let inputlength = cfp.value.length 

if(inputlength ===3 || inputlength === 7){
cfp.value += '.'
}

if (inputlength === 4||  inputlength ===11)
cfp.value += '-'

}
)
