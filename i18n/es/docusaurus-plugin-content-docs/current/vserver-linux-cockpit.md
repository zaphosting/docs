---
id: vserver-linux-cockpit
title: "Configura Cockpit en un Servidor Linux - Gestiona tu Servidor vía Interfaz Web"
description: "Descubre cómo gestionar servidores Linux de forma eficiente con la interfaz web de Cockpit, ideal para principiantes y expertos → Aprende más ahora"
sidebar_label: Instalar Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Cockpit es una interfaz web para gestionar uno o varios servidores Linux (clúster). Desde simples salidas de logs hasta la gestión de RAID, Cockpit ofrece muchas funcionalidades.  
Cockpit es apto para principiantes pero también para usuarios avanzados que quieren ver/gestionar todo lo importante en poco tiempo. Además, se puede acceder desde casi cualquier dispositivo.  
La página oficial del proyecto está en https://cockpit-project.org/. 

:::info
Esta guía explica la instalación para Debian (desde Buster) / para Ubuntu (desde Bionic Beaver). La instalación también está disponible en la página del proyecto para Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux y Tumbleweed.   
:::

<InlineVoucher />

## Instalación

Primero, el servidor debe actualizarse:
```
// Actualizar
sudo apt update; sudo apt upgrade -y
```
Después, se puede proceder con la instalación: 
```
// Instalación de Cockpit
sudo apt install cockpit -y
```
Una vez finalizada la instalación, el panel de Cockpit estará accesible vía IP:9090.  
El inicio de sesión se realiza con los datos normales de acceso del servidor/usuario. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Conclusión

¡Felicidades, has instalado y configurado Cockpit con éxito! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días! 

<InlineVoucher />