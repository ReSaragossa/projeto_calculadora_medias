const form = document.getElementById('form-atividade');                                         //comando pra chamar o form
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';               //constante para acionar a imagem de aprovado --cont  
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';                 //cont-- essas duas variáveis irão na regra de IF e THEN
const atividade = [];                                                                           //constante para adicionar as atividades
const notas = [];                                                                               //constante para adicionar as notas e realizar a média
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';                        //constante para adicionar a tag de aprovado/reprovado
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';                     //colocar na função atualizarMediaFinal
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));                                 //comando para definir a nota mínima (de corte) da calculadora

let linhas = '';                                                                                //comando criado para que o form adicione uma linha após a outra após submit

form.addEventListener('submit', function(e) {                                                   //criar evento de Submit e evento para o form não atualizar a tela quando for submetido
    e.preventDefault();

    adicionaLinha();                                                                            //comando para chamar a função de adicionar linha
    atualizarTabela();                                                                          //comando para chamar a função de atualizar a tabela
    atualizaMediaFinal();                                                                       //comando para chamar a função de atualizar a média

});   

function adicionaLinha() {                                                                      //função para adicionar linhas
    const inputNomeAtividade = document.getElementById('nome-atividade');                       //capturar os campos 'nome da atividade' e a 'nota'
    const inputNotaAtividade = document.getElementById('nota-atividade'); 

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    }  else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));                                           //comando parseFloat - para transformar texto em número quebrado

        let linha = '<tr>';                                                                         //adicionar informações na tabela como se fosse uma linha
        linha += `<td>${inputNomeAtividade.value}</td>`;                                            //concatenação
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;          //essa é a função de IF(?) e THEN(:) - Se maior que 7, então aprovado
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeAtividade.value = '';                                                              //comando para limpar os campos depois de clicar em submit
    inputNotaAtividade.value = '';
}

function atualizarTabela() {
    const  corpoTabela = document.querySelector('tbody');                                       //colocar o conteúdo dentro da tabela
    corpoTabela.innerHTML = linhas;                                                             //inserir conteúdo dentro de uma TAG    
}

function atualizaMediaFinal() {                                                                 //função para atualizar a média final
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}







//alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);      alerta pop-up criado para mostrar os valores dos campos 'nome' e 'nota'