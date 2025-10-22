---
id: webspace-htaccess-discord
title: "Hosting web: Configura el reenvío de Discord vía dominio"
description: "Descubre cómo redirigir tu dominio a una URL específica usando la configuración del servidor web para un reenvío sin complicaciones → Aprende más ahora"
sidebar_label: Reenvío de Discord
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Por defecto, los dominios no pueden redirigirse directamente a una URL específica, solo a la dirección principal de un servidor o sitio web. Sin embargo, para apuntar a una URL concreta, puedes configurar un redireccionamiento mediante un servidor web en combinación con un archivo `.htaccess`. Esto redirige automáticamente la llamada del dominio a la URL destino deseada.

<InlineVoucher />

## Preparación

Para realizar este tipo de reenvío, se asume que ya tienes tu propio dominio (TLD) y un paquete de hosting web. Conecta el dominio a tu paquete de hosting web. Si no sabes exactamente cómo hacerlo, puedes usar nuestra opción fácil de usar [EasyDNS](domain-easydns.md).

:::warning Los cambios en DNS tardan en aplicarse

Los cambios en la configuración DNS pueden tardar hasta **24 horas** en aplicarse completamente y ser efectivos a nivel mundial. En algunos casos, la implementación puede ser más rápida, pero los retrasos son normales debido al caché en diferentes servidores.

:::

Tan pronto como el dominio apunte correctamente al hosting web y sea accesible, puedes comenzar a configurar el reenvío de Discord.

## Configuración

Debes crear y configurar un archivo `.htaccess` para configurar el reenvío. Para ello, navega al administrador de archivos en el panel Plesk para tu dominio. Una vez allí, haz clic en el símbolo de más para crear una nueva carpeta llamada `discord`.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZAJAd7EXp7yJE64/download)

Entra en la carpeta `discord` y crea un nuevo archivo llamado `.htaccess`. Ahora abre el archivo recién creado con el editor de texto. Se añadirá la regla para el reenvío. Copia y pega el siguiente contenido:
```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]
```

Para que la regla y el redireccionamiento funcionen con tu dominio, debes cambiar el nombre del dominio. Para ello, reemplaza el dominio de ejemplo `example-example.de` por el tuyo propio y guarda el archivo. También cambia la URL de invitación de Discord por la de tu servidor.

Ahora deberías poder acceder al redireccionamiento con tu dominio y la ruta definida para Discord. La estructura quedaría así en nuestro ejemplo: `beispiel-example.de/discord`.

## Conclusión

Si has seguido todos los pasos, deberías haber configurado con éxito el reenvío del dominio a tu servidor de Discord. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />