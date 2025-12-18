---
id: voiceserver-ts3backup
title: "Servidor de voz: Crear, descargar e importar copias de seguridad"
description: "Descubre cómo crear y gestionar copias de seguridad fácilmente con almacenamiento gratuito y opciones de mejora para una protección segura de tus datos → Aprende más ahora"
sidebar_label: Copias de seguridad
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Ofrecemos la posibilidad de crear copias de seguridad individuales con un solo clic. Esto te permite crear copias de seguridad de forma sencilla y sin mucho esfuerzo, así como importarlas en cualquier momento más adelante. Todas las copias de seguridad se almacenan en tu servidor de almacenamiento, que incluye 10GB de espacio gratuito por defecto. Si necesitas más, también puedes hacer un upgrade a Almacenamiento Premium.

<InlineVoucher />

## Crear copias de seguridad

<Tabs>

<TabItem value="Webinterface" label="Producto Servidor TeamSpeak" default>

Para crear una copia de seguridad en nuestra web, debes abrir tu servicio de Servidor de voz en la interfaz web y navegar a **Snapshots** en la administración. Una vez allí, haz clic en el botón verde **Crear snapshot** para crear una copia de seguridad.

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning Copias externas
Por motivos de seguridad, no es posible importar copias de seguridad externas (snapshots). No se permiten excepciones.
:::

</TabItem>
<TabItem value="self_hosted" label="Autohospedado (VPS/Servidor dedicado)">

Al igual que con el producto Servidor TeamSpeak, si usas la interfaz GS/TS3, puedes crear una copia de seguridad (snapshot) con un clic a través de la administración del servicio de Servidor TeamSpeak. Sin embargo, también puedes crear una copia de seguridad manualmente usando los datos de acceso de la instancia TeamSpeak (Query) y la aplicación externa YatQA.

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

Para crear un snapshot en YatQA, debes ir a **Miscellaneous** en la parte superior de la aplicación y luego hacer clic en **Create and save snapshot**.

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## Descargar copias de seguridad

Las copias de seguridad creadas (snapshots) pueden descargarse desde tu servidor de almacenamiento vía FTP. Los datos de acceso los encontrarás en la interfaz web dentro del servicio de tu servidor de almacenamiento. Si no sabes cómo usar FTP, te recomendamos que consultes nuestra [guía general de acceso FTP](gameserver-ftpaccess.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## Conclusión

Has creado una copia de seguridad con éxito si has seguido todos los pasos mencionados. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />