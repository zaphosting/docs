---
id: palworld-rcon
title: "Palworld: RCON"
description: "Descubra como gerenciar servidores de Palworld remotamente para controle e monitoramento flexíveis sem precisar entrar no jogo → Saiba mais agora"
sidebar_label: RCON
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RCON (Remote Console) é um protocolo de rede usado para controlar servidores de jogos remotamente. Ele permite acesso ao console do servidor sem interação direta com o ambiente do servidor. Isso possibilita executar comandos administrativos, ajustar parâmetros de configuração ou obter informações sobre o status do servidor.

No Palworld, o RCON é usado para executar comandos do lado do servidor, como gerenciar jogadores, alterar configurações de gameplay ou acessar saídas de diagnóstico. A conexão é protegida por senha e opera através de uma porta específica, acessível via clientes RCON compatíveis.

Uma grande vantagem do RCON é que ele permite o gerenciamento do servidor **sem precisar estar conectado ao jogo como jogador**. Administradores podem monitorar e controlar o Palworld por ferramentas externas, interfaces de linha de comando ou dashboards web, oferecendo flexibilidade e praticidade para operação remota.

<InlineVoucher />

## Configuração

Antes de usar o RCON, ele precisa ser ativado e configurado. Isso é feito editando o arquivo de configuração localizado em **Configs** no painel de gerenciamento do servidor de jogos. No arquivo chamado `PalWorldSettings.ini`, as seguintes entradas devem ser adicionadas ou modificadas:

```cfg
RCONEnabled=True,
RCONPort=XXXXX,
AdminPassword="defina-sua-senha"
```
A porta RCON atribuída pode ser encontrada no final da página de configurações, na visão geral das Portas, e deve ser especificada lá.



## Conectando via RCON

Para conectar ao servidor de Palworld via RCON, usa-se a ferramenta de linha de comando **rcon-cli**. Ela pode ser baixada do repositório oficial no [GitHub](https://github.com/gorcon/rcon-cli). Após baixar e instalar a ferramenta no seu computador, a conexão pode ser feita usando o endereço IP do servidor, a porta RCON e a senha RCON.

A porta atribuída pode ser encontrada na **visão geral das Portas** no final da página de configurações na administração do servidor de jogos. A senha e a porta devem corresponder aos valores configurados no painel ou no arquivo de configuração. Use o comando abaixo para conectar e executar um comando diretamente:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Comandos RCON

Uma vez conectado via RCON, vários comandos administrativos e de diagnóstico podem ser executados no servidor de Palworld. Os comandos disponíveis dependem do motor do jogo, mas normalmente incluem ações para gerenciamento de jogadores, consultas de status e controle do servidor.

| Comando                                   | Descrição                                                  |
|------------------------------------------|------------------------------------------------------------|
| `/Shutdown <seconds> <message>`          | Desliga o servidor após uma contagem regressiva com mensagem |
| `/DoExit`                                | Para o servidor imediatamente                              |
| `/Broadcast <message>`                   | Envia uma mensagem para todos os jogadores conectados      |
| `/KickPlayer <SteamID>`                  | Expulsa um jogador pelo SteamID                             |
| `/BanPlayer <SteamID>`                   | Bane permanentemente um jogador                             |
| `/TeleportToPlayer <SteamID>`            | Teleporta você até o jogador especificado                   |
| `/TeleportToMe <SteamID>`                | Teleporta o jogador especificado até sua localização        |
| `/ShowPlayers`                           | Lista todos os jogadores atualmente conectados             |
| `/Info`                                  | Exibe informações básicas do servidor                       |
| `/Save`                                  | Salva o mundo manualmente                                   |



## Conclusão

RCON é uma ferramenta essencial para administração remota de servidores de jogos Palworld. Ele permite acesso rápido e direto às funções administrativas, oferecendo controle de acesso via autenticação por senha. Configuração correta e segura é fundamental para garantir a estabilidade do servidor e proteger contra acessos não autorizados.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />