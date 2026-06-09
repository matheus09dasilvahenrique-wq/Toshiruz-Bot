// ================================= \\
// ESSE bot está sendo continuado pelo Matheus & Daniel! Ainda está em fases de testes para a fase da V2 e depois ser disponibilizada, não VAZE por enquanto!
// ================================= \\
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
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, jidDecode, downloadContentFromMessage, generateWAMessageFromContent, proto, prepareWAMessageMedia, downloadMediaMessage } = require('baileys-pro');
const baileysVer = require("baileys-pro/package.json").version;
const fetchJson = require('./assets/functions/fetchJson.js');
const VERSION_URL =
"https://raw.githubusercontent.com/matheus09dasilvahenrique-wq/Toshiruz-Bot/main/version.json";
const ZIP_URL =
"https://github.com/matheus09dasilvahenrique-wq/Toshiruz-Bot/archive/refs/heads/main.zip";
const AdmZip = require("adm-zip");
const { chavepix, versao } = require('./dono/configs.json');
const { exec } = require('child_process');
const { gerarAttp } = require('./assets/functions/attp.js');
const advPath = './assets/advertencias.json';
const menuButtons = require('./dono/menus/menuButtons.js')
const { TOKEN } = require('./dono/configs.json');
const TOKEN_API = 'TOKEN-API-MATH'
const API_TOSHI = 'https://bubbly-dedication-production-5925.up.railway.app'
global.batalhas = global.batalhas || {};
const fs = require('fs');
const path = require('node:path');
const cacaPalavras = {};
const jogoPalavras = {};
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
setInterval(async () => {

    try {

        let db = carregarGold();
        let alterado = false;

        const grupos =
        Object.keys(
            await sock.groupFetchAllParticipating()
        );

        for (const usuario in db) {

            let encontrado = false;

            for (const grupo of grupos) {

                try {

                    const membros =
                    (await sock.groupMetadata(grupo))
                    .participants
                    .map(x => x.id);

                    if (membros.includes(usuario)) {
                        encontrado = true;
                        break;
                    }

                } catch {}

            }

            if (!encontrado) {

                delete db[usuario];
                alterado = true;

            }

        }

        if (alterado) {
            salvarGold(db);
        }

    } catch (err) {
        console.log(err);
    }

}, 86400000);
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
        "aluguel.json"
    ];

    const arquivos =
        fs.readdirSync(origem);

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
async function atualizarBot() {

    const configs = JSON.parse(
        fs.readFileSync("./dono/configs.json", "utf8")
    );

    const versaoLocal = configs.version;

    const dadosGithub = (
        await axios.get(VERSION_URL)
    ).data;

    const versaoGithub = dadosGithub.version;
    const novidades = dadosGithub.mensagem || "Sem informações.";

    console.log("Versão Local:", versaoLocal);
    console.log("Versão GitHub:", versaoGithub);

    if (!versaoGithub) {
        throw new Error("Version não encontrada no GitHub.");
    }

    if (versaoGithub === versaoLocal) {
        return {
            status: false,
            mensagem: "✅ Você já está na última versão."
        };
    }

    const resposta = await axios.get(
        ZIP_URL,
        {
            responseType: "arraybuffer"
        }
    );

    fs.writeFileSync(
        "./update.zip",
        resposta.data
    );

    const zip = new AdmZip("./update.zip");

    zip.extractAllTo(
        "./temp_update",
        true
    );

    const pastaExtraida =
        fs.readdirSync("./temp_update")[0];

    const origem =
        `./temp_update/${pastaExtraida}`;

    const protegidos = [
        "dono",
        "media",
        "node_modules",
        "assets",
        "keycheck.js",
        "Download",
        "package.json",
        "package-lock.json",
        "start.sh",
        "update.zip",
        "temp_update"
    ];

    const arquivosRaiz =
        fs.readdirSync("./");

    for (const item of arquivosRaiz) {

        if (protegidos.includes(item))
            continue;

        fs.rmSync(item, {
            recursive: true,
            force: true
        });

    }

    copiarArquivos(
        origem,
        "./"
    );

    configs.version = versaoGithub;

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

    fs.rmSync(
        "./temp_update",
        {
            recursive: true,
            force: true
        }
    );

    fs.unlinkSync(
        "./update.zip"
    );

    return {
        status: true,
        versao: versaoGithub,
        mensagem:
`🚀 Atualização encontrada!

📦 Versão: ${versaoGithub}

${novidades}`
    };

}
// Pega data de hoje como "2025-11-26"
function dataHoje() {
    return new Date().toISOString().slice(0, 10);
}

const ffmpeg = require('fluent-ffmpeg');
const { tmpdir } = require('os');
const axios = require('axios');
const cheerio = require('cheerio');
let welcome = JSON.parse(fs.readFileSync('./assets/welcome.json')); 
const moment = require("moment-timezone");
const now = moment().tz("America/Sao_Paulo");
const dia = now.format("DD");
const mes = now.format("MM");
const ano = now.format("YYYY");
const horas = now.format("HH");
const minutos = now.format("mm");
const segundos = now.format("ss");
const dataFormatada = `${dia}/${mes}/${ano}`;
const horaFormatada = `${horas}:${minutos}:${segundos}`;
const { yts } = require("yt-search");
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
    return gerarMenu(pushname, NickDono, dataFormatada, prefix,NomeDoBot ); 
}
function menufig(prefix, NomeDoBot) {
const menuFIG = require("./dono/menus/menufig.js");
return menuFIG(prefix, NomeDoBot);
}
function menuhentai(prefix, NomeDoBot) {
const menuHENTAI = require("./dono/menus/menuhentai.js");
return menuHENTAI(prefix, NomeDoBot);
}
function menulogos(prefix, NomeDoBot) {
const menuLOGOS = require("./dono/menus/menulogos.js");
return menuLOGOS(prefix, NomeDoBot);
const menubuttons = require('./dono/menus/menubuttons.js');
return menubuttons(prefix, sender, baileysVer, saudacao, NomeDoBot, horaFormatada, dataFormatada)
}
function menuadm(prefix, NomeDoBot) {
const menuadmin = require("./dono/menus/menuadm.js");
return menuadmin(prefix, NomeDoBot);
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
  try {
    const authFolder = './media/qr-code';

    const { state, saveCreds } = await useMultiFileAuthState(authFolder);
    const { version } = await fetchLatestBaileysVersion();

if (sock) {
    try {
        sock.ev.removeAllListeners();
        if (sock.ws && sock.ws.close) {
            sock.ws.close();
        }
        if (sock.end) {
            await sock.end();
        }
    } catch (e) {
        console.log("Erro ao encerrar sessão antiga:", e);
    }
}

    sock = makeWASocket({
      logger: pino({ level: 'silent' }),
      auth: state,
      browser: ["Linux", "Chrome", "2.3000.1023223821"],
      version
    });

    sock.ev.on('creds.update', saveCreds);

    // **Somente pede o número se não houver sessão salva**
    function delay(ms) {
    if (existsSync(dirPath)) {
        readdirSync(dirPath).forEach((file) => {
            const currentPath = path.join(dirPath, file);

            if (lstatSync(currentPath).isDirectory()) {
                rmdir(currentPath);
            } else {
                unlinkSync(currentPath);
            }
        });
        rmdirSync(dirPath);
    }
}
    // Conexão
sock.ev.on('connection.update', async (update) => {
    try {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            qrcode.generate(qr, { small: true });
            console.log(
  colors.bold.blue('\n[ TOSHIRUZ ] Informa:'),
  '📱 Escaneie o QR-Code gerado acima...'
);
        }
        if (connection === 'connecting') {
        console.log(
  colors.bold.red('\n[ TOSHIRUZ ] Informa:'),
  '\n 😎🪄 Fazendo a magia acontecer...'
);
        }
if (connection === 'close') {
    sock.ev.removeAllListeners();
    console.log(
  colors.bold.yellow('\n[ TOSHIRUZ ] Informa:'),
  '\n 🔒 Conexão encerrada, tentando reconectar...'
);
setTimeout(() => {
    startBot();
  }, 5000);
}

        if (connection === 'open') {
        const bannerain = require('./dono/rainbow/banner2.js');
        bannerain();
            console.log(
  colors.bold.green('\n[ TOSHIRUZ ] Informa:'),
  '\n ✅ Estou conectado no seu número! Viu como foi super fácil de eu ser conectado?! Agora pode desfrutar de todos os meus comandos...'
);
        }

    } catch (e) {
        console.error("❌ Erro no connection.update:", e);
    }
});
sock.ev.on('group-participants.update', async (update) => {
    const groupId = update.id;
    let groupMetadata = await sock.groupMetadata(groupId);
    const nomegp = groupMetadata.subject;

    // Se não estiver ativado → ignorar
    if (!welcome[groupId]) return;

    // helper para extrair o jid como string
function getJid(u) {
  if (!u) return '';
  if (typeof u === 'string') return u;
  // alguns formatos comuns: { id: 'xxx@s.whatsapp.net' }, { jid: '...' }, array ['xxx@...']
  if (typeof u === 'object') {
    if (u.id) return u.id;
    if (u.jid) return u.jid;
    if (Array.isArray(u) && u[0]) return String(u[0]);
    // fallback: stringify para debugging
    return String(u);
  }
  return String(u);
}

const fs = require('fs');
const pathLegenda = './assets/legendas.json';

let legendas = {};
if (fs.existsSync(pathLegenda)) {
    legendas = JSON.parse(fs.readFileSync(pathLegenda));
}

const legenda = legendas[groupId] || "👋 Olá @user, seja bem-vindo ao grupo!";

for (let user of update.participants) {
    const jid = typeof user === 'string' ? user : user.id;
    const short = jid.split('@')[0];

    if (update.action === 'add') {
        const mensagem = legenda.replace(/@user/g, `@${short}`);

        await systemZR.sendMessage(groupId, {
            text: mensagem,
            mentions: [jid]
        });
    }

    if (update.action === 'remove') {
        await sock.sendMessage(groupId, {
            text: `👋 O membro @${short} saiu do grupo.`,
            mentions: [jid]
        });
    }
}
});
    // Recebendo mensagens
    sock.ev.on('messages.upsert', async (msgupsrt) => {
  try {
    const pushname = msgupsrt.messages[0].pushName;
    const user = pushname;
    const info = msgupsrt.messages[0];

    if (!info.message || info.key.fromMe) return;

    const m = info;
    let context = m.message?.extendedTextMessage?.contextInfo || {};
    let mentionedJid = context.mentionedJid || [];
    const quotedUser = m.message?.extendedTextMessage?.contextInfo?.participant;

    const from = info.key.remoteJid;
    const isGroup = from.endsWith('@g.us');

    const messageType = Object.keys(info.message)[0];

    var body =
      info.message?.conversation ||
      info.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
      info.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
      info.message?.imageMessage?.caption ||
      info.message?.videoMessage?.caption ||
      info.message?.extendedTextMessage?.text ||
      info.message?.viewOnceMessage?.message?.videoMessage?.caption ||
      info.message?.viewOnceMessage?.message?.imageMessage?.caption ||
      info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption ||
      info.message?.buttonsResponseMessage?.selectedButtonId ||
      info.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
      info.message?.templateButtonReplyMessage?.selectedId ||
      JSON.parse(
        info.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson || "{}"
      )?.id ||
      info?.text ||
      "";

    const sendere2 = info.key.participant?.includes('@lid')
      ? info.key.participant
      : info.key.participantAlt || info.key.participantPn;

    const sendere = info.key.participantAlt?.includes('@s.whatsapp.net')
      ? info.key.participantAlt
      : info.key.participant || info.key.participantPn;

    const sender2 = sendere2 || from;
    const sender = sendere || from;

    const numberSelo = sender.split("@")[0];

    const isDono =
      sender.includes(numerodono) ||
      sender.includes(numerosub);

    const metaData = isGroup
      ? await sock.groupMetadata(from)
      : {};

    const participants = isGroup
      ? metaData.participants
      : [];

    const groupMetadata = metaData;

    const botNumber = sock.user.id.split(":")[0];

    const isBotAdmin = isGroup
      ? participants.some(
          p =>
            p.id?.split("@")[0] === botNumber &&
            (p.admin === "admin" || p.admin === "superadmin")
        )
      : false;

    const admins = isGroup
      ? participants
          .filter(
            p =>
              p.admin === "admin" ||
              p.admin === "superadmin"
          )
          .map(p => p.id)
      : [];

    const isAdmin = admins.includes(info.key.participant);

    const selometa = {
      key: {
        participant: sender,
        remoteJid: "status@broadcast",
        fromMe: false
      },
      message: {
        contactMessage: {
          displayName: info.pushName,
          vcard: `BEGIN:VCARD
VERSION:3.0
N:;${info.pushName};;;
FN:${info.pushName}
item1.TEL;waid=${numberSelo}:${numberSelo}
item1.X-ABLabel:Celular
END:VCARD`,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true
          }
        }
      }
    };

    const reply = async (texto) => {
      await sock.sendMessage(
        from,
        {
          text: texto,
          contextInfo: {
            forwardingScore: 100000,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363405476475431@newsletter",
              newsletterName: NomeDoBot
            }
          },
          mentions: [sender]
        },
        {
          quoted: selometa
        }
      );
    };
// Sistema de gold
      let db = carregarGold();

if (!db[sender]) {
    db[sender] = {
        gold: 0
    };
    salvarGold(db);
}
    // ==========================
    // SISTEMA DE ALUGUEL
    // ==========================
    if (isGroup && !grupoAlugado(from)) {
    const cmd = body.trim().split(/ +/)[0].toLowerCase().replace(prefix, "");

    const comandosAluguel = [
        "rg_aluguel",
        "rm_aluguel",
        "veraluguel",
        "listaaluguel",
        "aluguelglobal"
    ];

    if (!(isDono && comandosAluguel.includes(cmd))) {
        return;
    }
}

    const budy = body;
const moment = require('moment-timezone');
  const nameGroup = metaData.subject;
  // Função que retorna a saudação de acordo com o horário
  const args = body.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
const q = body.slice((prefix + command).length).trim();     
if(budy.startsWith('>')){
if(!isDono) return;
try {
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return sock.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}, { quoted: selometa }).catch(e => {
return sock.sendMessage(from, { text: String(e)}, { quoted: selometa });
})
} catch (e){
return reply(String(e))
}
}
if (body.startsWith('$')) {
  if (!isDono) return;
  if (info.key.fromMe) return
  const qq = body.slice(1)
  exec(qq, { timeout: 1000 }, (err, stdout, stderr) => {
    if (err) return reply(String(err))
    if (stderr) return reply(String(stderr))
    if (stdout) reply(stdout)
  })
}
function decode(from) {
  try {
    const res = jidDecode(from) || {};
    return (res.user && res.server) ? `${res.user}@${res.server}` : from;
  } catch (err) {
    return from;
  }
}

const numberUser = sender?.split('@')[0]
  const isCmd = body.startsWith(prefix);
  const msgBody = m.message.conversation || m.message.extendedTextMessage?.text;
  const msgBodyLower = msgBody?.toLowerCase();
  if (body === 'Prefixo') {
  await sock.sendMessage(from, { text: `╔ׄ╴ᩞ֮┮ᩙׅ᩼┯̈ ⵿ׅׄ┄࣮ׄ┅ᮬ̼ׄ͜ᰰᩫ╗۫۫۫۫⸧⃘࣮ׄ⸦ᜒ֧ׄ꒰⵿💢ᜒ⵿᮫ׄᩙ꒱⸧⃘ׂ໋ׅ⸦࣮۫۫۫۫╔͜ᰰᩫ┅֔ᮬ̼┄⵿ׄ┮ᩧׅ᩼┯ׅׄ╴֓ᩞ╗\n┃╼ٜ፝֟͜🌹ּ ̈֠͜⡷ׅׄ 𝙱𝙾𝚃 𝙾𝙽, 𝙾𝙻𝙰́ ${pushname}!\n┃╼ٜ፝֟͜🌹ּ ̈֠͜⡷ׅׄ ${saudacao}\n┃╼ٜ፝֟͜🌹ּ ̈֠͜⡷ׅׄ 𝙿𝚁𝙴𝙵𝙸𝚇𝙾: ${prefix}\n┃╼ٜ፝֟͜🌹ּ ̈֠͜⡷ׅׄ 𝙷𝙾𝚁𝙰́𝚁𝙸𝙾: ${horaFormatada}\n┃╼ٜ፝֟͜🌹ּ ̈֠͜⡷ׅׄ 𝚅𝙰𝙼𝙾𝚂 𝚀𝚄𝙴 𝚅𝙰𝙼𝙾𝚂! 🚀\n╚╴ᩞ֮┮ᩙׅ᩼┯̈ ⵿ׅׄ┄࣮ׄ┅ᮬ̼ׄ͜ᰰᩫ╗۫۫۫۫⸧⃘࣮ׄ⸦ᜒ֧ׄ꒰⵿💢ᜒ⵿᮫ׄᩙ꒱⸧⃘ׂ໋ׅ⸦࣮۫۫۫۫╔͜ᰰᩫ┅֔ᮬ̼┄⵿ׄ┮ᩧׅ᩼┯ׅׄ╴֓ᩞ╝`}, { quoted: selometa });
}
  const reagir = async (emojinn) => await sock.sendMessage(from, {
  react: {
  text: emojinn,
  key: info.key
  }
  });
const vipPath = "./assets/vip.json";
let vipData = JSON.parse(fs.readFileSync(vipPath));
function saveVip() {
    fs.writeFileSync(vipPath, JSON.stringify(vipData, null, 2));
}
const isVip = sender.includes(vipData);
  if (isGroup && antiLinkGp[from]?.status) {

    // Link de grupo
    const regexGp = /chat\.whatsapp\.com\/[A-Za-z0-9]+/i;

    if (regexGp.test(body)) {

        if (!isAdmin && !isDono) {
            try {

                await sock.groupParticipantsUpdate(from, [sender], "remove");

                await sock.sendMessage(from, {
                    text: `🚫 *Link de grupo detectado!*  
@${sender.split("@")[0]} foi removido.`,
                    mentions: [sender]
                });

            } catch (err) {
                console.error(err);
                reply("❌ Erro ao tentar remover o membro. Verifique se tenho permissão de admin.");
            }
        }
    }
}
let horarioAbrir = null;
let horarioFechar = null;

setInterval(async () => {
    const agora = new Date();
    const horaAtual =
        String(agora.getHours()).padStart(2, "0") + ":" +
        String(agora.getMinutes()).padStart(2, "0");


    if (horarioAbrir === horaAtual) {
        try {
            await sock.groupSettingUpdate(from, "not_announcement");
            await sock.sendMessage(from, { text: "🔓 Grupo aberto automaticamente!" });
        } catch (e) {
            console.log("Erro ao abrir grupo:", e);
        }
    }


    if (horarioFechar === horaAtual) {
        try {
            await sock.groupSettingUpdate(from, "announcement");
            await sock.sendMessage(from, { text: "🔒 Grupo fechado automaticamente!" });
        } catch (e) {
            console.log("Erro ao fechar grupo:", e);
        }
    }

}, 30 * 1000); 
// DETECÇÃO DE ANTI-LINK
// REGEX de links de apostas
const regexApostas = /(betano|bet365|blaze|tigrinho|tiger|pixbet|jkbet|bet|bet777|333bet|1xbet|bet7k|esportesbet|milbets|f12\.bet|betmaster|apostas)/i;

if (isGroup && antiLinkBet[from]) {

    if (regexApostas.test(body)) {

        if (!isAdmin && !isDono) {
            try {
                await sock.groupParticipantsUpdate(from, [sender], 'remove');

                await sock.sendMessage(from, {
                    text: `🚫 *Link de apostas detectado!*\n@${sender.split('@')[0]} foi removido.`,
                    mentions: [sender]
                });

            } catch (e) {
                console.error(e);
                reply("❗ Não consegui remover o usuário (erro ou sem permissão).");
            }
        }
    }
}
if (!info.key.fromMe && isGroup) {
    const grupoId = from;
    const statusData = require('./assets/simihStatus.json');
    const simihData = require('./assets/simih.json');

    if (statusData[grupoId]) { // só responde se ativo no grupo
        const texto = info.message.conversation || info.message.extendedTextMessage?.text;
        if (!texto) return;

        const resposta = simihData[texto];
        if (resposta) {
            sock.sendMessage(grupoId, { text: resposta }, { quoted: selometa });
        }
    }
}
if (isGroup) {
    // verifica se o grupo tem antilink ativado
    if (antiLink[from]) {

        const regex = /(?:https?:\/\/|www\.|chat\.whatsapp\.com\/)[^\s]+/i;

        if (regex.test(body)) {

            if (!isAdmin && !isDono) {
                try {
                    await sock.groupParticipantsUpdate(from, [sender], 'remove');

                    await sock.sendMessage(from, {
                        text: `🚫 Link detectado! @${sender.split('@')[0]} foi removido.`,
                        mentions: [sender]
                    });

                } catch (e) {
                    console.error(e);
                    await reply('❗ Não consegui remover o usuário (sem perms ou erro do servidor).');
                }
            }
        }
    }
}
        if (messageType === 'conversation') body = info.message.conversation;
        else if (messageType === 'extendedTextMessage') body = info.message.extendedTextMessage.text;

        // Mostrar log da mensagem
        await mostrarLogMsg(sock, info, pushname, nameGroup)
        
        if (!isCmd) return;
        const pc = `${prefix + command}`;
        
