/*Variáveis*/

const btn = document.querySelector("#conf"); // pega o id

btn.addEventListener("click", function(e){
    e.preventDefault();

    const inputEmail = document.querySelector("#mail");
    const valueEmail = inputEmail.value;

    const inputSenha = document.querySelector("#senha");
    const valueSenha = inputSenha.value;
   
    if(valueEmail == "email@email.com" && valueSenha == "123"){
        alert("Logado!");
    } else{
        alert("Falha ao logar!");
    }
});