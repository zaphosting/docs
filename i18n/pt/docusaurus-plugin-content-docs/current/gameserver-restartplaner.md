---
id: gameserver-restartplaner
title: 'Servidor de jogos: Restart planner - Reinicie seu servidor automaticamente'
description: "Descubra como automatizar reinícios diários do servidor de jogos para melhorar desempenho e disponibilidade → Saiba mais agora"
sidebar_label: Restart planner
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
O restart planner é um recurso oferecido para servidores de jogos que permite criar reinícios automáticos para reiniciar o servidor no mesmo horário todos os dias.

<YouTube videoId="bcsAePevPnY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pNsgKBQQGEC3tPj/preview" title="Como configurar um RESTART PLANNER para seu Servidor!" description="Prefere entender melhor vendo as coisas em ação? A gente te ajuda! Mergulhe no nosso vídeo que explica tudo. Seja você apressado ou só curte aprender da forma mais divertida possível!"/>

:::info
Esse recurso está disponível apenas para servidores de jogos.
:::

Esse recurso pode ser encontrado na interface do servidor de jogos.

![](https://screensaver01.zap-hosting.com/index.php/s/doBQoGw3kTj8o6r/preview)

<InlineVoucher />

## Criar novas entradas

:::info
***Nota:*** As alterações feitas no restart planner só são aplicadas após o servidor ser reiniciado.
:::

Se quiser adicionar um reinício automático, clique no botão cinza "**+**".

Na próxima janela, você pode escolher entre reinícios Semanais ou Diários. No nosso exemplo, queremos quatro reinícios por dia com intervalo de 6 horas. Então selecionamos "**Diário**" e definimos "**06:00**". Confirme a entrada com "**Salvar**".

Repita esse procedimento para cada reinício automático desejado. Se usar "**24:00**", o sistema mostrará uma mensagem de erro. Para evitar isso, use "**00:00**" no lugar.

![](https://screensaver01.zap-hosting.com/index.php/s/j4nyS4efsKTinBS/preview)

### Iniciar servidor offline

Se essa opção estiver ativada, um servidor parado será iniciado automaticamente nesse horário. Se estiver desativada, o servidor de jogos só será reiniciado pelo sistema se estiver "**Online**" antes.

## Opção de comando

A opção de comando entre os reinícios automáticos serve para executar comandos automaticamente pouco antes do reinício. A quantidade de comandos disponíveis depende do jogo. Nem todos os jogos oferecem essa opção.

Se quiser avisar os jogadores antes, pode usar o comando *say* no Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/bcRJQprM2BFeR75/preview)

### Delay

O campo Delay define o intervalo entre a execução do comando e o reinício do servidor. Esse delay é definido em **segundos**. Por exemplo, para um delay de 5 minutos, defina o valor 300. 

<InlineVoucher />