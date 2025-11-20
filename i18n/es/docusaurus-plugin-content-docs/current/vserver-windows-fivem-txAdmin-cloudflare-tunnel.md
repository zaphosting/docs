---
id: vserver-windows-fivem-txAdmin-cloudflare-tunnel
title: "VPS: Configurar Cloudflare Tunnel para txAdmin"
description: "Descubre cómo configurar un túnel de Cloudflare para txAdmin y aumentar la seguridad → Aprende más ahora"
sidebar_label: Cloudflare Tunnel para txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

Si quieres añadir medidas de seguridad extra además de la Protección DDoS que ya ofrece ZAP-Hosting, puedes proteger aún más tu instancia de txAdmin usando un túnel de Cloudflare. Esta configuración asegura que la interfaz web de txAdmin ya no esté expuesta a través de la IP pública de tu servidor, sino que se acceda de forma segura mediante tu propio dominio. Cualquier ataque dirigido al puerto de txAdmin será filtrado por Cloudflare, mientras que tú puedes bloquear completamente el puerto local sin perder acceso.



## Requisitos previos

Para usar un túnel de Cloudflare en Windows necesitas un VPS con Windows, una instalación funcional de txAdmin, el puerto de tu txAdmin y un dominio que ya esté conectado a tu cuenta de Cloudflare. Si tu dominio aún no está conectado a Cloudflare, primero sigue nuestra [guía de configuración de Cloudflare](domain-cloudflare-setup.md).

Cloudflare Tunnel funciona creando una conexión saliente cifrada desde tu servidor hacia Cloudflare, por lo que no es necesario mantener puertos públicos abiertos para txAdmin.


## Configuración en Cloudflare

Antes de instalar cloudflared en tu VPS con Windows, primero crea y configura el túnel directamente desde tu panel de Cloudflare.

Inicia sesión en tu cuenta de Cloudflare y navega a la sección Zero Trust. Ahí podrás crear un nuevo túnel que luego redirigirá el tráfico hacia tu interfaz de txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Instalación del Cloudflare Tunnel

Cloudflare ofrece una pequeña herramienta llamada cloudflared. La instalación de cloudflared en Windows es muy sencilla. Primero, descarga el [instalador para Windows](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi).

![img](https://screensaver01.zap-hosting.com/index.php/s/JFsdnjkcR6LrJAr/preview)

Una vez descargado el archivo, ejecuta el instalador y completa la instalación. Cuando termine, abre el Símbolo del sistema como Administrador. En esta ventana, ejecuta el comando proporcionado:

```
cloudflared.exe service install eyJhIjoiMj...
```

Después de ejecutar el comando, tu servidor se conectará a Cloudflare a través del túnel. Si la configuración se completa con éxito, el estado en la sección Conectores cambiará a **Conectado**, confirmando que el túnel está activo y funcionando.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Configurar el Cloudflare Tunnel

A continuación, configura los ajustes de Enrutamiento de Tráfico. Crea una nueva entrada de subdominio a tu elección. En este ejemplo, se usa el subdominio `txAdmin`, que luego se usará para acceder a la interfaz de txAdmin.

Selecciona el dominio que quieres usar, luego establece el tipo de servicio en **HTTP** e ingresa **localhost:puerto** como URL. Sustituye puerto por el puerto definido para tu instancia de txAdmin. En este ejemplo se usará el puerto 40500.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Recomendación de seguridad
En lugar de usar el puerto por defecto de txAdmin **40120**, se recomienda usar un puerto diferente para mejorar la seguridad.
:::



## Configurar el Firewall de Windows

Para evitar que el puerto sea accesible fuera del túnel, configura el Firewall de Windows para que el puerto correspondiente acepte conexiones solo desde localhost. Limita el campo de dirección remota de la regla a 127.0.0.1. Esto obliga a que todo el tráfico provenga del sistema local y bloquea cualquier acceso externo, asegurando que el servicio detrás de cloudflared no sea accesible desde la red fuera del túnel.

```
netsh advfirewall firewall add rule name="Cloudflared Local Only" dir=in action=allow protocol=TCP localport=40500 remoteip=127.0.0.1
```

Con esta configuración, cualquier intento de acceso desde fuera de la máquina será bloqueado, garantizando que el servicio detrás de cloudflared no sea accesible fuera del túnel.



## Conclusión

Una vez que el Cloudflare Tunnel está activo, tu interfaz de txAdmin solo estará disponible a través de tu propio dominio, mientras que todas las solicitudes pasan por Cloudflare donde son filtradas y protegidas.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

El acceso directo al puerto de txAdmin a través de la IP del servidor queda bloqueado, eliminando por completo la superficie original de ataque. Esto hace que txAdmin sea estable, seguro y accesible de forma fiable incluso si alguien intenta sobrecargar o atacar la interfaz.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />