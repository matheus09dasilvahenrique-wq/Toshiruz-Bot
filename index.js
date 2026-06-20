// ================================= \\
// ESSE bot está sendo continuado pelo Matheus & Daniel! Ainda está em fases de testes para a fase da V2 e depois ser disponibilizada, não VAZE por enquanto!
// ================================= \\

// Consts 
const validarKey = require('./keycheck');
(async () => {
    await validarKey(); // se travar aqui, nem roda o bot
   
})()


function lerKeys() {
    if (!fs.existsSync(KEY_PATH)) fs.writeFileSync(KEY_PATH, '[]')
    return JSON.parse(fs.readFileSync(KEY_PATH))
}
function salvarKeys(data) {
    fs.writeFileSync(KEY_PATH, JSON.stringify(data, null, 2))
}
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, jidDecode, generateWAMessageFromContent, proto, prepareWAMessageMedia, downloadMediaMessage } = require('baileys-pro');
const moment = require('moment-timezone');
const baileysVer = require("baileys-pro/package.json").version;
const nickTemp = {};
const fetchJson = require('./assets/functions/fetchJson.js');
const VERSION_URL =
"https://raw.githubusercontent.com/matheus09dasilvahenrique-wq/Toshiruz-Bot/main/version.json";
const ZIP_URL =
"https://github.com/matheus09dasilvahenrique-wq/Toshiruz-Bot/archive/refs/heads/main.zip";
const fs = require('fs');
const FormData = require('form-data');
const AdmZip = require("adm-zip");
const { chavepix, versao } = require('./dono/configs.json');
const { exec } = require('child_process');
const { gerarAttp } = require('./assets/functions/attp.js');
const advPath = './assets/advertencias.json';
const { apitoken: TOKEN } = require('./dono/configs.json'); 
const TOKEN_API = 'TOKEN-API-MATH'
const API_TOSHI = 'https://bubbly-dedication-production-5925.up.railway.app'
global.batalhas = global.batalhas || {};
const path = require('path');
const os = require('os');
const yts = require('yt-search');
const play = require('play-dl');
const petsPath = path.join(__dirname, './assets/pet.json');
const userPetsPath = path.join(__dirname, './assets/userpets.json');
const goldsPath = path.join(__dirname, './assets/golds.json');
const cacaPalavras = {};
const jogoPalavras = {};
const pasta = './assets/horarios';
//Funcoes daqui pra baixo
const horariosPath = './assets/horarios_gp.json';

if (!fs.existsSync(pasta)) {
    fs.mkdirSync(pasta, { recursive: true });
}

setInterval(async () => {

    try {

        if (!fs.existsSync(horariosPath))
            return;

        const horarios = JSON.parse(
            fs.readFileSync(horariosPath, 'utf8')
        );

        const horaAtual = moment()
            .tz("America/Sao_Paulo")
            .format("HH:mm");

        for (const grupo in horarios) {

            const config = horarios[grupo];

            // FECHAR
            if (config.fechar === horaAtual) {

                console.log(`🔒 Fechando grupo ${grupo}`);

                await sock.groupSettingUpdate(
                    grupo,
                    "announcement"
                );

                if (
                    config.imagemFechar &&
                    fs.existsSync(config.imagemFechar)
                ) {

                    await sock.sendMessage(grupo, {
                        image: fs.readFileSync(
                            config.imagemFechar
                        ),
                        caption:
                            config.mensagemFechar ||
                            "🔒 𝙶𝚛𝚞𝚙𝚘 𝚏𝚎𝚌𝚑𝚊𝚍𝚘 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎."
                    });

                } else {

                    await sock.sendMessage(grupo, {
                        text:
                            config.mensagemFechar ||
                            "🔒 𝙶𝚛𝚞𝚙𝚘 𝚏𝚎𝚌𝚑𝚊𝚍𝚘 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎."
                    });

                }

            }

            // ABRIR
            if (config.abrir === horaAtual) {

                console.log(`🔓 Abrindo grupo ${grupo}`);

                await sock.groupSettingUpdate(
                    grupo,
                    "not_announcement"
                );

                if (
                    config.imagemAbrir &&
                    fs.existsSync(config.imagemAbrir)
                ) {

                    await sock.sendMessage(grupo, {
                        image: fs.readFileSync(
                            config.imagemAbrir
                        ),
                        caption:
                            config.mensagemAbrir ||
                            "🔓 𝙶𝚛𝚞𝚙𝚘 𝚊𝚋𝚎𝚛𝚝𝚘 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎."
                    });

                } else {

                    await sock.sendMessage(grupo, {
                        text:
                            config.mensagemAbrir ||
                            "🔓 𝙶𝚛𝚞𝚙𝚘 𝚊𝚋𝚎𝚛𝚝𝚘 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎."
                    });

                }

            }

        }

    } catch (e) {

        console.log(
            "❌ 𝙴𝚛𝚛𝚘 𝚗𝚘 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚍𝚎 𝚑𝚘𝚛á𝚛𝚒𝚘𝚜:",
            e
        );

    }

}, 30000); // verifica a cada 30 segundos
function carregarPets() {
    return JSON.parse(fs.readFileSync(userPetsPath));
}

