---
id: fivem-esx-changerespawnpoint
title: "FiveM: Configurar punto de reaparición"
description: "Descubre cómo actualizar los puntos de reaparición de ambulancia en ESX para personalizar la jugabilidad y mejorar la gestión del servidor → Aprende más ahora"
sidebar_label: Cambiar Punto de Reaparición
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guía Archivada
Este documento ha sido archivado. Los documentos se archivan si ya no son relevantes, son incorrectos o están desactualizados. Ha sido archivado por las siguientes razones:

**Razón**: El método es para una versión antigua de ESX. Este enfoque no se puede usar para la versión actual de ESX, ya que la estructura ha cambiado. 
::::



:::info
ESX debe estar instalado
:::

<InlineVoucher />

📔 Preparativos

Para encontrar las coordenadas necesitamos un script de Coords como este:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Instálalo así: [Instalar recursos](fivem-installresources.md)
¿Ya instalamos este script? Entonces presiona dentro del juego */coords*
Esto nos dará las coordenadas.

📑 Editar Config

Una vez que tenemos nuestras coordenadas, vamos a la pestaña Config

Aquí presionamos **CTRL + F** y buscamos **ambulance**
Luego abriremos este archivo.
Desplázate hacia abajo hasta encontrar **Config_RespawnPoint**.

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

Ahora editaremos estos valores y reemplazaremos las coordenadas.
Después solo hacemos clic en Guardar y listo.

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
Después de reiniciar el servidor, los cambios tendrán efecto.
:::

<InlineVoucher />