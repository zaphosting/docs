---
id: webspace-plesk-ftp
title: "Hosting web: Configurar acceso FTP para hosting web"
description: "Descubre cómo gestionar múltiples accesos FTP para proyectos web colaborativos y controlar permisos de carpetas de forma efectiva → Aprende más ahora"
sidebar_label: Acceso FTP
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

FTP significa *protocolo de transferencia de archivos* y es necesario para subir archivos desde el PC al hosting web.  
Cada cliente recibe automáticamente acceso FTP al hosting web contratado.

Aquí te explicamos cómo configurar accesos FTP adicionales. Esto es útil si trabajas con varias personas en un proyecto y cada una debe tener su propio acceso FTP.

Estas personas podrán usar el acceso FTP creado solo para las carpetas que el propietario del hosting web haya especificado.

<InlineVoucher />

## Configurar acceso FTP

En el panel de Plesk, abre la función "**Acceso FTP**"

:::info
En esta página principal también verás la dirección IP, que necesitarás para la prueba más adelante.
:::

![Bildschirmfoto vom 2022-05-13 05-29-41](https://screensaver01.zap-hosting.com/index.php/s/FK3mBHJRqS3xdbB/preview)

Aquí verás el acceso FTP único que el sistema crea automáticamente al finalizar el pedido del hosting web.  
Para crear otra cuenta, haz clic en el botón "**Añadir cuenta FTP**".

![Bildschirmfoto vom 2022-05-13 05-29-53](https://screensaver01.zap-hosting.com/index.php/s/L2Qa3p5nYHA3WGf/preview)

Luego, introduce los datos deseados. Cuando termines, confirma con "**OK**".

![Bildschirmfoto vom 2022-05-13 05-30-10](https://screensaver01.zap-hosting.com/index.php/s/xZM5rmy3QsPJN52/preview)

:::info
En "**Directorio base**" puedes seleccionar la carpeta a la que el acceso FTP tendrá permiso. Si el acceso FTP debe poder ver y editar todo, no hace falta cambiar nada aquí.
:::

## Probar acceso FTP

Para probar el acceso FTP necesitas un programa que lo permita. En nuestro ejemplo usamos *Filezilla Client*.  
En "**Servidor**" introduces la IP del servidor que aparece en la página principal.  
En "**usuario**" y "**contraseña**" introduces los datos que creaste para el acceso FTP.  
El puerto por defecto es "**21**".

## La cuenta de usuario ya existe

Este mensaje aparece cuando el nombre de la cuenta FTP ya está en uso por otro usuario en el sistema.  
El hosting web contratado se creó en un sistema con varios clientes; si uno de ellos ya usa ese nombre, ningún otro cliente podrá usarlo.  
En ese caso, tendrás que elegir otro nombre de cuenta.

<InlineVoucher />