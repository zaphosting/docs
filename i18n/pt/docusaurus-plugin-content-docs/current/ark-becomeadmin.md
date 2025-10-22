---
id: ark-becomeadmin
title: "ARK: Torne-se um admin"
description: "Descubra como gerenciar seu servidor de jogos com controle total de admin e melhorar a experiência de jogo → Saiba mais agora"
sidebar_label: Torne-se admin
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis fornecidas pelo jogo diretamente dentro do jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Configuração

Os direitos de administrador permitem que você faça alterações diretamente no jogo no seu servidor sem precisar alterar na Config. Para atribuir direitos de administrador a você mesmo ou a outros jogadores, primeiro você deve definir uma senha de admin do servidor. Essa senha é definida nas configurações da nossa interface web.

![](https://screensaver01.zap-hosting.com/index.php/s/kLEsKbT6RN6c7Na/preview)

Depois que a senha for definida, é necessário reiniciar o servidor. Em seguida, você pode se conectar ao seu servidor e fazer login como admin via console dentro do jogo com o seguinte comando e sua senha de admin do servidor:

```
enableCheats senha
```

Depois disso, você poderá executar todos os comandos do servidor como admin. A seguir, você encontra uma visão geral dos comandos mais usados.

## Comandos mais usados

| Comando                                        | Descrição                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| setcheatplayer TRUE/FALSE                      | Ativa / desativa o menu de cheats                            |
| admincheat AllowPlayerToJoinNoCheck SteamID    | Adiciona jogador à whitelist                                 |
| admincheat DisallowPlayerToJoinNoCheck SteamID | Remove jogador da whitelist                                  |
| admincheat SetMessageOfTheDay Mensagem          | Define a mensagem do dia (MOTD). Essa mensagem aparece quando um jogador conecta ao servidor de jogos |
| admincheat broadcast Mensagem                   | Envia uma mensagem para todos os jogadores no servidor      |
| admincheat god                                 | Ativa imortalidade para seu próprio jogador                 |
| admincheat fly                                 | Ativa voo para seu próprio jogador                           |
| admincheat walk                                | Desativa voo para seu próprio jogador                        |
| admincheat teleport                            | Teleporta seu jogador na direção que você está olhando      |
| admincheat slomo                               | Altera a velocidade do servidor e a velocidade de movimento de todos os jogadores |
| admincheat playersonly                         | Para todos os movimentos de criaturas e impede crafting     |
| admincheat ghost                               | Ativa noclip para seu próprio jogador                        |
| admincheat forcetame                           | Permite domar dinossauros imediatamente e montar sem sela  |
| admincheat listplayers                         | Lista todos os jogadores incluindo o SteamId64              |
| admincheat banplayer SteamId64                 | Bane jogadores usando o SteamID64                            |
| admincheat unbanplayer SteamId64               | Desbane jogadores usando o SteamID64                         |
| admincheat setplayerpos x y z                  | Teleporta seu jogador para a localização desejada           |
| admincheat saveworld                           | Salva o estado atual do mundo                                |
| admincheat addexperience Quantidade            | Adiciona experiência ao jogador                              |
| admincheat settimeofday Hora                    | Altera a hora do dia do servidor de jogos. Exemplo: "admincheat settimeofday 12:00" |

## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para mais dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />