---
id: gameserver-restartplaner
title: 'Servidor de juegos: Planificador de reinicios - Realiza reinicios automáticos del servidor'
description: "Descubre cómo automatizar los reinicios diarios de tu servidor de juegos para mejorar el rendimiento y la disponibilidad → Aprende más ahora"
sidebar_label: Planificador de reinicios
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
El planificador de reinicios es una función disponible para servidores de juegos que te permite crear un reinicio automático para reiniciar el servidor a la misma hora todos los días.

<YouTube videoId="bcsAePevPnY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pNsgKBQQGEC3tPj/preview" title="¡Cómo configurar un PLANIFICADOR DE REINICIOS para tu servidor!" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la información de la forma más entretenida posible."/>

:::info
Esta función solo está disponible para servidores de juegos.
:::

Esta función se encuentra en la interfaz del servidor de juegos.

![](https://screensaver01.zap-hosting.com/index.php/s/doBQoGw3kTj8o6r/preview)

<InlineVoucher />

## Crear nuevas entradas

:::info
***Nota:*** Los cambios realizados en el planificador de reinicios solo se aplican una vez que el servidor ha sido reiniciado.
:::

Si quieres añadir un reinicio automático, debes hacer clic en el botón gris "**+**".

En la siguiente ventana puedes elegir entre reinicios Semanales y Diarios. En nuestro ejemplo, queremos cuatro reinicios al día con un intervalo de 6 horas. Por eso seleccionamos "**Diario**" y configuramos "**06:00**". Confirma la entrada con "**Guardar**".

Este procedimiento se repite para cada reinicio automático deseado. Si se introduce "**24:00**", el sistema mostrará un mensaje de error. Para evitar este error, se debe usar "**00:00**" en su lugar.

![](https://screensaver01.zap-hosting.com/index.php/s/j4nyS4efsKTinBS/preview)

### Iniciar servidor offline

Si esta opción está activada, un servidor detenido se iniciará automáticamente en ese momento. Si esta opción está desactivada, el servidor de juegos solo será reiniciado por nuestro sistema si estaba "**Online**" antes.

## Opción de comando

La opción de comando entre los reinicios automáticos especificados está pensada para ejecutar comandos automáticamente justo antes de que ocurra el reinicio. La cantidad de comandos disponibles depende del juego. No todos los juegos ofrecen esta opción.

Si quieres avisar a los jugadores con anticipación, puedes usar el comando *say* en Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/bcRJQprM2BFeR75/preview)

### Retardo

El campo Retardo define el intervalo entre la ejecución del comando y el reinicio del servidor. Este retardo se define en **segundos**. Por ejemplo, si quieres establecer un retardo de 5 minutos, debes poner el valor 300 en este campo.

<InlineVoucher />