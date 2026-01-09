---
id: sunkenland-setup-server
title: "Sunkenland: Configuración del servidor Sunkenland"
description: "Descubre cómo configurar tu servidor de juegos Sunkenland para un juego fluido y funcionamiento correcto → Aprende más ahora"
sidebar_label: Configuración del servidor
services:
  - gameserver-sunkenland
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores de Sunkenland requieren una configuración rápida la primera vez para que el servidor funcione correctamente. En esta guía, exploraremos los pasos necesarios para configurar tu servidor de juegos Sunkenland.

<InlineVoucher />

## Preparación
Antes de continuar, primero debes iniciar Sunkenland y crear un archivo de guardado del mundo. Asegúrate de guardar el mundo antes de seguir.

Para poder acceder a los archivos de tu servidor más adelante en la guía, también necesitarás un cliente FTP como [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), ambos de código abierto y gratuitos para descargar.

## Accediendo a tus datos locales
El primer paso consiste en acceder a los datos de guardado de tu partida de Sunkenland.

Simplemente presiona `CTRL+R` en tu teclado e ingresa lo siguiente en el cuadro de ejecución de Windows:
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

En esta ubicación, podrás ver una carpeta llamada `Worlds` que contendrá todos tus archivos de guardado local. Selecciona el que deseas alojar en el servidor, o si es nuevo, selecciona el que generaste antes de comenzar esta guía.

:::tip
¿No ves nada aquí? Asegúrate de iniciar Sunkenland y crear un guardado del mundo, lo que debería crear una nueva carpeta.
:::

## Subir el archivo de guardado
El siguiente paso es conectarte a tu servidor de juegos vía FTP y subir el archivo de guardado que seleccionaste en el paso anterior.

Comienza conectándote a tu servidor mediante un cliente FTP usando las credenciales que encontrarás en **Herramientas->FTP-Browser** en la interfaz web de tu servidor de juegos. Usa nuestra [guía de Acceso vía FTP](gameserver-ftpaccess.md) para obtener ayuda adicional para conectarte a tu servidor.

Una vez conectado, dirígete a la carpeta Sunkenland, abre la carpeta "AppData" y luego la carpeta "Worlds", selecciona el archivo de guardado del paso anterior y súbelo a esta carpeta.

La estructura de carpetas debería verse así, donde `Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` es tu archivo de guardado.
![](https://screensaver01.zap-hosting.com/index.php/s/eFg6Ek3giFM3DLs/preview)

:::important
En esta etapa, por favor copia el GUID que aparece al final del nombre del mundo guardado. Lo necesitarás en el siguiente paso para que tu servidor funcione.

El GUID se ve así:
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Nombre completo del mundo
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # El GUID que necesitas
```
:::

## Activar el servidor
Finalmente, ve a la sección **Configuración** en la interfaz web de tu servidor de juegos.

En esta sección, busca la opción **World GUID**. En este campo, pega el GUID que copiaste al final del paso anterior.

Asegúrate de presionar el botón verde **Guardar** al final de la página. Ahora intenta iniciar tu servidor, y debería arrancar correctamente.

Has configurado exitosamente tu servidor de juegos Sunkenland.

<InlineVoucher />