function salvarPets(data) {
    fs.writeFileSync(userPetsPath, JSON.stringify(data, null, 2));
}

function carregarGold() {
    return JSON.parse(fs.readFileSync(goldsPath));
}

function salvarGold(data) {
    fs.writeFileSync(goldsPath, JSON.stringify(data, null, 2));
}
function getDB() {
    return fs.existsSync('./assets/userpets.json')
        ? JSON.parse(fs.readFileSync('./assets/userpets.json'))
        : {};
}
let pets = JSON.parse(fs.readFileSync(petsPath));

let userPets = fs.existsSync(userPetsPath)
    ? JSON.parse(fs.readFileSync(userPetsPath))
    : {};
function getPetsDB() {
    return fs.existsSync('./assets/userpets.json')
        ? JSON.parse(fs.readFileSync('./assets/userpets.json'))
        : {};
}
async function getBuffer(url) {
    const response = await axios({
        method: 'get',
        url,
        responseType: 'arraybuffer'
    });

    return Buffer.from(response.data);
}
const { downloadContentFromMessage } = require('@whiskeysockets/baileys')

async function salvarImagem(message, caminho) {
    const stream = await downloadContentFromMessage(
        message,
        'image'
    )

    let buffer = Buffer.from([])

    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
    }

    fs.writeFileSync(caminho, buffer)

    return caminho
}
let sock;
function carregarGold() {
    if (!fs.existsSync('./assets/golds.json')) {
        fs.writeFileSync('./assets/golds.json', '{}');
    }
    return JSON.parse(fs.readFileSync('./assets/golds.json'));
}

function salvarGold(db) {
    fs.writeFileSync('./assets/golds.json', JSON.stringify(db, null, 2));
}

function addGold(user, quantidade) {
    let db = carregarGold();

    if (!db[user]) {
        db[user] = {
            gold: 0
        };
    }

    db[user].gold += quantidade;

    salvarGold(db);
}

