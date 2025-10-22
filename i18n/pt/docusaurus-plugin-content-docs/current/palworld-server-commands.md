---
id: palworld-server-commands
title: "Palworld: Comandos do Servidor Palworld"
description: "Descubra como gerenciar servidores Palworld de forma eficaz usando comandos embutidos para controle admin e gameplay → Saiba mais agora"
sidebar_label: Comandos do Servidor
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Os servidores Palworld vêm com um conjunto de comandos úteis embutidos que podem ser usados dentro do jogo e pelo console do servidor. Neste guia, vamos explorar muitos desses comandos, fornecendo descrições e exemplos de uso para cada um.

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/85ennn4gSYBPNYo/preview" title="Configure seu servidor PALWORLD em apenas UM MINUTO!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo pra você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais divertida possível!"/>

<InlineVoucher />

## Configurando o Admin

Você precisa primeiro definir uma senha de admin para seu servidor Palworld e se adicionar como admin dentro do jogo antes de poder acessar os comandos de admin na próxima seção.

Você pode definir a senha de admin do seu servidor através da aba **Configurações** no painel web do seu servidor ou pelo arquivo de configuração **PalWorldSettings.ini**. Depois de configurada, use o comando `/AdminPassword [senha]` dentro do jogo para se adicionar como admin.

:::tip
Recomendamos muito que você dê uma olhada no nosso [Guia de Configuração de Admin](palworld-admin.md), que é um guia dedicado a esse assunto e traz detalhes mais aprofundados sobre como definir a senha de admin e adicionar usuários como admin.
:::

## Comandos Disponíveis

A tabela abaixo mostra uma variedade de comandos para servidores Palworld, com exemplos de uso e descrições, que podem ser usados dentro do jogo e pelo console do servidor.

Quando o parâmetro `steamid` for necessário, você pode copiar o SteamID de um jogador facilmente clicando duas vezes com o botão direito na lista de jogadores.

:::info
Você precisa configurar uma Senha de Admin e se conceder permissão usando o comando `/AdminPassword` antes de começar a usar esses comandos. Caso contrário, você receberá um erro de permissão. Leia a próxima seção deste guia para entender como fazer isso.
:::

| Sintaxe do Comando            | Valores Aceitos  | Descrição                                                             | 
| ------------------------------ | ---------------- | ----------------------------------------------------------------------- | 
| /Shutdown [secs] [mensagem]    | Inteiro, String  | Desliga o servidor após os segundos especificados, com a mensagem incluída | 
| /DoExit                       | -                | Força a parada do servidor                                            | 
| /Broadcast                   | String           | Envia uma mensagem para todos os jogadores conectados no servidor     | 
| /KickPlayer [steamid]        | String           | Expulsa o jogador alvo do servidor                                    | 
| /BanPlayer [steamid]         | String           | Bane o jogador alvo do servidor                                       | 
| /TeleportToPlayer [steamid]  | String           | Teleporta até o jogador alvo                                          | 
| /TeleportToMe [steamid]      | String           | Teleporta o jogador alvo até você                                     | 
| /ShowPlayers                 | -                | Mostra informações sobre todos os jogadores conectados no momento    | 
| /Info                        | -                | Mostra informações do servidor                                        | 
| /Save                        | -                | Salva os dados atuais do mundo                                       |

:::note
Atualmente não é possível desbanir um jogador dentro do jogo, pois não existe comando para isso. Você precisará editar manualmente o arquivo `banlist.txt` no diretório do seu servidor caso queira desbanir alguém.
:::

<InlineVoucher />