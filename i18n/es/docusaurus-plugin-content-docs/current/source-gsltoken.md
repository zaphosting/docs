---
id: source-gsltoken
title: Uso de tokens de inicio de sesión para servidores de juegos
description: "Descubre cómo los tokens GSL aseguran los servidores de juegos de Steam vinculando las sanciones a las cuentas, garantizando un alquiler de servidores más seguro y conforme → Aprende más ahora"
sidebar_label: Token GSL
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ❓ ¿Qué es un token GSL?

Los Tokens de Inicio de Sesión para Servidores de Juegos (GSLTs) son un procedimiento que Steam implementó como medida de seguridad. Para poder ejecutar servidores de juegos de ciertos juegos de Steam (principalmente juegos Source) es necesario generar un token.

<InlineVoucher />

## ❓ ¿Cuál es el propósito de un token GSL?

En el pasado, Valve hizo algunos cambios en las reglas para el alquiler de servidores de juegos. No todos los operadores de servidores de juegos siguieron esas regulaciones. Como consecuencia, las direcciones IP de los servidores de juegos fueron bloqueadas.

Sin embargo, este método no fue efectivo, ya que se podía evitar fácilmente con una nueva dirección IP y también representaba un gran problema para los proveedores de servidores de juegos. La razón es que al bloquear la dirección IP, otros clientes también se veían afectados.

Por eso se implementó este sistema, que en lugar de bloquear la IP, bloquea el token y la cuenta de Steam vinculada para la operación futura del servidor de juegos.

## ➕ Crear token

Para crear un token de inicio de sesión para servidor de juegos, necesitas estar conectado en la web de Steam. El token se puede crear aquí: [Gestión de cuentas de servidores de juegos de Steam](https://steamcommunity.com/dev/managegameservers)

![](https://screensaver01.zap-hosting.com/index.php/s/an5ySHwzSZmEwep/preview)

Cuando llegues, te pedirán el App ID y un memo (cualquier nombre que quieras usar como nota). El App ID depende del juego. A continuación encontrarás los App IDs más importantes:

|              Juego               | App ID |
| :------------------------------: | :----: |
| Counter-Strike: Global Offensive |  730   |
|      Counter-Strike: Source      |  240   |
|         Team Fortress 2          |  440   |
|            Garrys Mod            |  4000  |

El token GSL se puede definir en la interfaz dentro de la configuración.

![](https://screensaver01.zap-hosting.com/index.php/s/jqkbkXG2YQLatw2/preview)

Una vez hecho este paso y reiniciado el servidor, el servidor también aparecerá en la lista pública de servidores.

## ⁉ Preguntas frecuentes

**¿Cuáles son los requisitos para un token GSL?**

La cuenta de Steam no debe tener restricciones como un baneo comunitario. Además, debe tener un número de teléfono válido registrado en la cuenta de Steam.

**¿Puedo usar un token GSL para varios servidores?**

Se necesita un token individual para cada servidor de juegos.

**¿Hay algo que pueda causar que mi token GSL sea baneado?**

Especialmente en servidores de CS:GO, hay algunos plugins que no están permitidos. No se ha publicado una lista oficial. Sin embargo, esto incluye plugins que modifican inventarios de jugadores (skins de armas), rangos o similares.

**¿Qué pasa si mi token GSL es baneado?**

Si un token es baneado, como resultado la cuenta y todos los tokens asociados también son baneados. Esto significa que el servidor de juegos ya no será accesible públicamente. Además, la cuenta no podrá usarse para operar más servidores de juegos en el futuro. Sin embargo, la cuenta de Steam aún podrá usarse para jugar. No se esperan más sanciones en este sentido.

<InlineVoucher />