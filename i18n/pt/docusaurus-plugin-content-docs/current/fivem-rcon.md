---
id: fivem-rcon
title: "FiveM: RCON"
description: "Descubra como gerenciar servidores de jogos FiveM remotamente com RCON para controle e monitoramento flexíveis → Saiba mais agora"
sidebar_label: RCON
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RCON (Remote Console) é um protocolo de rede usado para controlar servidores de jogos remotamente. Ele permite acesso ao console do servidor sem interação direta com o ambiente do servidor. Isso possibilita executar comandos administrativos, ajustar parâmetros de configuração ou obter informações sobre o status do servidor.

No FiveM, o RCON é usado para executar comandos do lado do servidor, como gerenciar jogadores, alterar configurações de gameplay ou acessar saídas de diagnóstico. A conexão é protegida por senha e opera através de uma porta específica, acessível via clientes RCON compatíveis.

Uma grande vantagem do RCON é que ele permite o gerenciamento do servidor **sem precisar estar conectado ao jogo como jogador**. Administradores podem monitorar e controlar o FiveM por ferramentas externas, interfaces de linha de comando ou dashboards web, oferecendo flexibilidade e praticidade para operação remota.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Configuração

Antes de usar o RCON, ele precisa ser ativado e configurado. Isso é feito na seção **Editor CFG** da administração do servidor de jogos no **txAdmin**. Para isso, certifique-se de que as seguintes linhas estejam adicionadas ou ajustadas na configuração:

```cfg
ensure rconlog
set rcon_password "sua-senha-segura"
```



## Conectando via RCON

Para conectar ao servidor GameXY via RCON, usa-se a ferramenta para Windows **IceCon**. Ela está disponível para download no [repositório do GitHub](https://github.com/icedream/icecon). Após instalar a ferramenta no seu PC, crie uma nova conexão com as seguintes informações:

- **Endereço IP do servidor**  
- **Porta do jogo**
- **Senha RCON**

Quando a conexão for estabelecida com sucesso, o IceCon oferece uma interface gráfica para enviar comandos RCON ao servidor FiveM. Você pode emitir comandos RCON padrão e ver o feedback dos comandos em tempo real diretamente na ferramenta.

O IceCon também inclui recursos extras como:

- Histórico de comandos e auto-completar  
- Visualizador de logs do servidor  
- Botões personalizados para comandos  
- Perfis de conexão para gerenciar múltiplos servidores



## Comandos RCON

Uma vez conectado via RCON, vários comandos administrativos e de diagnóstico podem ser executados no servidor FiveM. Os comandos disponíveis dependem do motor do jogo, mas normalmente incluem ações para gerenciamento de jogadores, consultas de status e controle do servidor.

| Comando                   | Descrição                                         |
| ------------------------- | ------------------------------------------------- |
| `say <mensagem>`          | Envia uma mensagem para todos os jogadores no chat |
| `start <nome-do-recurso>` | Inicia um recurso específico do servidor          |
| `stop <nome-do-recurso>`  | Para um recurso específico do servidor             |
| `restart <nome-do-recurso>` | Reinicia um recurso específico do servidor       |
| `ensure <nome-do-recurso>` | Inicia o recurso somente se ele não estiver rodando |
| `refresh`                 | Recarrega todos os recursos do diretório de recursos |
| `clear`                   | Limpa a saída do console do servidor               |
| `crash`                   | Força uma queda do servidor (para fins de debug)  |
| `quit`                    | Desliga o servidor de forma limpa                   |



## Conclusão

RCON é uma ferramenta essencial para administração remota de servidores de jogos FiveM. Ele permite acesso rápido e direto às funções administrativas, oferecendo controle de acesso via autenticação por senha. Uma configuração correta e segura é fundamental para garantir a estabilidade do servidor e proteger contra acessos não autorizados.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />