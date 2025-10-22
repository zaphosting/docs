---
id: fivem-esx-changemoneyicon
title: "FiveM: Mudar ícone do dinheiro"
description: "Descubra como personalizar o ícone do dinheiro do seu servidor para uma experiência in-game mais única → Saiba mais agora"
sidebar_label: Mudar Ícone do Dinheiro
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guia Arquivado
Este documento foi arquivado. Documentos são arquivados quando não são mais relevantes, estão incorretos ou desatualizados. Ele foi arquivado pelos seguintes motivos:

**Motivo**: O método apresentado é para uma versão antiga do ESX. Essa abordagem não pode ser usada na versão atual do ESX, pois a estrutura mudou.
::::



<InlineVoucher />

## Conecte via FTP

Primeiro, o [Acesso via FTP](gameserver-ftpaccess.md) precisa ser configurado.


Depois de configurado, você pode se conectar e abrir a pasta do servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


Aqui abrimos o arquivo `server.cfg` dentro da pasta `server-data`.

## Editar Configuração

Agora adicionamos o seguinte acima da linha `start essentialmode`:

```Lua
set es_moneyIcon "$"
```

Aqui você pode substituir o $ pelo seu próprio ícone.

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


Após salvar o arquivo e reiniciar o servidor, o ícone do dinheiro será alterado no jogo.

<InlineVoucher />