function getGold(user) {
    let db = carregarGold();

    if (!db[user]) {
        db[user] = {
            gold: 0
        };
        salvarGold(db);
    }

    return db[user].gold;
}
const palavras = [
"cachorro","gato","cavalo","elefante","girafa",
"leão","tigre","urso","macaco","coelho",
"banana","maçã","laranja","abacaxi","uva",
"carro","moto","avião","ônibus","bicicleta",
"computador","teclado","mouse","celular","internet",
"futebol","basquete","vôlei","natação","corrida",
"escola","professor","aluno","caderno","caneta",
"sol","lua","estrela","planeta","galáxia",
"praia","montanha","rio","floresta","deserto",
"pizza","hambúrguer","lasanha","sorvete","chocolate"
];
const palavrasCaca = [
"abacate","abelha","abismo","academia","acordeao","adesivo","advogado","aeroporto","agenda","agulha",
"alface","algodao","alicate","almofada","amarelo","amendoim","amizade","anel","animal","antena",
"apartamento","apito","aranha","arco","areia","armario","arvore","asa","atleta","aviador",
"bacalhau","bala","banana","bandeira","barco","batata","bebida","beijaflor","bicicleta","biblioteca",
"blusa","borboleta","bosque","brasil","brinquedo","cabelo","cabide","cachorro","cadeira","caderno",
"cafeteira","caixa","calendario","camelo","caminhao","camisa","caneta","canhao","capivara","caracol",
"carro","cartao","castelo","cavalo","cebola","celular","cenoura","chave","chinelo","chocolate",
"chuva","cidade","cimento","cinema","circo","computador","coracao","corrida","cortina","cozinha",
"crianca","cristal","crocodilo","cultura","dado","danca","deserto","diamante","dinossauro","diretor",
"doce","dragao","elefante","energia","escada","escola","escova","espelho","estrela","fantasia",
"farol","fazenda","ferramenta","figura","floresta","fogueira","folha","formiga","foguete","framboesa",
"fruta","futebol","galaxia","garfo","geladeira","girafa","guitarra","hamburguer","helicoptero","hospital",
"igreja","ilha","impressora","internet","janela","jardim","joaninha","jornal","jumento","laranja",
"leao","livro","locomotiva","lua","macaco","madeira","maleta","manga","mapa","marte",
"martelo","melancia","mesa","microfone","milho","montanha","morango","moto","museu","navio",
"neve","nuvem","oculos","oceano","onibus","orquestra","ovelha","palhaco","panela","papagaio",
"parque","passaro","peixe","pente","perfume","piano","pipoca","planeta","porta","praia",
"presente","professor","queijo","quintal","radar","rainha","relogio","revista","rio","robô",
"sabonete","sacola","sapato","satelite","semente","sereia","sino","sorvete","submarino","suco",
"telefone","teclado","telescopio","tesoura","tigre","tomate","tornado","trator","trem","tubarão",
"universo","urso","uva","vassoura","vela","violao","vulcao","xadrez","xicara","zebra",
"abacaxi","acerola","aguia","almoco","amora","anelado","aranha","ave","azeitona","balanca",
"bambu","berinjela","boi","bolacha","boneca","cacto","canario","canivete","capa","cereja",
"cofre","colher","coruja","couve","cravo","diametro","escorpiao","esquilo","faisao","foca",
"garrafa","golfinho","hortela","jabuti","jacare","kiwi","lagarto","lampada","limao","lontra",
"mamute","maracuja","mexerica","nariz","ouriço","pato","pera","pessego","pinguim","raposa"
];

async function limparBancoPorGrupos(sock, arquivos) {

    const grupos = await sock.groupFetchAllParticipating();

    const membros = new Set();

    for (const idGrupo in grupos) {
        grupos[idGrupo].participants.forEach(p => {
            membros.add(p.id);
        });
    }

    let removidos = 0;

    for (const arquivo of arquivos) {

        const banco = JSON.parse(fs.readFileSync(arquivo));

        let alterado = false;

        for (const usuario in banco) {

            if (
                usuario.endsWith('@newsletter') ||
                usuario.endsWith('@g.us') ||
                usuario.endsWith('@lid')
            ) continue;

            if (!membros.has(usuario)) {
                delete banco[usuario];
                removidos++;
                alterado = true;
            }
        }

        if (alterado) {
            fs.writeFileSync(
                arquivo,
                JSON.stringify(banco, null, 2)
            );
        }
    }

    return removidos;
}
const caminhoAluguel = './assets/aluguel.json';

function carregarAluguel() {
    if (!fs.existsSync(caminhoAluguel)) {
        fs.writeFileSync(caminhoAluguel, '[]');
    }

    return JSON.parse(
        fs.readFileSync(caminhoAluguel, 'utf8')
    );
}

function salvarAluguel(db) {
    fs.writeFileSync(
        caminhoAluguel,
        JSON.stringify(db, null, 2)
    );
}

function grupoAlugado(id) {
    let db = carregarAluguel();

    let grupo = db.find(g => g.id === id);

    if (!grupo) return false;

    if (Date.now() > grupo.expira) {
        db = db.filter(g => g.id !== id);
        salvarAluguel(db);
        return false;
    }

    return grupo;
}
function copiarArquivos(origem, destino) {

    
const ignorar = [
    "node_modules",
    "configs.json",
    "aluguel.json",
    "backup"
];

const arquivos = fs.readdirSync(origem);

for (const arquivo of arquivos) {

    if (ignorar.includes(arquivo))
        continue;

    const origemAtual =
        path.join(origem, arquivo);

    const destinoAtual =
        path.join(destino, arquivo);

    if (
        fs.statSync(origemAtual)
        .isDirectory()
    ) {

        if (
            !fs.existsSync(destinoAtual)
        ) {
            fs.mkdirSync(
                destinoAtual,
                {
                    recursive: true
                }
            );
        }

        copiarArquivos(
            origemAtual,
            destinoAtual
        );

    } else {

        fs.copyFileSync(
            origemAtual,
            destinoAtual
        );

    }
}


}

