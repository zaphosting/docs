---
id: redm-locale
title: "RedM: Cambiar idioma / ubicación (bandera)"
description: "Descubre cómo personalizar los idiomas y banderas del servidor RedM para mejorar la experiencia y localización de los jugadores → Aprende más ahora"
sidebar_label: Idioma / ubicación (bandera)
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores RedM pueden mostrarse en diferentes idiomas. Esto aplica tanto a la visualización de la bandera del servidor en el navegador de servidores como al idioma que se usa activamente en el servidor. El idioma se puede personalizar si es necesario. Así que tienes la posibilidad de elegir tu idioma y la bandera de país para tu servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHgoDfcsN4XX8Jb/preview)

<InlineVoucher />

## Configuración

La configuración de la bandera y el idioma del servidor se realiza a través de la opción Locales. La configuración de locales se hace mediante el archivo de configuración del servidor. Esto se define con el valor del comando **sets locale**. Por defecto, se muestra el idioma inglés y la Antártida como ubicación (bandera).

### Abrir archivo de configuración del servidor

El archivo de configuración del servidor `server.cfg` se puede acceder desde la interfaz de txAdmin en `Editor CFG`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/kHeJyeXiKDfSY2c/preview)

### Encontrar código de locale/idioma para tu idioma

La definición del idioma/visualización se hace mediante los locales (códigos de idioma/códigos de país) basados en los estándares ISO 639-1/ISO 3166-1. Hemos resumido una pequeña lista de los países/idiomas más relevantes a continuación. La lista real es, por supuesto, mucho más grande:

| País           | Idioma    | Locale |
| -------------- | --------- | ------ |
| Alemania       | Alemán    | de-DE  |
| USA            | Inglés    | en-US  |
| Canadá         | Inglés    | en-CA  |
| Australia      | Inglés    | en-AU  |
| Reino Unido    | Inglés    | en-GB  |
| Finlandia      | Finés     | fi-FI  |
| Francia        | Francés   | fr-FR  |
| Países Bajos   | Neerlandés| nl-NL  |
| Portugal       | Portugués | pt-PT  |
| Brasil         | Portugués | pt-BR  |
| España         | Español   | es-ES  |
| Singapur       | Inglés    | en-SG  |

:::caution 
La visualización de la bandera del servidor está generalmente soportada para todos los países disponibles. Sin embargo, no todos los recursos contienen todos los idiomas. ¡Por eso asegúrate de que tu país/idioma esté soportado antes de configurarlo!
:::

### Ajustar el contenido del archivo de configuración del servidor

Una vez abierto el archivo de configuración y con el código de locale/idioma a mano, ya puedes hacer la configuración. Primero tienes que comprobar si el comando **sets locale** ya existe. Si no, la entrada para este comando se ve así:

```
# Un identificador de locale válido para el idioma principal de tu servidor.
# Por ejemplo "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# por favor REEMPLAZA root-AQ en la línea de ARRIBA con un idioma real! :)
```

El valor del comando **sets locale** tiene por defecto el valor **root-AQ**. Esto debe ajustarse ahora. Por ejemplo, si quieres usar la bandera de USA y el idioma inglés, usarías **en-US** como valor en este caso. Guarda el cambio que hayas hecho.

## Conclusión

El último paso es reiniciar el servidor para asegurarte de que el cambio se aplique. Después de eso, puedes recargar la lista de servidores en tu cliente RedM y deberías poder ver el cambio que acabas de hacer. Para cualquier pregunta o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡que está disponible todos los días para ayudarte! 🙂

<InlineVoucher />