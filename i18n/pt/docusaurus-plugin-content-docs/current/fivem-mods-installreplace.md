---
id: fivem-mods-installreplace
title: "FiveM: Instale Mods de Carros Substitutos no servidor"
description: "Descubra como configurar e enviar mods para o seu servidor FiveM para experiências de jogo personalizadas → Saiba mais agora"
sidebar_label: Instalar Mods de Carros Substitutos
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Conecte-se via FTP
Primeiro, conecte-se ao seu servidor via FTP. Você pode usar nosso [guia de Acesso via FTP](gameserver-ftpaccess.md) para isso.

## Preparação

Agora crie uma pasta para seus mods dentro da pasta "resources".

:::info
Você pode nomear a pasta como quiser, desde que não contenha caracteres especiais. No nosso exemplo, ela se chama "assets".
:::

Agora crie um arquivo fxmanifest.lua dentro da sua pasta recém-criada "assets".

O seguinte texto deve ser inserido nesse arquivo:

```
fx_version 'cerulean'
games { 'gta5' }

```

Depois, salve e feche o fxmanifest.lua, não precisaremos mais dele.

Dentro da sua pasta assets, crie agora uma pasta chamada "stream".

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## Enviar Mods

Agora abra essa pasta stream, aqui você pode enviar todos os arquivos ytd e yft via arrastar & soltar:

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

Depois que todos os mods forem enviados, tudo que você precisa fazer é adicionar seu recurso no server.cfg, que fica na pasta "server-data" do seu servidor FiveM.

Você pode abrir esse arquivo com qualquer editor de texto, e sob as entradas "start" você pode adicionar seu recurso assim:

```
start assets
```

Pronto! Após reiniciar o servidor, o mod de carro já deve estar disponível no servidor!

<InlineVoucher />