function criarBackup() {


const backupDir = "./backup";

if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(
        backupDir,
        {
            recursive: true
        }
    );
}

const pastaBackup = backupDir + "/" + Date.now();

fs.mkdirSync(
    pastaBackup,
    {
        recursive: true
    }
);

copiarArquivos(
    "./",
    pastaBackup
);

return pastaBackup;


}

function restaurarBackup(
pastaBackup
) {


copiarArquivos(
    pastaBackup,
    "./"
);


}

async function atualizarBot() {


const configs = JSON.parse(
    fs.readFileSync(
        "./dono/configs.json",
        "utf8"
    )
);

const versaoLocal =
    configs.version;

const dadosGithub =
    (
        await axios.get(
            VERSION_URL
        )
    ).data;

const versaoGithub =
    dadosGithub.version;

const novidades =
    dadosGithub.mensagem ||
    "Sem informações.";

const arquivosAtualizar =
    dadosGithub.files || [];

console.log(
    "Versão Local:",
    versaoLocal
);

console.log(
    "Versão GitHub:",
    versaoGithub
);

if (!versaoGithub) {
    throw new Error(
        "Version não encontrada."
    );
}

if (
    versaoGithub ===
    versaoLocal
) {
    return {
        status: false,
        mensagem:
            "✅ Você já está na última versão."
    };
}

const backup =
    criarBackup();

try {

    for (
        const arquivo
        of arquivosAtualizar
    ) {

        const url =
            `https://raw.githubusercontent.com/matheus09dasilvahenrique-wq/Toshiruz-Bot/main/${arquivo}`;

        console.log(
            "Atualizando:",
            arquivo
        );

        const resposta =
            await axios.get(
                url,
                {
                    responseType:
                        "text"
                }
            );

        const pasta =
            path.dirname(
                arquivo
            );

        if (
            pasta !== "." &&
            !fs.existsSync(
                pasta
            )
        ) {
            fs.mkdirSync(
                pasta,
                {
                    recursive: true
                }
            );
        }

        fs.writeFileSync(
            arquivo,
            resposta.data
        );

    }

    configs.version =
        versaoGithub;

    fs.writeFileSync(
        "./dono/configs.json",
        JSON.stringify(
            configs,
            null,
            2
        )
    );

    console.log(
        "Versão atualizada para:",
        versaoGithub
    );

    return {
        status: true,
        versao: versaoGithub,
        mensagem:


`🚀 Atualização concluída!

📦 Nova versão:
${versaoGithub}

📝 ${novidades}

📁 Arquivos atualizados:
${arquivosAtualizar.length}`
};


} catch (err) {

    console.log(
        "Erro na atualização."
    );

    console.log(err);

    restaurarBackup(
        backup
    );

    throw new Error(
        "Falha na atualização. Backup restaurado."
    );

}


}

// Pega data de hoje como "2025-11-26"
function dataHoje() {
    return new Date().toISOString().slice(0, 10);
}
// Outras consts - 2
const horaAtual = moment()
    .tz("America/Sao_Paulo")
    .format("HH:mm");
