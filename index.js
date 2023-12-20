// Criação de um objeto para armazenar os dados do usuário
let usuario = {
    nome: "",
    idade: "",
    nivel: ""
};

// Função para coletar dados do usuário
function coletarDados() {
    usuario.nome = prompt("Por favor, insira seu nome:");
    usuario.idade = prompt("Por favor, insira sua idade:");
    usuario.nivel = prompt("Por favor, insira seu nível de alfabetização (iniciante, intermediário, avançado):");
    console.log(usuario);
}

// Função para fornecer atividades de alfabetização com base nos dados do usuário
function fornecerAtividades() {
    if (usuario.nivel == "iniciante") {
        console.log("Atividade para iniciantes: Vamos aprender o alfabeto!");
    } else if (usuario.nivel == "intermediário") {
        console.log("Atividade para intermediários: Vamos praticar a leitura de um parágrafo!");
    } else if (usuario.nivel == "avançado") {
        console.log("Atividade para avançados: Vamos escrever um ensaio!");
    } else {
        console.log("Por favor, insira um nível de alfabetização válido.");
    }
}

// Executar as funções
coletarDados();
fornecerAtividades();


// Adicionando mais propriedades ao objeto do usuário
usuario.profissao = "";
usuario.localizacao = "";

// Função para coletar mais dados do usuário
function coletarMaisDados() {
    usuario.profissao = prompt("Por favor, insira sua profissão:");
    usuario.localizacao = prompt("Por favor, insira sua localização:");
    console.log(usuario);
}

// Função para fornecer atividades de alfabetização com base nos dados do usuário
function fornecerAtividadesContextuais() {
    if (usuario.profissao == "médico") {
        console.log("Atividade para médicos: Vamos aprender terminologia médica!");
    } else if (usuario.profissao == "engenheiro") {
        console.log("Atividade para engenheiros: Vamos aprender sobre terminologia de engenharia!");
    } else if (usuario.localizacao == "Brasil") {
        console.log("Atividade para residentes no Brasil: Vamos aprender sobre a história e a cultura brasileira!");
    } else {
        console.log("Por favor, insira uma profissão e localização válidas.");
    }
}

// Executar as funções
coletarMaisDados();
fornecerAtividadesContextuais();
