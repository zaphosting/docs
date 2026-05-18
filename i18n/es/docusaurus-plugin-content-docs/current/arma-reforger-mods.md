---
id: arma-reforger-mods
title: "Arma Reforger: Instala Mods vía Workshop"
description: "Aprende cómo instalar y activar mods del Workshop de Arma Reforger en tu servidor → Descubre más ahora"
sidebar_label: Instalar Mods
services:
  - gameserver-arma-reforger
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los mods juegan un papel clave para ampliar la experiencia de juego en **Arma Reforger**. A través del **Workshop de Arma Reforger**, jugadores y creadores publican misiones personalizadas, cambios en la jugabilidad, mapas y contenido adicional que se puede usar en servidores.

Instalar mods permite a los propietarios de servidores personalizar la jugabilidad, introducir nuevas mecánicas o brindar misiones únicas para su comunidad. Una vez instalados, los jugadores que se unan al servidor descargarán automáticamente los mods requeridos antes de conectarse.

<InlineVoucher />

## Encontrar Mods

Primero necesitas el **ID del Workshop** del mod que quieres instalar. Abre el **Workshop de Arma Reforger** y navega hasta el mod deseado. Cada entrada del workshop tiene un identificador único que el servidor usa para descargar el mod automáticamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/jMNGbRAQdjKcDyn/preview)

## Configuración

Para instalar mods del workshop en tu servidor, abre tu **panel de gestión del servidor de juegos** y ve a **Configuración**. Localiza el campo de configuración llamado **Workshop-Mods**. En este campo, introduce el **ID del Workshop** del mod que quieres instalar. Ejemplo de configuración con un solo mod:

```
1234567890
```
Si quieres instalar varios mods, introduce cada ID del Workshop y sepáralos con una **coma**. Ejemplo de configuración con varios mods:

```
1234567890,9876543210,1357924680
```
Después de ingresar los IDs de los mods deseados, **guarda la configuración** y reinicia el servidor. Durante el arranque, el servidor descargará automáticamente los mods listados desde el Workshop de Arma Reforger y los cargará.

## Conclusión

¡Felicidades! Has instalado con éxito **mods del Workshop de Arma Reforger** en tu servidor. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />