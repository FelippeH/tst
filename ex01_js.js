const data = new Date();
const hora = data.getHours();

if (hora >= 6 && hora < 12) {
    window.alert("Bom Dia!\nSeja Bem-Vindo ao site!")
}

else if (hora >= 12 && hora < 18) {
    window.alert("Boa Tarde!\nSeja Bem-Vindo ao site!")
}

 else {
    window.alert("Boa Noite!\nSeja Bem-Vindo ao site!")
}

let ano = data.getFullYear();
    
    let nome = window.prompt("Qual é o seu nome?");
    let nascimento = Number.parseInt(window.prompt("Qual é o seu ano de nascimento?"));
    let idade = (ano - nascimento);

    //Código para o HTML
        const pNome = document.createElement('p');
        pNome.textContent = `Seu nome é ${nome}!`;
        pNome.className = 'idade-paragrafo';
        document.body.appendChild(pNome);

        const pIdade = document.createElement('p');
        pIdade.textContent = `Você tem ${idade} anos de idade!`;
        pIdade.className = 'idade-paragrafo';
        document.body.appendChild(pIdade);
