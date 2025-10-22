---
id: dayz-rcon
title: "DayZ: RCON"
description: "Descubra como gerenciar e controlar servidores de jogos DayZ remotamente e com eficiência, sem precisar estar conectado no jogo → Saiba mais agora"
sidebar_label: RCON
services:
  - gameserver-dayz
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RCON (Remote Console) é um protocolo de rede usado para controlar servidores de jogos remotamente. Ele permite o acesso ao console do servidor sem interação direta com o ambiente do servidor. Isso possibilita executar comandos administrativos, ajustar parâmetros de configuração ou obter informações sobre o status do servidor.

No DayZ, o RCON é usado para executar comandos do lado do servidor, como gerenciar jogadores, alterar configurações de gameplay ou acessar saídas de diagnóstico. A conexão é protegida por senha e opera através de uma porta específica, acessível via clientes RCON compatíveis.

Uma grande vantagem do RCON é que ele permite o gerenciamento do servidor **sem precisar estar conectado ao jogo como jogador**. Administradores podem monitorar e controlar o DayZ por meio de ferramentas externas, interfaces de linha de comando ou dashboards web, oferecendo flexibilidade e praticidade para operação remota.

<InlineVoucher />

## Configuração

Antes de usar o RCON, ele precisa ser ativado e configurado. Isso pode ser feito diretamente na administração do servidor de jogos. Na seção **Configurações**, há uma opção chamada **RCON** que deve ser ativada. Uma senha segura deve ser definida.

A porta RCON atribuída pode ser encontrada no final da página de configurações, em **Visão geral das portas**. 



## Conectando via RCON

Para conectar ao servidor DayZ via RCON, utiliza-se a ferramenta **BattleWarden**. Ela está disponível para download no [site oficial](https://www.battlewarden.net). Após baixar e instalar a ferramenta no seu computador, é preciso criar um novo perfil de conexão. Os seguintes dados são necessários:

- Endereço IP do servidor  
- Porta RCON 
- Senha RCON

Com a conexão estabelecida, comandos RCON podem ser executados pela interface gráfica. A ferramenta também oferece recursos extras como listas de jogadores, chat ao vivo e histórico de comandos, dependendo da integração com o jogo.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## Comandos RCON

Uma vez conectado via RCON, vários comandos administrativos e de diagnóstico podem ser executados no servidor DayZ. Os comandos disponíveis dependem do motor do jogo, mas geralmente incluem ações para gerenciamento de jogadores, consultas de status e controle do servidor.

| Comando                         | Descrição                                          |
|----------------------------------|------------------------------------------------------|
| `#login <senha>`             | Faz login como administrador RCON                        |
| `#logout`                       | Encerra a sessão de administrador                               |
| `#kick <nomeDoJogador>`            | Expulsa um jogador do servidor                       |
| `#ban <nomeDoJogador>`             | Bane um jogador permanentemente                            |
| `#exec ban <playerID>`          | Bane um jogador via Steam64ID (BattlEye)               |
| `#exec unban <playerID>`        | Desbane um jogador previamente banido                    |
| `#shutdown`                     | Desliga o servidor                                |
| `#monitor <segundos>`            | Mostra dados de desempenho a cada x segundos               |
| `#lock`                         | Trava o servidor para novas conexões                 |
| `#unlock`                       | Destrava o servidor novamente                             |




## Conclusão

RCON é uma ferramenta essencial para a administração remota de servidores de jogos DayZ. Ele permite acesso rápido e direto às funções administrativas, oferecendo controle de acesso via autenticação por senha. Uma configuração correta e segura é fundamental para garantir a estabilidade do servidor e proteger contra acessos não autorizados.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />