---
id: dedicated-linux-avorion
title: "Servidor Dedicado: Configuración del Servidor Dedicado Avorion en Linux"
description: "Aprende a instalar y configurar el servidor dedicado de Avorion en tu VPS Linux para un hosting de juegos sin complicaciones → ¡Descubre más ahora!"
sidebar_label: Avorion
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS Linux y quieres instalar el servicio de servidor dedicado de Avorion en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso es muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Descubre más sobre la [Interfaz GS/TS3](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que hacer una configuración inicial de SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente listo antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar la instalación con el siguiente comando para usar SteamCMD directamente con el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

Para este punto, ya terminaste la instalación de tu servidor Avorion. Puedes configurar los ajustes del servidor directamente en el archivo **startserver.sh** que copiaste antes. Ábrelo con `nano /home/steam/Avorion-Server/startserver.sh` y ajusta los parámetros a tu gusto.

También podrás editar parámetros y configuraciones específicas del mundo modificando el archivo **server.ini** que está en cada guardado de galaxia. Este se guarda en la carpeta raíz de tu usuario (que debería ser `steam`) y puedes gestionarlo con estos comandos:
```
# Ver guardados actuales
ls /home/steam/.avorion/galaxies

# Editar configuración de un guardado
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## Iniciar y conectar a tu servidor

Ahora toca arrancar tu servidor. Ve al directorio principal del juego, donde recomendamos crear una copia del archivo batch de ejemplo.
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

Puedes editar el archivo si quieres. Cuando estés listo, ejecuta el nuevo archivo batch **startserver.sh** con este comando:
```
/home/steam/Avorion-Server/startserver.sh
```

Deberías ver logs en tu consola que indican que el servidor está arrancando correctamente. Ten en cuenta que la primera vez puede tardar un poco mientras se configura todo. Cuando esté listo, verás `Server startup complete.` en la consola. Ahora podrás conectarte directamente a tu servidor usando el navegador de servidores dentro del juego, introduciendo la IP y el puerto de tu servidor (por defecto es 27000).

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor Avorion en tu VPS. Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que explica cómo montar tu nuevo servidor dedicado como un servicio. Esto trae beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes cualquier duda o problema, contacta con nuestro equipo de soporte, ¡estamos disponibles para ayudarte todos los días!

<InlineVoucher />