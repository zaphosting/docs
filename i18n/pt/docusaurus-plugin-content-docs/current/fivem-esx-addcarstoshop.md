---
id: fivem-esx-addcarstoshop
title: "FiveM: Adicionando carros à loja"
description: "Descubra como gerenciar e adicionar veículos ao seu banco de dados para uma experiência personalizada na loja de carros → Saiba mais agora"
sidebar_label: Adicionar Carros à Concessionária
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Acesso ao banco de dados

Primeiro de tudo, precisamos conectar ao nosso banco de dados. Fazemos isso na aba "Databases"

![](https://screensaver01.zap-hosting.com/index.php/s/8NYJC6Qq5inG5yk/preview)

Lá clicamos no ícone azul e fazemos login com nossos dados, que também encontramos na página.

![](https://screensaver01.zap-hosting.com/index.php/s/XK5CLoeckxxHk8w/preview)

## Encontrar nomes de spawn

Depois precisamos descobrir o nome de spawn do carro. Podemos fazer isso testando na prática ou navegando pela seguinte página:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## Adicionar novo veículo

Depois de escolher um carro, podemos adicioná-lo à lista.

:::info
Por padrão, já existem muitos carros na loja. Veja se o seu carro já está listado.
:::

Primeiro verificamos as categorias de carros. Assim sabemos quais podemos adicionar.
Fazemos isso na tabela "vehicle_categories"

![](https://screensaver01.zap-hosting.com/index.php/s/PYSt6anrdXs8QLY/preview)

Aqui precisamos da coluna "name". Vamos lembrar dela.


![](https://screensaver01.zap-hosting.com/index.php/s/CnrQJcGbf3SPdtg/preview)

Depois disso, vamos para a tabela "vehicles".
E então clicamos em Inserir


![](https://screensaver01.zap-hosting.com/index.php/s/eN5x9o724a6tKwf/preview)

Agora adicionamos um novo veículo. Uma explicação rápida do que significa cada campo:

**name** O nome que será exibido na loja  
**model** Nome de spawn (certifique-se de que está em letras minúsculas)  
**price** Preço do veículo  
**category** Categoria que acabamos de escolher

Aqui vai um exemplo para vocês:


![](https://screensaver01.zap-hosting.com/index.php/s/cFrrLYKTALmCnFP/preview)

<InlineVoucher />