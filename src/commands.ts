import { Client, Message, ChatId } from '@open-wa/wa-automate';

// Função para tratar comandos
export const handleCommand = async (client: Client, message: Message) => {
  console.log(`Tratando comando: ${message.body} de ${message.from}`);
  
  // Verifica se a mensagem começa com "!"
  if (message.body.startsWith('!')) {
    const command = message.body.slice(1).trim(); // Remove o "!" e espaços em branco
    
    // Exemplo de tratamento de comando
    switch (command.toLowerCase()) {
      case 'identificar':
        // await client.sendText(message.from, `Comando "identificar" recebido.`);
        console.log(`Comando "identificar" processado para ${message.from}`);
        break;
      case 'enviargrupo':
        // await sendMessageToGroup(client, 'grupo_id@g.us' as ChatId, 'Olá, grupo!');
        console.log(`Mensagem enviada para o grupo.`);
        break;
      default:
        // await client.sendText(message.from, `Comando "${command}" não reconhecido.`);
        console.log(`Comando não reconhecido: ${command}`);
        break;
    }

    // Marca a mensagem como vista
    // await client.sendSeen(message.chatId);
  }
};

// Função para enviar mensagem a um grupo
export const sendMessageToGroup = async (client: Client, groupId: ChatId, message: string) => {
  try {
    // await client.sendText(groupId, message);
    console.log(`Mensagem "${message}" enviada para o grupo ${groupId}`);
  } catch (error) {
    console.error(`Erro ao enviar mensagem para o grupo ${groupId}:`, error);
  }
};
