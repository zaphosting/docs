---
id: dedicated-windows-python
title: 'Configura Python en un Servidor Windows - Activa Desarrollo y Automatización'
description: "Aprende cómo instalar y configurar el runtime de Python en servidores Windows para ejecutar tus programas Python de forma eficiente → Aprende más ahora"
sidebar_label: Instalar Python
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Esta guía te muestra los pasos para instalar el runtime de Python en Windows. Los pasos que verás a continuación deben ejecutarse vía RDP. Si no sabes cómo conectarte a tu servidor vía RDP, échale un vistazo a nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md).



## Instalación

### Paso 1: Descargar Archivos
Abre el navegador que prefieras (yo usaré Chrome para esta guía) y ve a [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Ahora haz clic en el botón `Download Python [versión]` y espera a que termine la descarga.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Paso 2: Instalar Python
Ejecuta el instalador haciendo clic en él. Ahora te pedirán configurar algunas opciones para la instalación. Asegúrate de marcar la casilla `Add python.exe to PATH` al final (esto hará que ejecutar archivos Python sea más fácil después) y haz clic en el botón `Install Now`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Paso 3: Finalizar Instalación
Espera a que todos los archivos se instalen. Ten paciencia, puede tardar un poco. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

Cuando termine, simplemente presiona `Close` y ya podrás empezar a usar Python en tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Ejecutar código

Ahora que tienes Python instalado en tu servidor, puedes empezar a ejecutar tus programas Python.

### Modo intérprete

Ejecutar el comando `python` dentro de una ventana de Command Prompt o PowerShell iniciará el intérprete de Python. Puedes escribir cualquier código Python válido después del prefijo `>>>` y se ejecutará al presionar `Enter`. Puedes cerrar el intérprete cuando termines ejecutando `exit()` en la consola o simplemente cerrando la ventana.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### Ejecutar archivos .py

Para ejecutar archivos Python `.py`, simplemente usa el comando `python3 [nombrearchivo].py`, reemplazando `[nombrearchivo]` con la ruta y nombre del archivo que quieres ejecutar. Esto también se hace desde Command Prompt o PowerShell.

:::tip
La mayoría de los programas que encuentras online se pueden ejecutar con `python3 main.py` porque `main.py` es el punto de inicio común en la mayoría de programas Python.
:::

También puedes ejecutar archivos Python (.py) abriéndolos directamente o haciendo clic derecho y seleccionando Python en Windows.

## Entornos virtuales

Cuando escribes un programa Python, puede que necesites instalar paquetes externos con pip. Estos pueden instalarse globalmente y estar disponibles para todos los scripts `.py`, o puedes crear un entorno virtual (venv).

### Crear el venv

Primero, navega a la carpeta donde quieres crear tu venv usando el explorador de archivos y, cuando estés listo, ejecuta `python -m venv .` para instalar los archivos necesarios en esa ubicación.

### Activar y desactivar

Para ejecutar comandos como `pip install` dentro de tu venv, necesitas activarlo ejecutando `.\Scripts\activate`. Ahora tu consola solo funcionará dentro del venv y los scripts solo tendrán acceso a los paquetes instalados localmente.

Cuando termines de trabajar dentro del venv, puedes salir ejecutando el comando `deactivate`.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)



## Conclusión

¡Felicidades, has instalado Python con éxito! Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