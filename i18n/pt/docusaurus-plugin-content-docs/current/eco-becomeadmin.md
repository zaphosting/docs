---
id: eco-becomeadmin
title: "ECO: Torne-se um Admin"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gerenciamento eficiente do jogo → Saiba mais agora"
sidebar_label: Torne-se admin
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis fornecidas pelo jogo diretamente dentro do jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Configuração
Adicionar um admin é feito via o arquivo de configuração **Users.eco**, que você encontra na interface em Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)

Para adicionar um novo jogador como admin, a seguinte parte no arquivo **Users.eco** precisa ser ajustada:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```

O jogador que deve se tornar admin é especificado no campo **values**. No caso de vários admins, eles são adicionados separados por vírgula. Para identificar o jogador, é usado o SteamID64.

Você pode encontrá-lo acessando seu perfil Steam e clicando com o botão direito em qualquer lugar do perfil. Lá você pode copiar a URL do seu perfil Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)

Depois, a URL deve ser inserida em um dos seguintes sites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)

Isso fornecerá as informações gerais da conta, assim como o Steam ID. Esse ID será inserido em **values**. O resultado fica assim:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"anotherSteamID"
	]
    }
  },
```

Após reiniciar o servidor, os jogadores registrados terão privilégios de administrador. Se quiser adicionar mais admins, não precisa mais fazer isso via Config. Você pode fazer isso no jogo usando o comando:

```
/admin [player]
```

A seguir, você encontra uma visão geral dos comandos mais usados que você pode executar como admin.

## Comandos mais usados

|              Comandos              |                      Descrição                       |
| :--------------------------------: | :----------------------------------------------------: |
|             /allblocks             |                   Spawna todos os blocos                    |
|          /allconstructed           |         Spawna todos os blocos construíveis pelo jogador         |
|             /allplants             |                Spawna todos os blocos de plantas                 |
|             /allskills             |                   Desbloqueia todas as habilidades                   |
|            /allterrain             |               Spawna todos os blocos que podem ser escavados               |
|          /allworldobjects          |                Spawna todos os objetos do mundo                |
|      /kick [player],(reason)       |                      Expulsa um usuário                      |
|       /ban [player],(reason)       |                      Bane um usuário                       |
|     /give [itemname],(amount)      |                 Dá um item para você                  |
| /giveskillpoints [player],(amount) |           Dá pontos de habilidade para outro jogador           |
|                /fly                |                    Ativa/desativa o modo de voo                    |
|         /move [x],[y],[z]          | Move você para a posição x, y, z; onde xyz são números inteiros. |
|       /removeadmin [player]        |               Remove um usuário como Admin               |

Mais comandos disponíveis podem ser encontrados na [Wiki oficial do ECO](https://eco.gamepedia.com/Chat_Commands).

## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />