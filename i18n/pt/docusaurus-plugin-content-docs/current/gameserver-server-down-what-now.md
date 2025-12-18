---
id: gameserver-server-down-what-now
title: 'Servidor de jogos: Servidor fora do ar - E agora?'
description: "Aprenda a diagnosticar quedas do servidor de jogos analisando arquivos de log para identificar erros e encontrar soluções eficazes → Saiba mais agora"
sidebar_label: Queda do servidor - O que fazer?
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Se o seu servidor de jogos está fora do ar, isso pode ter vários motivos. **É importante que você não tente reiniciá-lo direto, mas dê uma olhada no arquivo de log primeiro. Geralmente há **mensagens de erro** que explicam exatamente por que o servidor caiu. **Se você reiniciar o servidor direto, o log é recriado e o antigo é apagado. Aí infelizmente você não consegue mais ver os erros.**

<InlineVoucher />

## Visualizar o arquivo de log

O arquivo de log pode ser acessado facilmente pelo menu à esquerda.

![](https://screensaver01.zap-hosting.com/index.php/s/rTMjGQPGoijMCXQ/preview)

Depois você pode visualizá-los clicando no olho verde. **O importante é que você sempre abra o log mais recente.
Você consegue identificar pela data ou pelo nome.

![](https://screensaver01.zap-hosting.com/index.php/s/Hc4cYQSj3c9Enpi/preview)

Depois de abrir, você deve verificar se há erros (**Erros geralmente contêm algo como "Error" "Cant find" "Couldnt load"**)

No screenshot abaixo, tenho um exemplo de um FivemServer com uma chave de licença do servidor errada.

![](https://screensaver01.zap-hosting.com/index.php/s/pAwzNkHZBTtHds9/preview)

Você pode então pesquisar esse erro, por exemplo, no Google e ver se ele é conhecido. Normalmente você encontra a causa desse erro bem rápido.

Se não encontrar nada sobre o erro, pode ir no Live Chat e enviar o erro como texto ou screenshot.

## Arquivo de log sem conteúdo

Infelizmente, isso também pode acontecer. Se o arquivo de log estiver vazio, pode ser que ele não tenha sido criado porque o servidor caiu direto ou foi apagado devido a uma reinicialização. Nesse caso, só resta tentar reiniciar na esperança de que o erro apareça de novo ou que o servidor volte a funcionar.

## Sem solução no live chat

Se você não encontrou solução no Google nem no live chat, existem 2 possibilidades. A primeira é abrir um ticket e deixar o servidor como está, para que o suporte possa analisar com mais calma.

A segunda solução é restaurar um backup ou reinstalar o servidor.

### Variante 1 - Restaurar um backup

Para restaurar um backup, basta ir em Backups no menu à esquerda e importar o backup mais recente usando a seta verde. Depois disso, seu servidor deve voltar a funcionar normalmente.

![](https://screensaver01.zap-hosting.com/index.php/s/j9C396QXtq8Pytx/preview)

### Variante 2 - Reinstalar o servidor

A reinstalação pode ser iniciada em "Configurações" no menu à esquerda. Depois disso, o servidor será completamente resetado para o primeiro dia (você também pode resetar as configurações clicando em "**Resetar todas as opções**")

![](https://screensaver01.zap-hosting.com/index.php/s/2edwoTrn3We67SB/preview)

## Reinstalação sem sucesso

Infelizmente, esse é o pior cenário possível. Nesse caso, só resta pedir para o suporte analisar via chat ou ticket, pois aí é um problema mais sério. Vamos fazer o possível para resolver o problema o quanto antes para que você possa usar seu serviço normalmente.

<InlineVoucher />