const quoted =
    info.message?.extendedTextMessage?.contextInfo?.quotedMessage ||
    info.message?.imageMessage?.contextInfo?.quotedMessage ||
    info.message?.videoMessage?.contextInfo?.quotedMessage ||
    info.message?.audioMessage?.contextInfo?.quotedMessage ||
    info.message?.stickerMessage?.contextInfo?.quotedMessage ||
    null;
    
        switch (command) {
          case 'menu':
          if (!isGroup) return reply(enviar.msg.group);
          try {
          reagir('⚡');
          await new Promise(resolve => setTimeout(resolve, 2000));
const botPhotoUrl = "https://files.catbox.moe/jpvorg.jpg";
const botName = NomeDoBot;
const messageText = "𝙀𝙣𝙫𝙞𝙖𝙣𝙙𝙤 𝙨𝙚𝙪 𝙢𝙚𝙣𝙪, 𝙖𝙜𝙪𝙖𝙧𝙙𝙚...";
await sock.sendMessage(from, {
text: messageText,
contextInfo: {
externalAdReply: {
title: botName,
body: 'Made by: Biel',
mediaType: 4,
thumbnail: fs.readFileSync('./media/menu/menu.jpg'),
mediaUrl: 'https://files.catbox.moe/jpvorg.jpg',
sourceUrl: ''
                  }
             }
      }, { quoted: selometa });
          const textMen = menu(prefix, NomeDoBot, NickDono, horaFormatada, sender, saudacao);
            await sock.sendMessage(
    from,
    {
        image: { url: fotomenu },
        caption: textMen,
        mentions: [sender],
        contextInfo: {
            forwardingScore: 100000,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363405476475431@newsletter",
                newsletterName: NomeDoBot
            }
        }
    },
    { quoted: selometa }
);

            } catch (e) {
            reagir('❌');
            console.log('Erro ao enviar o menu:', e)
            reply('❌ Erro ao enviar o menu');
            }
            break;
            case 'menuadm':
            case 'adm':
            if (!isGroup) return reply(enviar.msg.group);
            if (!isAdmin) return reply(enviar.msg.adm);
          try {
          reagir('🙅‍♀️');
          await new Promise(resolve => setTimeout(resolve, 2000));
          const menuAdm = menuadm(prefix, NomeDoBot);
            await sock.sendMessage(
    from,
    {
        image: { url: fotomenu },
        caption: menuAdm,
        mentions: [sender],
        contextInfo: {
            forwardingScore: 100000,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363405476475431@newsletter",
                newsletterName: NomeDoBot
            }
        }
    },
    { quoted: selometa }
);
            } catch (e) {
            reagir('❌');
            console.log('Erro ao enviar o menu:', e)
            reply('❌ Erro ao enviar o menu');
            }
            break;
            case 'menulogos':
            case 'logos':
            if (!isGroup) return reply(enviar.msg.group);

          try {
          reagir('🎨');
          await new Promise(resolve => setTimeout(resolve, 2000));
          const menuLogos = menulogos(prefix, NomeDoBot);
            await sock.sendMessage(
    from,
    {
        image: { url: fotomenu },
        caption: menuLogos,
        mentions: [sender],
        contextInfo: {
            forwardingScore: 100000,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363405476475431@newsletter",
                newsletterName: NomeDoBot
            }
        }
    },
    { quoted: selometa }
);
            } catch (e) {
            reagir('❌');
            console.log('Erro ao enviar o menu:', e)
            reply('❌ Erro ao enviar o menu');
            }
            break;
            case 'menu':
  const menuButton = menuButtons(sender, saudacao, NomeDoBot, horaFormatada, dataFormatada);
    await sock.sendMessage(from, { react: { text: '⚡', key: info.key } });
    await sock.sendMessage(from, {
      image: { url: fotomenu },
      caption: menuButton,
      footer: NomeDoBot,
      contextInfo: {
        participant: null,
        mentionedJid: [sender],
      },
      buttons: [
        {
          buttonId: 'action',
          buttonText: { displayText: '𖥨ํ∘̥⃟⸽⃟🎅🏻৴▸ 𝙼𝙴𝙽𝚄𝚂' },
          type: 4, // Native flow button
          nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
              title: '𖥨ํ∘̥⃟⸽⃟🎅🏻৴▸ 𝙼𝙴𝙽𝚄𝚂',
              sections: [
                {
                  title: '𖥨ํ∘̥⃟⸽⃟🌲৴▸ 𝙲𝚁𝙸𝙰𝙳𝙾𝚁',
                  highlight_label: '🦌',
                  rows: [{ title: '𖥨ํ∘̥⃟⸽⃟☃️৴▸ 𝙳𝙾𝙽𝙾𝚂 𝙳𝙾 𝙱𝙾𝚃', description: '𖥨ํ∘̥⃟⸽⃟🦌৴▸ 𝙲𝙾𝙽𝚃𝙰𝚃𝙾𝚂 𝙳𝙾𝚂 𝙼𝙴𝚄𝚂 𝙳𝙾𝙽𝙾𝚂', id: `${prefix}donos` }],
                },
                {
                  title: '𖥨ํ∘̥⃟⸽⃟🔔৴▸ 𝙼𝙴𝙽𝚄 𝙳𝙾𝙽𝙾',
                  highlight_label: '🔔',
                  rows: [{ title: '𖥨ํ∘̥⃟⸽⃟🌲৴▸ 𝙼𝙴𝙽𝚄 𝙳𝙾𝙽𝙾', description: '𖥨ํ∘̥⃟⸽⃟❄️৴▸ 𝙴𝚇𝙲𝙻𝚄𝚂𝙸𝚅𝙾 𝙰𝙿𝙴𝙽𝙰𝚂 𝙿𝙰𝚁𝙰 𝙼𝙴𝚄𝚂 𝙳𝙾𝙽𝙾𝚂', id: `${prefix}menudono` }],
                },
                {
                  title: '𖥨ํ∘̥⃟⸽⃟🎁৴▸ 𝙼𝙴𝙽𝚄𝚂',
                  highlight_label: '🌲',
                  rows: [
                    { title: '❪❄️ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄', description: '❄️ꪾ〬ꩌ۪٬ླྀ 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 𝙳𝙾  𝙱𝙾𝚃', id: `${prefix}menup` },
                    { title: '❪🦌ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝙰𝙳𝙼', description: '❄️ꪾ〬ꩌ۪٬ླྀ 𝙼𝙴𝙽𝚄 𝙿𝙰𝚁𝙰 𝙰𝙳𝙼𝙸𝙽𝚂', id: `${prefix}menuadm` },
                    { title: '❪🍦ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝙳𝙾𝙽𝙾', description: '❪🍧ฺ࣭࣪͘ꕸ▸ྀ 𝙼𝙴𝙽𝚄 𝙰𝙿𝙴𝙽𝙰𝚂 𝙿𝙰𝚁𝙰 𝙾𝚂 𝙳𝙾𝙽𝙾𝚂', id: `${prefix}menudono` },
                    { title: '❪💸ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝚅𝙸𝙿', description: '❪🎅🏻ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝙿𝙰𝚁𝙰 𝚅𝙸𝙿𝚂', id: `${prefix}menuvip` },
                    { title: '❪🎮ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝙶𝙰𝙼𝙴𝚂', description: '❪🌲ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙹𝙾𝙶𝙾𝚂', id: `${prefix}menugames` },
                                        { title: '❪🎁ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝚂', description: '❪🦌ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝚂', id: `${prefix}menudownloads` },
                    { title: '❪☃️ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝙻𝙾𝙶𝙾𝚂', description: '❪❄️ฺ࣭࣪͘ꕸ▸ྀ 𝙵𝙰𝙲̧𝙰 𝚂𝚄𝙰 𝙵𝙾𝚃𝙾 𝙽𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚄', id: `${prefix}menulogos` },
                    { title: '❪🪄ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝙴𝙵𝙴𝙸𝚃𝙾𝚂', description: '❪⚡ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙴𝙵𝙴𝙸𝚃𝙾𝚂', id: `${prefix}menuefeitos` },
                    { title: '❪🎅🏻ฺ࣭࣪͘ꕸ▸ 𝙼𝙴𝙽𝚄 𝙷𝙴𝙽𝚃𝙰𝙸', description: '❪🔔ฺ࣭࣪͘ꕸ▸ 𝙿𝙻𝙰𝚀𝚄𝙸𝙽𝙷𝙰𝚂 +𝟷𝟾', id: `${prefix}menuhentai` },
                  ],
                }
              ],
            }),
          },
        },
      ],
      headerType: 4,
      viewOnce: true,
    }, { quoted: selometa });
    await new Promise(resolve => setTimeout(resolve, 1000));
    reagir('✅');
    await new Promise(resolve => setTimeout(resolve, 1000));
    reagir('❤️');
    await new Promise(resolve => setTimeout(resolve, 1000));
    reagir('🔪');
    await new Promise(resolve => setTimeout(resolve, 1000));
    reagir('');
  break
                case 'fazerpix': {
reply(
`💰 *PAGAMENTO DO ALUGUEL*

🔑 *Chave PIX:*
${chavepix}

📱 *Contato do dono:*
wa.me/${numerodono}

📋 *PASSO A PASSO:*

1- Faça o pagamento referente ao seu aluguel.

2- Envie o comprovante.

3- Mande o comprovante + o PIX utilizado + o ID ou link do grupo para o número do dono.

4- Aguarde a confirmação e a liberação do bot no grupo.

✅ Assim que o pagamento for confirmado, seu aluguel será ativado.`
);
}
break;
case 'local': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!q) return reply(`Use: ${prefix}local <nome do lugar>\nEx: ${prefix}local Nova York`);

    const axios = require('axios');

    try {
        let query = args.join(" ");

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=1`;

        const res = await axios.get(url, {
            headers: {
                'User-Agent': 'ToshiruzBot-V1 (contato: email@dominio.com)' 
            }
        });

        if (!res.data || res.data.length === 0)
            return reply("❌ Nenhum resultado encontrado.");

        const lugar = res.data[0];

        const texto = `
📍 *Resultado da Busca*
🔎 *${query}*

🌍 *Endereço:* ${lugar.display_name}
📌 *Latitude:* ${lugar.lat}
📌 *Longitude:* ${lugar.lon}

🗺️ *OpenStreetMap detectou:*
- País: ${lugar.address.country || "—"}
- Estado: ${lugar.address.state || "—"}
- Cidade: ${lugar.address.city || lugar.address.town || lugar.address.village || "—"}

🔗 Mapa:
https://www.openstreetmap.org/?mlat=${lugar.lat}&mlon=${lugar.lon}#map=12/${lugar.lat}/${lugar.lon}
`;

        await sock.sendMessage(from, {
            text: texto,
            mentions: [sender]
        }, { quoted: selometa });

    } catch (err) {
        console.error(err);
        reply("❌ Erro ao buscar localização.");
    }
}
break;
case 'gerarimg': {
if (!isGroup) return reply(enviar.msg.group);
 if (!q) return reply(
`🖼️ Envie um texto para gerar a imagem\n\nEx:\n${prefix}gerarimage gato astronauta realista`
 )
 
reply('🎨 Gerando imagem com IA, aguarde...')

try {
const prompt = encodeURIComponent(q)
const imgUrl = `https://image.pollinations.ai/prompt/${prompt}`

 await sock.sendMessage(from, {
 image: { url: imgUrl },
 caption: `🖼️ Imagem gerada com IA\n\n📝 Prompt: ${q}`
 }, { quoted: selometa })

 } catch (err) {
 console.error(err)
 reply('Erro ao gerar a imagem...')
 }
}
break
                case "update": {

if (!isDono) return;

reply("🔄 Verificando atualização...");

const resultado = await atualizarBot();

reply(resultado.mensagem);

if (resultado.status) {

    reply("♻ Reiniciando...");

    setTimeout(() => {
        process.exit(0);
    }, 3000);

}

}
break;
            case 'menuhentai':
            case 'hentai':
            case 'menu+18':
            if (!isGroup) return reply(enviar.msg.group);

          try {
          reagir('😈');
          await new Promise(resolve => setTimeout(resolve, 2000));
          const menuHentai = menuhentai(prefix, NomeDoBot);
            await sock.sendMessage(
    from,
    {
        image: { url: fotomenu },
        caption: menuHentai,
        mentions: [sender],
        contextInfo: {
            forwardingScore: 100000,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363405476475431@newsletter",
                newsletterName: NomeDoBot
            }
        }
    },
    { quoted: selometa }
);
            } catch (e) {
            reagir('❌');
            console.log('Erro ao enviar o menu:', e)
            reply('❌ Erro ao enviar o menu');
            }
            break;
            case 'sigma': {
    if (!isGroup) return reply(enviar.msg.group);

    const mencionado = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const respondido = info.message?.extendedTextMessage?.contextInfo?.participant;
    const alvo = mencionado || respondido || sender;

    const porcentagem = Math.floor(Math.random() * 101);

    const imgSigmaPath = './media/temp/sigma.jpg';
    const imgBuffer = fs.readFileSync(imgSigmaPath);

    await sock.sendMessage(from, { text: `☠️ Analisando sua porcentagem de sigma, aguarde...` }, { quoted: selometa });

    await sock.sendMessage(from, {
        image: imgBuffer,
        caption: `Se liga o quanto cê é sigma, @${alvo.split('@')[0]}: *${porcentagem}%*
${porcentagem >= 110 ? "🦇 Dominante supremo, sem defeitos..." :
porcentagem >= 80 ? "🦍 Dominante supremo." :
porcentagem >= 50 ? "😎 Sigma nato, confiança absurda." :
porcentagem >= 20 ? "🙂 Tem traços sigma, mas precisa treinar." :
"💀 Pouco sigma... precisa melhorar urgentemente."}
`,
        mentions: [alvo]
    }, { quoted: selometa });
}
break;
case 'bemvindo': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.adm);
    if (!isBotAdmin) return reply(enviar.msg.botadm);
    
    const groupId = from;

    if (welcome[groupId]) {
        delete welcome[groupId];
        reply('❌ Mensagens de boas-vindas e saída foram desativadas neste grupo!');
    } else {
        welcome[groupId] = true;
        reply('✅ Mensagens de boas-vindas e saída foram ativadas neste grupo!');
    }
    fs.writeFileSync('./assets/welcome.json', JSON.stringify(welcome, null, 2));
}
break;
            case 'destrava': {
            if (!isGroup) return reply(enviar.msg.group);
            if (!isAdmin) return reply(enviar.msg.adm);
            if (!isBotAdmin) return reply(enviar.msg.botadm)
            const { destrava } = require('./dono/destrava.js');
            const destravar = destrava();
            reply('⚡ Enviando destrava...');
            await new Promise(resolve => setTimeout(resolve, 1000));
            await sock.sendMessage(from, { text: destravar }, { quoted: info });
            break;
            }
case 'menufig':
case 'fig':
       if (!isGroup) return reply(enviar.msg.group);
          try {
          reagir('🌟');
          await new Promise(resolve => setTimeout(resolve, 2000));
          const menuFig = menufig(prefix, NomeDoBot);
            await sock.sendMessage(
    from,
    {
        image: { url: fotomenu },
        caption: menuFig,
        mentions: [sender],
        contextInfo: {
            forwardingScore: 100000,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363405476475431@newsletter",
                newsletterName: NomeDoBot
            }
        }
    },
    { quoted: selometa }
);
            } catch (e) {
            reagir('❌');
            console.log('Erro ao enviar o menu:', e)
            reply('❌ Erro ao enviar o menu');
            }
            break;
case 'totag': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.adm);
    if (!isBotAdmin) return reply(enviar.msg.botadm);

    const groupData = await sock.groupMetadata(from);
    const participants = groupData.participants.map(p => p.id);
    const groupName = groupData.subject;

    let texto = args.join(" ");

    // Caso 1 — sem texto e sem resposta
    if (!texto && !quoted) {
        await sock.sendMessage(from, {
            text: '',
            mentions: participants,
            contextInfo: {
                mentionedJid: participants,
                externalAdReply: {
                    title: `Grupo • ${groupName}`,
                    body: '',
                    mediaType: 2,
                }
            }
        }, { quoted: selometa });
        break;
    }

    // Caso 2 — com texto (sem resposta)
    if (texto && !quoted) {
        await sock.sendMessage(from, {
            text: texto,
            mentions: participants,
            contextInfo: {
                mentionedJid: participants,
                externalAdReply: {
                    title: `Grupo • ${groupName}`,
                    body: '',
                    mediaType: 2,
                }
            }
        }, { quoted: selometa });
        break;
    }

    // Caso 3 — respondendo algo
    if (quoted) {

        // IMAGEM
        if (quoted.imageMessage) {
            const buffer = await sock.downloadMediaMessage({ message: { imageMessage: quoted.imageMessage } });

            await sock.sendMessage(from, {
                image: buffer,
                caption: texto || "",
                mentions: participants,
                contextInfo: {
                    mentionedJid: participants,
                    externalAdReply: {
                        title: `Grupo • ${groupName}`,
                        body: '',
                        mediaType: 2,
                    }
                }
            }, { quoted: selometa });
            break;
        }

        // VÍDEO
        if (quoted.videoMessage) {
            const buffer = await sock.downloadMediaMessage({ message: { videoMessage: quoted.videoMessage } });

            await sock.sendMessage(from, {
                video: buffer,
                caption: texto || "",
                mentions: participants,
                contextInfo: {
                    mentionedJid: participants,
                    externalAdReply: {
                        title: `Grupo • ${groupName}`,
                        body: '',
                        mediaType: 2,
                    }
                }
            }, { quoted: selometa });
            break;
        }

        // FIGURINHA
        if (quoted.stickerMessage) {
            const buffer = await sock.downloadMediaMessage({ message: { stickerMessage: quoted.stickerMessage } });

            await sock.sendMessage(from, {
                sticker: buffer,
                mentions: participants,
                contextInfo: {
                    mentionedJid: participants,
                    externalAdReply: {
                        title: `Grupo • ${groupName}`,
                        body: '',
                        mediaType: 2,
                    }
                }
            }, { quoted: selometa });
            break;
        }

        // ÁUDIO
        if (quoted.audioMessage) {
            const buffer = await sock.downloadMediaMessage({ message: { audioMessage: quoted.audioMessage } });

            await sock.sendMessage(from, {
                audio: buffer,
                mimetype: "audio/mp4",
                ptt: true,
                mentions: participants,
                contextInfo: {
                    mentionedJid: participants,
                    externalAdReply: {
                        title: `Grupo • ${groupName}`,
                        body: '',
                        mediaType: 2,
                    }
                }
            }, { quoted: selometa });
            break;
        }

        // TEXTO
        if (quoted.conversation || quoted.extendedTextMessage?.text) {
            const textoQuote = quoted.conversation || quoted.extendedTextMessage.text;

            await sock.sendMessage(from, {
                text: `${texto ? texto + "\n\n" : ""}${textoQuote}`,
                mentions: participants,
                contextInfo: {
                    mentionedJid: participants,
                    externalAdReply: {
                        title: `Grupo • ${groupName}`,
                        body: '',
                        mediaType: 2,
                    }
                }
            }, { quoted: selometa });
            break;
        }
    }

    reply("⚠ Não consegui identificar o tipo de mensagem respondida.");
}
break;
                case 'limpar': {

if (!isDono) return;

let db = carregarGold();
let removidos = 0;

for (const usuario in db) {

    let encontrado = false;

    const grupos = Object.keys(await sock.groupFetchAllParticipating());

    for (const grupo of grupos) {

        try {

            const membros =
            (await sock.groupMetadata(grupo))
            .participants
            .map(x => x.id);

            if (membros.includes(usuario)) {
                encontrado = true;
                break;
            }

        } catch {}

    }

    if (!encontrado) {
        delete db[usuario];
        removidos++;
    }

}

salvarGold(db);

reply(
`🧹 Limpeza concluída!

👤 Usuários removidos: ${removidos}`
);

}
break;
                case 'cacapalavras': {

const palavra =
palavrasCaca[Math.floor(Math.random() * palavrasCaca.length)];

const embaralhada = palavra
.split('')
.sort(() => Math.random() - 0.5)
.join('');

cacaPalavras[sender] = palavra;

reply(
`🔎 CAÇA-PALAVRAS\n\n` +
`Descubra a palavra:\n` +
`🔤 ${embaralhada}\n\n` +
`Use:\n!responder palavra`
);

}
break;
                case 'responder': {

if (!cacaPalavras[sender])
return reply('Você não possui nenhum caça-palavras ativo.');

const resposta = q.trim().toLowerCase();
const correta = cacaPalavras[sender].toLowerCase();

if (resposta === correta) {

addGold(sender, 10);

delete cacaPalavras[sender];

reply(
`🎉 Você acertou!\n\n` +
`💰 +10 Golds\n` +
`🏦 Saldo atual: ${getGold(sender)}`
);

} else {

reply('❌ Resposta incorreta.');

}

}
break;
case 'gemini': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💫 *Escreva algo após o comando!*\nExemplo: ${prefix}gemini Bom dia`);

        const esperando = await reagir('🪄');

        const fetch = (await import('node-fetch')).default;
        const apiUrl = `https://neon-apis.online/api/gemini?texto=${encodeURIComponent(q)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) return reply('❌ Erro ao acessar a API.');

        const data = await res.json();

        // Verifica se existe a chave "resposta"
        if (!data || !data.resposta)
            return reply('⚠️ A API não retornou nenhuma resposta.');

        // Envia a resposta da IA
        await sock.sendMessage(from, { text: data.resposta }, { quoted: info });

        // Apaga a mensagem "Consultando..."
        await sock.sendMessage(from, { delete: esperando.key });

    } catch (e) {
        console.log(e);
        reply('❌ Ocorreu um erro ao buscar a resposta da IA.');
    }
}
break;
case 'tiktok': {
    try {
        if (!q) return reply('📹 *Envie o link de algum vídeo do TikTok.*\nExemplo: #tiktok https://vt.tiktok.com/xxxx');

        const esperando = await reagir('🎥');

        const fetch = (await import('node-fetch')).default;

        // A API já retorna o arquivo MP4 diretamente
        const videoRes = await fetch(`https://neon-apis.online/api/tiktok-video?url=${encodeURIComponent(q)}`);

        if (!videoRes.ok) return reply('❌ Erro ao acessar a API.');

        // Como é MP4 direto, pega como buffer
        const buffer = await videoRes.buffer();

        // Envia para o WhatsApp
        await sock.sendMessage(
            from,
            {
                video: buffer,
                mimetype: "video/mp4",
                caption: ""
            },
            { quoted: info }
        );

    } catch (e) {
        console.log(e);
        reply('❌ Erro ao baixar o vídeo.');
    }
}
break;
                case 'oqueoque': {

const palavra = palavras[
Math.floor(Math.random() * palavras.length)
];

const embaralhada = palavra
.split('')
.sort(() => Math.random() - 0.5)
.join('');

jogoPalavras[sender] = palavra;

reply(
`🎮 O QUE É O QUE?\n\n` +
`Descubra a palavra:\n\n` +
`🔤 ${embaralhada}\n\n` +
`Use:\n!resposta palavra`
);

}
break;
                case 'resposta': {

if (!jogoPalavras[sender])
return reply('Você não iniciou um jogo.');

const resposta =
q.trim().toLowerCase();

const correta =
jogoPalavras[sender]
.toLowerCase();

if (resposta === correta) {

addGold(sender, 5);

delete jogoPalavras[sender];

reply(
`✅ Acertou!\n` +
`💰 +5 Golds\n\n` +
`Saldo: ${getGold(sender)}`
);

} else {

reply('❌ Palavra incorreta.');
}

}
break;
                case 'saldo': {

reply(
`💰 Seu saldo:\n\n` +
`${getGold(sender)} Golds`
);

}
break;
                case 'ranking': {

let db = carregarGold();

let ranking = Object.entries(db)
.sort((a, b) => b[1].gold - a[1].gold)
.slice(0, 10);

let texto = '🏆 TOP 10 RICOS\n\n';

ranking.forEach((u, i) => {
texto +=
`${i + 1}° ${u[0].split('@')[0]}\n` +
`💰 ${u[1].gold} Golds\n\n`;
});

reply(texto);

}
break;
case 'gerarcpf':
case 'cpf': {
if (!isGroup) return reply(enviar.msg.group)
    const novoCPF = gerarCPF();
    await sock.sendMessage(from, {
        text: `🧾 *CPF Gerado com Sucesso!*\n\n👉 ${novoCPF}`
    }, { quoted: selometa });

}
break;
case 'grupo': case 'group': {
try {
  if (!isGroup) return reply(enviar.msg.group);
  if (!isAdmin) return reply(enviar.msg.adm);
  if (!isBotAdmin) return reply(enviar.msg.botadm);

  const buttons = [
    { buttonId: `${prefix}gp a`, buttonText: { displayText: '🔓 Abrir Grupo' }, type: 1 },
    { buttonId: `${prefix}gp f`, buttonText: { displayText: '🔒 Fechar Grupo' }, type: 1 },
    { buttonId: ``, buttonText: { displayText: '✅ Aceitar participantes pendentes' }, type: 1 }
  ];

  const buttonMessage = {
    text: '❓ O que deseja que eu faça no grupo?',
    footer: NomeDoBot,
    buttons: buttons,
    headerType: 1
  };

  await sock.sendMessage(from, buttonMessage);
  } catch (e) {
  reply('Erro.');
  console.error(e);
  }
}
break;
case 'aceitar': {
try {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.adm);
    if (!isBotAdmin) return reply(enviar.msg.botadm);

    let req = await sock.groupRequestParticipantsList(from);

    if (!req) return reply("❗ Não foi possível obter os participantes pendentes.");

    let pendentes = [];

    // Suporte a diferentes formatos do Baileys-Pro
    if (Array.isArray(req)) pendentes = req;
    else if (Array.isArray(req.participants)) pendentes = req.participants;
    else if (Array.isArray(req.requests)) pendentes = req.requests;

    if (pendentes.length === 0)
        return reply("❗ Não há participantes pendentes.");

    const jids = pendentes.map(p => p.jid).filter(j => j);

    if (jids.length === 0)
        return reply("❗ Não foi possível encontrar os JIDs pendentes.");

    await sock.groupRequestParticipantsUpdate(from, jids, "approve");

    reply(`✅ *${jids.length} participante(s)* foram aceitos.`);

} catch (e) {
    reply("❗ Ocorreu um erro ao aceitar.");
    console.error(e);
}
}
break;
case 'recusar': {
try {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.adm);
    if (!isBotAdmin) return reply(enviar.msg.botadm);

    let req = await sock.groupRequestParticipantsList(from);

    if (!req) return reply("❗ Não foi possível obter os participantes pendentes.");

    let pendentes = [];

    // Suporte a diferentes retornos
    if (Array.isArray(req)) pendentes = req;
    else if (Array.isArray(req.participants)) pendentes = req.participants;
    else if (Array.isArray(req.requests)) pendentes = req.requests;

    if (pendentes.length === 0)
        return reply("❗ Não há participantes pendentes para recusar.");

    const jids = pendentes.map(p => p.jid).filter(j => j);

    if (jids.length === 0)
        return reply("❗ Não foi possível encontrar os JIDs pendentes.");

    await sock.groupRequestParticipantsUpdate(from, jids, "reject");

    reply(`❌ *${jids.length} participante(s)* foram recusados.`);

} catch (e) {
    reply("❗ Ocorreu um erro ao recusar.");
    console.error(e);
}
}
break;
case 'tomp3': {
    if (!isGroup) return reply(enviar.msg.group);

    // Verifica se respondeu um vídeo
    const quotedMsg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage; 
    const { exec } = require('child_process');
    if (!quotedMsg || !quotedMsg.videoMessage)
        return reply('🎬 Responda um *vídeo* para converter em MP3!');

    try {
        // Baixa o vídeo
        reagir('💬');
        reply('✨ Transformando vídeo em áudio...');
        const buffer = await downloadMediaMessage(
            { message: quotedMsg },
            'buffer',
            { reuploadRequest: sock }
        );

        const input = './media/tomp3_input.mp4';
        const output = './media/tomp3_output.mp3';

        // Salva o vídeo temporário
        writeFileSync(input, buffer);

        // Converte para MP3
        exec(`ffmpeg -i ${input} -vn -acodec libmp3lame ${output}`, async (err) => {
            if (err) {
                console.error('FFmpeg error:', err);
                return reply('❌ Erro ao converter o vídeo para MP3.');
            }

            // Lê o arquivo final
            const audio = readFileSync(output);

            // Envia o MP3
            reagir('✅');
            await sock.sendMessage(from, {
                audio,
                mimetype: 'audio/mpeg'
            });

            // Apaga arquivos para não lotar a pasta
            try {
                unlinkSync(input);
                unlinkSync(output);
            } catch {}

        });

    } catch (e) {
        console.error(e);
        reply('❌ Ocorreu um erro ao processar o áudio.');
    }

}
break;
case 'criador':
if (!isGroup) return reply(enviar.msg.group);
sock.sendMessage(
    from,
    { 
        text: `💖 Oii, ${info.pushName}! Aqui estão os números:\n\nCriador: +55 83 9176-2245\nSub-dono: +55 13 9622-9058\n`, 
        footer: NomeDoBot 
    }, { quoted: selometa });
break;
                case 'divmsg':
case 'div': {
    if (!isGroup) return;
    if (!isDono) return;

    if (!args.length) return;

    const textoCompleto = args.join(' ');
    if (!textoCompleto.includes('|')) return;

    const [texto, quantidade] = textoCompleto.split('|').map(v => v.trim());
    const qtd = parseInt(quantidade);

    if (!texto || isNaN(qtd) || qtd <= 0 || qtd > 10) return;

    try {
        await reagir(from, '💸');

        const metadata = await sock.groupMetadata(from);
        const participantes = metadata.participants.map(p => p.id);

        for (let i = 0; i < qtd; i++) {
            await sock.relayMessage(from, {
                requestPaymentMessage: {
                    currencyCodeIso4217: 'BRL',
                    amount1000: 9999999000,
                    requestFrom: '0@s.whatsapp.net',
                    noteMessage: {
                        extendedTextMessage: {
                            text: texto,
                            contextInfo: {
                                mentionedJid: participantes
                            }
                        }
                    },
                    expiryTimestamp: 0,
                    amount: {
                        value: 9999999,
                        offset: 3,
                        currencyCode: 'BRL'
                    }
                }
            }, {});
            
            await delay(2000);
        }

        await reagir(from, '✅');

    } catch (e) {
        console.log('[CASE DIV ERRO]', e.message);
        await reagir(from, '❌');
    }
}
break;
                case 'rg_aluguel': {
    if (!isDono) return reply("Apenas o dono.");

    if (!isGroup) return reply("Use em um grupo.");

    if (!args[0]) return reply("Exemplo:\nrg_aluguel 30");

    let dias = Number(args[0]);
    if (isNaN(dias)) return reply("Informe os dias.");

    let db = carregarAluguel();

    db.push({
        id: from,
        nome: groupMetadata.subject,
        expira: Date.now() + (dias * 86400000)
    });

    salvarAluguel(db);

    reply(`✅ Grupo registrado por ${dias} dias.`);
}
break;
            case 'adotarpet': {
    let db = getDB();

    if (!db[sender]) {
        db[sender] = { pets: [] };
    }

    let tem = db[sender].pets.find(p => p.id === 1);

    if (tem) return reply("❌ Você já adotou seu pet inicial.");

    db[sender].pets.push({
        id: 1,
        nome: "Doguinho",
        raridade: "comum",
        valor: 5
    });

    fs.writeFileSync('./assets/userpets.json', JSON.stringify(db, null, 2));

    return reply("🐾 Você adotou seu primeiro pet: Doguinho!");
}
break;
                case 'comprarpet': {
    const pets = JSON.parse(fs.readFileSync('./assets/pet.json'));
    const golds = JSON.parse(fs.readFileSync('./assets/golds.json'));
    let db = getDB();

    let pet = pets.find(p =>
        p.nome.toLowerCase() === q?.toLowerCase() || p.id == q
    );

    if (!pet) return reply("❌ Pet não encontrado!");

    if (!golds[sender]) golds[sender] = { gold: 0 };
    if (!db[sender]) db[sender] = { pets: [] };

    if (golds[sender].gold < pet.preco)
        return reply("❌ Gold insuficiente!");

    if (db[sender].pets.find(p => p.id == pet.id))
        return reply("⚠️ Você já tem esse pet!");

    db[sender].pets.push({
        id: pet.id,
        nome: pet.nome,
        raridade: pet.raridade,
        valor: pet.preco
    });

    golds[sender].gold -= pet.preco;

    fs.writeFileSync('./assets/userpets.json', JSON.stringify(db, null, 2));
    fs.writeFileSync('./assets/golds.json', JSON.stringify(golds, null, 2));

    return reply(`🐾 Você comprou ${pet.nome}!`);
}
break;
                case 'venderpet': {
    let db = getDB();

    if (!db[sender] || !db[sender].pets.length)
        return reply("❌ Você não tem pets.");

    let index = parseInt(q) - 1;

    if (isNaN(index) || !db[sender].pets[index])
        return reply("❌ Pet inválido.");

    let pet = db[sender].pets[index];

    let golds = JSON.parse(fs.readFileSync('./assets/golds.json'));

    if (!golds[sender]) golds[sender] = { gold: 0 };

    let valor = Math.floor(pet.valor / 2);

    golds[sender].gold += valor;

    db[sender].pets.splice(index, 1);

    fs.writeFileSync('./assets/userpets.json', JSON.stringify(db, null, 2));
    fs.writeFileSync('./assets/golds.json', JSON.stringify(golds, null, 2));

    return reply(`💸 Você vendeu ${pet.nome} por ${valor} golds!`);
}
break;
                case 'rank_pet': {
    let db = getDB();

    let all = [];

    Object.entries(db).forEach(([user, data]) => {
        (data.pets || []).forEach(p => {
            all.push({
                owner: user,
                nome: p.nome,
                valor: p.valor || 0
            });
        });
    });

    if (!all.length) return reply("❌ Nenhum pet encontrado.");

    all.sort((a, b) => b.valor - a.valor);

    let txt = `🏆 *RANK DE PETS MAIS RAROS*\n\n`;

    all.slice(0, 10).forEach((p, i) => {
        txt += `${i + 1}. ${p.nome} - 💰 ${p.valor}\n`;
    });

    return reply(txt);
}
break;
                case 'rm_aluguel': {
    if (!isDono) return;

    let db = carregarAluguel();

    db = db.filter(g => g.id != from);

    salvarAluguel(db);

    reply("✅ Grupo removido do aluguel.");
}
break;
                case 'veraluguel': {
    const aluguel = grupoAlugado(from);

    if (!aluguel)
        return reply("❌ Este grupo não possui aluguel ativo.");

    const restante = aluguel.expira - Date.now();

    const dias = Math.floor(restante / 86400000);
    const horas = Math.floor((restante % 86400000) / 3600000);

    reply(
`📋 ALUGUEL

Nome: ${aluguel.nome}
Dias restantes: ${dias}d ${horas}h`
    );
}
break;
                case 'listaaluguel': {
    if (!isDono) return;

    let db = carregarAluguel();

    if (db.length < 1)
        return reply("Nenhum grupo registrado.");

    let txt = "📋 LISTA DE ALUGUÉIS\n\n";

    db.forEach((g, i) => {
        const restante = g.expira - Date.now();
        const dias = Math.floor(restante / 86400000);

        txt += `${i + 1} • ${g.nome}\n`;
        txt += `ID: ${g.id}\n`;
        txt += `Restam: ${dias} dias\n\n`;
    });

    reply(txt);
}
break;
                case 'aluguelglobal': {
    if (!isDono) return;

    let db = carregarAluguel();

    let ativos = db.filter(g => g.expira > Date.now()).length;
    let vencidos = db.filter(g => g.expira <= Date.now()).length;

    reply(
`🌎 ALUGUEL GLOBAL

Ativos: ${ativos}
Vencidos: ${vencidos}
Total: ${db.length}`
    );
}
break;
                case 'criargp': {
    if (!isDono) return reply('❌ | Apenas o dono pode usar isso');

    if (!args.length) return reply(`📌 Use: ${prefix + command} <nome do grupo>`);

    const nomeGrupo = args.join(' ');

    try {
        await reagir(from, '⏳');

        // Cria grupo vazio
        const response = await sock.groupCreate(nomeGrupo, []);
        const groupId = response.gid || response.id;

        // Pega link do grupo
        const inviteCode = await sock.groupInviteCode(groupId);
        const groupLink = `https://chat.whatsapp.com/${inviteCode}`;

        await sock.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/qims6c.jpg' }, // troca a URL
            caption:
`✅ Grupo criado com sucesso!

📌 *Nome:* ${nomeGrupo}
🆔 *ID:* ${groupId}

🔗 *Link do grupo:*
${groupLink}`
        }, { quoted: info });

        await reagir(from, '✅');

    } catch (e) {
        console.log('[ERRO CRIAR GP]', e.message);
        await reagir(from, '❌');
        
        await sock.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/u4owqu.jpg' }, // troca a URL
            caption: '❌ | Ocorreu um erro ao criar o grupo.\n\n> WhatsApp limita criação de grupos por dia'
        }, { quoted: info });
    }
}
break;
case 'sair':
case 'sairgp': {
    if (!isGroup) return reply('❌ | Esse comando só funciona em grupos.');
    if (!isDono) return reply(mess.dono);

    try {
        await reagir(from, '👋');
        await reply('「😢」 Saindo do grupo...');

        // Se o bot for admin, sai mesmo assim
        await sock.groupLeave(from);

    } catch (e) {
        console.log('[CASE SAIR ERRO]', e.message);
        await reagir(from, '❌');

        if (e.data === 406) {
            return reply('❌ | Não estou nesse grupo.');
        }

        reply('❌ | Erro ao sair do grupo. ' + e.message);
    }
}
break;
case 'rm_aluguel': {
    let data = lerAluguel();
    if (!data.ativo) return reply(`*ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.* 🙅‍♂️`);
    if (!isDono) return reply('*Apenas o dono pode usar este comando*');

    if (args[0]) {
        const index = parseInt(args[0]) - 1;
        if (isNaN(index) || index < 0 || index >= data.grupos.length)
            return reply(`*ᴜsᴇ: ${prefix}rm_aluguel 1*`);

        const alvo = data.grupos[index];
        desativarAluguelGrupo(alvo.id);
        return reply(`*✅ ᴀʟᴜɢᴜᴇʟ ᴅᴏ ɢʀᴜᴩᴏ ʀᴇᴍᴏᴠɪᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ*`);
    }

    if (!isGroup) return reply('*Este comando só funciona em grupos*');
    const grupo = data.grupos.find(g => g.id === from);
    if (!grupo) return reply(`*ᴇssᴇ ɢʀᴜᴘᴏ ɴᴀ̃ᴏ ᴇsᴛᴀ́ ᴀʟᴜɢᴀᴅᴏ. 🤷‍♂️*`);

    desativarAluguelGrupo(from);
    reply(`*✅ ᴀʟᴜɢᴜᴇʟ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴇsᴛᴇ ɢʀᴜᴘᴏ.* 🔓🤷‍♂️`);
}
break;
                case 'nuke': {
    if (!isGroup) return reply('❌ | Comando só funciona em grupos');
    if (!isDono) return reply('❌ | Apenas meu dono pode usar isso');
    if (!isBotAdmin) return reply('❌ | Preciso ser ADM pra executar');

    try {
        await reagir(from, '💣');
        reply('「⚠️」 Iniciando nuke...');

        const groupMetadata = await sock.groupMetadata(from);
        const participants = groupMetadata.participants;

        const botNumber = sock.user.id.split(':')[0] + '@s.whatsapp.net';
        const owner = groupMetadata.owner || participants.find(p => p.admin === 'superadmin')?.id;

        // Remove admins primeiro, exceto bot e dono do grupo
        for (const p of participants) {
            if ((p.admin === 'admin' || p.admin === 'superadmin') && p.id!== botNumber && p.id!== owner) {
                try {
                    await sock.groupParticipantsUpdate(from, [p.id], 'remove');
                    await delay(1500); // Delay maior pra evitar ban
                } catch (e) {
                    console.log(`Erro ao remover admin ${p.id}:`, e.message);
                }
            }
        }

        // Remove membros comuns, exceto bot e dono do grupo
        for (const p of participants) {
            if (!p.admin && p.id!== botNumber && p.id!== owner) {
                try {
                    await sock.groupParticipantsUpdate(from, [p.id], 'remove');
                    await delay(1500);
                } catch (e) {
                    console.log(`Erro ao remover membro ${p.id}:`, e.message);
                }
            }
        }

        // Altera nome e descrição
        await sock.groupUpdateSubject(from, '[ GRUPO ARQUIVADO ]').catch(() => {});
        await sock.groupUpdateDescription(from, `[ GRUPO ARQUIVADO by ${NomeDono} ]`).catch(() => {});

        await reagir(from, '✅');
        reply('[ ☠️ GRUPO ARQUIVADO ]');

    } catch (e) {
        console.log('[CASE NUKE ERRO]', e.message);
        await reagir(from, '❌');
        reply('❌ | Erro ao executar nuke: ' + e.message);
    }
}
break;
case 'git': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!args[0]) return reply(`Use: ${prefix}git clone <link>`);

        // Verifica se o subcomando é "clone"
        if (args[0] !== "clone") {
            return reply(`Use: ${prefix}git clone <link>`);
        }

        const repo = args[1];
        if (!repo) return reply(`❌ Envie o link do repositório.\nExemplo: ${prefix}git clone https://github.com/user/repo`);

        // Formato padrão para baixar ZIP
        const zipUrl = repo.replace(/\.git$/, '') + "/archive/refs/heads/main.zip";

        reply("_*⚡ Baixando o arquivo na velocidade da luz...*_");

        const axios = require("axios");
        const fs = require("fs");
        const pathGit = "./media/temp/repo.zip";

        const response = await axios({
            url: zipUrl,
            method: "GET",
            responseType: "arraybuffer"
        });

        fs.writeFileSync(pathGit, response.data);

