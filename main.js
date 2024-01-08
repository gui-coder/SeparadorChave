// Importa o módulo `readline`
const readline = require('readline');

// Cria um leitor de linha
const reader = readline.createInterface({
  input: process.stdin,
});

// Declara uma variável para armazenar a lista de usuários
let usuarios = [];

// Lê a lista de usuários do console
reader.on('line', (linha) => {
  // Separa a linha em um array de valores
  const valores = linha.split(' ');

  // Adiciona o usuário à lista
  usuarios.push({
    nome: valores[0],
    código: valores[1],
    cidade: valores[2],
  });
});

// Fecha o leitor de linha
reader.on('close', () => {
  // Separa os usuários por cidade
  const usuariosPorCidade = usuarios.reduce((mapa, usuario) => {
    const cidade = usuario.cidade;

    if (!mapa.hasOwnProperty(cidade)) {
      mapa[cidade] = [];
    }

    mapa[cidade].push(usuario.código);

    return mapa;
  }, {});

  // Exibe os usuários por cidade
  Object.keys(usuariosPorCidade).forEach((cidade) => {
    console.log(`Cidade: ${cidade}`);
    console.log(usuariosPorCidade[cidade].join(', '));
  });
});

// Inicia o leitor de linha
reader.start();
