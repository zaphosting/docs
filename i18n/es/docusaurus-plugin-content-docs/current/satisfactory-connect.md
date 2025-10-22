---
id: satisfactory-connect
title: "Satisfactory: Conéctate al Servidor"
description: "Descubre cómo conectarte y gestionar tu servidor de juegos de Satisfactory de forma efectiva para una experiencia de juego sin interrupciones → Aprende más ahora"
sidebar_label: Conéctate al Servidor
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="Cómo crear un servidor de Satisfactory en ZAP y subir tu propia partida guardada" description="¿Prefieres entender mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o simplemente prefieras absorber la info de la forma más entretenida posible."/>

:::info
Si ya usas un teclado con distribución QWERTY, no necesitas hacer estos pasos, solo presiona CTRL + SHIFT + L y abre la consola con ~
:::

Para conectarte a tu servidor de juegos de Satisfactory, es necesario abrir la consola del juego, hay dos formas de hacerlo.

<InlineVoucher />

## Abrir la Consola

### Cambiar la distribución del teclado
Puedes cambiar fácilmente la distribución de tu teclado en unos pocos pasos.
Inicia tu juego Satisfactory hasta llegar al menú principal.
Ahora presiona `CTRL + Shift` y la distribución de tu teclado debería cambiar a `EN`.
Puedes comprobar si funcionó fácilmente, cambia a tu escritorio y revisa si en la barra de tareas aparece `EN` en la esquina inferior derecha.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

Si el cambio fue exitoso, vuelve al juego, ahora presiona `CTRL + SHIFT + L`
Luego presiona `^` en tu teclado, debería abrirse la consola.

### Cambiar la tecla que abre la consola
Presiona `Tecla Windows + R` o busca en el menú inicio `Ejecutar`
Copia esta ruta en la ventana:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

y presiona enter.

Ahora abre el archivo Input.ini con el editor que prefieras (por ejemplo, el bloc de notas)

:::info
Si el archivo no existe, simplemente créalo.
:::

Agrega este texto en tu archivo:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

Guarda y reinicia el juego - ahora podrás abrir la consola con `F6`

## Conéctate a tu servidor de juegos de Satisfactory
Copia la dirección IP desde el panel de control de tu servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

Abre la consola en el juego, como se explicó antes

Escribe ahora `open Dirección-IP-de-tu-Servidor` en la consola.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

y presiona enter.

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

¡Ya estás entrando a tu servidor de juegos de Satisfactory!

## El HUB
El HUB ya está colocado en el mundo, puedes destruirlo si quieres presionando `F` y reemplazarlo en otra ubicación.
Encontrarás el HUB fácilmente siguiendo la marca.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Guardado automático
El servidor guarda tu progreso cada 5 minutos, puedes ver las partidas guardadas en el gestor de partidas en el panel de control de tu servidor.
Siempre mantendrá las últimas 6 partidas guardadas (30 minutos) de progreso.

<InlineVoucher />