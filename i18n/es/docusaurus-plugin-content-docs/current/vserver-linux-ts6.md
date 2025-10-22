---
id: vserver-linux-ts6
title: "VPS: Configura el servidor Teamspeak 6 en tu VPS Linux"
description: "Descubre cómo configurar y optimizar el servidor TeamSpeak 6 para un hosting fiable y rendimiento top → Aprende más ahora"
sidebar_label: Instalar servidor Teamspeak 6
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En verano de 2025, TeamSpeak lanzó la **versión Beta** del **servidor TeamSpeak 6**. ¡Ahora puedes probar de primera mano la próxima generación de TeamSpeak!

¿Estás pensando en alojar este servicio tú mismo? Te guiaremos paso a paso para configurarlo y ajustarlo, junto con todo lo que debes tener en cuenta.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Requisitos previos

Antes de instalar el **servidor Teamspeak 6**, asegúrate de que tu entorno de hosting cumple con los siguientes requisitos para garantizar una instalación sin problemas y un rendimiento óptimo.

| Hardware   | Mínimo      | Recomendación ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU             |
| RAM        | 1 GB         | 4 GB                       |
| Espacio en disco | 1 GB         | 25 GB                      |



## Preparación

Antes de configurar el **servidor TeamSpeak 6**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la última versión e instalar todas las dependencias necesarias. Estas preparaciones aseguran un entorno estable y ayudan a evitar problemas durante o después de la instalación.


### Actualizar sistema
Para asegurarte de que tu sistema corre con el software y mejoras de seguridad más recientes, siempre debes hacer primero una actualización del sistema. Para ello, ejecuta el siguiente comando:

```
sudo apt update && sudo apt upgrade -y
```
Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

### Instalar dependencias
Una vez completada la actualización, puedes proceder con la instalación de las dependencias. Para una instalación rápida, sencilla y recomendada, te sugerimos usar Docker. Para ello, primero instala Docker Engine:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Instalación
Ahora que se cumplen todos los requisitos y has hecho las preparaciones necesarias, puedes continuar con la instalación de la aplicación del servidor Teamspeak 6.

El siguiente paso es crear el archivo Docker Compose `docker-compose.yml` para el servidor TeamSpeak 6. Puedes elegir cualquier directorio, pero en este ejemplo el archivo se creará en `/opt/containers/ts6/`. Para esto, se usa el archivo Compose oficial de TeamSpeak:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # Puerto de voz
      - "30033:30033/tcp" # Transferencia de archivos
      # - "10080:10080/tcp" # Consulta web
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

Navega al directorio donde quieres crear el archivo y créalo. Para ello, usa el comando `nano docker-compose.yml` y pega el contenido.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Para arrancar el contenedor Docker y el servidor TeamSpeak 6, ejecuta el siguiente comando Docker Compose:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Ahora el contenedor Docker para el servidor TeamSpeak 6 arrancará. Por defecto, no se ejecuta de forma persistente aún. En el primer inicio, verás **información importante** sobre la **cuenta de administrador Server Query** y la **clave de privilegios**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Asegúrate de guardar esta información en un lugar seguro, ya que no se mostrará de nuevo en futuros inicios. Luego, detén el contenedor con `CTRL+C`.



## Configuración

Puedes ajustar configuraciones adicionales para el servidor TeamSpeak 6 usando **variables de entorno** en el archivo Docker Compose. Esto te permite configurar el servidor según tus necesidades. Una lista completa de opciones disponibles la encuentras en la documentación oficial de [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md).

Ejemplo en `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MiServidorTS6
  - TS6_QUERY_PORT=10022
```



## Operación del servidor

Para mantener el servidor TeamSpeak 6 corriendo en segundo plano, inicia el contenedor con el siguiente comando:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Para detener el servidor TeamSpeak 6, para el contenedor con este comando:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Conexión

Una vez que el servidor TeamSpeak 6 esté activo, puedes conectarte usando el cliente TeamSpeak 6. Simplemente usa la dirección IP de tu servidor junto con el puerto correcto. Introduce estos datos en el cliente para conectarte y empezar a probar.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusión y más recursos

¡Felicidades! Ya instalaste y configuraste con éxito el servidor Teamspeak 6 en tu VPS. También te recomendamos echar un vistazo a estos recursos, que pueden darte ayuda y guía extra durante la configuración de tu servidor:

- [Sitio oficial](https://teamspeak.com/en/) - Información y descargas de TeamSpeak 6
- [Foro de la comunidad](https://community.teamspeak.com/) - Soporte y discusiones de usuarios
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Reporta bugs y sigue problemas abiertos

¿Tienes preguntas específicas que no se cubren aquí? Para dudas o ayuda adicional, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