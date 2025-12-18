---
id: satisfactory-commands
title: "Satisfactory: Comandos de Consola"
description: "Descubre cómo optimizar tu experiencia en Satisfactory con comandos esenciales de consola y consejos de teclas rápidas → Aprende más ahora"
sidebar_label: Comandos de Consola
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Satisfactory tiene una amplia variedad de comandos útiles para que los jugadores ajusten la configuración del cliente. En esta página resumimos los comandos populares y útiles que los jugadores suelen usar en Satisfactory.

<InlineVoucher />

## Accediendo a la consola
Usar la consola en Satisfactory es muy fácil, simplemente presiona la tecla `` ` `` (la tecla backtick está ubicada encima de la tecla TAB) para alternar la visibilidad de la consola. La consola se cerrará, se abrirá con una pequeña ventana de comandos en la parte inferior o se expandirá completamente cada vez que la actives.

:::info
Si la tecla backtick no funciona para ti, sigue los pasos en la subsección de abajo para configurar y habilitar una nueva tecla rápida.
:::

### No puedes acceder a la consola
A veces, debido a teclados regionales, la tecla predeterminada para activar la consola con backtick puede no funcionar, por lo que necesitas configurar una nueva. Antes de hacer esto, cierra Satisfactory si está abierto.

Presiona `Tecla Windows + R` o busca en el menú inicio `Ejecutar`. Luego, copia la siguiente ruta en la ventana:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

Abre el archivo `Input.ini` con un editor de texto (como el bloc de notas).

![Screenshot 2023-02-22 011634](https://screensaver01.zap-hosting.com/index.php/s/re9wfZLbCosj5K5/preview)

Luego copia y pega exactamente estas líneas al final del archivo:

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://screensaver01.zap-hosting.com/index.php/s/Qta7zsNA9ofo3dp/preview)

Finalmente, guarda y reinicia el juego. Ahora podrás abrir la consola con la tecla `F6`.

## Comandos de Consola

La tabla contiene el comando, los valores aceptados (si aplica) y una descripción para facilitar su comprensión.

Para mostrar la lista completa de comandos, usa `?` en la consola, lo que desplegará una lista flotante con todos los comandos disponibles. Puedes navegar esta lista usando las flechas `ARRIBA` y `ABAJO`.

Un ejemplo de cómo usar `?` para ver todos los comandos se muestra a continuación.

![Screenshot 2023-02-22 015435](https://screensaver01.zap-hosting.com/index.php/s/gS7bSwCFNngz8yx/preview)

:::info
Cualquier comando mencionado en esta página es para la versión vanilla de Satisfactory.
:::

| Sintaxis del Comando           | Valores Aceptados | Descripción | 
| ----------------------------- | ----------------- | ----------- | 
| ?                             | -                 | Muestra la lista completa de comandos         | 
| Stat FPS                      | -                 | Activa o desactiva el contador de FPS integrado         | 
| Stat UNIT                     | -                 | Muestra información como tiempo de cuadro, datos del juego, tiempo de dibujo y otras estadísticas         | 
| t.MaxFPS "maxfps"             | Entero (ej. 120)  | Establece el máximo FPS del juego         | 
| r.ScreenPercentage "valor"    | Entero (por defecto 100) | Cambia la escala de resolución de pantalla (solo para el renderizado del mundo, no la interfaz)         | 
| r.ViewDistanceScale "valor"   | Entero (por defecto 1)   | Cambia la distancia de renderizado para objetos como rocas o árboles         | 
| Suicide                      | -                 | Mata a tu propio jugador         | 
| FOV "valor"                   | Entero (ej. 90)   | Establece el campo de visión (FOV) del juego         | 
| r.Atmosphere "1 o 0"          | true (1)/false (0) | Activa o desactiva la atmósfera en el juego        | 
| r.Fog "1 o 0"                 | true (1)/false (0) | Activa o desactiva la niebla en el juego         | 
| Gamma "valor"                 | Entero (por defecto 50) | Ajusta el nivel de brillo del juego         | 

Para una lista más extensa de comandos, visita [la wiki de Satisfactory](https://satisfactory.fandom.com/wiki/Console) que cubre una variedad de comandos técnicos en profundidad.

<InlineVoucher />