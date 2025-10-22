---
id: vserver-windows-ts6
title: "VPS: Configura el servidor Teamspeak 6 en tu VPS Windows"
description: "Descubre cómo instalar y optimizar el servidor TeamSpeak 6 beta para un hosting y rendimiento sin interrupciones → Aprende más ahora"
sidebar_label: Instalar servidor Teamspeak 6
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En el verano de 2025, TeamSpeak lanzó la **versión Beta** del **servidor TeamSpeak 6**. ¡Ahora puedes vivir de primera mano la próxima generación de TeamSpeak!

¿Estás pensando en alojar este servicio tú mismo? Te guiaremos paso a paso para configurarlo y ajustarlo, junto con todo lo que necesitas tener en cuenta.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Requisitos previos

Antes de instalar el **servidor Teamspeak 6**, asegúrate de que tu entorno de hosting cumple con los siguientes requisitos para garantizar una instalación fluida y un rendimiento óptimo.

| Hardware   | Mínimo      | Recomendación ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU             |
| RAM        | 1 GB         | 4 GB                       |
| Espacio en disco | 1 GB         | 25 GB                      |



## Preparación

Antes de configurar el **servidor TeamSpeak 6**, necesitas preparar tu sistema. Para asegurarte de que tu sistema está actualizado con las últimas mejoras de software y seguridad, siempre deberías realizar primero las actualizaciones del sistema.

Esto garantiza que tu sistema tenga los parches de seguridad y versiones de software más recientes antes de continuar.




## Instalación
Ahora que se cumplen todos los requisitos y has realizado las preparaciones necesarias, puedes proceder con la instalación de la aplicación del servidor Teamspeak 6. Para instalar el servidor TeamSpeak 6, primero descarga el archivo de la última versión `http://teamspeak-server_win64-v6.0.0-beta6.zip/` desde GitHub: [Servidor TeamSpeak 6 (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Luego, extrae el archivo en un directorio de tu elección. Abre **PowerShell** y navega hasta el directorio donde extrajiste los archivos del servidor. Inicia el servidor ejecutando:

```
.\tsserver.exe
```

En el primer inicio, aparecerá una ventana con el acuerdo de licencia que debes aceptar. Después, se mostrarán las credenciales de la cuenta de administrador Server Query y la clave de privilegios. Estos datos se muestran solo una vez, así que asegúrate de guardarlos bien.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Una vez confirmado, el servidor TeamSpeak 6 ya estará corriendo en segundo plano y listo para usarse.

##### 

## Configuración

También puedes ajustar configuraciones adicionales para el **servidor TeamSpeak 6** usando **argumentos de línea de comandos**. Las opciones se pasan directamente al iniciar el servidor. Una lista completa de opciones disponibles la puedes encontrar en la documentación oficial de [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). Ejemplo:

```
./tsserver --default-voice-port 9987
```



## Establecer conexión

Una vez que el servidor TeamSpeak 6 esté activo, puedes conectarte usando el cliente TeamSpeak 6. Simplemente usa la dirección IP de tu servidor junto con el puerto correcto. Introduce estos datos en el cliente para conectarte a tu servidor y comenzar a probar.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusión y más recursos

¡Felicidades! Ahora has instalado y configurado con éxito el servidor Teamspeak 6 en tu VPS. También te recomendamos echar un vistazo a los siguientes recursos, que pueden ofrecerte ayuda y guía adicional durante el proceso de configuración de tu servidor:

- [Sitio oficial](https://teamspeak.com/en/) - Información y descargas para TeamSpeak 6
- [Foro de la comunidad](https://community.teamspeak.com/) - Soporte y discusiones de usuarios
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Reporta bugs y sigue problemas abiertos

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