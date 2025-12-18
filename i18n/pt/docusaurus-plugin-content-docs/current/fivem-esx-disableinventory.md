---
id: fivem-esx-disableinventory
title: "FiveM: Desativar inventário (F2)"
description: "Descubra como desativar o inventário padrão no ESX para personalizar a experiência do seu servidor → Saiba mais agora"
sidebar_label: Desativar o Inventário (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guia Arquivado
Este documento foi arquivado. Documentos são arquivados quando não são mais relevantes, estão incorretos ou desatualizados. Ele foi arquivado pelos seguintes motivos:

**Motivo**: O método apresentado é para uma versão antiga do ESX. Essa abordagem não pode ser usada na versão atual do ESX, pois a estrutura mudou. 
::::

<InlineVoucher />

## Conecte-se ao FTP

Antes de desativar o inventário, o [Acesso via FTP](gameserver-ftpaccess.md) precisa estar configurado.

Depois de configurado, você pode se conectar e abrir a pasta do servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## Fazendo as Alterações

Agora abra o caminho `server-data/resources/[esx]`, aqui você encontrará uma pasta chamada es_extended:

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

Dentro dessa pasta, abra o arquivo `config.lua`.

Depois de abrir esse arquivo em um editor de texto, procure pelo seguinte código:

```Lua
Config.EnableDefaultInventory   = true -- Exibir o inventário padrão ( F2 )
```

Aqui, substitua por:

```Lua
Config.EnableDefaultInventory   = false
```


Agora salve o arquivo e reinicie o servidor. Depois de entrar no servidor, o inventário não poderá mais ser aberto.

<InlineVoucher />