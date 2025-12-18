---
id: dedicated-linux-wine
title: "Servidor Dedicado: Configuración de la Capa de Compatibilidad Wine en Linux"
description: "Descubre cómo configurar Wine en Linux para ejecutar servidores de juegos Windows sin problemas en Ubuntu y sistemas similares → Aprende más ahora"
sidebar_label: Configurar Capa de Compatibilidad Wine
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Wine es una capa de compatibilidad de código abierto para Linux que permite ejecutar software originalmente desarrollado para Windows en sistemas Linux. Esto es especialmente importante para servidores dedicados de juegos que solo ofrecen archivos de servidor para Windows y puede ser un requisito previo para nuestras otras guías de servidores dedicados Linux. En esta guía, exploraremos el proceso de configuración inicial para instalar Wine en tu servidor Linux. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar para otras distribuciones.

## Preparación

Para comenzar, conéctate a tu servidor dedicado vía SSH. Usa nuestra [guía de acceso inicial SSH](vserver-linux-ssh.md) si necesitas ayuda para hacerlo.

## Instalando Wine

Inicia el proceso de instalación asegurándote de que el directorio `/etc/apt/keyrings/` exista, ya que es necesario para Wine.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Luego, descarga y guarda la clave GPG de Wine en este directorio para verificar que el paquete sea auténtico.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

También tendrás que guardar la lista de fuentes para WineHQ, lo cual puedes hacer con el siguiente comando preescrito:
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Ejecuta el comando de actualización para asegurarte de que los cambios en los paquetes se lean e instalen.
```
sudo apt update
```

Ahora puedes proceder con el paso principal de descargar la última versión de Wine. Esto puede tardar un poco en completarse.
```
sudo apt install --install-recommends winehq-staging
```

Finalmente, necesitas instalar algunos paquetes extra para asegurar que Wine funcione bien con servidores dedicados de juegos ejecutando el siguiente comando.
```
sudo apt install cabextract winbind screen xvfb
```

## Conclusión

Ahora has configurado con éxito la capa de compatibilidad Wine, lo que te permitirá ejecutar programas de Windows en tu servidor Linux. Con este requisito importante instalado, puedes proceder a instalar servidores dedicados de juegos incluso si están diseñados para Windows.

Te recomendamos revisar las otras guías en esta sección que cubren la instalación de juegos específicos mediante SteamCMD y potencialmente Wine para archivos de servidores dedicados basados en Windows.