const repoName = repo.split('/').pop().replace('.git', '') || "repositório";

await sock.sendMessage(from, {
    document: fs.readFileSync(pathGit),
    mimetype: "application/zip",
    fileName: `${repoName}.zip`
}, { quoted: selometa });

        fs.unlinkSync(pathGit);

    } catch (err) {
        console.log(err);
        reply("❌ Erro ao clonar o repositório. Talvez ele não exista...");
    }
}
break;
case 'bug':
case 'bugs': {
       if (!isGroup) return reply(enviar.msg.group);
       if (!q) return reply('💢 *Digite algum bug* do bot após o comando!');
       const target = sender.split('@')[0];
       const textBug = `╔╤ֶׂ࣮֮ᩧ╧ֵᩬ᩼┅ٜꠥׂ๋໋┄҇͜͡ᗁ᮫๋ׅٜׄ✦ֵ֘҆ᗀ҇͡━̶⵿ׂ໋𝆋֘❗ຼ۪۪۪ᩙ⵿━̶᮫ׅׄ҇͡ᗁֵ໋֘✦ֺ๋ٜᗀ҇͜͡┄ׂ໋ٜ֮֔┅ꠥֵֶׂ๋໋╧ᩬ᩼╤݄࣫╗\n╭┅ׄᩙֶ┄ּׅ֘ꠥ━̶ׅׄ𔘓⃙໋ׄ╼⵿ׄ╾ׅ͠╬ּׅ۟۟۟۟۟۟۟۟╏ׂᩬּ֑💔ᩖׅׄᩙ̶ ᮫ׄ╏ּׅ۟۟۟۟۟۟╬͠╼⵿ׂ໋╾⃙̶֮𔘓ׂׅ֓━ֶׅ֘┄ׄᩙꠥ┅╮\n\n*MENSAGEM DE BUG... 💔*\n👤 Relatado por: ${info.pushName}\n🔢 Número: ${target}\n🗒️ ${q}\n\n╰ׅ┅ׄᩙֶ┄ּׅ֘ꠥ━̶ׅׄ𔘓⃙໋ׄ╼⵿ׄ╾ׅ͠╬ּׅ۟۟۟۟۟۟۟۟╏ׂᩬּ֑💔ᩖׅׄᩙ̶ ᮫ׄ╏ּׅ۟۟۟۟۟۟╬͠╼⵿ׂ໋╾⃙̶֮𔘓ׂׅ֓━ֶׅ֘┄ׄᩙꠥ┅╯\n╚ׂ݄╤ֶׂ࣮֮ᩧ╧ֵᩬ᩼┅ٜꠥׂ๋໋┄҇͜͡ᗁ᮫๋ׅٜׄ✦ֵ֘҆ᗀ҇͡━̶⵿ׂ໋𝆋֘❗ຼ۪۪۪ᩙ⵿━̶᮫ׅׄ҇͡ᗁֵ໋֘✦ֺ๋ٜᗀ҇͜͡┄ׂ໋ٜ֮֔┅ꠥֵֶׂ๋໋╧ᩬ᩼╤݄࣫╝`;
       await sock.sendMessage(numerodono + '@s.whatsapp.net', { text: textBug }, { quoted: selometa });
       reply(`✅ Bug reportado com sucesso!\n🌸 Agradecemos por melhorar o ${NomeDoBot}`);
       }
break;
case 'abrirgp': {
    const hora = q.trim();

    if (!hora.match(/^\d{2}:\d{2}$/)) {
        reply(`⏰ Use assim: *${prefix}abrirgp 15:00*`);
        break;
    }

    horarioAbrir = hora;
    reply(`🔓 O grupo será aberto automaticamente às *${hora}*`);
}
break;
case 'fechargp': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.adm);
    if (!isBotAdmin) return reply(enviar.msg.botadm);
    const hora = q.trim(); 

    if (!hora.match(/^\d{2}:\d{2}$/)) {
        reply(`Use assim: *${prefix}fechargp 20:00*`);
        break;
    }

    horarioFechar = hora;
    reply(`O grupo será fechado automaticamente às *${hora}*`);
}
break;
case 'd':
case 'delete':
case 'deletar': { 
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!isAdmin) return reply(enviar.msg.adm);
        if (!isBotAdmin) return reply(enviar.msg.botadm);

        const quoted = info.message?.extendedTextMessage?.contextInfo;
        if (!quoted || !quoted.stanzaId)
            return reply('❗ Responda a *alguma mensagem* para deletá-la.');

        await sock.sendMessage(from, {
            delete: {
                id: quoted.stanzaId,
                remoteJid: from,
                fromMe: false,
                participant: quoted.participant
            }
        });

    } catch (err) {
        console.error(err);
        reply('❌ Erro ao deletar a mensagem.');
    }
}
break;
case 'promover':
case 'p': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.admin);
    if (!isBotAdmin) return reply(enviar.msg.botadm)

    // Pega menção OU o usuário da mensagem citada
    const mentioned =
        info.message.extendedTextMessage?.contextInfo?.mentionedJid[0] ||
        (quoted ? quoted.sender : null);
    const answered = info.message.extendedTextMessage?.contextInfo?.participant;
    let alvo = answered || (mentioned?.length ? mentioned : null);

if (!alvo) {
    return reply('🌸 Marque alguém ou responda a mensagem de alguém para promover!');
}

    try {
        await sock.groupParticipantsUpdate(from, [alvo], 'promote');

        await sock.sendMessage(from, {
            text: `⚡ @${alvo.split('@')[0]} foi *promovido* a admin!`,
            mentions: [alvo]
        }, { quoted: info });

    } catch (e) {
        reply('❌ Erro ao promover usuário.');
        console.error(e);
    }
}
break;
case 'rebaixar': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.admin);
    if (!isBotAdmin) return reply(enviar.msg.botadm);

    const mentioned =
        info.message.extendedTextMessage?.contextInfo?.mentionedJid[0] ||
        (quoted ? quoted.sender : null);
    const answered = info.message.extendedTextMessage?.contextInfo?.participant;
    let alvo = answered || (mentioned?.length ? mentioned : null);

    if (!alvo)
        return reply('🍓 Marque alguém para rebaixar!');

    try {
        await sock.groupParticipantsUpdate(from, [alvo], 'demote');

        await sock.sendMessage(from, {
            text: `💢 Tudo bem, adm, @${alvo.split('@')[0]} *rebaixado* a admin com sucesso.`,
            mentions: [alvo]
        }, { quoted: info });
    } catch (e) {
        reply('❌ Erro ao rebaixar usuário.');
        console.error(e);
    }
}
break;
case 'antilink': {
    if (!isGroup) return reply(enviar.msg.group)
    if (!isAdmin) return reply(enviar.msg.adm)
    if (!isBotAdmin) return reply(enviar.msg.botadm)

    // Pega o estado atual
    try {
    const atual = antiLink[from];

    // Alterna
    antiLink[from] = !atual;

    // Salva no arquivo
    saveAntiLink();

    return reply(`🔗 AntiLink neste grupo ${antiLink[from] ? '*ativado*' : '*desativado*'} com sucesso!\n${antiLink[from] ? '> Agora quem enviar links, irei banir imediatamente...' : '> Agora não irei banir mais ninguém...'}`);
    } catch (err) {
    reply('❌ Erro ao ativar o antilink!');
    console.error(err)
    }
}
break;
case 'ban': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.adm);
    if (!isBotAdmin) return reply(enviar.msg.botadm);
    const mentioned =
        info.message.extendedTextMessage?.contextInfo?.mentionedJid[0] ||
        (quoted ? quoted.sender : null);
    const answered = info.message.extendedTextMessage?.contextInfo?.participant;
    let alvo = answered || (mentioned?.length ? mentioned : null);

    // Impedir ban do dono ou admins
    if (alvo === sender) return reply("❌ Você não pode se banir sozinho 😂");
    if (admins.includes(alvo)) return reply("❌ Não posso banir outro administrador.");

    try {
        await sock.groupParticipantsUpdate(
            from,
            [alvo],
            "remove"
        );

        reply(`✅ Usuário: ${alvo ? '@' + alvo.split('@')[0] : 'removido'} removido com sucesso por motivos justos!`, { mentions: [alvo] });

    } catch (e) {
        console.log("Erro no ban:", e);
        reply("❌ Ocorreu um erro ao tentar banir.");
    }

    break;
}
case 'adms':
case 'admins': {
    if (!isGroup) return reply(enviar.msg.group);

    if (admins.length === 0) {
        return reply('❌ Este grupo não possui administradores registrados.');
    }

    let texto = '👑 *Lista de Admins do Grupo:*\n\n';
    const mentions = [];

    admins.forEach(a => {
        const jid = a.id;
        const numero = jid.split('@')[0];
        texto += `@${numero}\n`;
        mentions.push(jid);
    });

    await sock.sendMessage(from, {
        text: texto,
        mentions: mentions
    });

}
break;
case 'toimg': {
    if (!isGroup) return reply(enviar.msg.group);
    const { exec } = require('child_process');

    // função para converter stream → buffer
    const streamToBuffer = async (stream) => {
        const chunks = [];
        for await (const chunk of stream) chunks.push(chunk);
        return Buffer.concat(chunks);
    };

    // garantir pasta
    if (!fs.existsSync('./media/sticker'))
        fs.mkdirSync('./media/sticker', { recursive: true });

    // detectar figurinha
    let stickerMsg = null;

    // enviada direto
    if (info.message.stickerMessage) {
        stickerMsg = info;
    }

    // respondida
    if (!stickerMsg && info.message.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage) {
        stickerMsg = {
            ...info,
            message: info.message.extendedTextMessage.contextInfo.quotedMessage
        };
    }

    if (!stickerMsg) {
        return reply('📸 Envie ou *responda a uma figurinha* para converter em imagem!');
    }

    try {
    reply('❣️ Transformando em imagem, aguarde...');
        let stickerStream = await downloadMediaMessage(stickerMsg);
        let stickerBuffer = await streamToBuffer(stickerStream);

        const inputPath = './media/sticker/input.webp';
        const outputPath = './media/sticker/output.png';

        fs.writeFileSync(inputPath, stickerBuffer);

        exec(`ffmpeg -i "${inputPath}" "${outputPath}"`, async (err) => {
            if (err) {
                console.error(err);
                return reply('❌ Erro ao converter figurinha.');
            }

            if (!fs.existsSync(outputPath)) {
                return reply('❌ Não consegui gerar a imagem final.');
            }

            const img = fs.readFileSync(outputPath);
            reagir('🌟');
            await sock.sendMessage(from, {
                image: img,
                caption: '🖼️ Aqui está sua imagem!'
            }, { quoted: info });

            try { fs.unlinkSync(inputPath); } catch {}
            try { fs.unlinkSync(outputPath); } catch {}
        });

    } catch (e) {
        console.error(e);
        reply('❌ Erro ao processar a figurinha.');
    }

    break;
}
case 'attp': {
    if (!isGroup) return reply(enviar.msg.group)
    if (!args[0]) return reply("✨ Escreva um texto para gerar o ATTp!");

    const texto = args.join(" ");
    const output = "./media/attp.webp";

    try {
        await gerarAttp(q, output);

        const sticker = fs.readFileSync(output);

        await sock.sendMessage(from, {
            sticker: sticker
        }, { quoted: info });
        fs.rmSync('./media/attp_frames', { recursive: true, force: true });
        fs.unlinkSync('./media/attp.gif');
        fs.unlinkSync('./media/attp.webp');

    } catch (e) {
        console.error(e);
        reply("❌ Erro ao gerar ATTp local.");
    }
}
break;
case 'sugestao':
case 'sugestão': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply('🌹 Digite uma sugestão após o comando!');

        const hoje = dataHoje();
        const id = sender;

        // Criar registro caso não exista
        if (!usoSugestao[id]) {
            usoSugestao[id] = { data: hoje, usos: 0 };
        }

        // Se for outro dia → reseta
        if (usoSugestao[id].data !== hoje) {
            usoSugestao[id].data = hoje;
            usoSugestao[id].usos = 0;
        }

        // Verificar limite de 4
        if (usoSugestao[id].usos >= 4) {
            return reply('🚫 *Você já usou o comando 4 vezes hoje!* Tente novamente amanhã. 🌅');
        }

        // Conta mais 1 uso
        usoSugestao[id].usos++;
        salvarSugestoes();

        // Mensagem da sugestão
        const textSug = `╔╤ֶׂ࣮֮ᩧ╧ֵᩬ᩼┅ٜꠥׂ๋໋┄҇͜͡ᗁ᮫๋ׅٜׄ✦ֵ֘҆ᗀ҇͡━̶⵿ׂ໋𝆋֘💢ຼ۪۪۪ᩙ⵿━̶᮫ׅׄ҇͡ᗁֵ໋֘✦ֺ๋ٜᗀ҇͜͡┄ׂ໋ٜ֮֔┅ꠥֵֶׂ๋໋╧ᩬ᩼╤݄࣫╗
╭┅ׄᩙֶ┄ּׅ֘ꠥ━̶ׅׄ𔘓⃙໋ׄ╼⵿ׄ╾ׅ͠╬ּׅ۟۟۟۟۟۟۟۟╏ׂᩬּ֑🚫ᩖׅׄᩙ̶ ᮫ׄ╏ּׅ۟۟۟۟۟۟╬͠╼⵿ׂ໋╾⃙̶֮𔘓ׂׅ֓━ֶׅ֘┄ׄᩙꠥ┅╮

😍 *SUGESTÃO NOVA CHEGOU!!* 
👤 Sugestão de: ${info.pushName}
🔢 Número: ${sender.split('@')[0]}
🗒️ ${q}

╰ׅ┅ׄᩙֶ┄ּׅ֘ꠥ━̶ׅׄ𔘓⃙໋ׄ╼⵿ׄ╾ׅ͠╬ּׅ۟۟۟۟۟۟۟۟╏ׂᩬּ֑🚫ᩖׅׄᩙ̶ ᮫ׄ╏ּׅ۟۟۟۟۟۟╬͠╼⵿ׂ໋╾⃙̶֮𔘓ׂׅ֓━ֶׅ֘┄ׄᩙꠥ┅╯
╚ׂ݄╤ֶׂ࣮֮ᩧ╧ֵᩬ᩼┅ٜꠥׂ๋໋┄҇͜͡ᗁ᮫๋ׅٜׄ✦ֵ֘҆ᗀ҇͡━̶⵿ׂ໋𝆋֘💢ຼ۪۪۪ᩙ⵿━̶᮫ׅׄ҇͡ᗁֵ໋֘✦ֺ๋ٜᗀ҇͜͡┄ׂ໋ٜ֮֔┅ꠥֵֶׂ๋໋╧ᩬ᩼╤݄࣫╝`;

        await sock.sendMessage(numerodono + '@s.whatsapp.net', { text: textSug }, { quoted: selometa });

        reply(`✅ *Sugestão enviada!*  
📌 Hoje você usou este comando *${usoSugestao[id].usos}/4* vezes.`);

    } catch (err) {
        console.error(err);
        reply('❌ Erro ao enviar sugestão...');
    }
}
break;
case 'ping': {
    if (!isGroup) return reply(enviar.msg.group)
    const os = require("os");
    const { performance } = require("perf_hooks");
    const inicio = performance.now();
    reagir('⚡');
    const fim = performance.now();
    const latencia = fim - inicio;

    // Uptime formatado
    function formatUptime(segundos) {
        const d = Math.floor(segundos / (3600 * 24));
        const h = Math.floor((segundos % (3600 * 24)) / 3600);
        const m = Math.floor((segundos % 3600) / 60);
        const s = Math.floor(segundos % 60);
        return `${d}d, ${h}h, ${m}m e ${s}s`;
    }

    const uptime = formatUptime(process.uptime());

    // Infos do sistema
    const so = os.type();            // Linux / Android / Windows
    const versao = os.release();     // versão do kernel
    const totalRAM = os.totalmem();  
    const freeRAM = os.freemem();
    const usedRAM = totalRAM - freeRAM;
    const percRAM = (usedRAM / totalRAM) * 100;

    // CPU (uso aproximado)
    const cpus = os.cpus();
    const cpuModel = (cpus && cpus.length > 0 && cpus[0].model) 
    ? cpus[0].model 
    : "Indisponível";
    let cpuUsage = 0;

    for (let cpu of cpus) {
        let total = 0;
        for (let tipo in cpu.times) total += cpu.times[tipo];
        cpuUsage += (1 - cpu.times.idle / total);
    }
    cpuUsage = (cpuUsage / cpus.length) * 100;

    // Versões
    const nodeVer = process.version;
    const baileysVer = require("baileys/package.json").version;
const dataa = fs.readFileSync(__dirname + '/index.js', 'utf-8');
const comanditos = [...dataa.matchAll(/case [`'"](\w+)[`'"]/g)].map(m => m[1]);
const totalComandos = comanditos.length;
await sock.sendMessage(from, {
react: {
text: '⚡',
key: m.key
}
});
    const textPing = `
📡 *Velocidade do Bot*
• Latência: *${latencia.toFixed(0)} ms*
• Uptime: *${uptime}*

🖥️ *Informações do Sistema*
• Sistema: *${so}*
• Kernel: *${versao}*
• Comandos carregados: *${totalComandos}*

• RAM usada: *( ${(usedRAM / 1024 / 1024 / 1024).toFixed(2)} GB )*
• RAM livre: *( ${(freeRAM / 1024 / 1024 / 1024).toFixed(2)} GB )*
• RAM total: *( ${(totalRAM / 1024 / 1024 / 1024).toFixed(2)} GB )*
• Uso da RAM: *${percRAM.toFixed(2)}%*
• Uso da CPU: *${cpuUsage.toFixed(2)}%*

⚙️ *Versões*
• Node.js: *${nodeVer}*
• Baileys: *${baileysVer}*
`;
    await sock.sendMessage(from, { text: textPing.trim() }, { quoted: info });
}
break;
case 'attp2': {
    if (!isGroup) return reply(enviar.msg.group);

    let texto = args.join(" ");
    if (!texto) return reply("🌸 Digite um texto para gerar o attp2!");

    const gerarAttp2 = require('./assets/functions/attp2.js');
    const output = './media/attp/attp2_final.webp';

    try {
        const file = await gerarAttp2(texto, output);
        await sock.sendMessage(from, { sticker: { url: file } }, { quoted: info });
        fs.unlinkSync('./media/attp/attp2_final.webp');
    } catch (e) {
        console.error(e);
        reply("❌ Falha ao gerar a figurinha.");
    }
}
break;
case 'getperfil': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!isVip) return reply(enviar.msg.vip);
        if (!q) return reply("❌ Use: #getperfil número\nEx: #getperfil 5511912345678");

        // Remove qualquer símbolo que não seja número
        const numero = q.replace(/\D/g, "");

        if (numero.length < 8) return reply("❌ Número inválido.");

        const jid = numero + "@s.whatsapp.net";

        // Buscar foto de perfil
        const ppUrl = await sock.profilePictureUrl(jid, "image")
            .catch(() => null);

        if (!ppUrl) return reply("❌ Não encontrei foto de perfil desse número.");

        // Baixar a imagem
        const buffer = await fetch(ppUrl).then(res => res.arrayBuffer());

        await sock.sendMessage(from, {
            image: Buffer.from(buffer),
            caption: `📸 Foto de perfil de: ${numero}`
        }, { quoted: selometa });

    } catch (e) {
        console.log("ERRO GETPERFIL:", e);
        reply("❌ Erro ao obter foto de perfil.");
    }
}
break;
case 'adverter': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.admin);
    if (!isBotAdmin) return reply(enviar.msg.botadm);

    const mentioned =
        info.message.extendedTextMessage?.contextInfo?.mentionedJid[0] ||
        (quoted ? quoted.sender : null);
    const answered = info.message.extendedTextMessage?.contextInfo?.participant;
    let alvo = answered || (mentioned?.length ? mentioned : null);
    
