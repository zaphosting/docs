---
id: dedicated-linux-ts6
title: "Servidor Dedicado: Configura el Servidor Teamspeak 6 en tu Servidor Dedicado Linux"
description: "Descubre cómo configurar y optimizar el Servidor TeamSpeak 6 para un hosting fiable y rendimiento top → Aprende más ahora"
sidebar_label: Instalar Servidor Teamspeak 6
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En verano de 2025, TeamSpeak lanzó la **versión Beta** del **Servidor TeamSpeak 6**. ¡Ahora puedes probar de primera mano la próxima generación de TeamSpeak!

¿Estás pensando en alojar este servicio tú mismo? Te guiaremos paso a paso para configurarlo y ajustarlo, junto con todo lo que debes tener en cuenta.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)





## Requisitos Previos

Antes de instalar el **Servidor Teamspeak 6**, asegúrate de que tu entorno de hosting cumple con los siguientes requisitos para garantizar una instalación sin problemas y un rendimiento óptimo.

| Hardware   | Mínimo     | Recomendación ZAP-Hosting |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 núcleo de CPU | 4 núcleos de CPU          |
| RAM        | 1 GB        | 4 GB                       |
| Espacio en disco | 1 GB        | 25 GB                      |



## Preparación

Antes de configurar el **Servidor TeamSpeak 6**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la última versión e instalar todas las dependencias necesarias. Estas preparaciones aseguran un entorno estable y ayudan a prevenir problemas durante o después de la instalación.


### Actualizar Sistema
Para asegurarte de que tu sistema corre con el software y mejoras de seguridad más recientes, siempre debes hacer primero una actualización del sistema. Para ello, ejecuta el siguiente comando:

```
sudo apt update && sudo apt upgrade -y
```
Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

### Instalar dependencias
Una vez completado el proceso de actualización, puedes proceder con la instalación de las dependencias. Para una instalación rápida, sencilla y recomendada, te sugerimos usar Docker. Para ello, primero instala el motor Docker:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Instalación
Ahora que todos los requisitos están cumplidos y las preparaciones hechas, puedes proceder con la instalación de la aplicación Servidor Teamspeak 6.

El siguiente paso es crear el archivo Docker Compose `docker-compose.yml` para el Servidor TeamSpeak 6. Puedes elegir cualquier directorio, pero en este ejemplo el archivo se creará en `/opt/containers/ts6/`. Para esto, se usa el archivo Compose oficial de TeamSpeak:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # Puerto de Voz
      - "30033:30033/tcp" # Transferencia de Archivos
      # - "10080:10080/tcp" # Consulta Web
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

Navega al directorio donde quieres crear el archivo y créalo. Para ello, usa el comando `nano docker-compose.yml` y pega el contenido ahí.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Para iniciar el contenedor Docker y el Servidor TeamSpeak 6, ejecuta el siguiente comando Docker Compose:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Ahora el contenedor Docker para el Servidor TeamSpeak 6 arrancará. Por defecto, aún no se ejecuta de forma persistente. En el primer inicio, verás **información importante** sobre la **cuenta de administrador Server Query** y la **clave de privilegio**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Asegúrate de guardar esta información de forma segura, ya que no se mostrará en futuros inicios. Luego, detén el contenedor con `CTRL+C`.



## Configuración

Puedes ajustar configuraciones adicionales para el Servidor TeamSpeak 6 usando **variables de entorno** en el archivo Docker Compose. Esto te permite configurar el servidor según tus necesidades. Una lista completa de opciones disponibles la encuentras en la documentación oficial de [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md).

Ejemplo en `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MiServidorTS6
  - TS6_QUERY_PORT=10022
```



## Operación del servidor

Para mantener el Servidor TeamSpeak 6 corriendo en segundo plano, inicia el contenedor con el siguiente comando:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Para detener el Servidor TeamSpeak 6, para el contenedor con este comando:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Establecer conexión

Una vez que el Servidor TeamSpeak 6 esté activo, puedes conectarte usando el cliente TeamSpeak 6. Simplemente usa la dirección IP de tu servidor junto con el puerto correcto. Introduce estos datos en el cliente para conectarte y empezar a probar.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusión y más recursos

¡Felicidades! Ya has instalado y configurado con éxito el Servidor Teamspeak 6 en tu Servidor Dedicado. También te recomendamos echar un vistazo a estos recursos, que pueden darte ayuda y guía extra durante la configuración de tu servidor:

- [Sitio Oficial](https://teamspeak.com/en/) - Información y descargas para TeamSpeak 6
- [Foro de la Comunidad](https://community.teamspeak.com/) - Soporte y discusiones de usuarios
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Reporta bugs y sigue problemas abiertos

¿Tienes preguntas específicas que no se cubren aquí? Para dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