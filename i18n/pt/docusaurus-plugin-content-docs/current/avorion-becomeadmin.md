---
id: avorion-becomeadmin
title: "Avorion: Torne-se admin no seu próprio servidor"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gerenciar as funções do jogo de forma eficaz → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver-avorion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis no jogo diretamente dentro dele. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Configuração

Adicionar um admin é feito pela página de configurações na interface web. Clique em **Administração do Servidor de Jogos** em **Configurações** e role até **Configurações do Servidor**.

![](https://screensaver01.zap-hosting.com/index.php/s/gzei7sWedJMrqzc/preview)

Lá você encontrará um campo chamado **Admin SteamIDs**. Nele, você deve inserir seu SteamID64. Para encontrar seu SteamID64, primeiro acesse seu perfil Steam e clique com o botão direito em qualquer lugar da página. Depois, clique em **Copiar URL do Steam**.

![](https://screensaver01.zap-hosting.com/index.php/s/q7E3qSd9GoLCswM/preview)

Depois, abra uma das seguintes páginas e cole a URL do seu perfil lá:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Essas páginas vão te mostrar informações gerais e o Steam ID da sua conta. Aqui, só precisamos do SteamID64. Insira o SteamID64 no campo correspondente. Deve ficar assim:

![](https://screensaver01.zap-hosting.com/index.php/s/qakTq9iLW72jkyC/preview)

Clique em **Salvar**. Depois de reiniciar o servidor, você poderá executar comandos de admin no jogo. Para isso, pressione Enter para abrir o chat e execute os comandos começando com o símbolo /.

## Comandos de admin

Aqui está uma visão geral dos comandos comuns que você pode usar como admin.

**Comandos gerais**

| Comando                 | Descrição                                                  |
| :---------------------- | :--------------------------------------------------------- |
| /help                   | mostra mensagem de ajuda                                   |
| /w [nome do jogador]    | envia mensagem privada para um jogador                     |
| /save                   | salva o estado atual                                       |
| /stop                   | para o servidor                                           |
| /seed                   | seed do servidor                                          |
| /version                | mostra a versão atual do servidor                         |
| /suicide                | destrói sua nave atual                                    |
| /player                 | mostra o número de jogadores                              |
| /status                 | mostra informações sobre o status atual do servidor      |
| /admin -a [nome do jogador] | adiciona um jogador como admin                          |
| /admin -r [nome do jogador] | remove um jogador como admin                            |
| /kick [nome do jogador] | remove um jogador do servidor                             |
| /ban [nome do jogador]  | adiciona o jogador à blacklist                            |
| /unban [nome do jogador]| remove o jogador da blacklist                             |
| /banip [IP do jogador]  | adiciona o IP do jogador à blacklist                      |
| /unbanip [IP do jogador]| remove o IP do jogador da blacklist                       |
| /blacklist              | mostra as opções da blacklist                             |
| /whitelist              | mostra as opções da whitelist                             |

**Comandos de cheat (no jogo):**

| Comando                                | Descrição                                           |
| :------------------------------------- | :-------------------------------------------------- |
| /give [nome do jogador] [quantidade] credits    | dá ao jogador a quantidade desejada de créditos    |
| /give [nome do jogador] [quantidade] [nome do minério] | dá ao jogador a quantidade desejada do minério selecionado |

**Comandos do servidor (console):**

| Comando                       | Descrição                                                  |
| :---------------------------- | :--------------------------------------------------------- |
| /max-logs [valor]             | quantidade de arquivos de log a manter                     |
| /difficulty [valor]           | dificuldade do servidor, valores permitidos: -3, -2, -1, 0, 1, 2, 3 Padrão: 0 |
| /collision-damage [valor]     | dano causado a um objeto na colisão, de 0 a 1. 0: sem dano, 1: dano total. padrão: 1 |
| /exit-on-last-admin-logout    | desligar quando o último administrador sair                |
| /public [valor]               | indica se o servidor deve permitir outros jogadores entrarem |
| /infinite-resources [valor]   | ativa recursos infinitos para todos os jogadores           |
| /listed [valor]               | indica se o servidor deve aparecer nas listas públicas      |
| /max-players [valor]          | número máximo de jogadores online Padrão: 10               |
| /save-interval [valor]        | intervalo entre salvamentos Padrão: 300                     |
| /same-start-sector arg        | indica se todos os jogadores devem começar no mesmo setor  |
| /server-name [valor]          | nome do servidor, exibido quando consultado                 |
| /use-steam-networking [valor] | usa rede Steam e autenticação para usuários                 |
| /galaxy-name [valor]          | nome da galáxia, anexado ao caminho de dados, caminho final será [datapath]/[galaxyname] |
| /datapath [valor]             | pasta onde as galáxias serão armazenadas, será adicionada antes do nome da galáxia |
| /admin [valor]                | steam id(s) do(s) administrador(es) do servidor            |

## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />