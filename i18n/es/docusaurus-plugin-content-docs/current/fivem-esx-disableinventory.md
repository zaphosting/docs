---
id: fivem-esx-disableinventory
title: "FiveM: Desactivar inventario (F2)"
description: "Descubre cómo desactivar el inventario por defecto en ESX para personalizar la experiencia de tu servidor → Aprende más ahora"
sidebar_label: Desactivar el Inventario (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guía Archivada
Este documento ha sido archivado. Los documentos se archivan cuando ya no son relevantes, están incorrectos o desactualizados. Ha sido archivado por las siguientes razones:

**Razón**: El método es para una versión antigua de ESX. Este enfoque no se puede usar para la versión actual de ESX, ya que la estructura ha cambiado. 
::::

<InlineVoucher />

## Conectar al FTP

Antes de poder desactivar el inventario, debes configurar el [Acceso vía FTP](gameserver-ftpaccess.md).

Una vez configurado, puedes conectarte y abrir la carpeta del servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## Realizar los Cambios

Ahora abrimos la ruta `server-data/resources/[esx]`, aquí encontrarás una carpeta llamada es_extended:

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

Dentro de esta carpeta abrimos el archivo `config.lua`.

Al abrirlo con un editor de texto, buscamos el siguiente código:

```Lua
Config.EnableDefaultInventory   = true -- Mostrar el inventario por defecto ( F2 )
```

Lo reemplazamos por:

```Lua
Config.EnableDefaultInventory   = false
```


Ahora guardamos el archivo y reiniciamos el servidor. Cuando te unas al servidor, el inventario ya no podrá abrirse.

<InlineVoucher />