const ffmpeg = require('fluent-ffmpeg');
const { tmpdir } = require('os');
const axios = require('axios');
const cheerio = require('cheerio');
let welcome = JSON.parse(fs.readFileSync('./assets/welcome.json')); 
const now = moment().tz("America/Sao_Paulo");
const dia = now.format("DD");
const mes = now.format("MM");
const ano = now.format("YYYY");
const horas = now.format("HH");
const minutos = now.format("mm");
const segundos = now.format("ss");
const dataFormatada = `${dia}/${mes}/${ano}`;
const horaFormatada = `${horas}:${minutos}:${segundos}`;
const pino = require('pino');
const colors = require('colors');
const readline = require('readline');
const qrcode = require('qrcode-terminal');
const fileConfig = './dono/configs.json';
const { prefix, NomeDoBot, NickDono, numerodono, numerosub, key} = JSON.parse(
  fs.readFileSync(fileConfig, 'utf-8')
);
const fotomenu = './media/menu/menu.jpg';
function Saudacoes() {
    const hora = new Date().getHours();

    if (hora >= 0 && hora < 5) {
        return '🌑 𝙱𝙾𝙰 𝙼𝙰𝙳𝚁𝚄𝙶𝙰𝙳𝙰!';
    } else if (hora >= 5 && hora < 12) {
        return '☀️ 𝙱𝙾𝙼 𝙳𝙸𝙰!';
    } else if (hora >= 12 && hora < 18) {
        return '⛅ 𝙱𝙾𝙰 𝚃𝙰𝚁𝙳𝙴!';
    } else {
        return '🌙 𝙱𝙾𝙰 𝙽𝙾𝙸𝚃𝙴!';
    }
}
const saudacao = Saudacoes();
function gerarCPF() {
    const random = () => Math.floor(Math.random() * 9);

    let n = [];

    // primeiros 9 dígitos
    for (let i = 0; i < 9; i++) n.push(random());

    // calcula dígito 1
    let d1 = n.reduce((acc, val, idx) => acc + val * (10 - idx), 0);
    d1 = 11 - (d1 % 11);
    if (d1 >= 10) d1 = 0;

    // calcula dígito 2
    let d2 = n.reduce((acc, val, idx) => acc + val * (11 - idx), 0);
    d2 += d1 * 2;
    d2 = 11 - (d2 % 11);
    if (d2 >= 10) d2 = 0;

    return `${n[0]}${n[1]}${n[2]}.${n[3]}${n[4]}${n[5]}.${n[6]}${n[7]}${n[8]}-${d1}${d2}`;
}
const antiLinkBetPath = "./assets/antilinkbet.json";

let antiLinkBet = fs.existsSync(antiLinkBetPath)
    ? JSON.parse(fs.readFileSync(antiLinkBetPath))
    : {};

function saveAntiLinkBet() {
    fs.writeFileSync(antiLinkBetPath, JSON.stringify(antiLinkBet, null, 2));
}
const antiLinkGpFile = './assets/antilinkgp.json';
let antiLinkGp = JSON.parse(fs.readFileSync(antiLinkGpFile, 'utf8'));

const saveAntiLinkGp = () => {
    fs.writeFileSync(antiLinkGpFile, JSON.stringify(antiLinkGp, null, 2));
};
let antiLink = {};
try {
    antiLink = JSON.parse(fs.readFileSync('./assets/antilink.json'));
} catch {
    antiLink = {};
}

// Função para salvar
const saveAntiLink = () => {
    fs.writeFileSync('./assets/antilink.json', JSON.stringify(antiLink, null, 2));
};
function menu(pushname, NickDono, dataFormatada, prefix, NomeDoBot) {
    const gerarMenu = require("./dono/menus/menu.js");
    return gerarMenu(pushname, NickDono, dataFormatada, prefix, NomeDoBot ); 
}
function menufig(prefix, NomeDoBot) {
const menuFIG = require("./dono/menus/menufig.js");
return menuFIG(prefix, NomeDoBot);
}
function menuRPG(prefix) {
const menuRpg = require("./dono/menus/menurpg.js");
return menuRpg(prefix);
}
function menudown(prefix) {
const menuDown = require("./dono/menus/menudown.js");
return menuDown(prefix);
}
function menulogos(prefix, NomeDoBot) {
const menuLOGOS = require("./dono/menus/menulogos.js");
return menuLOGOS(prefix, NomeDoBot);
const menubuttons = require('./dono/menus/menubuttons.js');
return menubuttons(prefix, sender, baileysVer, saudacao, NomeDoBot, horaFormatada, dataFormatada)
}
function menuadm(prefix) {
const menuadmin = require("./dono/menus/menuadm.js");
return menuadmin(prefix);
}
function typewriter(texto, cor = "\x1b[0m", velocidade = 50) {
    let i = 0;

    return new Promise(resolve => {
        const intervalo = setInterval(() => {
            process.stdout.write(cor + texto.charAt(i) + "\x1b[0m");
            i++;

            if (i >= texto.length) {
                clearInterval(intervalo);
                process.stdout.write("\n");
                resolve();
            }
        }, velocidade);
    });
}

async function startBot() {
  tr