
let handler = async (m, { conn }) => {
  let chat = global.db.data.chats[m.chat]
  try {
    let text = m.text.toLowerCase();
    
    if (chat.audios){
    switch (text) {
        
        case 'bueno master':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/xynz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'hermoso negro':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/ExSQ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'ara ara':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/PPgt.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'bienvenido wey':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/cUYg.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'buen dia grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/GoKq.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'calla fan de bts':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/oqNf.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'cambiate a movistar':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/RxJC.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'corte corte':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/hRuU.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'el toxico':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/WzBd.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'elmo sabe donde vives':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/YsLt.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'en caso de una investigación':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Syg.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'FBI':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/wFbD.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no estes tite':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/VrjA.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'eres fuerte':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/lhzq.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'zzzz':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/KkSZ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'las reglas del grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/fwek.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'me anda buscando anonymous':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/MWJz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'momento xds':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/PitP.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'motivacion':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/MXnK.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'muchachos escucharon':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/dRVb.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'nico nico':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/OUyB.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no rompas mas':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/ZkAp.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'potasio':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/vPoj.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'que tal grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/lirF.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'se estan riendo de mi':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/XBXo.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'su nivel de pendejo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/SUHo.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tal vez':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/QMjH.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'te gusta el pepino':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/ddrn.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'todo bien':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/EDUC.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'traiganle una falda':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/fnTL.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'y este quien es':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/QnET.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'goku pervertido':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/CUmZ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tengo los calzones':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/pzRp.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'a nadie le importa':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/JocM.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'mierda de bot':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/UEZQ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'baneado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/SJJt.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'basado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/jDAl.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'bien pensado woody':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/nvxb.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'bañate':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/JsYa.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;
        
        default:
            
    }
    } else {
      m.reply('_Debes activar los audios._');
    }
    
  } catch (err) {
    console.error(err);
    m.reply('Ocurrió un error al enviar el audio.');
  }
};




handler.customPrefix = /^(Bueno master|buenas noches|bueno si|buenos dias|me olvide|diagnosticado con gay|el pepe|trap|enojado|entrada|esto va ser epico papus|esto va para ti|feliz cumpleaños|fiesta de admin|fiesta de admin 2|fiesta de admin 3|fino señores|me voy|tunometecabrasaramambiche|gemidos|audio hentai|homero chino|hora de sexo|jesucristo|laoracion|marica tu|ma ma masivo|oh me vengo|me pica los cocos|mmmm|y este quien es|goku pervertido|tengo los calzones|a nadie le importa|mierda de bot|baneado|basado|bien pensado woody|bañate|tal vez|te gusta el pepino|todo bien|traiganle una falda|su nivel de pendejo|se estan riendo de mi|que tal grupo|potasio|nico nico|no rompas mas|muchachos escucharon|momento xds|motivacion|me anda buscando anonymous|eres fuerte|zzzz|las reglas del grupo|no estes tite|FBI|en caso de una investigación|elmo sabe donde vives|corte corte|el toxico|cambiate a movistar|hermoso negro|ara ara|bienvenido wey|in your area|buen dia grupo|calla fan de bts|)/i;
handler.command = new RegExp;

export default handler;

