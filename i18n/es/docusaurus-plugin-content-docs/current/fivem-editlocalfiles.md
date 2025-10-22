---
id: fivem-editlocalfiles
title: "FiveM: Archivos locales (Variables de idioma)"
description: "Aprende a personalizar y añadir idiomas a tu recurso para una experiencia a tu medida → Aprende más ahora"
sidebar_label: Archivos Locales (Idioma)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

¿Quieres cambiar las variables de idioma de un recurso o añadir más idiomas que aún no existan? Los archivos locales te permiten ajustar las variables de idioma del recurso que desees. 

<InlineVoucher />



## Encontrar Archivos Locales

Los archivos locales deben editarse usando un cliente FTP. Si eres nuevo usando FTP, te recomendamos leer primero la [guía de acceso FTP](gameserver-ftpaccess.md). Una vez conectado, navega hasta el directorio del recurso ESX que quieres modificar. Abre el directorio locales dentro del directorio del recurso. 

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

Dentro del directorio locales encontrarás todos los archivos de idioma que existen para ese recurso. Desde aquí puedes editar uno existente o copiar uno con un nombre nuevo para un idioma nuevo, y luego editarlo. 

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## Editar Archivo Local

Ahora puedes ajustar el contenido de las variables de idioma en el archivo local abierto. El contenido de las variables está detrás del signo igual y dentro de las comillas. Modifica el contenido a tu gusto y guarda los cambios al final. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## Configurar Locale (Idioma)

El idioma usado se define en el archivo de configuración `config.lua` dentro del directorio del recurso. Para ello, ajusta el valor de `Config.Locale = GetConvar('esx:locale', 'en')`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## Conclusión

¡Felicidades! Si seguiste todos los pasos, has editado con éxito el archivo local de tu recurso. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂 

<InlineVoucher />