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

Cockpit es una interfaz web para gestionar uno o varios servidores Linux (cluster). Desde simples salidas de logs hasta la gestión de RAID, Cockpit ofrece muchas funcionalidades.  
Cockpit es ideal para principiantes pero también para usuarios avanzados que quieren ver/gestionar todo lo importante en poco tiempo. Además, se puede acceder desde casi cualquier dispositivo.  
La web oficial del proyecto está en https://cockpit-project.org/. 

## Instala Cockpit con el Instalador de One Click Apps

Puedes instalar **Cockpit** directamente a través de nuestro **Instalador de One Click Apps** en el panel web del VPS. Tras completar la configuración inicial de apps, abre el catálogo de apps, busca **Cockpit** y lanza el despliegue con tu proyecto, entorno y configuración de dominio preferidos. Esto te ofrece una forma rápida y sencilla de desplegar y gestionar **Cockpit** sin necesidad de configurar nada por línea de comandos, y además aprovechas la gestión web integrada, soporte para dominios personalizados y provisión de SSL donde esté disponible.

:::info
Esta guía explica la instalación para Debian (desde Buster) y Ubuntu (desde Bionic Beaver). La instalación también está disponible en la página del proyecto para Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux y Tumbleweed.   
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
El login se realiza con los datos normales de acceso del servidor/usuario. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Conclusión

¡Enhorabuena, has instalado y configurado Cockpit con éxito! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días! 

<InlineVoucher />