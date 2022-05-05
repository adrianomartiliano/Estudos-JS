/*function guardar(){
    var nome = prompt("Qual o seu nome?")
    alert("O seu nome é "+ nome)
}*/
function idade(){
    var anonasci = prompt("Informe seu ano de nascimento: ")
    while(anonasci >= 2022){
        alert("Ano errado... informe corretamente")
        var anonasci = prompt("Ano de nascimento: ")
    }
    var anoatual = prompt("Qual o ano atual ?")

    var idadefinal = anoatual - anonasci;
    alert("Sua idade é "+idadefinal)
}