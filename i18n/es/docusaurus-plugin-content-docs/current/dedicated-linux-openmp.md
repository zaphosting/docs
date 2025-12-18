---
id: dedicated-linux-openmp
title: "Servidor Dedicado: Configuración del Servidor Dedicado Open.mp en Linux"
description: "Descubre cómo configurar el servidor dedicado open.mp en tu servidor Linux para un alquiler de servidores y gestión de juegos sin complicaciones → Aprende más ahora"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un servidor dedicado Linux y quieres instalar el servicio de servidor dedicado open.mp en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado? Esto te permite configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting, ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparación

Para empezar, conéctate a tu servidor dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda para hacerlo.

### Crear Usuario

Recomendamos mucho crear un usuario separado para ejecutar todos tus servicios de servidor de juegos dedicados. Ejecutar todo como root, como en la mayoría de los casos, no es recomendable por varias razones. Si ya tienes un usuario listo, continúa con los pasos de instalación.

Usa el siguiente comando para crear un usuario llamado `gameservers` con una contraseña opcional que elijas.

```
sudo useradd -m gameservers
sudo passwd gameservers # Contraseña opcional
```

Una vez que hayas accedido a tu servidor y tengas un usuario listo, continúa con los pasos de instalación.

## Instalación

Comienza iniciando sesión como el usuario `gameservers` y dirígete al directorio raíz `home/gameservers` para mantener todo organizado.
```
sudo -u gameservers -s
cd ~
```

Para mantener todo ordenado, usa el siguiente comando para crear una carpeta nueva para tu servidor open.mp y ábrela.
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Ahora, tendrás que descargar la última versión desde el [Repositorio de GitHub de open.mp](https://github.com/openmultiplayer/open.mp/releases). En la página, haz clic derecho sobre la versión **linux-x86** y copia el enlace. Ejecuta el siguiente comando para descargar la última versión para Linux, reemplazando `[link]` con el enlace copiado.
```
wget [link]
```

Esto descargará el archivo `.zip` en tu ubicación actual, que debería ser la nueva carpeta `OpenMP-Server`. Continúa con el siguiente comando para descomprimir y extraer los archivos dentro de la carpeta.
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Ahora tus archivos deberían estar accesibles dentro de la carpeta **Server**, accede a ella con `cd Server`. Usa `ls` para ver el contenido de la carpeta en cualquier momento. El servidor ya está listo, continúa con la siguiente sección para configurar los parámetros.

## Configuración

En este punto, ya terminaste la configuración inicial de tu servidor open.mp. Puedes hacer configuraciones adicionales a través de un archivo de configuración que se encuentra dentro del directorio de tu servidor.

Puedes editar los parámetros principales abriendo el archivo de configuración **config.json**.
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

Consulta nuestra guía de configuración de Open.mp [Configuración del Servidor](openmp-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y Conectarse a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio principal del juego y ejecuta el archivo shell **omp-server**.
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

Deberías ver aparecer logs en tu consola, incluyendo logs de red, lo que indica que el inicio fue exitoso. Si todo ocurre como se espera, tu servidor será accesible vía conexión directa y visible en la lista de servidores. Alternativamente, podrás conectarte directamente usando: `[tu_dirección_ip]:7777`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor open.mp en tu VPS! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que cubre cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece varios beneficios, incluyendo el arranque automático del servidor al iniciar, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes alguna pregunta o problema, contacta a nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!