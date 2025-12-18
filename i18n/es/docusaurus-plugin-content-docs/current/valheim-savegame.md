---
id: valheim-savegame
title: "Valheim: Gestión de partidas guardadas en servidores"
description: "Descubre cómo gestionar, descargar y restaurar tus partidas guardadas de Valheim de forma eficiente usando el Savegame-Manager → Aprende más ahora"
sidebar_label: Gestionar partidas guardadas
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Descargar partidas guardadas

:::info
Nota: Antes de descargar la partida guardada debes detener el servidor para guardar la partida activa. Después de detener el servidor, la partida guardada aparecerá tras recargar la página una vez.
:::

Para descargar tu partida guardada puedes usar el `Savegame-Manager` en el panel web:

![](https://screensaver01.zap-hosting.com/index.php/s/FryL7EXmEYBFBXD/preview)

Aquí puedes descargar fácilmente tu partida guardada haciendo clic en el botón verde "Download":

![](https://screensaver01.zap-hosting.com/index.php/s/2o2gnQ3GKpwc22w/preview)

:::info
Recuerda que necesitas descargar tanto los archivos `.db` **como** `.fwl`.
:::

¡Listo! Ahora puedes usar la copia de seguridad para otros fines o subirla de nuevo más tarde.

## Subir y activar partida guardada

Para subir tus propias partidas guardadas, primero abrimos nuestro gestor de partidas guardadas.

Aquí podemos subir nuestra partida guardada mediante drag&drop, debería verse así después:

![](https://screensaver01.zap-hosting.com/index.php/s/H2RJSyMGeiojfxD/preview)

:::info
Ten en cuenta que tu partida guardada debe tener el mismo nombre con el que fue creada por el juego.
:::

En nuestro caso, los archivos de la copia de seguridad se llaman `380622.fwl` y `380622.db`.

Ahora introducimos el nombre de la copia de seguridad arriba, en `Savegame (worlds)`:

![](https://screensaver01.zap-hosting.com/index.php/s/Ggrys4xKjDm7inz/preview)

En `ZAP Backups` buscamos nuestra partida guardada:

![](https://screensaver01.zap-hosting.com/index.php/s/beRMYmE4CicDNsz/preview)

Ahora solo tenemos que pulsar el botón amarillo "Restore" en ambos archivos y confirmar todo, entonces nuestra partida guardada se cargará.

Después de que se haya cargado, aparecerá un mensaje en la parte inferior derecha:

![](https://screensaver01.zap-hosting.com/index.php/s/Zs9F4rNRen4QMcs/preview)

Ahora se puede iniciar el servidor, la partida guardada subida estará activa en el servidor.



## Guardados automáticos

Lamentablemente Valheim no soporta guardados automáticos por ahora. Para guardar tu progreso, el servidor debe ser detenido. El Planificador de reinicios en el panel web puede usarse para reiniciar automáticamente tu servidor en horarios específicos:

![](https://screensaver01.zap-hosting.com/index.php/s/gTp5yJDQyHKX7eF/preview)

Aquí podemos añadir fácilmente un horario para un reinicio diario o semanal:

![](https://screensaver01.zap-hosting.com/index.php/s/nyqbMzjNL78qz9K/preview)

Una vez guardado el reinicio, también podemos añadir más de un reinicio diario o semanal.

![](https://screensaver01.zap-hosting.com/index.php/s/BddatyGLAZZWnCA/preview)

¡Listo! Tu servidor ahora se reiniciará en esos horarios específicos, y la partida guardada se guardará durante esos reinicios.

<InlineVoucher />