---
id: vserver-linux-python
title: "Configura Python en un Servidor Linux - Activa Desarrollo y Automatización"
description: "Aprende cómo instalar y actualizar el runtime de Python en varias distros Linux para asegurar un entorno seguro y actualizado → Aprende más ahora"
sidebar_label: Instalar Python
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Esta guía te muestra los pasos para instalar el runtime de Python y venv. Estos comandos deben ejecutarse vía SSH, si no sabes cómo conectarte a tu servidor por SSH, usa nuestra [Guía de Acceso Inicial (SSH)](vserver-linux-ssh.md) para aprender más.

<InlineVoucher />

## Preparación

Antes de instalar cualquier cosa en un servidor, se recomienda ejecutar el comando de actualización correspondiente a tu sistema operativo para mantener tu servidor seguro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Instalación

La mayoría de las distros Linux vienen con Python preinstalado, pero la versión puede no estar actualizada o el sistema puede haberse instalado sin algunos paquetes. Puedes comprobar si Python está instalado (`python3 --version`) y ejecutar los siguientes comandos para actualizar o instalar el runtime.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Verificar versión
  python3 --version

  // Actualizar / instalar el runtime
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Verificar versión
  python3 --version

  // Actualizar el runtime
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Verificar versión
  python3 --version

  // Actualizar el runtime
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Verificar versión
  python3 --version

  // Actualizar el runtime
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Ejecutar código

Ahora que tienes Python instalado en tu servidor, puedes empezar a ejecutar tus programas en Python.

### Modo intérprete

Ejecutar el comando `python3` iniciará el intérprete de Python. Puedes escribir cualquier código Python válido después del prefijo `>>>` y se ejecutará al presionar `Enter`. Puedes cerrar el intérprete cuando termines ejecutando `exit()` en la consola.

### Ejecutar archivos .py

Para ejecutar archivos `.py` de Python, simplemente usa el comando `python3 [nombrearchivo].py`, reemplazando `[nombrearchivo]` con la ruta y nombre del archivo que quieres ejecutar.

:::tip
La mayoría de los programas que encuentras online se pueden ejecutar con `python3 main.py` porque `main.py` es el punto de inicio común en la mayoría de programas Python.
:::

## Entornos virtuales

Cuando escribes un programa en Python, puede que necesites instalar paquetes externos con pip. Estos pueden instalarse globalmente y estar disponibles para todos los scripts `.py` o puedes crear un entorno virtual (venv).

### Crear el venv

Primero, navega a la carpeta donde quieres crear tu venv usando `cd` y cuando estés listo, ejecuta `python3 -m venv .` que instalará los archivos necesarios en la ubicación actual.

### Activar y desactivar

Para ejecutar comandos como `pip install` dentro de tu venv, necesitas activarlo ejecutando `source /bin/activate`. Ahora tu consola solo funcionará dentro del venv y los scripts solo tendrán acceso a los paquetes instalados localmente.

Cuando termines de trabajar dentro del venv, puedes salir ejecutando el comando `deactivate`.


## Conclusión

¡Felicidades, has instalado y configurado Python con éxito! Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />