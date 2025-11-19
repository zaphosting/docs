---
id: dedicated-setup
title: "Servidor dedicado: Configuración inicial"
description: "Descubre cómo configurar tu Servidor dedicado ZAP fácilmente y accede a una variedad de sistemas operativos → Aprende más ahora"
sidebar_label: Configuración inicial
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Eres nuevo en este tema y te preocupa no poder manejar la configuración de un servicio así o que puedas tener dificultades al hacerlo? ¡No te preocupes! Esta guía y nuestro asistente de configuración te llevarán paso a paso por la configuración inicial de tu Servidor dedicado ZAP.

## Preparación

### Activar iLO
Para la configuración inicial, primero debes activar la interfaz de administración iLO. Este proceso puede tardar un momento. Para más información y uso avanzado de la interfaz de administración iLO, te recomendamos echar un vistazo a la guía de [iLO](dedicated-ilo.md).

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

En cuanto el iLO esté activado, el estado de iLO debería mostrarse como **Activo**. La sesión de iLO se activa por defecto durante tres horas y luego debe reactivarse si quieres acceder de nuevo. Ahora puedes continuar con la selección del ISO.

### Selección del ISO

El siguiente paso es seleccionar un ISO para montar durante la configuración inicial. Para ello, haz clic en el menú desplegable, selecciona un archivo ISO y pulsa el botón **Insertar**.

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

Ofrecemos una amplia gama de archivos ISO para los sistemas operativos más comunes como Debian, Ubuntu, FreeBSD, Windows, CentOS, ArchLinux y Proxmox por defecto. En la siguiente tabla encontrarás un resumen de todos los sistemas operativos disponibles y sus versiones.

| ISO (Sistema operativo) | Versiones                                              |
| ----------------------- | ------------------------------------------------------ |
| Debian                  | 12, 11, 10.9, 9.13                                     |
| Ubuntu                  | 22.04.3, 22.04, 22.02, 18.04                           |
| FreeBSD                 | 13.0, 12.2, 11.4                                       |
| Windows                 | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE) |
| CentOS                  | 7.9, 8.3                                               |
| ArchLinux               | 2023                                                   |
| Proxmox                 | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1               |

También es posible añadir y montar tu propio ISO personalizado. Para más información sobre cómo montar tu propio archivo ISO, te recomendamos consultar la guía **[ISO propio](dedicated-iso.md)**.

## Instalación

### Montar y arrancar el ISO

Una vez que el archivo ISO ha sido seleccionado e insertado correctamente, el sistema debe reiniciarse para que acepte el cambio y arranque desde el archivo ISO. Para ello, simplemente haz clic en el botón **Reiniciar**. El reinicio puede tardar un momento.

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### Usar iLO para instalar el sistema operativo

Ahora tienes la base para instalar el sistema operativo que desees. El sistema ha montado el ISO y ha iniciado la configuración. Abre la **interfaz de administración iLO** de tu servidor y haz clic directamente en "Consola remota integrada: **HTML 5**" para acceder a la pantalla de tu servidor. Más información sobre cómo manejar la consola en la interfaz iLO la encontrarás en nuestra guía de [iLO](dedicated-ilo.md).

La instalación del sistema operativo se realiza ahora en la consola HTML. También ofrecemos guías para los sistemas operativos más comunes. Para más información sobre los siguientes pasos, echa un vistazo a las guías correspondientes:

- [Instalar Windows](dedicated-windows.md)
- [Instalar Debian](dedicated-linux-debian.md)
- [Instalar Ubuntu](dedicated-linux-ubuntu.md)
- [Instalar FreeBSD](dedicated-freebsd.md)
- [Instalar CentOS](dedicated-centos.md)
- [Instalar Proxmox](dedicated-proxmox.md)