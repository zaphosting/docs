---
id: vserver-linux-ts6
title: "Configura el Servidor TeamSpeak 6 en un Servidor Linux - Despliega Tu Propia Plataforma de Voz"
description: "Descubre cómo configurar y optimizar el Servidor TeamSpeak 6 para un hosting fiable y rendimiento óptimo → Aprende más ahora"
sidebar_label: Instalar Servidor Teamspeak 6
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En verano de 2025, TeamSpeak lanzó la **versión Beta** del **Servidor TeamSpeak 6**. ¡Ahora puedes experimentar de primera mano la próxima generación de TeamSpeak!

¿Estás pensando en alojar este servicio tú mismo? Te guiaremos paso a paso sobre cómo configurarlo y ajustarlo, junto con todo lo que necesitas tener en cuenta.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Requisitos previos

Antes de instalar el **Servidor Teamspeak 6**, asegúrate de que tu entorno de hosting cumple con los siguientes requisitos para garantizar una instalación sin problemas y un rendimiento óptimo.

| Hardware   | Mínimo      | Recomendación ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU             |
| RAM        | 1 GB         | 4 GB                       |
| Espacio en disco | 1 GB         | 25 GB                      |



## Preparación

Antes de configurar el **Servidor TeamSpeak 6**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la última versión e instalar todas las dependencias necesarias. Estas preparaciones aseguran un entorno estable y ayudan a prevenir problemas durante o después de la instalación.


### Actualizar sistema
Para asegurarte de que tu sistema está ejecutando el software y las mejoras de seguridad más recientes, siempre debes realizar primero las actualizaciones del sistema. Para ello, ejecuta el siguiente comando:

```
sudo apt update && sudo apt upgrade -y
```
Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

### Instalar dependencias
Una vez completado el proceso de actualización, puedes proceder con la instalación de las dependencias. Para una instalación rápida, sencilla y recomendada, te sugerimos usar Docker. Para ello, debes instalar el motor Docker:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Instalación
Ahora que se han cumplido todos los requisitos y se han completado las preparaciones necesarias, puedes proceder con la instalación de la aplicación Servidor Teamspeak 6.

El siguiente paso es crear el archivo Docker Compose `docker-compose.yml` para el Servidor TeamSpeak 6. Puedes elegir cualquier directorio, pero en este ejemplo el archivo se creará bajo `/opt/containers/ts6/`. Para esto, se usa el archivo Compose oficial de TeamSpeak:

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

Navega al directorio donde se debe crear el archivo y créalo. Para ello, usa el comando `nano docker-compose.yml` y pega el contenido allí.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Para iniciar el contenedor Docker y el Servidor TeamSpeak 6, ejecuta el siguiente comando Docker Compose:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Ahora el contenedor Docker para el Servidor TeamSpeak 6 arrancará. Por defecto, aún no se ejecuta de forma persistente. En el primer inicio, verás **información importante** sobre la **cuenta de administrador Server Query** y la **clave de privilegio**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Asegúrate de guardar esta información de forma segura, ya que no se mostrará nuevamente en inicios posteriores. Después, detén el contenedor usando `CTRL+C`.



## Configuración

Puedes ajustar configuraciones adicionales para el Servidor TeamSpeak 6 usando **variables de entorno** en el archivo Docker Compose. Esto te permite configurar el servidor según tus necesidades. Una lista completa de opciones disponibles la puedes encontrar en la documentación oficial de [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md).

Ejemplo de fragmento en `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## Operación del servidor

Para mantener el Servidor TeamSpeak 6 ejecutándose en segundo plano, inicia el contenedor con el siguiente comando:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Para detener el Servidor TeamSpeak 6, detén el contenedor con el siguiente comando:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Establecer conexión

Una vez que el Servidor TeamSpeak 6 esté activo y funcionando, puedes conectarte usando el Cliente TeamSpeak 6. Simplemente usa la dirección IP de tu servidor junto con el puerto correcto. Introduce estos datos en el cliente para conectarte a tu servidor y comenzar a probar.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusión y más recursos

¡Felicidades! Ahora has instalado y configurado con éxito el Servidor Teamspeak 6 en tu VPS/servidor dedicado. También te recomendamos echar un vistazo a los siguientes recursos, que podrían brindarte ayuda y guía adicional durante el proceso de configuración de tu servidor:

- [Sitio Oficial](https://teamspeak.com/en/) - Información y descargas para TeamSpeak 6
- [Foro de la Comunidad](https://community.teamspeak.com/) - Soporte de usuarios y discusiones
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Reporta bugs y sigue problemas abiertos

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible a diario para ayudarte! 🙂