if (!alvo) return reply('🌸 Marque ou responda a mensagem de alguém para adverter!');

    const data = JSON.parse(readFileSync(advPath, 'utf-8'));

    if (!data[from]) data[from] = {}; // Inicializa o grupo
    for (let user of mentioned) {
        if (!data[from][alvo]) data[from][alvo] = 0;

        data[from][alvo] += 1;

        // Mensagem personalizada
        const adv = data[from][alvo]
        await sock.sendMessage(from, {
            text: `🌸 @${alvo.split('@')[0]} Parece que você acabou de ser advertido...\n💖 Você agora tem ${adv}/3 advertências...\n🌹 Tome cuidado! Com três advertências, você será removido do grupo!`,
            mentions: [alvo]
        }, { quoted: info });

        if (adv >= 3) {
            try {
            reply(`💕 @${alvo.split('@')[0]} *Parece que você atingiu o máximo de advertências, irei ter que lhe banir...`);
                await sock.groupParticipantsUpdate(from, [alvo], 'remove');
                delete data[from][alvo]; // reseta contagem após remoção
            } catch (e) {
            reply('❌ Erro ao adverter. Talvez eu não seja adm...');
                console.error(e);
            }
        }
    }
    writeFileSync(advPath, JSON.stringify(data, null, 2));
}
break;
case 'addcase':  
if (!isDono) return;
if (!q) return reply('😅 Você precisa fornecer o código da nova case.');
const indexPath = 'index.js';  
try {
let fileContent = fs.readFileSync(indexPath, 'utf8');
if (fileContent.includes(`case '${q.split(" ")[1]}':`)) {
return reply('⚠️ Esta case já existe no sistema!');}
let detectedClient = q.match(/(\w+)\.sendMessage/)?.[1]; 
if (detectedClient) { console.log(`🔄 Cliente detectado: ${detectedClient}`);
fileContent = fileContent.replace(/(\b\w+)\.sendMessage/, `${detectedClient}.sendMessage`);}
let lastBreakIndex = fileContent.lastIndexOf('break;');
if (lastBreakIndex === -1) { 
return reply('❌ Erro ao encontrar a estrutura do switch.');}
let newContent = [ fileContent.slice(0, lastBreakIndex + 6),
 `\n\n    ${q}\n`, fileContent.slice(lastBreakIndex + 6) 
 ].join('');
fs.writeFileSync(indexPath, newContent);
reply(`✅ Nova case adicionada com sucesso! Cliente atualizado para: ${detectedClient || "Nenhum detectado"}`);} catch (err) { reply(`❌ Erro ao adicionar a case: ${err.message}`);}
break;
case 'nickstilo': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`🌸 Escreva um nome após o comando para gerar estilos de nomes!`);

        const apiUrl = `https://neon-apis.online/api/fazernick?nome=${encodeURIComponent(q)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao gerar os estilos de nick.");

        const json = await response.json();

        if (!Array.isArray(json) || json.length === 0) {
            return reply("❌ Não encontrei estilos para esse nome.");
        }

        let texto = `🎨 *Estilos para ${q}*:\n\n`;
        texto += json.map((estilo, i) => `${i + 1}. ${estilo}`).join("\n");

        await sock.sendMessage(from, {
            text: texto
        }, { quoted: selometa });

    } catch (e) {
        console.error(e);
        reply("❌ Ocorreu um erro ao gerar os estilos de nick.");
    }
}
break;
                case 'update': {

if (!isDono)
    return reply("❌ Apenas o dono pode usar.");

try {

    await reply(
        "🔄 Verificando atualizações..."
    );

    const resultado =
        await atualizarBot();

    await reply(
        resultado.mensagem
    );

    if (!resultado.status)
        break;

    await reply(
        "✅ Atualização concluída!"
    );

    await reply(
        "♻️ Reiniciando em 5 segundos..."
    );

    setTimeout(() => {
        process.exit(0);
    }, 5000);

} catch(err) {

    console.log(err);

    reply(
`❌ Erro ao atualizar:

${err.message}`
    );

}

}
break;
case 'delvip': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isDono) return reply(enviar.msg.dono);

    const mencionado = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const respondido = info.message?.extendedTextMessage?.contextInfo?.participant;
    let alvo = mencionado || respondido || args[1];

    if (!alvo) return reply("👑 Marque alguém, responda uma mensagem ou insira o número.");

    if (!alvo.includes("@")) alvo = alvo.replace(/\D+/g, "") + "@s.whatsapp.net";

    if (!vipData.includes(alvo)) return reply("🥲 Este usuário não é VIP...");

    vipData = vipData.filter(id => id !== alvo);
    saveVip();
    await reply(`😔 *Usuário ${alvo.split("@")[0]} foi removido* dos VIPs...`);
}
break;
case 'hackneon': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} nome`);
        
        reagir('☠️');

        const url = `https://neon-apis.online/api/logo/hackneon?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar sua logo, tente novamente.");
    }
}
break;
case 'gizquadro': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} nome`);
        
        reagir('🖍️');

        const url = `https://neon-apis.online/api/logo/gizquadro?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar sua logo, tente novamente.");
    }
}
break;
case 'shadow': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} nome`);
        
        reagir('☀️');

        const url = `https://neon-apis.online/api/logo/shadow?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar sua logo, tente novamente.");
    }
}
break;
case 'txtbutterfly': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} nome`);
        
        reagir('🦋');

        const url = `https://neon-apis.online/api/logo/txtborboleta?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar sua logo, tente novamente.");
    }
}
break;

case 'cemiterio': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} nome`);
        
        reagir('🦇');

        const url = `https://neon-apis.online/api/logo/cemiterio?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar sua logo, tente novamente.");
    }
}
break;
case 'harryp': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} nome`);
        
        reagir('🐺');

        const url = `https://neon-apis.online/api/logo/harryp?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar sua logo, tente novamente.");
    }
}
break;
case 'blackpink': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} nome`);
        
        reagir('🩷');

        const url = `https://neon-apis.online/api/logo/blackpink?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar sua logo, tente novamente.");
    }
}
break;
case 'wingeffect': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} nome`);
        
        reagir('💫');

        const url = `https://neon-apis.online/api/logo/wingeffect?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar sua logo, tente novamente.");
    }
}
break;
case 'fpsmascote': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} nome`);
        
        reagir('🎨');

        const url = `https://neon-apis.online/api/logo/fpsmascote?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: `🖼️ *Logo FPS Mascote criada!*`
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar sua logo, tente novamente mais tarde.");
    }
}
break;
case 'txtquadrinhos': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} texto`);
        
        reagir('💡');

        const url = `https://neon-apis.online/api/logo/txtquadrinhos?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar seu texto em quadrinhos, tente novamente.");
    }
}
break;
case 'gemini-pro': {
    try {
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} texto`);

        reagir('🪩');

        const url = `https://neon-apis.online/api/gemini-pro?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url);

        // A API retorna: { "provedor": "...", "resposta": "texto aqui" }
        const resultado = response.data?.resposta;

        if (!resultado) return reply("❌ Erro ao obter resposta do Gemini-Pro.");

        await sock.sendMessage(from, {
            text: resultado
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui consultar o Gemini-Pro no momento.");
    }
}
break;
case 'playstore': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply('📱 *Digite o nome de um app para pesquisar*\n\nExemplo:\n#playstore Free Fire');
        reagir('🔎');
        const api = `https://neon-apis.online/api/playstore?query=${encodeURIComponent(q)}`;

        const { data } = await axios.get(api);

        if (!data.status || !data.resultado || data.resultado.length === 0) {
            return reply('❌ Nenhum resultado encontrado na Play Store.');
        }

        const resultados = data.resultado;

        let texto = `📱 *PLAY STORE – Resultados para:* ${q}\n\n`;

        resultados.slice(0, 10).forEach((app, i) => {
            texto += `*${i + 1}. ${app.nome}*\n`;
            texto += `👨‍💻 Dev: ${app.desenvolvedor}\n`;
            texto += `⭐ Nota: ${app.estrelas}\n`;
            texto += `🔗 Link: ${app.link}\n\n`;
        });

        // Envia a primeira imagem como thumb
        reagir('✅');
        await sock.sendMessage(from, {
            image: { url: resultados[0].imagem },
            caption: texto
        }, { quoted: selometa });

    } catch (e) {
        console.error(e);
        reply('❌ Erro ao pesquisar na Play Store. Tente novamente mais tarde.');
    }
}
break;
case 'plaq1': {
    try {
        if (!q) return reply('🍑 *Digite um nome!*\nExemplo: #plaq1 Toshiruz');
        reagir('🫦');
        const url = `https://neon-apis.online/api/plaq1?texto=${encodeURIComponent(q)}`;

        const { data } = await axios.get(url, {
            responseType: 'arraybuffer'
        });

        await sock.sendMessage(from, {
            image: data,
            caption: ``
        }, { quoted: selometa });

    } catch (err) {
        console.error(err);
        reply('❌ Ocorreu um erro ao gerar a plaquinha.');
    }
}
break;
case 'plaq3': {
    try {
        if (!q) return reply(`🪩 Use assim para gerar a plaquinha: ${prefix + command}`);

        reagir('😈');

        const apiUrl = `https://neon-apis.online/api/plaq3?texto=${encodeURIComponent(q)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao gerar a imagem.");

        const buffer = await response.arrayBuffer();
        const image = Buffer.from(buffer);

        await sock.sendMessage(from, {
            image,
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Ocorreu um erro ao gerar sua plaquinha.");
    }
}
break;
case 'plaq4': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`🌸 Use assim: ${prefix + command} _nome_`);

        reagir('🔥');

        const apiUrl = `https://neon-apis.online/api/plaq4?texto=${encodeURIComponent(q)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao gerar a imagem.");

        const buffer = await response.arrayBuffer();
        const image = Buffer.from(buffer);

        await sock.sendMessage(from, {
            image,
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Ocorreu um erro ao gerar sua plaquinha 4.");
    }
}
break;
case 'plaq5': {
    try {
        if (!q) return reply(`✋😈✋ Digite algo para transformar em plaquinha...`);

        reagir('❤️‍🔥');

        const apiUrl = `https://neon-apis.online/api/plaq5?texto=${encodeURIComponent(q)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao gerar a imagem.");

        const buffer = await response.arrayBuffer();
        const image = Buffer.from(buffer);

        await sock.sendMessage(from, {
            image,
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Ocorreu um erro ao gerar sua plaquinha 5.");
    }
}
break;
case 'dicionario':
case 'dicionário': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`📚 Digite uma palavra para pesquisar!\nExemplo: ${prefix}dicionario amor`);

        const url = `https://neon-apis.online/api/dicionario?texto=${encodeURIComponent(q)}`;

        const { data } = await axios.get(url);

        if (!data || !data.resultado)
            return reply('❌ Não encontrei definição para essa palavra.');

        await sock.sendMessage(from, {
            text: `📖 *Dicionário – ${q}*\n${data.resultado}`
        }, { quoted: selometa });

    } catch (err) {
        console.error(err);
        reply('❌ Erro ao buscar a definição no dicionário.');
    }
}
break;
case 'plaq2': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`😈 Use: ${prefix + command} _nome_`);

        reagir('🍑');

        const apiUrl = `https://neon-apis.online/api/plaq2?texto=${encodeURIComponent(q)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao gerar a imagem.");

        const buffer = await response.arrayBuffer();
        const image = Buffer.from(buffer);

        await sock.sendMessage(from, {
            image,
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Ocorreu um erro ao gerar sua plaquinha.");
    }
}
break;
case 'linkgp':
case 'linkgrupo':
if (!isGroup) return reply(enviar.msg.group);
if (!isAdmin) return reply(enviar.msg.adm);
if (!isBotAdmin) return reply(enviar.msg.botadm);
const codeGp = await sock.groupInviteCode(from);
reagir('💫');
await sock.sendMessage(from, { text: `❣️ Aqui está o *link do grupo!*:\nhttps://chat.whatsapp.com/${codeGp}`}, { quoted: selometa });
break;
case 'plaq6': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`❤️‍🔥 Escreva algo depois do comando!`);

        reagir('🌸');

        const apiUrl = `https://neon-apis.online/api/plaq6?texto=${encodeURIComponent(q)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao gerar a imagem.");

        const buffer = await response.arrayBuffer();
        const image = Buffer.from(buffer);

        await sock.sendMessage(from, {
            image,
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Ocorreu um erro ao gerar sua plaquinha 6.");
    }
}
break;
case 'plaq7': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`🌸 Digite assim pra gerar a plaquinha: ${prefix + command} _nome_`);

        reagir('❤️‍🔥');

        const apiUrl = `https://neon-apis.online/api/plaq7?texto=${encodeURIComponent(q)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao gerar a imagem.");

        const buffer = await response.arrayBuffer();
        const image = Buffer.from(buffer);

        await sock.sendMessage(from, {
            image,
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Ocorreu um erro ao gerar sua plaquinha 7.");
    }
}
break;
case 'plaq8': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`🌹 Use: ${prefix + command} _nome_`);

        reagir('❤️‍🔥');

        const apiUrl = `https://neon-apis.online/api/plaq8?texto=${encodeURIComponent(q)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao gerar a imagem.");

        const buffer = await response.arrayBuffer();
        const image = Buffer.from(buffer);

        await sock.sendMessage(from, {
            image,
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.error(e);
        reply("❌ Ocorreu um erro ao gerar sua plaquinha 8.");
    }
}
break;
case 'plaq9': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`🌹 Use assim pra gerar: ${prefix + command} _nome_`);

        reagir('🪄')

        const apiUrl = `https://neon-apis.online/api/plaq9?texto=${encodeURIComponent(q)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao gerar a imagem.");

        const buffer = await response.arrayBuffer();
        const image = Buffer.from(buffer);

        await sock.sendMessage(from, {
            image,
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.error(e);
        reply("❌ Ocorreu um erro ao gerar sua plaquinha 9.");
    }
}
break;
case 'plaq10': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`🫦 Digite algo após o comando pra gerar a plaquinha!`);

        reagir('🤡');

        const apiUrl = `https://neon-apis.online/api/plaq10?texto=${encodeURIComponent(q)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao gerar a imagem.");

        const buffer = await response.arrayBuffer();
        const image = Buffer.from(buffer);

        await sock.sendMessage(from, {
            image,
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.error(e);
        reply("❌ Ocorreu um erro ao gerar sua plaquinha 10.");
    }
}
break;
case 'limpar':
case 'limparchat':
case 'limpar-chat': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!isAdmin) return reply(enviar.msg.adm);
        if (!isBotAdmin) return reply(enviar.msg.botadm);
        reply('⚡ *Limpando o chat...*');
        await new Promise(resolve => setTimeout(resolve, 1000));
        reply('.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.');
        reply('.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.');
        reply('.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.');
        reply('.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.');
        reply('.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.');
        reply('✅ Limpeza concluída!');
        } catch (e) {
        console.error(e);
        reply('❌ Erro ao limpar o chat!');
        }
  }
break;
case 'mascotegame': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} texto`);

        reagir('🐺');

        const url = `https://neon-apis.online/api/logo/mascotegame?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: ``
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar sua logo mascote gamer, tente novamente.");
    }
}
break;
case 'ffavatar': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply(`💠 *Use assim:*  ${prefix + command} texto`);
        
        reagir('🎮');

        const url = `https://neon-apis.online/api/logo/ffavatar?texto=${encodeURIComponent(q)}`;

        const response = await axios.get(url, { responseType: "arraybuffer" });

        await sock.sendMessage(from, {
            image: Buffer.from(response.data),
            caption: `🔥 *Avatar FF gerado com sucesso!*`
        }, { quoted: selometa });

    } catch (e) {
        console.log(e);
        reply("❌ Não consegui gerar seu avatar FF, tente novamente.");
    }
}
break;
case 'play': {
    try {
        if (!args[0]) return sock.sendMessage(from, { text: "Cadê o nome da música?\nEx:!play mc hariel" }, { quoted: info })
        
        await sock.sendMessage(from, { react: { text: "⌛", key: info.key } })
        
        let q = args.join(' ')
        const { status, resultado } = await fetchJson(`https://yuta-apis.xyz/api/pesquisas/yt-search?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`)
        
        if (!status ||!resultado?.length) {
            return sock.sendMessage(from, { text: "❌ Nenhum resultado encontrado pra essa pesquisa 😢" }, { quoted: info })
        }
        
        const video = resultado[0].resultados
        const { title, description, url, thumbnail, duration, views, author } = video
        
        const msgText = `*Toshi Uploads. . . • Downloads*\n\n📝 *Título:* ${title}\n👤 *Autor:* ${author?.name || 'Desconhecido'}\n📺 *Canal:* ${author?.url || 'N/A'}\n⏱️ *Duração:* ${duration?.timestamp || '❌ Não disponível'}\n👁️ *Visualizações:* ${views || '0'}\n🔗 *Link:* ${url}\n📌 *Descrição:* ${description?.slice(0, 100) || 'N/A'}`
        
        await sock.sendMessage(from, { image: { url: thumbnail }, caption: msgText }, { quoted: info })
        
        const audio = await getBuffer(`https://yuta-apis.xyz/api/downloads/ytaudio2?apitoken=${TOKEN}&url=${encodeURIComponent(url)}`)
        
        if (!audio) return sock.sendMessage(from, { text: "❌ Não foi possível baixar o áudio deste vídeo 😢" }, { quoted: info })
        
        await sock.sendMessage(from, { 
            audio: audio, 
            mimetype: "audio/mpeg", 
            ptt: false, 
            fileName: `${title}.mp3`
        }, { quoted: info })
        
        await sock.sendMessage(from, { react: { text: "✅", key: info.key } })
        
    } catch (e) {
        console.log("Erro em play:", e)
        sock.sendMessage(from, { text: "❌ Erro ao processar.\n- Verifica se seu token da Yuta API ainda tem requests: https://yuta-apis.xyz" }, { quoted: info })
    }
}
break;
case 'pinterest':
case 'pin': {
    try {
        if (!isGroup) return reply(enviar.msg.group);
        if (!q) return reply('📌 *Escreva algo para pesquisar no Pinterest.*\nExemplo: #pinterest Naruto');

        const esperando = await reagir('🌸');

        const fetch = (await import('node-fetch')).default;

        // API retorna a imagem diretamente
        const apiUrl = `https://neon-apis.online/api/pinterest?q=${encodeURIComponent(q)}`;
        const imgRes = await fetch(apiUrl);

        if (!imgRes.ok) return reply('❌ Não consegui acessar a API.');

        // Pega a imagem como buffer
        const buffer = await imgRes.buffer();

        // Envia a imagem no WhatsApp
        await sock.sendMessage(
            from,
            {
                image: buffer,
                caption: ``
            },
            { quoted: selometa }
        );

        // Remove mensagem "buscando..."
        await sock.sendMessage(from, { delete: esperando.key });

    } catch (e) {
        console.log(e);
        reply('❌ Erro ao buscar imagem do Pinterest.');
    }
}
break;
case 'chance': {
  if (!isGroup) return reply(enviar.msg.group);
  if (!q) return reply('❓ *Chance de quê?*\nEx: /chance do bot te banir');

  const porcentagem = Math.floor(Math.random() * 101); // 0 a 100

  reply(`💭 Pergunta do @${sender.split("@")[0]} *Chance ${q.trim()}:* ${porcentagem}%`);
  break;
}

case 'getcase': {
  if (!isDono) return reply(enviar.msg.dono);
  if (!q) return reply('Por favor, especifique o nome da case que deseja obter.');
  const caseName = args[0];
  const fileIndexPath = './index.js'; // caminho do arquivo cases.js
  const fileContent = fs.readFileSync(fileIndexPath, 'utf8');
  const lines = fileContent.split('\n');
  let start = false;
  let caseCode = '';
  for (let line of lines) {
    if (line.includes(`case '${caseName}':`)) {
      start = true;
      caseCode += line + '\n';
    } else if (start) {
      caseCode += line + '\n';
      if (line.includes('break;')) {
        break;
      }
    }
  }
  if (!caseCode) return reply(`A case "${caseName}" não existe.`);
  await sock.sendMessage(from, { text: caseCode }, { quoted: selometa });
} 
break;
case 'rankpau':
  {
    if (!isGroup) return reply(enviar.msg.group)
    let membros = participants.map(p => p.id);
    membros = membros.sort(() => Math.random() - 0.5).slice(0, 5);

    let texto = '🍆 *TOP 5 MAIORES PAU DO GRUPO*\n\n';
    for (let i = 0; i < membros.length; i++) {
      texto += `${i+1}°. @${membros[i].split('@')[0]}\n`;
    }

    sock.sendMessage(from, { text: texto, mentions: membros }, { quoted: selometa });
  }
  break;

case 'rankbuceta': {
    if (!isGroup) return reply(enviar.msg.group)

    let membros = participants.map(p => p.id);

    // embaralhar e pegar 5
    membros = membros.sort(() => Math.random() - 0.5).slice(0, 5);

    // montar texto
    let texto = '🍑 *TOP 5 MAIS BUCETUDOS DO GRUPO*\n\n';
    for (let i = 0; i < membros.length; i++) {
        texto += `${i + 1}. @${membros[i].split('@')[0]}\n`;
    }
    reagir('🫦');
    await sock.sendMessage(
        from,
        {
            video: { url: './media/temp/buceta.mp4' },
            gifPlayback: true,
            caption: texto,
            mentions: membros,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true
            }
        },
        { quoted: selometa }
    );

}
break;

