const fs = require('fs').promises;
const path = require('path');

async function listarArquivosDoDiretorio(diretorio, arquivos) {

    if (!arquivos)
        arquivos = [];

    relations = {
        '10343941977.jpg': '10343941977',
        '10343941984.jpg': '10343941984',
        '10343941991.jpg': '10343941991',
        '10343942004.jpg': '10343942004',
        '26388226436.jpg': '26388226436',
        '26388287291.jpg': '26388287291',
    };

    let listaDeArquivos = await fs.readdir(diretorio);

    console.log(listaDeArquivos);

    for (let k in listaDeArquivos) {
        name = path.basename(k.name, '.jpg');
        console.log(name);

        // let stat = await fs.stat(diretorio + '/' + listaDeArquivos[k]);
        // if(stat.isDirectory())
        // await listarArquivosDoDiretorio(diretorio + '/' + listaDeArquivos[k], arquivos);
        // else
        // arquivos.push(diretorio + '/' + listaDeArquivos[k]);
    }

    // return arquivos;

}

listarArquivosDoDiretorio('./imagens');

// async function test() {
//     let arquivos = await listarArquivosDoDiretorio('./imagens'); // coloque o caminho do seu diretorio
//     console.log(arquivos);
//     return arquivos;
// }

// test();