/*function guardar(){
    var nome = prompt("Qual o seu nome?")
    alert("O seu nome é "+ nome)
}
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
function calc(){
    var n1 = prompt("Informe o primeiro número");
    var op = prompt("Infome o sinal da operação (+ - / *)");
    while ((op != '+') && (op != '-') && (op != '/') && (op != '*')){
        var op = prompt("Infome o sinal da operação (+ - / *)");
    }
    var n2 = prompt("Informe o segundo número");

    n1 = parseInt(n1);
    n2 = parseInt(n2);


    if (op == "+"){
        var resultado = n1 + n2;
        alert("A soma entre "+n1+" e "+n2+" = "+resultado);
    }
    if (op == "-"){
        var resultado = n1 - n2;
        alert("A subtração entre "+n1+" e "+n2+" = "+resultado);
    }
    if (op == "/"){
        var resultado = n1 / n2;
        alert("A divisão entre "+n1+" por "+n2+" = "+resultado);
    }
    if (op == "*"){
        var resultado = n1 * n2;
        alert("A multiplicaçao entre "+n1+" e "+n2+" = "+resultado);
    }
}*/

function objeto(){
    var pessoa = {
        'nome':'Adriano',
        'idade':29,
        'cidade':'Londrina'
    }
    alert (pessoa.idade);

}
