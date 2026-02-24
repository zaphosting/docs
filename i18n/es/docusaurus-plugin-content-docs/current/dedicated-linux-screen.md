---
id: dedicated-linux-screen
title: "Configura Screen en un Servidor Linux - Gestiona Sesiones Persistentes de Terminal"
description: "Descubre cómo gestionar múltiples sesiones de terminal en Linux con Screen para mejorar tu productividad y mantener sesiones persistentes → Aprende más ahora"
sidebar_label: Instalar Screen
services:
  - vserver
  - dedicated
---

## Introducción

Screen es un multiplexor de terminal para sistemas operativos tipo Unix, como Linux. Permite a los usuarios gestionar múltiples sesiones de terminal dentro de una sola ventana o conexión remota. En esta guía, cubriremos los pasos de instalación y te daremos consejos de uso para que te familiarices con screen.

## Preparación

Antes de instalar cualquier cosa en un servidor, se recomienda ejecutar el comando de actualización correspondiente a tu sistema operativo para mantener tu servidor seguro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt update && sudo apt upgrade
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

Instalar la utilidad screen es tan fácil como ejecutar el siguiente comando según tu distro Linux:

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt install screen
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum install screen
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper install screen
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf install screen
```

</TabItem>
</Tabs>

## Uso Básico de Screen

Como mencionamos antes, screen permite crear múltiples sesiones. Para iniciar una solo tienes que ejecutar el siguiente comando, reemplazando `[name]` por el nombre que quieras.
```
screen -S [name]
```

:::info
Ten en cuenta que los comandos presentados en esta guía son sensibles a mayúsculas y minúsculas, especialmente en los flags de parámetros.
:::

Esto abrirá una nueva pantalla donde puedes iniciar cualquier script o programa que quieras mantener corriendo incluso después de cerrar la conexión remota.

Puedes salir de una pantalla usando `CTRL + A`, seguido de `D` o simplemente escribiendo `exit` en la consola como comando.

:::tip
Puedes listar todas las sesiones/pantallas activas usando el comando `screen -ls` o `screen -list`.
:::

Para volver a una pantalla creada anteriormente, ejecuta el comando `screen -r [name]` que te llevará directamente a la pantalla correspondiente.

## Flags de Parámetros de Screen

Screen tiene muchos flags `-` que puedes usar para configurar los comandos. Algunos de los más importantes están listados en la tabla a continuación.

| Flag | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Muestra la versión actual de screen |
| -S `[name]` | | Inicia una nueva pantalla llamada `[name]` |
| -ls | -list | Lista todas las pantallas en ejecución |
| -wipe `[name]` | | Elimina pantallas con el parámetro opcional `[name]` |
| -r `[name]` | | Vuelve a adjuntar la sesión de pantalla `[name]` |
| -d -r `[name]` | | Separa tu pantalla actual y vuelve a adjuntar a `[name]` |

:::tip
Puedes ver todos los parámetros disponibles ejecutando `screen -h`, que mostrará una lista completa.
:::

## Uso Avanzado de Screen

### Uso de Ventanas

Ahora que ya conoces los comandos básicos de screen, es hora de aprender algunos atajos para navegar mejor entre tus sesiones. Dentro de cualquier pantalla puedes crear múltiples ventanas separadas para diferentes tareas.

:::note 
Todos los atajos en esta parte de la guía deben ejecutarse después de presionar `CTRL + A`.
:::

Presionar `C` creará una nueva ventana vacía en tu directorio actual. Para navegar entre ventanas puedes usar `N` (siguiente), `P` (anterior) o `"` para seleccionar la ventana que quieres ver desde la lista con las flechas.

Por defecto, todas las ventanas tendrán el mismo nombre (usualmente el nombre del shell que estás usando). Para cambiarlo ejecuta el comando `A` y elige un nuevo nombre.

Y finalmente, para eliminar una ventana puedes presionar `K`.

#### Ventanas Divididas

Para tener 2 ventanas en configuración dividida puedes usar `S` (horizontal) o `|` (vertical) y navegar entre ellas con `Tab`.

:::tip
Después de crear una ventana dividida, ve a ella con `Tab` y ejecuta `"` para abrir una ventana previa en la segunda vista de la división.
:::

Puedes seguir dividiendo estas ventanas tanto como quieras, pero el uso de RAM del servidor puede aumentar exponencialmente, como es de esperar al hacer multitarea.

## Conclusión

Esperamos que esta guía te haya ayudado a entender cómo funciona la utilidad screen en Linux. Para cualquier duda o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