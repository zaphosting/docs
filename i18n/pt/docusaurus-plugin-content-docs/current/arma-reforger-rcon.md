---
id: arma-reforger-rcon
title: "Arma Reforger: RCON"
description: "Descubra como gerenciar e controlar servidores de Arma Reforger remotamente de forma segura para uma administração e monitoramento flexíveis → Saiba mais agora"
sidebar_label: RCON
services:
  - gameserver-arma-reforger
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RCON (Remote Console) é um protocolo de rede usado para controlar servidores de jogos remotamente. Ele permite o acesso ao console do servidor sem interação direta com o ambiente do servidor. Isso possibilita executar comandos administrativos, ajustar parâmetros de configuração ou obter informações sobre o status do servidor.

No Arma Reforger, o RCON é usado para executar comandos do lado do servidor, como gerenciar jogadores, alterar configurações de gameplay ou acessar saídas de diagnóstico. A conexão é protegida por senha e opera através de uma porta específica, acessível via clientes RCON compatíveis.

Uma grande vantagem do RCON é que ele permite o gerenciamento do servidor **sem precisar estar conectado ao jogo como jogador**. Administradores podem monitorar e controlar o Arma Reforger por ferramentas externas, interfaces de linha de comando ou dashboards web, oferecendo flexibilidade e praticidade para operação remota.

<InlineVoucher />

## Configuração

Antes de usar o RCON, ele precisa ser ativado e configurado. Isso é feito editando o arquivo de configuração localizado em **Configs** no painel de gerenciamento do servidor de jogos. No arquivo chamado `BEServer_x64.cfg`, as seguintes entradas devem ser adicionadas ou modificadas:

```cfg
RConPort XXXXX
RConPassword define-your-password
```
A porta RCON atribuída pode ser encontrada no final da página de configurações, na visão geral de Portas, e deve ser especificada ali.



## Conectando via RCON

Para conectar ao servidor de Arma Reforger via RCON, utiliza-se a ferramenta **BattleWarden**. Ela está disponível para download no [site oficial](https://www.battlewarden.net). Após baixar e instalar a ferramenta no seu computador, um novo perfil de conexão deve ser criado. Os seguintes dados são necessários:

- Endereço IP do servidor  
- Porta RCON 
- Senha RCON

Uma vez estabelecida a conexão, comandos RCON podem ser executados pela interface gráfica. A ferramenta também oferece recursos adicionais como listas de jogadores, chat ao vivo e histórico de comandos, dependendo da integração do jogo.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## Comandos RCON

Após conectar via RCON, vários comandos administrativos e de diagnóstico podem ser executados no servidor de Arma Reforger. Os comandos disponíveis dependem do motor do jogo, mas normalmente incluem ações para gerenciamento de jogadores, consultas de status e controle do servidor.

| Comando                         | Descrição                                        |
|----------------------------------|----------------------------------------------------|
| `#login <password>`             | Fazer login como administrador do servidor       |
| `#logout`                       | Sair do status de administrador                   |
| `#mission <missionName>`       | Inicia uma nova missão no servidor                 |
| `#missions`                    | Lista missões disponíveis para seleção            |
| `#restart`                     | Reinicia a missão atual                            |
| `#reassign`                    | Move todos os jogadores de volta para a função atribuída |
| `#kick <playerID>`             | Expulsa um jogador                                |
| `#exec ban <playerID>`         | Bane um jogador                                   |
| `#exec unban <playerID>`       | Desbane um jogador                                |
| `#shutdown`                    | Desliga o servidor                                |



## Conclusão

RCON é uma ferramenta essencial para a administração remota de servidores de jogos Arma Reforger. Ele permite acesso rápido e direto às funções administrativas, oferecendo controle de acesso via autenticação por senha. Uma configuração correta e segura é fundamental para garantir a estabilidade do servidor e proteger contra acessos não autorizados.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />