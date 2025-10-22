---
id: vrising-firststeps-connect
title: "V Rising: Conecte-se ao Servidor V Rising"
description: "Descubra como se conectar ao seu servidor de jogos V Rising diretamente ou via lista de servidores para uma configuração de jogo sem complicações → Saiba mais agora"
sidebar_label: Conectar ao Servidor
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Neste guia, vamos mostrar como se conectar ao seu servidor de jogos V Rising. Existem duas formas de conexão: diretamente pelo endereço IP do seu servidor ou através da lista de servidores. Recomendamos configurar o servidor do seu jeito antes, saiba mais sobre isso no nosso [Guia de Configuração do Servidor](vrising-configuration.md).

<InlineVoucher />

## Conexão Direta via IP

### Obtendo o IP do Servidor

Primeiro, você precisa saber o endereço IP e a porta do seu servidor de jogos V Rising para poder se conectar diretamente. Basta acessar seu [painel de controle ZAP-Hosting](https://zap-hosting.com/en/customer/) no site e ter o IP completo e a porta em mãos.

![](https://screensaver01.zap-hosting.com/index.php/s/4L86LFeqL8o96kn/preview)

Se você estiver rodando seu servidor de jogos V Rising em um servidor dedicado externo, o IP será da máquina host e a porta será a que você configurou no arquivo de configuração (por padrão é 9876). Confira nosso [Guia de Configuração do Servidor](vrising-configuration.md) para mais detalhes sobre a porta.

### Conectando no jogo

Comece abrindo o V Rising pelo seu launcher de jogos. No menu principal, selecione **Jogar**, seguido da opção **Jogo Online**.

![](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

Escolha o modo de jogo que você vai jogar ou, se preferir, clique em **Mostrar todos os Servidores** no canto inferior direito para ir direto ao navegador de servidores.

Agora clique no botão **Conexão Direta** na parte inferior e digite seu IP seguido da porta, por exemplo: `123.456.679.123:9876`. Se houver senha, o jogo vai pedir para você digitá-la após conectar.

![](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

Se não conseguir entrar no servidor e receber um erro de timeout, verifique se o IP e a porta estão corretos e se seu servidor está online. Você pode usar a seção de console do seu painel de controle para ajudar a debugar.

## Conectar via Lista de Servidores

A opção mais fácil para se conectar ao seu servidor é pela lista de servidores. Mas isso exige que seu servidor esteja configurado como público nos parâmetros de configuração.

Confira nosso [Guia de Configuração do Servidor](vrising-configuration.md) para adicionar os parâmetros `Name` e `ListOnMasterServer` no arquivo de configuração ou pelo painel de controle.

Feito isso, no menu principal selecione **Jogar**, depois **Jogo Online** e novamente clique em **Mostrar todos os Servidores** no canto inferior direito. Agora você pode usar o navegador de servidores para encontrar seu servidor usando filtros como busca por nome, modo de jogo, dificuldade e muito mais.

![](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)

<InlineVoucher />