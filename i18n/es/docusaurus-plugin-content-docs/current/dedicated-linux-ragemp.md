---
id: dedicated-linux-ragemp
title: "Servidor Dedicado: Configuración de RageMP en Servidor Dedicado Linux"
description: "Descubre cómo configurar un servidor dedicado RageMP en tu servidor Linux para un alquiler de servidores y gestión sin complicaciones → Aprende más ahora"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un servidor dedicado Linux y quieres instalar el servicio de servidor dedicado RageMP en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar para otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado? Esto te permite configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting, ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparación

Para empezar, conéctate a tu servidor dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda para hacerlo.

### Crear Usuario

Recomendamos mucho crear un usuario separado para ejecutar todos tus servicios de servidor de juegos dedicados. Ejecutar con el usuario root, como en la mayoría de los casos, no es recomendable por varias razones. Si ya tienes un usuario listo, continúa con los pasos de instalación.

Usa el siguiente comando para crear un usuario llamado `gameservers` con una contraseña opcional de tu elección.

```
sudo useradd -m gameservers
sudo passwd gameservers # Contraseña Opcional
```

Una vez que hayas accedido a tu servidor y tengas un usuario listo, continúa con los pasos de instalación.

## Instalación

Comienza iniciando sesión con tu usuario `gameservers` y dirígete al directorio raíz `home/gameservers` para mantener todo organizado.
```
sudo -u gameservers -s
cd ~
```

Para mantener todo ordenado, usa el siguiente comando para crear una carpeta nueva para tu servidor RageMP y ábrela.
```
mkdir RageMP-Server && cd RageMP-Server
```

Ahora, tendrás que descargar la última versión desde la web de RageMP. Usa el siguiente comando para descargarla directamente.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Esto descargará el archivo `.zip` en tu ubicación actual, que debería ser dentro de tu nueva carpeta `RageMP-Server`. Continúa con el siguiente comando para descomprimir y extraer los archivos dentro de la carpeta.
```
tar -xvzf linux_x64.tar.gz
```

Tus archivos ahora deberían estar accesibles dentro de la carpeta **ragemp-srv**, accede a ella ejecutando `cd ragemp-srv`. Usa `ls` para ver el contenido de la carpeta en cualquier momento. El servidor ya está listo, continúa con la siguiente sección para configurar los parámetros.

## Configuración

En este punto, has terminado la configuración de tu servidor RageMP. Puedes realizar configuraciones adicionales del servidor a través de un archivo de configuración que se encuentra dentro del directorio de tu servidor.

:::tip
Puede que necesites ejecutar el servidor al menos una vez antes de que se creen los archivos de configuración. Puedes hacerlo ejecutando el archivo shell: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Luego presiona `CTRL+C` para cerrar el servidor.
:::

Puedes editar los parámetros principales de configuración abriendo el archivo **conf.json**.
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Iniciar y Conectarse a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio principal del juego y ejecuta el archivo shell **ragemp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Deberías ver aparecer logs en tu consola, incluyendo logs de red, lo que indica que el inicio fue exitoso. Si todo ocurre como se espera, tu servidor será accesible vía conexión directa y visible en la lista de servidores. Alternativamente, podrás conectarte directamente vía: `[tu_dirección_ip]:22005`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor RageMP en tu servidor dedicado! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que cubre cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece varios beneficios, incluyendo el lanzamiento automático del servidor al iniciar, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!