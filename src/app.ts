import { create, Client } from '@open-wa/wa-automate';
import { handleCommand } from './commands';

// Função para listar grupos
const listGroups = async (client: Client) => {
  // Recupera todos os grupos
  const groups = await client.getAllGroups();

  // Exibe os grupos
  console.log("Grupos:");
  groups.forEach(group => {
    console.log(`${group.name} - ${group.id}`);
  });
};

// Inicializa o cliente e lista os grupos
create().then(client => {
  listGroups(client).catch(error => console.error(error));
}).catch(error => console.error(error));
// Função para inicializar o bot
const start = (client: Client) => {
  client.onMessage(async message => {
    console.log(`Mensagem recebida: ${message.body} de ${message.from}`);
    
    // Chama a função para tratar comandos
    await handleCommand(client, message);
  });
};

// Configurações para a criação do cliente
create({
  sessionId: 'bot-whatsapp',
  useChrome: true,
  headless: true, // Define se o navegador deve ser executado em modo headless
  autoRefresh: true, // Adiciona uma configuração para auto-refresh
  qrTimeout: 0, // Desativa o timeout do QR Code
  killProcessOnBrowserClose: true, // Garante que o processo seja encerrado corretamente
}).then(client => start(client)).catch(error => console.log(error));
