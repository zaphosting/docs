---
id: dedicated-linux-docker
title: "Configura Docker en un Servidor Linux - Ejecuta y Gestiona Contenedores en Tu Infraestructura"
description: "Descubre cómo instalar Docker en tu servidor Linux para ejecutar aplicaciones aisladas de forma eficiente y optimizar el uso de recursos → Aprende más ahora"
sidebar_label: Instalar Docker
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introducción

Docker es un software de virtualización ligero y de código abierto para ofrecer servicios o aplicaciones en aislamiento en un solo sistema. A diferencia de las máquinas virtuales reales, no se emula ni aloja un sistema operativo adicional, sino solo un entorno de aplicación dentro del sistema anfitrión. Esto no solo ahorra recursos en general, sino que también genera una baja sobrecarga comparado con la virtualización completa. En esta guía, cubriremos el proceso de instalación de Docker en tu servidor.

## Preparación

Para comenzar, debes conectarte a tu servidor Linux vía SSH. Echa un vistazo a nuestra [guía de acceso inicial (SSH)](dedicated-linux-ssh.md) si necesitas ayuda con esto. A lo largo de esta guía, usaremos Ubuntu como la distribución Linux.

### Habilitar Compatibilidad con Docker

Debes habilitar la **Compatibilidad con Docker** en tu panel web para permitir que los contenedores Docker funcionen, de lo contrario recibirás errores de `Permission Denied`.

Ve a la sección **Configuración** en el panel web de tu servidor, activa la opción **Compatibilidad con Docker** y guarda los cambios.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Una vez guardado, asegúrate de reiniciar tu servidor antes de continuar.

## Instalación

Ahora que estás conectado a tu servidor Linux, puedes proceder con los métodos de instalación. Selecciona uno de los repositorios Linux a continuación para ver los pasos de instalación correspondientes.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

Para comenzar, tendrás que añadir el paquete de Docker usando `apt` y configurarlo. Esto te permitirá instalar y actualizar Docker fácilmente desde el repositorio en el futuro.

Usa los siguientes comandos para añadir la clave GPG oficial de Docker a tu lista de repositorios.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Una vez configurado esto, tendrás que añadir el repositorio a las fuentes de `apt` con el siguiente comando.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Ahora que añadiste el repositorio de Docker a tus fuentes, ejecuta el comando `apt-get update` para actualizar los cambios.
```
sudo apt-get update
```

En este punto, ya configuraste correctamente el repositorio `apt` de Docker. Como paso final, instala los paquetes de Docker. Puedes instalar la última versión con el siguiente comando.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Para comenzar, instala el paquete `dnf-plugins-core` que ayuda a gestionar repositorios.
```
sudo dnf -y install dnf-plugins-core
```

Con el paquete instalado, añade el repositorio de Docker e instálalo con el siguiente comando.
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker debería estar instalado ahora. Como paso final, debes iniciarlo y habilitarlo para que funcione.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Para verificar que la instalación fue exitosa, prueba ejecutar la imagen **hello-world** con el siguiente comando.
```
sudo docker run hello-world
```

Si todo va bien, verás un mensaje de bienvenida con información básica. Si recibes errores de `Permission Denied`, asegúrate de haber activado la opción **Compatibilidad con Docker** en tu panel web y haber reiniciado el servidor como se explicó en la sección de preparación.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Has instalado Docker exitosamente en tu servidor Linux.

## Configuración Post-Instalación

Con Docker instalado en tu servidor, puedes hacer configuraciones adicionales para evitar usar `sudo` al ejecutar comandos Docker y para que Docker arranque automáticamente al iniciar el servidor.

### Gestionar Docker sin Sudo

Puedes eliminar la necesidad de anteponer `sudo` a todos los comandos Docker creando un grupo Docker y añadiendo tus usuarios a él. Esto mejora la comodidad, pero ten en cuenta que indirectamente otorga privilegios de root al usuario.

Crea el grupo `docker` y añade tu usuario actual con estos comandos.
```
# Crear grupo Docker
sudo groupadd docker

# Añadir usuario actual al grupo Docker
sudo usermod -aG docker $USER
```

Una vez hecho esto, recomendamos reiniciar el servidor para que se reevalúe la membresía del grupo. Alternativamente, puedes usar `newgrp docker`.

Ahora verifica que puedes ejecutar comandos Docker sin `sudo` ejecutando nuevamente `docker run hello-world`.

:::tip
A veces puede aparecer un error relacionado con un archivo de configuración si ejecutaste el comando anteriormente con `sudo`. Para solucionarlo, simplemente elimina el directorio Docker con `rmdir ~/.docker/`, que se recreará automáticamente al usar Docker de nuevo.
:::

Si el comando funciona sin problemas, significa que configuraste Docker para ejecutarse sin necesidad de `sudo`.

### Iniciar Docker al Arrancar

Puedes configurar Docker para que se inicie automáticamente al arrancar el servidor usando `systemd`, que es usado por la mayoría de distribuciones Linux.

:::tip
En Ubuntu y Debian, Docker está configurado para iniciarse automáticamente al arrancar por defecto. Si usas estas distribuciones, no necesitas hacer nada más.
:::

Puedes habilitar el servicio Docker para que arranque con el sistema con estos comandos.
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

De forma similar, para deshabilitar el servicio al inicio reemplaza `enable` por `disable`. También puedes gestionar el servicio con varios subcomandos de `systemctl`, como:
```
sudo systemctl start [tu_servicio]
sudo systemctl stop [tu_servicio]
sudo systemctl restart [tu_servicio]
```

## Conclusión

¡Felicidades, has instalado y configurado Docker exitosamente en tu servidor Linux! Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, que está disponible para ayudarte todos los días.