---
id: hytale-teleport-between-worlds
title: "Hytale: Teleporte Entre Mundos"
description: "Descubra como se teletransportar entre Mundos em um servidor de Hytale → Saiba mais agora"
sidebar_label: Teleporte Entre Mundos
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Teletransportar entre mundos em um servidor de Hytale permite que os jogadores se movam de forma fluida de um ambiente de mundo para outro. Essa funcionalidade é muito usada em servidores que hospedam múltiplos mundos, como hubs, mapas de aventura, áreas criativas ou zonas de gameplay separadas.

:::info Aviso de Acesso Antecipado

Hytale foi lançado em 13 de janeiro de 2026 e está atualmente disponível em Acesso Antecipado. Como o jogo ainda está em fase ativa de desenvolvimento, o software do servidor, arquivos de configuração, suporte a mods e fluxos de instalação podem continuar mudando com o tempo.

:::

<InlineVoucher />


## Teleportando

Os comandos de teleporte entre mundos podem ser executados pelo console do servidor ou por um operador no chat dentro do jogo. Quando executados pelo console, o comando afeta o jogador especificado imediatamente. Quando executados no jogo, o jogador que emitir o comando deve ter permissões de operador ou equivalentes.

Para teletransportar um jogador do mundo atual para outro mundo, use o seguinte comando:

```
/world teleport <playername> <worldname>
```

O parâmetro `<playername>` define o nome do jogador que deve ser teleportado. O parâmetro `<worldname>` especifica o nome do mundo de destino.

O teleporte entre mundos exige que o mundo de destino esteja disponível no servidor. Se o mundo alvo não estiver carregado no momento, o comando de teleporte não terá sucesso. Para deixar um mundo disponível para teleporte, carregue-o usando o comando:

```
/world load <worldname>
```


:::tip Visão geral dos nomes dos mundos

Caso você não tenha certeza do nome exato de um mundo, pode exibir uma lista de todos os mundos disponíveis usando o comando `/world list`. 
:::


## Conclusão

Teletransportar entre mundos é uma ferramenta poderosa para gerenciar servidores de Hytale com múltiplos mundos. Usando os comandos certos de mundo pelo console ou chat do jogo e garantindo que os mundos de destino estejam carregados, os administradores podem oferecer uma navegação suave e flexível entre diferentes ambientes do servidor.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂


<InlineVoucher />