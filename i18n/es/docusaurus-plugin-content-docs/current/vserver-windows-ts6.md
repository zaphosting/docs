---
id: vserver-windows-ts6
title: "Configura el Servidor TeamSpeak 6 en un Servidor Windows - Despliega Tu Propia Plataforma de Voz"
description: "Descubre cómo instalar y optimizar el servidor TeamSpeak 6 beta para un hosting y rendimiento sin interrupciones → Aprende más ahora"
sidebar_label: Instalar Servidor Teamspeak 6
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En el verano de 2025, TeamSpeak lanzó la **versión Beta** del **Servidor TeamSpeak 6**. ¡Ahora puedes experimentar de primera mano la próxima generación de TeamSpeak!

¿Estás pensando en alojar este servicio tú mismo? Te guiaremos paso a paso sobre cómo configurarlo y ajustarlo, junto con todo lo que necesitas tener en cuenta.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Requisitos Previos

Antes de instalar el **Servidor Teamspeak 6**, asegúrate de que tu entorno de hosting cumpla con los siguientes requisitos para garantizar una instalación fluida y un rendimiento óptimo.

| Hardware   | Mínimo      | Recomendación ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU             |
| RAM        | 1 GB         | 4 GB                       |
| Espacio en disco | 1 GB         | 25 GB                      |



## Preparación

Antes de configurar el **Servidor TeamSpeak 6**, necesitas preparar tu sistema. Para asegurarte de que tu sistema esté ejecutando el software y las mejoras de seguridad más recientes, siempre debes realizar primero las actualizaciones del sistema.

Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.




## Instalación
Ahora que se han cumplido todos los requisitos y se han completado las preparaciones necesarias, puedes proceder con la instalación de la aplicación Servidor Teamspeak 6. Para instalar el Servidor TeamSpeak 6, primero descarga el archivo de la última versión `http://teamspeak-server_win64-v6.0.0-beta6.zip/` desde GitHub: [Servidor TeamSpeak 6 (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Luego, extrae el archivo en un directorio de tu elección. Abre **PowerShell** y navega hasta el directorio donde extrajiste los archivos del servidor. Inicia el servidor ejecutando:

```
.\tsserver.exe
```

En el primer inicio, aparecerá una ventana con el acuerdo de licencia, que debes aceptar. Después de eso, se mostrarán las credenciales de la cuenta de administrador Server Query y la clave de privilegio. Estos datos se muestran solo una vez, así que asegúrate de guardarlos de forma segura.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Una vez confirmado, el Servidor TeamSpeak 6 ya estará corriendo en segundo plano y listo para usarse.

##### 

## Configuración

También puedes ajustar configuraciones adicionales para el **Servidor TeamSpeak 6** usando **argumentos de línea de comandos**. Las opciones se pasan directamente al iniciar el servidor. Una lista completa de opciones disponibles la puedes encontrar en la documentación oficial de [Servidor TeamSpeak 6](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). Ejemplo:

```
./tsserver --default-voice-port 9987
```



## Establecer conexión

Una vez que el Servidor TeamSpeak 6 esté activo y funcionando, puedes conectarte usando el Cliente TeamSpeak 6. Simplemente usa la dirección IP de tu servidor junto con el puerto correcto. Introduce estos datos en el cliente para conectarte a tu servidor y comenzar a probar.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusión y más Recursos

¡Felicidades! Ahora has instalado y configurado con éxito el Servidor Teamspeak 6 en tu VPS/servidor dedicado. También te recomendamos echar un vistazo a los siguientes recursos, que podrían brindarte ayuda y guía adicional durante el proceso de configuración de tu servidor:

- [Sitio Oficial](https://teamspeak.com/en/) - Información y descargas para TeamSpeak 6
- [Foro de la Comunidad](https://community.teamspeak.com/) - Soporte y discusiones de usuarios
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Reporta bugs y sigue problemas abiertos

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