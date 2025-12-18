---
id: dedicated-linux-python
title: "Servidor dedicado: Instalación de Python"
description: "Aprende cómo instalar y actualizar el runtime de Python en varias distribuciones Linux para asegurar un entorno seguro y actualizado → Aprende más ahora"
sidebar_label: Instalar Python
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Esta guía te muestra los pasos para la instalación del runtime de Python y venv. Estos comandos deben ejecutarse vía SSH, si no sabes cómo conectarte a tu servidor por SSH, usa nuestra [guía de acceso inicial (SSH)](vserver-linux-ssh.md) para aprender más.



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

La mayoría de las distros Linux vienen con Python preinstalado, sin embargo, la versión puede no estar actualizada o el sistema puede haberse instalado sin algunos paquetes. Puedes comprobar si la instalación de python existe (`python3 --version`) y ejecutar los siguientes comandos para actualizar o instalar el runtime.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Comprobar versión
  python3 --version

  // Actualizar / instalar el runtime
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Comprobar versión
  python3 --version

  // Actualizar el runtime
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Comprobar versión
  python3 --version

  // Actualizar el runtime
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Comprobar versión
  python3 --version

  // Actualizar el runtime
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Ejecutar código

Ahora que tienes Python instalado en tu servidor, puedes empezar a ejecutar tus programas en Python.

### Modo intérprete

Ejecutar el comando `python3` iniciará el intérprete de Python. Puedes empezar a escribir cualquier código Python válido después del prefijo `>>>` y se ejecutará al presionar `Enter`. Puedes cerrar el intérprete cuando termines ejecutando `exit()` en la consola.

### Ejecutar archivos .py

Para ejecutar archivos Python `.py`, simplemente usa el comando `python3 [nombrearchivo].py`, reemplazando `[nombrearchivo]` con la ruta al archivo que quieres ejecutar.

:::tip
La mayoría de los programas que encuentras online se pueden ejecutar con `python3 main.py` porque `main.py` es el punto de inicio común en la mayoría de programas Python.
:::

## Entornos virtuales

Cuando escribes un programa en Python, puede que necesites instalar paquetes externos con pip. Estos pueden instalarse globalmente y estar accesibles para todos los scripts `.py` o puedes crear un entorno virtual (venv).

### Crear el venv

Primero, navega a la carpeta donde quieres crear tu venv usando `cd` y cuando estés listo, ejecuta `python3 -m venv .` que instalará los archivos necesarios en la ubicación actual.

### Activar y desactivar

Para ejecutar comandos como `pip install` dentro de tu venv, necesitas activarlo ejecutando `source /bin/activate`. Ahora tu consola solo funcionará dentro del venv y los scripts solo tendrán acceso a los paquetes instalados localmente.

Cuando termines de trabajar dentro del venv, puedes salir ejecutando el comando `deactivate`.

