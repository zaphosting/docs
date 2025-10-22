---
id: 7d2d-mods
title: "7 Days to Die: Instalación de mods"
description: "Descubre cómo personalizar tu servidor con mods populares y mejorar la experiencia de juego para una experiencia única → Aprende más ahora"
sidebar_label: Instalar mods
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Con los mods tienes la posibilidad de personalizar aún más tu servidor. A continuación, te explicamos dónde encontrar los mods de servidor más populares y cómo configurarlos. Con la introducción de Alpha 17 Experimental, se introdujo el concepto de modlets. Los modlets son mods más pequeños que no sobrescriben los archivos XML originales, sino que se cargan desde la carpeta de mods.

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## Preparación

Lo primero que tienes que hacer es descargar los mods que quieres instalar en tu servidor. Puedes encontrar una gran selección de mods en [7daystodiemods.com](https://7daystodiemods.com/). Allí encontrarás más de 1000 mods y se agregan más regularmente. Si has descargado un mod, debería contener la siguiente estructura de archivos:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```

## Instalación

Una vez que hayas descargado los mods deseados, puedes comenzar con la instalación propiamente dicha. La configuración de los mods se realiza vía FTP. Necesitas un cliente FTP para poder subir archivos a tu servidor. Si no sabes qué es FTP ni cómo funciona, deberías echar un vistazo a la siguiente guía: [Acceso vía FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)

Dentro del directorio ``/gXXXXX4/7dtd-linux-exp/`` tienes que crear una carpeta llamada **Mods**. Para ello, haz clic derecho y selecciona **Crear directorio**.

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)

Después, los archivos del mod deben subirse a la carpeta mods:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)

Con esto ya queda completada la instalación del mod. La próxima vez que inicies el servidor, los mods deberían cargarse automáticamente.

<InlineVoucher />