case 'rankgay':
  {
    if (!isGroup) return reply(enviar.msg.group)
    let membros = participants.map(p => p.id);
    membros = membros.sort(() => Math.random() - 0.5).slice(0, 5);

    let texto = '🏳️‍🌈 *TOP 5 MAIS GAYS DO GRUPO*\n\n';
    for (let i = 0; i < membros.length; i++) {
      texto += `${i+1}. @${membros[i].split('@')[0]}\n`;
    }
    reagir('🏳️‍🌈');
    await sock.sendMessage(
        from,
        {
            video: { url: './media/temp/gay.mp4' },
            gifPlayback: true,
            caption: texto,
            mentions: membros,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true
            }
        },
        { quoted: selometa }
    );
  }
  break;
case 'rankgado':
  {
    if (!isGroup) return reply(enviar.msg.group)
    let membros = participants.map(p => p.id);
    membros = membros.sort(() => Math.random() - 0.5).slice(0, 5);

    let texto = '🐮 *TOP 5 GADOS DO GRUPO*\n\n';
    for (let i = 0; i < membros.length; i++) {
      texto += `${i+1}. @${membros[i].split('@')[0]}\n`;
    }
    reagir('🐮');
    await sock.sendMessage(
        from,
        {
            video: { url: './media/temp/gado.mp4' },
            gifPlayback: true,
            caption: texto,
            mentions: membros,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true
            }
        },
        { quoted: selometa }
    );
  }
  break;
case 'perfil': {
    if (!isGroup) return reply(enviar.msg.group)
    try {
        const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
        const quotedUser = info.message?.extendedTextMessage?.contextInfo?.participant;

        if (mentioned || quotedUser) {
            return reply("❌ Você só pode ver o *seu próprio perfil*.");
        }

        const alvo = sender;
        const number = alvo.split("@")[0];
        const nome = info.pushName || "Usuário";

        let bio = "Sem bio";
        try {
            const status = await sock.fetchStatus(alvo);
            bio = status.status || "Sem bio";
        } catch {
            bio = "Privado";
        }

        let dispositivo = "Desconhecido";
        try {
            const device = info.key.id.split(":")[0];
            dispositivo = device === "3" ? "iPhone" : "Android";
        } catch {}

        let isAdm = false;

        if (isGroup) {
            const meta = await sock.groupMetadata(from);
            const admins = meta.participants.filter(p => p.admin);
            isAdm = admins.some(a => a.id === alvo);
        }

        const estados = [
            "Solteiro (a) 🔥",
            "Casado (a) 💍",
            "Viúvo (a) 🥺",
            "Divorciado (a) 💔"
        ];
        const casado = estados[Math.floor(Math.random() * estados.length)];

        const gado = Math.floor(Math.random() * 101);
        const puta = Math.floor(Math.random() * 101);
        const beleza = Math.floor(Math.random() * 101);
        const gostosura = Math.floor(Math.random() * 101);

        let foto;
        try {
            foto = await sock.profilePictureUrl(alvo, 'image');
        } catch {
            foto = './media/temp/semfoto.jpg';
        }
        reagir('😆');
        const meti = await sock.groupMetadata(from);
        const isLiider = meti.subjectOwnerPn.includes(sender);
        const msg = `
📌 *PERFIL DO USUÁRIO*

• Nome: ${nome}
• Número: ${number}
• Bio: ${bio}
• Dispositivo conectado: ${dispositivo}

⚙️ *Status no Grupo:*
• Dono do Bot: ${isDono ? "✅" : "❌"}
• Dono do Grupo: ${isLiider ? "✅" : "❌"}
• ADM: ${isAdmin ? "✅" : "❌"}

💑 *Estado Civil:*
• ${casado}

🔥 *Personalidade:*
• Nível Gado: ${gado}%
• Nível Puta: ${puta}%
• Nível Gostosura: ${gostosura}%
• Nível Beleza: ${beleza}%
        `.trim();

        await sock.sendMessage(from, {
            image: { url: foto },
            caption: msg
        }, { quoted: selometa });

    } catch (e) {
        console.log("Erro no perfil:", e);
        reply("❌ Ocorreu um erro ao gerar o perfil.");
    }
}
break;
case 'antilinkgp': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.adm)
    if (!isBotAdmin) return reply(enviar.msg.botadm)

    // Se não existe o grupo no JSON, cria como desativado
    if (!antiLinkGp[from]) {
        antiLinkGp[from] = { status: false };
    }

    // Alterna o estado
    antiLinkGp[from].status = !antiLinkGp[from].status;
    saveAntiLinkGp();

    reply(
        antiLinkGp[from].status
            ? "🛡️ *AntiLinkGP ativado!*\nSe alguém enviar link de grupo, será removido."
            : "⚠️ *AntiLinkGP desativado!*\nAgora links de grupo são permitidos."
    );
}
break;
case 'antilinkbet':
case 'anti-bet':
case 'antilink-bet': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.adm);
    if (!isBotAdmin) return reply(enviar.msg.botadm)

    if (!antiLinkBet[from]) {
        antiLinkBet[from] = true;
        saveAntiLinkBet();
        return reply("🟢 *Antilinkbet ativado!*\n> Agora quem enviar links de apostas, será removido.");
    } else {
        delete antiLinkBet[from];
        saveAntiLinkBet();
        return reply("🔴 *Antilinkbet desativado!*\n> Agora não irei banir ninguém.");
    }
}
break;
case 'simih':
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.adm);
    if (!isBotAdmin) return reply(enviar.msg.botadm);

    const grupoId = from;
    const statusData = require('./assets/simihStatus.json');

    if (q?.toLowerCase() === 'on') {
        statusData[grupoId] = true;
        fs.writeFileSync('./assets/simihStatus.json', JSON.stringify(statusData, null, 2));
        reply('✅ Simih ativado neste grupo!');
    } else if (q?.toLowerCase() === 'off') {
        statusData[grupoId] = false;
        fs.writeFileSync('./assets/simihStatus.json', JSON.stringify(statusData, null, 2));
        reply('❌ Simih desativado neste grupo!');
    } else {
        reply(`❗ Use: ${prefix}simih on ou ${prefix}simih off`);
    }
break;
case 'rm_adv': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.admin);
    if (!isBotAdmin) return reply(enviar.msg.botadm)
    const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    // Pegar quem será advertido
let target = mentioned || null;

if (!target && quoted) {
    target = quoted;
    return reply('🌸 Marque ou responda a mensagem de alguém pra remover advertência!');
}

// Agora você pode usar userToAdv para adicionar a advertência
    const data = JSON.parse(readFileSync(advPath, 'utf-8'));

    if (!data[from]) data[from] = {};

    for (let user of mentioned) {
        if (data[from][user]) {
            data[from][user] -= 1;
            if (data[from][user] <= 0) delete data[from][user];
        }
    }

    writeFileSync(advPath, JSON.stringify(data, null, 2));
    const mencionado = mentioned[0].split('@')[0] || quoted.key.participant || quoted || [];
    await sock.sendMessage(from, { text: '⚡ Advertência removida com sucesso!' }, { quoted: info });
}
break;
case 'lista_adv': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.group)
    const data = JSON.parse(readFileSync(advPath, 'utf-8'));
    if (!data[from]) return reply('⚠️ Nenhuma advertência registrada neste grupo.');

    let msgg = '⚡ Lista de advertências:\n\n';
    Object.entries(data[from]).forEach(([user, count]) => {
        msgg += `@${user.split('@')[0]}: ${count}/3 advertências\n`;
    });

    await sock.sendMessage(from, { text: msgg, mentions: Object.keys(data[from]) }, { quoted: info });
}
break;
case 'traduzir': {
    const { translate } = require('@vitalets/google-translate-api');

    const texto = args.join(" ");
    if (!texto) return reply("🌍 Use: #traduzir seu texto");

    try {
        // envia a mensagem inicial
        const msgTraduzindo = await sock.sendMessage(
            from,
            { text: "🔄 Traduzindo..." },
            { quoted: info }
        );

        // faz a tradução
        const res = await translate(texto, { to: 'pt' });
        const traduzido = res.text;

        // edita a mensagem enviada anteriormente
        await sock.sendMessage(
            from,
            {
                text: `🌎 *Tradução:*\n\n${traduzido}`,
                edit: msgTraduzindo.key   // EDITA A MENSAGEM
            }, { quoted: info }
        );

    } catch (e) {
        console.error(e);
        reply("❌ Erro ao traduzir.");
    }

    break;
}
case 'eununca': {
    const frases = [
        "Eu nunca saí de casa com a roupa do avesso",
        "Eu nunca esqueci o nome de alguém no meio da conversa",
        "Eu nunca passei vergonha no transporte público",
        "Eu nunca confundi um estranho com alguém que eu conheço",
        "Eu nunca caí na frente de várias pessoas",
        "Eu nunca cantei alto achando que estava sozinho",
        "Eu nunca fui dormir sem tomar banho",
        "Eu nunca comi a última fatia escondido",
        "Eu nunca fiquei olhando para o celular fingindo estar ocupado",
        "Eu nunca deixei para estudar na véspera da prova",
        "Eu nunca dormi no meio de uma aula ou reunião",
        "Eu nunca saí sem pentear o cabelo",
        "Eu nunca esqueci o aniversário de um amigo",
        "Eu nunca entrei na sala errada",
        "Eu nunca pedi comida e esqueci de buscar",
        "Eu nunca coloquei roupa para lavar e esqueci na máquina",
        "Eu nunca usei a mesma roupa dois dias seguidos sem lavar",
        "Eu nunca deixei o despertador tocar várias vezes antes de levantar",
        "Eu nunca comprei algo que nunca usei",
        "Eu nunca dormi com a TV ligada",
        "Eu nunca fiquei com preguiça de responder mensagem",
        "Eu nunca dei risada em momento errado",
        "Eu nunca cantei no chuveiro",
        "Eu nunca falei sozinho",
        "Eu nunca errei o nome de alguém na apresentação",
        "Eu nunca usei o nome errado da pessoa por semanas",
        "Eu nunca enviei mensagem para a pessoa errada",
        "Eu nunca inventei desculpa para não sair",
        "Eu nunca saí de casa e esqueci a chave",
        "Eu nunca esqueci onde estacionei",
        "Eu nunca fiz maratona de série até amanhecer",
        "Eu nunca chorei vendo filme",
        "Eu nunca me arrependi de uma compra",
        "Eu nunca me escondi para não falar com alguém",
        "Eu nunca fingi entender algo que não entendi",
        "Eu nunca deixei comida queimar",
        "Eu nunca comi algo estragado sem perceber",
        "Eu nunca derrubei comida no chão e comi mesmo assim",
        "Eu nunca dancei sozinho no quarto",
        "Eu nunca deixei o celular cair no rosto na cama",
        "Eu nunca pesquisei algo óbvio no Google",
        "Eu nunca esqueci o que ia falar no meio da frase",
        "Eu nunca tirei foto da comida antes de comer",
        "Eu nunca tirei print de conversa para mostrar para alguém",
        "Eu nunca fiquei olhando stories sem perceber a hora passar",
        "Eu nunca entrei em rede social só para stalkeiar",
        "Eu nunca bloqueei alguém por impulso",
        "Eu nunca apaguei foto antiga por vergonha",
        "Eu nunca mudei o status só para chamar atenção",
        "Eu nunca usei indireta em rede social",
        "Eu nunca entrei em grupo que não conhecia ninguém",
        "Eu nunca fui ignorado de propósito",
        "Eu nunca segui alguém só para depois parar de seguir",
        "Eu nunca adicionei alguém e me arrependi",
        "Eu nunca abri conversa antiga só para relembrar",
        "Eu nunca fiquei online esperando alguém falar",
        "Eu nunca fingi que não vi mensagem",
        "Eu nunca entrei no perfil do ex",
        "Eu nunca olhei fotos antigas por nostalgia",
        "Eu nunca fiquei triste por causa de curtidas",
        "Eu nunca fiz amizade só por interesse",
        "Eu nunca criei conta falsa",
        "Eu nunca fiquei com raiva por visualização no status",
        "Eu nunca deletei rede social e voltei depois",
        "Eu nunca stalkeei perfil privado",
        "Eu nunca assisti vídeo sem som no meio da rua",
        "Eu nunca deixei de responder e esqueci",
        "Eu nunca mandei áudio gigante",
        "Eu nunca ouvi áudio gigante no acelerado",
        "Eu nunca mandei mensagem bêbado",
        "Eu nunca fiquei de ressaca no outro dia",
        "Eu nunca aceitei carona de estranho",
        "Eu nunca me perdi em outra cidade",
        "Eu nunca comprei passagem errada",
        "Eu nunca troquei de lugar no transporte público para evitar alguém",
        "Eu nunca viajei sem avisar ninguém",
        "Eu nunca esqueci mala ou mochila",
        "Eu nunca perdi documento",
        "Eu nunca dormi demais e perdi compromisso",
        "Eu nunca fui trabalhar doente",
        "Eu nunca inventei atestado falso",
        "Eu nunca fui pego colando na prova",
        "Eu nunca menti para professor",
        "Eu nunca entreguei trabalho de outra pessoa como meu",
        "Eu nunca inventei desculpa para faltar na escola",
        "Eu nunca deixei de fazer tarefa de casa",
        "Eu nunca fingi entender a matéria",
        "Eu nunca passei cola para colega",
        "Eu nunca mudei nota no boletim",
        "Eu nunca esqueci de estudar para prova",
        "Eu nunca inventei motivo para sair mais cedo",
        "Eu nunca comi na sala de aula escondido",
        "Eu nunca saí da aula sem permissão",
        "Eu nunca dormi na biblioteca",
        "Eu nunca errei caminho no campus",
        "Eu nunca esqueci material escolar",
        "Eu nunca fiquei com vergonha de apresentar trabalho",
        "Eu nunca inventei história para impressionar",
        "Eu nunca aumentei detalhe de uma história real",
        "Eu nunca fingi conhecer alguém famoso",
        "Eu nunca tirei foto com estranho achando que era famoso",
        "Eu nunca exagerei em uma conquista",
        "Eu nunca inventei que tinha viajado",
        "Eu nunca me passei por outra pessoa",
        "Eu nunca inventei que sabia fazer algo",
        "Eu nunca me gabei de algo que não era meu",
        "Eu nunca inventei que estava ocupado",
        "Eu nunca menti para sair de conversa",
        "Eu nunca inventei desculpa para não responder",
        "Eu nunca disse que não vi mensagem",
        "Eu nunca culpei outra pessoa por erro meu",
        "Eu nunca escondi algo importante",
        "Eu nunca peguei crédito pelo trabalho de outro",
        "Eu nunca prometi algo e não cumpri",
        "Eu nunca omiti informação para me beneficiar",
        "Eu nunca fui falso com alguém",
        "Eu nunca menti sobre relacionamento",
        "Eu nunca neguei gostar de alguém",
        "Eu nunca disse que estava solteiro quando não estava",
        "Eu nunca escondi mensagem do parceiro",
        "Eu nunca stalkeei pessoa que estava conhecendo",
        "Eu nunca fingi não ter visto alguém na rua",
        "Eu nunca deletei foto com ex",
        "Eu nunca voltei a falar com ex",
        "Eu nunca mandei mensagem para ex",
        "Eu nunca pensei em voltar com ex",
        "Eu nunca fiquei com ex de amigo",
        "Eu nunca senti ciúmes sem motivo",
        "Eu nunca bisbilhotei celular de alguém",
        "Eu nunca stalkeei ex de parceiro",
        "Eu nunca escondi amizade do parceiro",
        "Eu nunca flertei com alguém comprometido",
        "Eu nunca terminei e voltei",
        "Eu nunca bloqueei e desbloqueei várias vezes",
        "Eu nunca fiz ciúmes de propósito",
        "Eu nunca stalkeei perfil sem seguir",
        "Eu nunca mandei indireta para ex",
        "Eu nunca ignorei mensagem de propósito",
        "Eu nunca excluí conversa por medo",
        "Eu nunca escondi conversa de amigo",
        "Eu nunca menti para proteger amigo",
        "Eu nunca inventei história sobre amigo",
        "Eu nunca falei mal de amigo pelas costas",
        "Eu nunca inventei apelido para alguém",
        "Eu nunca ri de amigo na frente dele",
        "Eu nunca guardei segredo por anos",
        "Eu nunca escondi que sabia de algo",
        "Eu nunca fui fofoqueiro",
        "Eu nunca espalhei boato sem saber se era verdade",
        "Eu nunca inventei fofoca",
        "Eu nunca menti para evitar briga",
        "Eu nunca fingi estar feliz",
        "Eu nunca escondi choro",
        "Eu nunca chorei no banheiro",
        "Eu nunca fiquei triste sem motivo",
        "Eu nunca ouvi música triste para chorar",
        "Eu nunca chorei no transporte público",
        "Eu nunca chorei no trabalho",
        "Eu nunca chorei de raiva",
        "Eu nunca chorei de alegria",
        "Eu nunca me emocionei com propaganda",
        "Eu nunca chorei em casamento",
        "Eu nunca chorei no cinema",
        "Eu nunca chorei de saudade",
        "Eu nunca chorei em silêncio",
        "Eu nunca chorei por ciúmes",
        "Eu nunca chorei por dor física",
        "Eu nunca chorei por um animal",
        "Eu nunca chorei por filme infantil",
        "Eu nunca chorei por desenho animado",
        "Eu nunca chorei em festa",
        "Eu nunca chorei escondido",
        "Eu nunca chorei ouvindo música",
        "Eu nunca chorei na frente de estranhos",
        "Eu nunca chorei em público",
        "Eu nunca chorei sozinho no quarto",
        "Eu nunca chorei de rir",
        "Eu nunca chorei por arrependimento",
        "Eu nunca chorei por medo",
        "Eu nunca chorei no banheiro da escola",
        "Eu nunca chorei sem saber por quê",
        "Eu nunca chorei por mensagem de texto",
        "Eu nunca chorei depois de briga",
        "Eu nunca chorei de emoção no aniversário",
        "Eu nunca chorei de felicidade inesperada",
        "Eu nunca chorei abraçado com alguém",
        "Eu nunca chorei olhando fotos antigas",
        "Eu nunca chorei ao me despedir de alguém",
        "Eu nunca chorei em despedida no aeroporto",
        "Eu nunca chorei em velório",
        "Eu nunca chorei de frustração",
        "Eu nunca chorei por não ser compreendido",
        "Eu nunca chorei por ver outra pessoa chorar",
        "Eu nunca chorei em evento importante",
        "Eu nunca chorei na frente de desconhecido",
        "Eu nunca chorei abraçando travesseiro"
    ];

    const pergunta = frases[Math.floor(Math.random() * frases.length)];

    if (!isGroup) return reply(enviar.msg.group);
    await sock.sendMessage(from, {
        poll: {
            name: pergunta,
            values: ["🧐 *Eu nunca*", "😲 *Eu já*"],
            selectableCount: 1
        }
    }, { quoted: info });
    break;
}
case 'marcar':
case 'tagall':
    if (!isGroup) return reply(enviar.msg.group)
    if (!isAdmin) return reply(enviar.msg.adm)
    if (!isBotAdmin) return reply(enviar.msg.botadm);

    let motivo = q ? `*${q}*` : '*Sem motivo.*'
    if (info.message?.extendedTextMessage?.contextInfo?.quotedMessage) {
        let citado = info.message.extendedTextMessage.contextInfo.quotedMessage
        if (citado.conversation) motivo = citado.conversation
        if (citado.extendedTextMessage?.text) motivo = citado.extendedTextMessage.text
    }

    let membros = groupMetadata.participants.map(a => a.id)

    let texto = `*_📢 Todos mencionados pelo admin do grupo!_*\nMotivo específico: ${motivo}\n\n`
    membros.map(m => texto += `@${m.split('@')[0]}\n`)

    sock.sendMessage(from, { text: texto, mentions: membros }, { quoted: selometa })
break;
case 'estourar': {
     if (!isGroup) return reply(enviar.msg.group)
  const { exec } = require('child_process');
  
  if (!quoted || !quoted.audioMessage) {
    return reply('❌ Responda a um áudio!');
  }

  const segundos = quoted.audioMessage.seconds;
  if (segundos > 15) return reply('⚠️ Envie um áudio com até 15 segundos.');

  const media = await downloadMediaMessage(
    { message: { audioMessage: quoted.audioMessage }},
    'buffer',
    {},
    { reuploadRequest: sock }
  );

  const inputPath = './media/temp/original.mp3';
  const outputPath = './media/temp/estourado.opus';

  writeFileSync(inputPath, media);

  const cmd = `ffmpeg -i ${inputPath} -filter:a \
"volume=25dB, \
dynaudnorm=p=1:m=50, \
bass=g=30, \
treble=g=20, \
firequalizer=gain_entry='entry(0,20);entry(250,12);entry(1000,-5);entry(4000,8);entry(8000,15)', \
acompressor=threshold=-30dB:ratio=18:attack=5:release=200, \
adeclip" \
-c:a libopus -b:a 64k -y ${outputPath}`;

  exec(cmd, async (err) => {
    if (err) {
      console.error('Erro no FFmpeg:', err);
      return reply('❌ Falha ao processar o áudio.');
    }

    if (!existsSync(outputPath)) {
      return reply('❌ O arquivo final não foi gerado.');
    }

    const estourado = readFileSync(outputPath);

    await sock.sendMessage(from, {
      audio: estourado,
      mimetype: 'audio/ogg; codecs=opus',
      ptt: true
    }, { quoted: info });

    unlinkSync(inputPath);
    unlinkSync(outputPath);
  });

} break;
case 'totalcmd':
case 'totalcomando':
  if (!isDono) return reply(enviar.msg.dono);
  try {
    readFile(__dirname + '/index.js', 'utf8', async (err, data) => {
      if (err) throw err;
      const comandos = [...data.matchAll(/case [`'"](\w+)[`'"]/g)].map(m => m[1]);
      await sock.sendMessage(from, { text: `Atualmente, eu tenho ${comandos.length} comandos...`}, { quoted: info });
    });
    } catch(e) {
    console.error(e);
    await sock.sendMessage(from, { text: '*Erro ao listar total de comandos*'}, { quoted: info });
    }
  break;
  case 'cases':
  if (!isDono) return reply(enviar.msg.dono)
  try {
    const indexContent = readFileSync(__dirname + '/index.js', 'utf-8');
    const caseRegex = /case\s+'([^']+)'\s*:/g;
    const cases = new Set();
    let match;
    while ((match = caseRegex.exec(indexContent)) !== null) {
      cases.add(match[1]);
    };
    const multiCaseRegex = /case\s+'([^']+)'\s*:\s*case\s+'([^']+)'\s*:/g;
    while ((match = multiCaseRegex.exec(indexContent)) !== null) {
      cases.add(match[1]);
      cases.add(match[2]);
    };
    const caseList = Array.from(cases).sort();
    await sock.sendMessage(from, { text: `*Lista de Cases*:\n\n${caseList.join('\n')}\n\nTotal: ${caseList.length} comandos`}, { quoted: info});
  } catch (e) {
    console.error(e);
    await sock.sendMessage(from, { text: '*Erro ao tentar listar cases*'}, { quoted: info });
  }
  break;
case 'attp3':
const gerarAttp3 = require("./assets/functions/attp3.js");
    if (!isGroup) return reply(enviar.msg.group)
    if (!q) return reply("Digite algo, ex: attp3 Olá");
    const out = "./media/attp3_final.webp";
    reply("✨ Gerando ATTP3 neon 3D...");
    try {
        await gerarAttp3(q, out);
        await sock.sendMessage(from, {
            sticker: { url: out }
        }, { quoted: selometa });
          fs.unlinkSync('./media/attp3_final.webp');
          fs.unlinkSync('./media/attp3/temp.png');
    } catch (e) {
        console.log(e);
        reply("❌ Erro ao gerar o ATTP3.");
    }

break;
  case 's':
case 'sticker':
if (!isGroup) return reply(enviar.msg.group);

  try {
    const type = Object.keys(m.message || {})[0];
    const isReply = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;

    const pack = 'Toshiruz Bot';
    const author = 'Toshiruz Bot';

    let content, mimetype, mediaType;

    if (isReply) {
      const quoted = m.message.extendedTextMessage.contextInfo.quotedMessage;
      if (quoted.imageMessage) {
        content = quoted.imageMessage;
        mimetype = content.mimetype;
        mediaType = 'image';
      } else if (quoted.videoMessage) {
        if ((quoted.videoMessage.seconds || quoted.videoMessage.duration || 0) > 10) {
          return sock.sendMessage(from, {
            text: 'O vídeo respondido tem mais de 10 segundos.'}, { quoted: info });
        }
        content = quoted.videoMessage;
        mimetype = content.mimetype;
        mediaType = 'video';
      }
    } else {
      content = m.message?.imageMessage || m.message?.videoMessage;
      mimetype = content?.mimetype;
      mediaType = m.message?.imageMessage ? 'image' : 'video';
      if (m.message?.videoMessage && (m.message.videoMessage.seconds > 10)) {
        return sock.sendMessage(from, {
          text: 'O vídeo enviado tem mais de 10 segundos.'
        }, { quoted: info });
      }
    }

    if (!content || !mimetype) {
      return sock.sendMessage(from, {
        text: 'Envie ou responda uma imagem ou vídeo de até 10s com o comando *s*.'
      }, { quoted: info });
    }

    // Mensagens aleatórias antes de criar a figurinha
    const mensagensFigurinha = [
      '"Eu, tu, nós bota nela" Aguarde enquanto eu estou fazendo ela 😻',
      '🖌️ Pintando os pixels da imagem...',
      '⚡ Entregando seu pedido...',
      '✨ Transformando em figurinha...',
      '😻 AMOO, mais um pedido!!',
      '💭 Fazendo a sua entrega, tô chegando!!',
      '💋 Ai papai, macetei- Ops! 😳 Entregando seu pedido...',
      '🪄 Fazendo a magia acontecer...',
      '⏳ Processando a foto...'
    ];
    const frase = mensagensFigurinha[Math.floor(Math.random() * mensagensFigurinha.length)];
    await sock.sendMessage(from, { text: frase }, { quoted: info });

    const stream = await downloadContentFromMessage(content, mediaType);
    const chunks = [];
    for await (const chunk of stream) chunks.push(chunk);
    const buffer = Buffer.concat(chunks);

    const inputPath = path.join(tmpdir(), `input_${Date.now()}.${mediaType === 'image' ? 'jpg' : 'mp4'}`);
    const outputPath = path.join(tmpdir(), `sticker_${Date.now()}.webp`);
    fs.writeFileSync(inputPath, buffer);

    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .outputOptions([
          '-vcodec', 'libwebp',
          '-vf', mediaType === 'image'
            ? 'scale=512:512:force_original_aspect_ratio=decrease,fps=15'
            : 'scale=512:512:force_original_aspect_ratio=decrease,fps=15,pad=512:512:-1:-1:color=white',
          '-loop', '0',
          '-preset', 'default',
          '-ss', '00:00:00.0',
          '-t', '00:00:10.0',
          '-an', '-vsync', '0'
        ])
        .save(outputPath)
        .on('end', resolve)
        .on('error', reject);
    });

    const stickerBuffer = fs.readFileSync(outputPath);

    await sock.sendMessage(from, {
  sticker: stickerBuffer,
  packname: "ToshiruzBot-V1!",
  author: "Toshiruz Bot"
}, { quoted: info });

    fs.unlinkSync(inputPath);
    fs.unlinkSync(outputPath);

  } catch (e) {
    console.error('Erro ao criar figurinha:', e);
    await sock.sendMessage(from, {
      text: 'Ocorreu um erro ao criar a figurinha. Verifique se a mídia é válida.'
    }, { quoted: info });
  }
  break;
case 'r':
if (!isDono) return reply(enviar.msg.dono);
try {
reply('Reiniciando o bot... 💬');
process.exit(1);
} catch (erro) {
console.error(erro)
}
break;
                
case 'abraçar':
case 'abracar': {
    if (!isGroup) return reply(enviar.msg.group);
    let alvo;
    if (mentionedJid && mentionedJid.length > 0) {
        alvo = mentionedJid[0];
    } else if (quotedUser) {
        alvo = quotedUser;
    } else {
        return reply('😍 Marque alguém ou responda a mensagem da pessoa que você quer abraçar!');
    }
    try {
        const texto = `🤗 O @${sender.split('@')[0]} acaba de dar um abraço totoso no @${alvo.split('@')[0]}`;
        await sock.sendMessage(from, {
            video: { url: './media/temp/abracar.mp4' },
            caption: texto,
            gifPlayback: true,
            mentions: [sender, alvo],
            quoted: m  // responde diretamente a mensagem original
        }, { quoted: info });
    } catch (errinho) {
        console.error(errinho);
    }
    break;
}
case 'gp': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.adm);
    if (!isBotAdmin) return reply(enviar.msg.botadm)

    // Verifica se o usuário informou "a" ou "f"
    const tipo = args[0]?.toLowerCase();

    if (!tipo || !['a', 'f'].includes(tipo)) {
        return sock.sendMessage(from, { text: `🩸 *_Use o comando assim:_*\n\n*_• ${prefix}gp a  → abrir grupo_*\n*_• ${prefix}gp f  → fechar grupo_*`}, { quoted: selometa });
    }

    try {
        if (tipo === 'a') {
            // Abre o grupo (todos podem enviar mensagem)
            await sock.groupSettingUpdate(from, 'not_announcement');
            reply('🔓 *Grupo aberto!* Agora todos podem enviar mensagens.');
        } else if (tipo === 'f') {
            // Fecha o grupo (só admins podem enviar mensagem)
            await sock.groupSettingUpdate(from, 'announcement');
            reply('🔒 *Grupo fechado!* Apenas administradores podem enviar mensagens.');
        }
    } catch (e) {
        console.log(e);
        reply('❌ Ocorreu um erro ao tentar alterar as configurações do grupo.');
    }
}
break;
case 'infogp': {
if (!isGroup) return reply(enviar.msg.group);
if (!isAdmin) return reply(enviar.msg.adm);
if (!isBotAdmin) return reply(enviar.msg.botadm);
    try {
        const metinha = await sock.groupMetadata(from);

        // Pega admins
        const admins = metinha.participants
            .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
            .map(p => '@' + p.id.split('@')[0]);

        const qntAdmins = admins.length || 0;

        let bufferFoto;
        try {
            const pfpUrl = await conn.profilePictureUrl(from, 'image');
            const res = await fetch(pfpUrl);
            bufferFoto = Buffer.from(await res.arrayBuffer());
        } catch {
            const base64Preta = 'iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQBFSYh8dpODwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAACMSURBVHja7cExAQAAAMKg9U9tCF8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwGBAABDBhV6AAAAAElFTkSuQmCC';
            bufferFoto = Buffer.from(base64Preta, 'base64');
        }

        const texto = `
📄 *INFORMAÇÕES DO GRUPO*

🆔 *ID:* ${metinha.id}
📛 *Nome:* ${metinha.subject}
👑 *Dono:* ${metinha.owner ? '@' + metinha.owner.split('@')[0] : 'Desconhecido'}
👥 *Participantes:* ${metinha.participants.length}
📅 *Criado em:* ${new Date(metinha.creation * 1000).toLocaleString()}

🔒 *Restrito:* ${metinha.restrict ? 'Sim' : 'Não'}
💬 *Silenciado:* ${metinha.announce ? 'Sim' : 'Não'}
📝 *Descrição:* ${metinha.desc ? metinha.desc : 'Sem descrição'}

🛡️ *Admins: ${qntAdmins}*

${saudacao}
        `.trim();

        await sock.sendMessage(from, { 
            image: bufferFoto,
            caption: texto,
            mentions: [
                ...(metinha.owner ? [metinha.owner] : []),
                ...metinha.participants
                    .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
                    .map(p => p.id)
            ]
        }, { quoted: info });

    } catch (err) {
        console.error(err);
        await sock.sendMessage(from, { text: '❌ Erro ao obter metadados do grupo.' }, { quoted: info });
    }
    break;
}
case 'play': { 
  try {
    if (!q?.trim()) return reply("Cadê o parâmetro: nome da música?");
    await yuta.sendMessage(from, { react: { text: "⌛", key: info.key } });
    const { status, resultado } = await fetchJson(`https://yuta-apis.xyz/api/pesquisas/yt-search?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`);
    if (!status || !resultado?.length) {
      return reply("❌ Nenhum resultado encontrado para essa pesquisa. 😢");
    }
    const video = resultado[0].resultados;
    const { title, description, url, thumbnail, duration, views, author } = video;
    const msgText = `Yuta API • Downloads\n\n📝 *Título:* ${title}
👤 *Autor:* ${author?.name || 'Desconhecido'}
📺 *Canal:* ${author?.url || 'N/A'}
⏱️ *Duração:* ${duration.timestamp || '❌ Não disponível'}
👁️ *Visualizações:* ${views || '0'}
🔗 *Link:* ${url}
📌 *Descrição:* ${description || 'N/A'}`;
    await yuta.sendMessage(from, { image: { url: thumbnail }, caption: msgText }, { quoted: selo });
    const audio = await getBuffer(`https://yuta-apis.xyz/api/downloads/ytaudio2?apitoken=${TOKEN}&url=${encodeURIComponent(url)}`);
    if (!audio) return reply("❌ Não foi possível baixar o áudio deste vídeo. 😢");
    await yuta.sendMessage(from, { audio, mimetype: "audio/mpeg", ptt: true, fileName: `${title}.mp3`}, { quoted: selo });
    await yuta.sendMessage(from, { react: { text: "✅", key: info.key } });
  } catch (e) {
    console.log("Erro em play:", e.message);
    reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
  }
}
break;

case 'playvideo': {
const yts = require("yt-search");
const { spawn } = require('child_process');
const fs = require("fs");

if (!isGroup) return reply(enviar.msg.group);
if (!q) return reply("❗ *Digite o nome do vídeo*");
reagir('🔎');

try {
    const search = await yts.search(q);
    const vid = search.videos[0];
    if (!vid) return reply("❌ Nenhum vídeo encontrado.");

    const { title, url, thumbnail, author, timestamp, views, ago, description } = vid;
    const viewsLocate = views.toLocaleString("pt-BR");

    reagir('✅');
    await sock.sendMessage(from, {
        image: { url: thumbnail },
        caption:
`┎ׁ᳞͡┄⵿໋۫┅ꢶ╬ׁ︨⠟ּׂ𝆊̣֟፝͡⠻ׂ໋݄͞━ࣲᩫᰰᩬ𝕝𝝸ᩧ┅ְׂ𝆋֮۫۫۫͜🎶ְ֮ᤢ┅ᩙּ໋𝆋ࣼᩬ𝝸𝕝ᩫᰰ━ֵׂ݄۫۫͞⠟ׁ̣𝆊֟፝͡⠻︧╬ꢶ┅⵿໋۫┄ᮬ᳞͡┒

📽️ *PLAY VIDEO – Música encontrada*

📌 *Título:* ${title}
👤 *Canal:* ${author.name}
⏳ *Duração:* ▶︎ •၊၊||၊|။||||।‌‌‌‌‌၊|• ${timestamp}
👁️ *Views:* ${viewsLocate}
📅 *Publicado:* ${ago}
📝 *Descrição:* ${description || "Sem descrição."}
🔗 *URL:* ${url}

Baixando áudio, aguarde... 🎧

┕┄⵿໋۫┅ꢶ╬ׁ︨⠟ּׂ𝆊̣֟፝͡⠻ׂ໋݄͞━ࣲᩫᰰᩬ𝕝𝝸ᩧ┅ְׂ𝆋֮۫۫۫͜🎶ְ֮ᤢ┅ᩙּ໋𝆋ࣼᩬ𝝸𝕝ᩫᰰ━ֵׂ݄۫۫͞⠟ׁ̣𝆊֟፝͡⠻︧╬ꢶ┅⵿໋۫┄ᮬ᳞͡┙`
    }, { quoted: selometa });

    const ytdlpPath = "/data/data/com.termux/files/usr/bin/yt-dlp";

    const tempFile = `./media/video_${Date.now()}.mp4`;

    const process = spawn(ytdlpPath, [
        "-f", "bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4",
        "--merge-output-format", "mp4",
        "-o", tempFile,
        url
    ]);

    process.on("close", async () => {
        if (!fs.existsSync(tempFile)) {
            return reply("❌ Erro ao baixar o vídeo.");
        }

        await sock.sendMessage(from, {
            video: fs.readFileSync(tempFile),
            mimetype: "video/mp4"
        }, { quoted: selometa });

        fs.unlinkSync(tempFile); // remover arquivo temporário
    });

    process.on("error", err => {
        console.error("yt-dlp error:", err);
        reply("❌ Erro ao baixar o vídeo.");
    });

} catch (e) {
    console.log(e);
    reply(`❌ Erro ao processar o comando ${prefix}playvideo.`);
}
}
break;
case 'pix': {
    if (!isDono) return reply(enviar.msg.dono)
    if (!q) return reply(`❗ Uso correto: ${prefix}pix chave valor\nExemplo: ${prefix}pix email@gmail.com 50`);

    const args = q.split(" ");
    if (args.length < 2) return reply(`❗ Uso correto: ${prefix}pix chave valor`);

    const chave = args[0].trim();           // chave pix
    const valor = parseFloat(args[1]);       // valor enviado
    const bancoList = [
    "Banco do Brasil BB S.A.",
    "Nu Pagamentos S.A.",
    "Inter",
    "PicPay",
    "Caixa Econômica Federal",
    "C6 Bank S.A.",
    "Itaú Unibanco S.A."
    ];
    const banco = bancoList[Math.floor(Math.random() * bancoList.length)];
    if (isNaN(valor)) return reply("❗ O valor precisa ser um número.");

    // Carregar banco de dados fake
    let pixDB;
    try {
        pixDB = JSON.parse(fs.readFileSync('./assets/pix.json'));
    } catch (e) {
        return reply("❌ Erro ao carregar banco fake de chaves Pix.");
    }

    // Procurando titular
    const titular = pixDB[chave];

    if (!titular) {
        return reply("❌ Chave Pix não encontrada na base de dados.");
    }

    // Envia mensagem de transferência simulada
    await sock.sendMessage(from, { 
        text: `🔁 Transferindo *R$ ${valor.toFixed(2)}* para *${titular}*...\n⏳ Aguarde...` 
    }, { quoted: info });

    // Delay só para parecer real
    await new Promise(r => setTimeout(r, 2000));

    await sock.sendMessage(from, { 
        text: `✅ *Transferência concluída com sucesso!*\n💸 Valor enviado: *R$ ${valor.toFixed(2)}*\n👤 Destinatário: *${titular}*\n🏦 Banco: *${banco}*`
    }, { quoted: info });

}
break;
case 'contar': {
if (!isGroup) return reply(enviar.msg.group);
if (!q) return reply('⚡ Digite algo para eu contar quantos caracteres tem...');
try {
  const resultado = q.length;
  reply(`✨ Esta palavra ou frase contém ${resultado} caracteres!`);
  } catch (erro) {
  console.log(erro)
  }
break;
}
case 'legendabv': {
    if (!isGroup) return reply(enviar.msg.group);
    if (!isAdmin) return reply(enviar.msg.adm);
    if (!isBotAdmin) return reply(enviar.msg.botadm)
    if (!q) return reply("❗ Digite a nova legenda.\nEx: #legendabv Bem-vindo @user!");

    // verifica se bem-vindo está ativado
    const pathBem = './database/bemvindo.json';
    let bem = {};
    if (fs.existsSync(pathBem)) bem = JSON.parse(fs.readFileSync(pathBem));

    if (!bem[from]) return reply("❗ Ative o sistema de boas-vindas neste grupo!");

    // salva legenda
    const pathLeg = './assets/legendas.json';
    let legendas = {};
    if (fs.existsSync(pathLeg)) legendas = JSON.parse(fs.readFileSync(pathLeg));

    legendas[groupId] = q;

    fs.writeFileSync(pathLeg, JSON.stringify(legendas, null, 2));

    reply(`✨ *Legenda de boas-vindas atualizada!*\n\nNova legenda:\n"${q}"`);
}
break;
case 'calcular': {
if (!isGroup) return reply(enviar.msg.group);
  if (!q) return reply('📌 *Use assim:* /calcular 10 + 5');

  try {
    // Substitui símbolos comuns de multiplicação e divisão por operadores válidos
    let expressao = q
      .replace(/×/g, '*')
      .replace(/x/g, '*')
      .replace(/÷/g, '/')
      .replace(/,/g, '.');

    // Verifica se a expressão contém apenas números e operadores permitidos
    if (!/^[0-9+\-*/().\s]+$/.test(expressao)) {
      return reply('Expressão inválida! Use apenas números e operações como + - × ÷*');
    }

    // Avalia a expressão com segurança
    let resultado = new Function(`return (${expressao})`)();
    
    if (resultado === Infinity || resultado === -Infinity) {
      return reply('⚠️ *Divisão por zero não é permitida.*');
    }

    await sock.sendMessage(from, { text: `📥 *Expressão:* ${q}\n📤 *Resultado:* ${resultado}`}, { quoted: info });
  } catch (e) {
  console.error(e);
    await sock.sendMessage(from, { text: '❌ *Erro ao calcular. Verifique a expressão.*'}, { quoted: info });
  }
  break;
}
          case 'get-id':
          if (!isGroup) return reply(enviar.msg.group);
          if (!isAdmin) return reply(enviar.msg.adm)
          if (!isBotAdmin) return reply(enviar.msg.botadm)
            await sock.sendMessage(from, { text: from }, { quoted: info });
            break;

    case 'akira':
reply('Que dá a pika');
break;

    case 'Toshi':
case 'menu':
case 'm': 
try {

  await reagir(from, "👀");

  const media = await prepareWAMessageMedia(
    { image: FotoMenu },
    { upload: kayrosmd.waUploadToServer }
  );

  const txtt = `𝙻𝙸𝚂𝚃 𝙼𝙴𝙽𝚄  

👤 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${sender.split("@")[0]}
🤖 𝙱𝙾𝚃: ${NomeBot}
👑 𝙳𝙾𝙽𝙾: ${NickDono}
⌨️ 𝙿𝚁𝙴𝙵𝙸𝚇𝙾: ${prefix}
🤖 𝚅𝙴𝚁𝚂Ã𝙾: ${version}
🕘 𝙷𝙾𝚁𝙰𝚂: ${hora}
📱 Dispositivo: ${adivinha}`.trim();

  const botoes = [
    {
      name: "single_select",
      buttonParamsJson: JSON.stringify({
        title: "𝐌𝐄𝐍𝐔",
        sections: [

          {
            title: "🌀 MENU PRINCIPAL",
            highlight_label: "Math",
            rows: [
              {
                title: "𝐌𝐄𝐍𝐔 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋",
                description: "𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐆𝐄𝐑𝐀𝐈𝐒 𝐃𝐎 𝐁𝐎𝐓",
                id: `${prefix}m`
              }
            ]
          },

          {
            title: "📁 MENU DOWNLOADS",
            highlight_label: "𝐂𝐎𝐑𝐓𝐄𝐗",
            rows: [
              {
                title: "📥 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒 𝐑Á𝐏𝐈𝐃𝐎𝐒",
                description: "𝐕Í𝐃𝐄𝐎𝐒 𝐄 Á𝐔𝐃𝐈𝐎𝐒",
                id: `${prefix}menudown`
              }
            ]
          },

          {
            title: "👑 MENU DONO",
            highlight_label: "𝐏𝐑𝐈𝐕𝐀𝐃𝐎",
            rows: [
              {
                title: "⚙️ 𝐒𝐈𝐒𝐓𝐄𝐌𝐀𝐒 𝐄 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀ÇÕ𝐄𝐒",
                description: "𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐄 𝐒𝐈𝐒𝐓𝐄𝐌𝐀𝐒",
                id: `${prefix}menudono`
              }
            ]
          },

          {
            title: "🖼️ MENU LOGOS",
            highlight_label: "𝐂𝐎𝐑𝐓𝐄𝐗",
            rows: [
              {
                title: "𝐌𝐄𝐍𝐔 𝐋𝐎𝐆𝐎",
                description: "𝐈𝐌𝐀𝐆𝐄𝐍𝐒 𝐄 𝐓𝐄𝐗𝐓𝐎𝐒",
                id: `${prefix}logos`
              }
            ]
          },

          {
            title: "🛡️ MENU ADMINS",
            highlight_label: "𝐂𝐎𝐑𝐓𝐄𝐗",
            rows: [
              {
                title: "𝐌𝐄𝐍𝐔 𝐀𝐃𝐌",
                description: "𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀ÇÃ𝐎 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎",
                id: `${prefix}menuadm`
              }
            ]
          },

          {
            title: "🫠 MENU STICKERS",
            highlight_label: "𝐂𝐎𝐑𝐓𝐄𝐗",
            rows: [
              {
                title: "𝐌𝐄𝐍𝐔 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒",
                description: "𝐂𝐑𝐈𝐀𝐑 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒",
                id: `${prefix}menufig`
              }
            ]
          },

          {
            title: "🤑 MENU VIP",
            highlight_label: "𝐂𝐎𝐑𝐓𝐄𝐗",
            rows: [
              {
                title: "𝐌𝐄𝐍𝐔 𝐕𝐈𝐏",
                description: "𝐅𝐔𝐍ÇÕ𝐄𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝐀𝐒",
                id: `${prefix}menuvip`
              }
            ]
          },

          {
            title: "🤖 INFORMAÇÕES DO BOT",
            highlight_label: "𝐂𝐎𝐑𝐓𝐄𝐗",
            rows: [
              {
                title: "𝐌𝐄𝐍𝐔 𝐁𝐎𝐓",
                description: "𝐈𝐍𝐅𝐎𝐑𝐌𝐀ÇÕ𝐄𝐒 𝐃𝐎 𝐁𝐎𝐓",
                id: `${prefix}menubot`
              }
            ]
          },

          {
            title: "⚽ JOGOS E DIVERSÃO",
            highlight_label: "𝐂𝐎𝐑𝐓𝐄𝐗",
            rows: [
              {
                title: "𝐌𝐄𝐍𝐔 𝐉𝐎𝐆𝐎𝐒",
                description: "𝐉𝐎𝐆𝐎𝐒 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎",
                id: `${prefix}menubn`
              }
            ]
          },

          {
            title: "🔍 INTELIGÊNCIA ARTIFICIAL",
            highlight_label: "𝐂𝐎𝐑𝐓𝐄𝐗",
            rows: [
              {
                title: "𝐌𝐄𝐍𝐔 𝐈𝐀",
                description: "𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐈𝐍𝐓𝐄𝐋𝐈𝐆Ê𝐍𝐂𝐈𝐀 𝐀𝐑𝐓𝐈𝐅𝐈𝐂𝐈𝐀𝐋",
                id: `${prefix}menuia`
              }
            ]
          },
                    {
            title: "⚔️ 𝐌𝐄𝐍𝐔 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄",
            highlight_label: "𝐂𝐎𝐑𝐓𝐄𝐗",
            rows: [
              {
                title: "𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄 𝐈𝐍𝐅𝐎𝐑𝐌𝐀ÇÕ𝐄𝐒",
                description: "𝐈𝐍𝐅𝐎𝐑𝐌𝐀ÇÕ𝐄𝐒 𝐒𝐎𝐁𝐑𝐄 𝐈𝐃",
                id: `${prefix}menuff`
              }
            ]
          },
        ]
      })
    },

    {
      name: "quick_reply",
      buttonParamsJson: JSON.stringify({
        display_text: "👑 𝐂𝐑𝐈𝐀𝐃𝐎𝐑",
        id: `${prefix}criador`
      })
    },
  
        {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
            display_text: "📢 𝐂𝐇𝐀𝐍𝐍𝐄𝐋",
            url: `${channelnk}`
        })
    }
    
  ];

  const carouselMessage = {
    cards: [
      {
        header: {
          hasMediaAttachment: true,
          imageMessage: media.imageMessage
        },
        body: { text: txtt },
        footer: { text: "Created by ✞𝐥𝐮𝐜𝐚𝐬👑" },
        nativeFlowMessage: { buttons: botoes }
      }
    ]
  };

  await kayrosmd.relayMessage(
    from,
    { interactiveMessage: { carouselMessage } },
    { quoted: info }
  );

} catch (e) {
  reply("Erro ao enviar o menu.");
}
break;

    case 'play':
case 'yt': {
    if (!text) return m.reply(`Exemplo: ${prefix}${command} Slash Inferno`);
    
    await systemZR.sendMessage(m.chat, { react: { text: "🔍", key: m.key } });
    
    try {
        const axios = require('axios');
        const { data: res } = await axios.get("https://systemzone.store/api/ytsearch", {
            params: {
                text: text
            }
        });
 
        if (res.status !== "sucesso" || !res.resultados || res.resultados.length === 0) return m.reply('Nenhum resultado encontrado.');
        const firstThumb = res.resultados[0].thumbnail;
 
        const sections = [{
            title: "Resultados do YouTube",
            rows: res.resultados.slice(0, 10).map((track, index) => ({
                header: `Resultado ${index + 1}`,
                title: track.title,
                description: `Canal: ${track.author} | Duração: ${track.duration}`,
                id: `${prefix}playdl ${track.youtube_url}`
            }))
        }];
 
        let RG = `╔━᳀『 YᴏᴜTᴜʙᴇ 』═᳀\n⌬ *Busca:* ${text}\n⌬ *Resultados:* ${res.resultados.length}\n╚═━═━═━═━═━═━═᳀`;
 
        await systemZR.sendMessage(m.chat, {
            interactiveMessage: {
                title: RG,
                footer: config.footer,
                thumbnail: safeThumbUrl(firstThumb),
                nativeFlowMessage: {
                    messageParamsJson: JSON.stringify({
                        bottom_sheet: {
                            button_title: "Ver Resultados",
                            list_title: "Vídeos Encontrados"
                        }
                    }),
                    buttons: [{
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "Selecionar Música",
                            sections: sections
                        })
                    }]
                }
            }
        }, { quoted: m });
 
    } catch (e) {
        console.error(e);
        m.reply('Erro ao buscar no YouTube.');
    }
}
break;
 
case 'playdl': {
    if (!text) return m.reply(`Exemplo: ${prefix}${command} [link-youtube]`);
    await systemZR.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    
    try {
        const axios = require('axios');
        const { data: res } = await axios.get("https://systemzone.store/v2/player", {
            params: {
                text: text,
                apikey: "freekey"
            }
        });
 
        if (!res || !res.status) return m.reply('Erro ao baixar música.');
 
        await systemZR.sendMessage(m.chat, {
            audio: { url: res.download_url },
            mimetype: 'audio/mpeg',
            fileName: `${res.title}.mp3`
        }, { quoted: m });
        
        await systemZR.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
    } catch (e) {
        console.error(e);
        await systemZR.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
        m.reply('Erro ao processar download do YouTube.');
    }
}
break;

    case 'brat':
case 'bratvid': { 
    try {
        const txt = text || m.quoted?.text || m.quoted?.conversation || m.quoted?.caption;
        if (!txt) return m.reply(`Uso: ${prefix + command} <texto>`);

        await systemZR.sendMessage(m.chat, { react: { text: "🤔", key: m.key } });

        const res = await fetch(`https://systemzone.store/api/brat?text=${encodeURIComponent(txt)}&animado=${command === 'bratvid'}`);
        const { status, imagem } = await res.json();

        if (!status || !imagem) throw new Error('Falha na API');

        await systemZR.sendMessage(m.chat, { sticker: { url: imagem } }, { quoted: m });
        await systemZR.sendMessage(m.chat, { react: { text: '🤓', key: m.key } });
    } catch (e) {
        await systemZR.sendMessage(m.chat, { react: { text: '😔', key: m.key } });
        m.reply('Erro: ' + e.message);
    }
}
break;




    case 'criptografar':
{
  if (!isDono) return reply(enviar.msg.dono);
  if (!q) return reply(`🍨 | Use assim:\n ${prefix} + criptografar seu texto ou código aqui.`)
  const resultado = Buffer.from(q).toString('base64')
  reply(`🍨 Texto criptografado:\n\n${resultado}`)
}
break

case "reação": 
case "rch": {
if (!isDono) return reply(enviar.msg.dono);;
if (!q) {
  return reply("❌ *Exemplo:* #rch https://whatsapp.com/channel/ |👍,😞,😭");
}
const [link, emojis] = q.split("|").map(t => t.trim());
if (!link || !emojis) {
  return reply("❌ *Exemplo:* `!rch Link channelEmoji|1,Emoji2,Emoji3`");
}
try {
  const apiUrl = `http://node2.lunes.host:3040/api/reacts?post_link=${encodeURIComponent(link)}&reacts=${encodeURIComponent(emojis)}&apitoken=blux-bot`;
  await sock.sendMessage(from, {
    react: {
      text: "⏳",
      key: info.key
    }
  });
  const response = await fetch(apiUrl);
  const json = await response.json();
  if (!response.ok || !json.status) {
    Error(`Reação falha`);
  }
  const resultText = `
✅ *1k de Reação enviada!*\n\n🔗 *Destino:* ${json.result?.link || link}\n🔥*Emoji:* ${json.result?.emojis || emojis}
`;
  await sock.sendMessage(from, {
    react: {
      text: "✅",
      key: info.key
    }
  });
  reply(resultText);
} catch (error) {
  console.error("Error rch", error)
  reagir(from, "❌");
  reply(`❌ Error na api de reação!`);
  }
}
break
case 'get': {
if (!isDono) return reply(enviar.msg.dono);
    try {
        const bodyy = JSON.stringify(info, null, 2)
        await sock.sendMessage(from, { text: '```\n' + bodyy + '\n```' }, { quoted: info })
    } catch (e) {
        await sock.sendMessage(from, { text: String(e) }, { quoted: selometa })
    }
    break
}
          default:
          try {
          await sock.sendPresenceUpdate("composing", from);
          reagir('🚫');
            await sock.sendMessage(
  from,
  {
    text: `╔╤ֶׂ࣮֮ᩧ╧ֵᩬ᩼┅ٜꠥׂ๋໋┄҇͜͡ᗁ᮫๋ׅٜׄ✦ֵ֘҆ᗀ҇͡━̶⵿ׂ໋𝆋֘💔ຼ۪۪۪ᩙ⵿━̶᮫ׅׄ҇͡ᗁֵ໋֘✦ֺ๋ٜᗀ҇͜͡┄ׂ໋ٜ֮֔┅ꠥֵֶׂ๋໋╧ᩬ᩼╤݄࣫╗
            𝙽𝙰̃𝙾 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙾 . . . 
╚ׂ݄╤ֶׂ࣮֮ᩧ╧ֵᩬ᩼┅ٜꠥׂ๋໋┄҇͜͡ᗁ᮫๋ׅٜׄ✦ֵ֘҆ᗀ҇͡━̶⵿ׂ໋𝆋֘💔ຼ۪۪۪ᩙ⵿━̶᮫ׅׄ҇͡ᗁֵ໋֘✦ֺ๋ٜᗀ҇͜͡┄ׂ໋ٜ֮֔┅ꠥֵֶׂ๋໋╧ᩬ᩼╤݄࣫╝
╔╤ֶׂ࣮֮ᩧ╧ֵᩬ᩼┅ٜꠥׂ๋໋┄҇͜͡ᗁ᮫๋ׅٜׄ✦ֵ֘҆ᗀ҇͡━̶⵿ׂ໋𝆋֘💢ຼ۪۪۪ᩙ⵿━̶᮫ׅׄ҇͡ᗁֵ໋֘✦ֺ๋ٜᗀ҇͜͡┄ׂ֮֔┅ꠥֵֶׂ๋໋╧ᩬ᩼╤݄࣫╗
╭┅ׄᩙֶ┄ּׅ֘ꠥ━̶ׅׄ𔘓⃙໋ׄ╼⵿ׄ╾ׅ͠╬ּׅ۟۟۟۟۟۟۟۟╏ׂᩬּ֑🚫ᩖׅׄᩙ̶ ᮫ׄ╏ּׅ۟۟۟۟۟۟╬͠╼⵿ׂ໋╾⃙̶֮𔘓ׂׅ֓━ֶׅ֘┄ᩙꠥ┅╮
┃‿ּ  🌹ᩙ 𝚄𝚂𝙴𝚁: ${sender ? '@' + sender.split('@')[0] : 'undefined'}
┃‿ּ  🌹ᩙ 𝙷𝙾𝚁𝙰́𝚁𝙸𝙾: ${horaFormatada}
┃‿ּ  🌹ᩙ 𝙳𝙰𝚃𝙰 𝙳𝙴 𝙷𝙾𝙹𝙴: ${dataFormatada}
┃‿ּ  🌹ᩙ 𝚃𝙴𝙽𝚃𝙰𝚃𝙸𝚅𝙰: *${prefix + command}*
┃‿ּ  🌹ᩙ 𝚄𝚂𝙴: ${prefix}menu
╰ׅ┅ׄᩙֶ┄ּׅ֘ꠥ━̶ׅׄ𔘓⃙໋ׄ╼⵿ׄ╾ׅ͠╬ּׅ۟۟۟۟۟۟۟۟╏ׂᩬּ֑🚫ᩖׅׄᩙ̶ ᮫ׄ╏ּׅ۟۟۟۟۟۟╬͠╼⵿ׂ໋╾⃙̶֮𔘓ׂׅ֓━ֶׅ֘┄ᩙꠥ┅╯
╚ׂ݄╤ֶׂ࣮֮ᩧ╧ֵᩬ᩼┅ٜꠥׂ๋໋┄҇͜͡ᗁ᮫ׅׄꠥֵֶׂ๋໋╧ᩬ᩼╤݄࣫╝`,
    
    footer: NomeDoBot,

    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363405476475431@newsletter",
        newsletterName: NomeDoBot
      }
    },

    buttons: [
      {
        buttonId: prefix + 'menu',
        buttonText: { displayText: 'MENU' },
        type: 1
      }
    ],

    headerType: 1,
    mentions: [sender]
  },
  { quoted: info }
);
} catch (e) {
console.error(e)
}
        }

      } catch (err) {
        console.error('Erro ao processar mensagem:'.red, err);
      }
    });

    // Função para mostrar log
   function mostrarLogMsg(sock, info, pushname, nameGroup) {
      try {
        if (!info.message) return;

        const from = info.key.remoteLid || info.key.remoteJid || 'Não encontrado!';
        const isGroup = from.endsWith('@g.us');
        const sender = info.key.participant;
        const body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.imageMessage?.caption || info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || JSON.parse(info.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson || '{}')?.id ||
 info?.text || '';
        if (info.message.conversation) messageContent = info.message.conversation;
        else messageContent = JSON.stringify(info.message);

        let userName = sender
        try {
          const contact = sock.contacts[sender] || { name: sender };
          userName = contact.name || sender;
        } catch {}
        sock.readMessages([ info.key ]);
        console.log(`
╔─֘ᩙ࣮┅໋࣭֘͡━ᤢ͡︶᮫້࣭۟۟۟۟۟᷼⏝ᩙ᮫ׅ۪۪۪۪۪۪۪۪۪۪۪۪ׄ ᮫᭡ׅ֘͡🌸̶۪۪۪۪۪۪۪۪۪۪͡᭡ᩙ᮫⏝᮫້۟۟۟᷼︶້͡━᮫֘ ᤢ࣭ׄ┅ᩙ࣮─⵿໋ׄ᷼͡╗
 𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙴𝙼 ${isGroup ? '𝙶𝚁𝚄𝙿𝙾' : '𝙿𝚁𝙸𝚅𝙰𝙳𝙾'}!
╚֘─֘ᩙ࣮┅໋࣭֘͡━ᤢ͡︶᮫້࣭۟۟۟۟۟᷼⏝ᩙ᮫ׅׄ ᮫᭡ׅ֘͡🌸̶͡᭡ᩙ᮫⏝᮫້۟۟۟᷼︶້͡━᮫֘ ᤢ࣭ׄ┅ᩙ࣮─⵿໋ׄ᷼͡╝
╔─֘ᩙ࣮┅໋࣭֘͡━ᤢ͡︶᮫້࣭۟۟۟۟۟᷼⏝ᩙ᮫ׅ۪۪۪۪۪۪۪۪۪۪۪۪ׄ ᮫᭡ׅ֘͡💢̶۪۪۪۪۪۪۪۪۪۪͡᭡ᩙ᮫⏝᮫້۟۟۟᷼︶້͡━᮫֘ ᤢ࣭ׄ┅ᩙ࣮─⵿໋ׄ᷼͡╗
⌒ ᮫ׅ֘🌹𝚄𝚂𝚄𝙰́𝚁𝙸𝙾: ${sender?.split('@')[0]}
⌒ ᮫ׅ֘🌹 𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼: ${body}
⌒ ᮫ׅ֘🌹 𝙶𝚁𝚄𝙿𝙾: ${isGroup ? nameGroup : '𝙿𝚁𝙸𝚅𝙰𝙳𝙾'}
⌒ ᮫ׅ֘🌹 𝙸𝙳: ${from}
⌒ ᮫ׅ֘🌹 𝚄𝚂𝙴𝚁: ${info.pushName}
╚֘─֘ᩙ࣮┅໋࣭֘͡━ᤢ͡︶᮫້࣭۟۟۟۟۟᷼⏝ᩙ᮫ׅׄ ᮫᭡ׅ֘͡💢̶͡᭡ᩙ᮫⏝᮫້۟۟۟᷼︶້͡━᮫֘ ᤢ࣭ׄ┅ᩙ࣮─⵿໋ׄ᷼͡╝
`);
      } catch (err) {
        console.error('Erro ao mostrar log da mensagem:', err);
      }
    }

  } catch (err) {
    console.error('Erro na inicialização do bot:'.red, err);
  }
}

startBot();

let reiniciando = false;

fs.watch(__filename, () => {
  if (reiniciando) return;
  reiniciando = true;

  console.log(
  colors.bold.yellow('\n[ TOSHIRUZ ] Informa:'),
  '\n 🔄 Arquivo atualizado! Reiniciando o bot...\n'
);

  setTimeout(() => {
    process.exit();
    reiniciando = false;
  }, 800); // Espera o Node salvar o arquivo e o WhatsApp liberar a conexão
});
