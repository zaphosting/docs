---
id: dedicated-linux-cockpit
title: "Servidor Dedicado: Instalación de Cockpit"
description: "Descubre cómo gestionar servidores Linux de forma eficiente con la interfaz web de Cockpit para monitorización y administración → Aprende más ahora"
sidebar_label: Instalar Cockpit
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Cockpit es una interfaz web para gestionar uno o varios servidores Linux (clúster). Desde simples salidas de logs hasta la gestión de RAID, Cockpit ofrece muchas funcionalidades.  
Cockpit es ideal tanto para principiantes como para usuarios avanzados que quieren ver/gestionar todo lo importante en poco tiempo. Además, se puede acceder desde casi cualquier dispositivo.  
La web del proyecto está disponible en https://cockpit-project.org/. 

:::info
Esta guía explica la instalación para Debian (desde Buster) y para Ubuntu (desde Bionic Beaver). La instalación también está disponible en la página del proyecto para Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux y Tumbleweed.   
:::

## Instalación

Primero, hay que actualizar el servidor:
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

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)